import { FC } from 'react'
import { TextProps } from 'models'
import Styled from './styles'

const Paragraph: FC<TextProps> = ({
  children,
  styles,
  weight = 'normal',
  size = 'm',
  color,
  isFullWidth,
  isCentered,
  isHidden,
  className,
}) => {
  if (isHidden) return null
  return (
    <Styled
      weight={weight}
      size={size}
      styles={styles}
      color={color}
      isCentered={isCentered}
      isFullWidth={isFullWidth}
      className={className}
    >
      {children}
    </Styled>
  )
}

export default Paragraph
