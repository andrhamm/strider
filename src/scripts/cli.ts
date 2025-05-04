import * as helpers from '../main/lib/index'

import { input as Input, select } from '@inquirer/prompts'
import axios, { AxiosError, AxiosRequestConfig, isAxiosError } from 'axios'

import { Command } from 'commander'
import SessionManager from './session-manager'
import winston from 'winston'
import { z } from 'zod'

const program = new Command()

const config = z
  .object({
    CLIENT_SECRET: z.string().min(1)
  })
  .parse(process.env)

program.name('strider').description('CLI tool for The One Ring 2E').version('0.0.1')

const AGENT_API_BASE_URL = 'http://0.0.0.0:8000'
const CLIENT_ID = 'strider-cli'
const CLIENT_SECRET = config.CLIENT_SECRET
const API_BASE_URL = 'http://localhost:3000'

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: 'cli.log' })]
})

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean
}

// Axios response interceptor
axios.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (isAxiosError(error) && error.config) {
      const originalRequest = error.config as CustomAxiosRequestConfig

      if (
        error.response &&
        error.response.status === 401 &&
        originalRequest.url &&
        originalRequest.url.startsWith(API_BASE_URL) &&
        !originalRequest.url.startsWith(`${API_BASE_URL}/oauth`) &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true

        try {
          if (sessionManager.session?.refreshToken) {
            logger.debug('Access token expired, attempting to refresh...')
            await refreshToken()
          }

          if (!sessionManager.session) {
            logger.debug('No session found, attempting to login...')
            await login()
          }

          if (!sessionManager.session?.accessToken) {
            logger.debug('Still no access token, cannot retry request.')
            return Promise.reject(error)
          }

          let failHeader = {}
          if (originalRequest.url.startsWith(`${API_BASE_URL}/unauthorized`)) {
            failHeader = { 'X-Fail': 'false' }
          }

          // Update Authorization header
          originalRequest.headers = {
            ...originalRequest.headers,
            ...failHeader,
            Authorization: `Bearer ${sessionManager.session.accessToken}`
          }

          // Retry the original request
          logger.debug('Retrying request with new access token...')
          return axios(originalRequest)
        } catch (refreshError) {
          logger.error('Error refreshing token:', refreshError)
          return Promise.reject(refreshError)
        }
      }
    }

    return Promise.reject(error)
  }
)

const sessionManager = await SessionManager.getInstance()

async function login() {
  const redirectUri = 'urn:ietf:wg:oauth:2.0:oob'
  const state =
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  const authorizationUrl = `${API_BASE_URL}/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&state=${state}&redirect_uri=${redirectUri}`
  console.log(`Please visit this URL to authorize: ${authorizationUrl}`)
  const authorizationCode = await Input({ message: 'Enter the authorization code:' })

  try {
    const response = await axios.post(
      `${API_BASE_URL}/oauth/token`,
      {
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
        code: authorizationCode.trim(),
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )

    logger.debug('Token API Response:', response.data)
    await sessionManager.setSession(response.data)
    logger.info('Login successful!')
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Login error:', error.message)
    } else {
      console.error('Login error:', error)
    }
    await sessionManager.clearSession()
  }
}

async function refreshToken() {
  logger.debug('Refreshing token...')

  try {
    const response = await axios.post(
      `${API_BASE_URL}/oauth/token`,
      {
        grant_type: 'refresh_token',
        refresh_token: sessionManager.session?.refreshToken,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )

    logger.debug('Refresh Token API Response:', response.data)
    logger.info(response.data)
    await sessionManager.setSession(response.data)
    logger.info('Refresh successful!')
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Refresh error:', error.message)
    } else {
      console.error('Refresh error:', error)
    }
    await sessionManager.clearSession()
  }
}

async function fetchUserInfo() {
  logger.debug('Fetching userinfo...')

  const response = await axios.get(`${API_BASE_URL}/userinfo`, {
    headers: {
      Authorization: `Bearer ${sessionManager.session?.accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  logger.debug('Userinfo API Response:', response.data)
}

async function simulateUnauthorized(fail = true) {
  logger.debug('Fetching unauthorized (test)...')

  const response = await axios.get(`${API_BASE_URL}/unauthorized`, {
    headers: {
      Authorization: `Bearer ${sessionManager.session?.accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Fail': fail ? 'true' : 'false'
    }
  })

  logger.debug('Unauthorized API Response:', response.data)
}

async function menu() {
  logger.debug('Entering menu function')
  const actionChoice = await select({
    message: 'What would you like to do?',
    choices: [
      { name: 'Create a hero', value: 'create_hero' },
      { name: 'Test unauthorized', value: 'test_unauthorized' },
      { name: 'Fetch userinfo', value: 'fetch_userinfo' },
      { name: 'Logout', value: 'logout' }
    ]
  })
  logger.debug(`User selected action: ${actionChoice}`)

  if (actionChoice === 'create_hero') {
    const newHero = await helpers.initNewPlayerHero()
    logger.info('Created new hero')
    logger.info(newHero)
  } else if (actionChoice === 'test_unauthorized') {
    await simulateUnauthorized()
  } else if (actionChoice === 'fetch_userinfo') {
    await fetchUserInfo()
  } else if (actionChoice === 'logout') {
    const username = sessionManager.session?.user.username
    await sessionManager.clearSession()
    logger.info('Logged out.')
    console.log(`${username} has logged out.`)
  }
}

async function main() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    logger.debug('Main loop iteration')
    try {
      if (!sessionManager.session) {
        await login()
        continue
      }
      await fetchUserInfo()
      await menu()
    } catch (error) {
      if (error instanceof z.ZodError) {
        logger.error('🐛 Unexpected validation error:', error.message)
        return
      }
    }
  }
}

program.action(async () => {
  await main()
})

program.parse()

process.on('uncaughtException', (error) => {
  if (error instanceof Error && error.name === 'ExitPromptError') {
    console.log('👋 until next time!')
  } else {
    // Rethrow unknown errors
    throw error
  }
})
