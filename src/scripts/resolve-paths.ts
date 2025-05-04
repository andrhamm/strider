import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const root = resolve(__dirname, '..')

export function createPathAliases() {
  return {
    '@shared': resolve(root, 'shared'),
    '@': resolve(root, 'main')
  }
}
