import { FC } from 'react'
import { BaseProps } from 'models'
import Styled, { Circle } from './styles'

export type Props = BaseProps

const Loader: FC<Props> = ({ isHidden, styles, className }) => {
  if (isHidden) return null

  return (
    <Styled className={className} styles={styles} viewBox="12 12 24 24">
      <Circle cx="24" cy="24" r="8" />
    </Styled>
  )
}

export default Loader
