import { PlayerHeroPreview } from '@/components'
import { usePlayerHeroList } from '@/hooks/usePlayerHeroList'
import { isEmpty } from 'lodash'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type PlayerHeroPreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const PlayerHeroPreviewList = ({
  onSelect,
  className,
  ...props
}: PlayerHeroPreviewListProps) => {
  const { playerHeroes, selectedPlayerHeroIndex, handlePlayerHeroSelect } = usePlayerHeroList({
    onSelect
  })

  if (!playerHeroes) return null

  if (isEmpty(playerHeroes)) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Player Heroes Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {playerHeroes.map((playerHero, index) => (
        <PlayerHeroPreview
          key={playerHero.id}
          isActive={selectedPlayerHeroIndex === index}
          onClick={handlePlayerHeroSelect(index)}
          {...playerHero}
        />
      ))}
    </ul>
  )
}
