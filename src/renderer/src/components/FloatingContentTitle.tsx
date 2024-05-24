import { selectedPlayerHeroAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingContentTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const selectedPlayerHero = useAtomValue(selectedPlayerHeroAtom)

  if (!selectedPlayerHero) return null

  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
      <span className="text-gray-400">{selectedPlayerHero.id}</span>
    </div>
  )
}
