import { FC } from 'react'
import { BaseProps } from 'models'
import Styled from './styles'

export type Props = BaseProps

const Loader: FC<Props> = ({ isHidden, styles, className }) => {
  if (isHidden) return null

  return <Styled className={className} styles={styles} />
}

export default Loader
