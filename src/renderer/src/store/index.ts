import { PlayerHero } from '@shared/models'
import { atom } from 'jotai'
import { unwrap } from 'jotai/utils'

const loadPlayerHeroes = async () => {
  const playerHeroes = await window.context.getPlayerHeroes()

  // sort them by most recently created
  return playerHeroes.sort((a, b) => b.createdAtMs - a.createdAtMs)
}

const playerHeroesAtomAsync = atom<PlayerHero[] | Promise<PlayerHero[]>>(loadPlayerHeroes())

export const playerHeroesAtom = unwrap(playerHeroesAtomAsync, (prev) => prev)

export const selectedPlayerHeroIndexAtom = atom<number | null>(null)

const selectedPlayerHeroAtomAsync = atom(async (get) => {
  const playerHeroes = get(playerHeroesAtom)
  const selectedPlayerHeroIndex = get(selectedPlayerHeroIndexAtom)

  if (selectedPlayerHeroIndex == null || !playerHeroes) return null

  const selectedPlayerHero = playerHeroes[selectedPlayerHeroIndex]

  return selectedPlayerHero
})

export const selectedPlayerHeroAtom = unwrap(selectedPlayerHeroAtomAsync, (prev) => prev)

export const initNewPlayerHeroAtom = atom(null, async (get, set) => {
  const playerHeroes = get(playerHeroesAtom)

  if (!playerHeroes) return

  const hero = await window.context.initNewPlayerHero()

  if (!hero) return

  const newPlayerHero: PlayerHero = {
    ...hero,
    name: 'New Player Hero'
  }

  set(playerHeroesAtom, [
    newPlayerHero,
    ...playerHeroes.filter((note) => note.id !== newPlayerHero.id)
  ])

  set(selectedPlayerHeroIndexAtom, 0)
})

export const deletePlayerHeroAtom = atom(null, async (get, set) => {
  const heroes = get(playerHeroesAtom)
  const selectedHero = get(selectedPlayerHeroAtom)

  if (!selectedHero || !heroes) return

  // const isDeleted = await window.context.deletePlayerHero(selectedHero.id)
  const isDeleted = true // TODO

  if (!isDeleted) return

  // filter out the deleted hero
  set(
    playerHeroesAtom,
    heroes.filter((hero) => hero.id !== selectedHero.id)
  )

  set(selectedPlayerHeroIndexAtom, null)
})
