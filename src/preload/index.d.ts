import { DeletePlayerHero, GetPlayerHeroes, InitNewPlayerHero } from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string
      deletePlayerHero: DeletePlayerHero
      getPlayerHeroes: GetPlayerHeroes
      initNewPlayerHero: InitNewPlayerHero
    }
  }
}
