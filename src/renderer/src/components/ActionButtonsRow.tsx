import { DeletePlayerHeroButton, NewPlayerHeroButton } from '@/components'

import { ComponentProps } from 'react'

export const ActionButtonsRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewPlayerHeroButton />
      <DeletePlayerHeroButton />
    </div>
  )
}
