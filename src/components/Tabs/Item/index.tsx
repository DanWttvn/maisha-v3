import { FC } from 'react'
import { BaseProps } from 'models'
import Styled from './styles'

export interface Props extends BaseProps {
  title: string
}

const Item: FC<Props> = ({ isHidden, styles, children }) => {
  if (isHidden) return null

  return <Styled styles={styles}>{children}</Styled>
}

export default Item
