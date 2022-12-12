import { FC } from 'react'
import Styled from './styles'
import { BaseProps } from 'models'

const SkipWrap: FC<BaseProps> = ({ isHidden, styles, className }) => {
  if (isHidden) return null
  return <Styled styles={styles} className={className} />
}

export default SkipWrap
