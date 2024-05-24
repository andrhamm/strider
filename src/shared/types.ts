import { PlayerHero } from './models'

export type GetPlayerHeroes = () => Promise<PlayerHero[]>
export type GetPlayerHeroDetails = (id: PlayerHero['id']) => Promise<PlayerHero>

export type InitNewPlayerHero = () => Promise<PlayerHero>
export type DeletePlayerHero = (id: PlayerHero['id']) => Promise<boolean>

export type DbSchema = {
  playerHeroes: PlayerHero[]
}
