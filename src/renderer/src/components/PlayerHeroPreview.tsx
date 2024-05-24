import { cn, formatDateFromMs } from '@renderer/utils'

import { PlayerHero } from '@shared/models'
import { ComponentProps } from 'react'

export type PlayerHeroPreviewProps = PlayerHero & {
  isActive?: boolean
} & ComponentProps<'div'>

export const PlayerHeroPreview = ({
  id,
  name,
  createdAtMs,
  updatedAtMs,
  isActive = false,
  className,
  ...props
}: PlayerHeroPreviewProps) => {
  const createdAt = formatDateFromMs(createdAtMs)
  const updatedAt = formatDateFromMs(updatedAtMs)

  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-500/75': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">
        {name} ({id})
      </h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">
        created {createdAt}
      </span>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">
        updated {updatedAt}
      </span>
    </div>
  )
}
