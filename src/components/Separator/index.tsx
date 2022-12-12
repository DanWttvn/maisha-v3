import { FC } from 'react'
import { BaseProps } from 'models'
import Styled from './styles'

export type Props = BaseProps

const Separator: FC<Props> = ({ isHidden, styles }) => {
  if (isHidden) return null
  return <Styled styles={styles} />
}

export default Separator
