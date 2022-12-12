import React, { FC } from 'react'
import { TextProps } from 'models'
import Styled from './styles'
import { Color } from 'styles/themes'

export interface Props extends TextProps {
  quotesColor: Color | 'inherit'
}

const Quote: FC<Props> = ({ children, quotesColor, isHidden, className, ...props }) => {
  if (isHidden) return null

  return (
    <Styled className={className} quotesColor={quotesColor} {...props}>
      {children}
    </Styled>
  )
}

export default Quote
