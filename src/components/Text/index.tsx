import { FC } from 'react'
import { TextProps } from 'models'
import Styled from './styles'

const Text: FC<TextProps> = ({
  children,
  onClick,
  styles,
  color,
  weight = 'normal',
  size = 'm',
  tag = 'p',
  isHidden,
  isHighlighted,
  isCentered,
  className,
  isFullWidth,
}) => {
  if (isHidden) return null

  return (
    <Styled
      as={tag}
      size={size}
      weight={weight}
      styles={styles}
      color={color}
      isHighlighted={isHighlighted}
      onClick={onClick}
      className={className}
      isFullWidth={isFullWidth}
      isCentered={isCentered}
    >
      {children}
    </Styled>
  )
}

export default Text
