import { FC } from 'react'
import { BaseProps, SubSectionProps } from 'models'
import Styled from './styles'

export type Props = SubSectionProps & BaseProps

const SubSection: FC<Props> = ({ children, id, isHidden, styles, isFullWidth, className }) => {
  if (isHidden) return null
  return (
    <Styled styles={styles} className={className} id={id} isFullWidth={isFullWidth}>
      {children}
    </Styled>
  )
}

export default SubSection
