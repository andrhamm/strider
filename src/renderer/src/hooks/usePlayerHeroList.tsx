import { playerHeroesAtom, selectedPlayerHeroIndexAtom } from '@/store'
import { useAtom, useAtomValue } from 'jotai'

export const usePlayerHeroList = ({ onSelect }: { onSelect?: () => void }) => {
  const playerHeroes = useAtomValue(playerHeroesAtom)

  const [selectedPlayerHeroIndex, setSelectedPlayerHeroIndex] = useAtom(selectedPlayerHeroIndexAtom)

  const handlePlayerHeroSelect = (index: number) => async () => {
    setSelectedPlayerHeroIndex(index)

    if (onSelect) {
      onSelect()
    }
  }

  return {
    playerHeroes,
    selectedPlayerHeroIndex,
    handlePlayerHeroSelect
  }
}
