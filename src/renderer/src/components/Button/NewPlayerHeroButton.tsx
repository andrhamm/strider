import { ActionButton, ActionButtonProps } from '@/components'

import { initNewPlayerHeroAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { LuFileSignature } from 'react-icons/lu'

export const NewPlayerHeroButton = ({ ...props }: ActionButtonProps) => {
  const createNewPlayerHero = useSetAtom(initNewPlayerHeroAtom)

  const handleCreation = async () => {
    await createNewPlayerHero()
  }

  return (
    <ActionButton onClick={handleCreation} {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
