import { ActionButton, ActionButtonProps } from '@/components'

import { deletePlayerHeroAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeletePlayerHeroButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deletePlayerHeroAtom)

  const handleDelete = async () => {
    await deleteNote()
  }

  return (
    <ActionButton onClick={handleDelete} {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
