import { JSONFilePreset } from 'lowdb/node'
import { z } from 'zod'

const sessionSchema = z.object({
  accessToken: z.string(),
  accessTokenExpiresAt: z.string(),
  client: z.object({
    grants: z.array(z.string()),
    id: z.string()
  }),
  refreshToken: z.string(),
  refreshTokenExpiresAt: z.string(),
  scope: z.array(z.string()),
  user: z.object({
    email: z.string(),
    id: z.string(),
    username: z.string()
  })
})

export type Session = z.infer<typeof sessionSchema>

const CliDbSchema = z.object({
  session: sessionSchema.nullable()
})
type CliDbSchema = z.infer<typeof CliDbSchema>

class SessionManager {
  private static instance: SessionManager
  private db!: Awaited<ReturnType<typeof JSONFilePreset<CliDbSchema>>>

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static async getInstance(): Promise<SessionManager> {
    if (!SessionManager.instance) {
      SessionManager.instance = new SessionManager()
      await SessionManager.instance.initialize()
    }
    return SessionManager.instance
  }

  private async initialize() {
    this.db = await JSONFilePreset<CliDbSchema>('cli/cli-db.json', { session: null })
    await this.db.read()
  }

  public async setSession(sessionData: unknown): Promise<void> {
    try {
      const session = sessionData === null ? null : sessionSchema.parse(sessionData)
      await this.db.update((data) => {
        data.session = session
      })
    } catch (error) {
      console.error('Session validation error:', error)
      await this.clearSession()
    }
  }

  public async clearSession(): Promise<void> {
    await this.setSession(null)
  }

  get session(): Session | null {
    return this.db.data.session
  }
}

export default SessionManager
