import { BaseProps } from 'models'
import { ComponentType } from 'react'

export interface Props extends BaseProps {
  url: string
}

export type SocialNetwork = {
  name: string
  Icon: ComponentType
  href: string
}
