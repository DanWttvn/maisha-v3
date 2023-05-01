import React, { FC } from 'react'
import { BaseProps } from 'models'
import Styled, { Image } from './styles'

export interface Props extends BaseProps {
  src: string
  href: string
}

const ColabLink: FC<Props> = ({ src, href }) => (
  <Styled href={href}>
    <Image src={src} />
  </Styled>
)

export default ColabLink
