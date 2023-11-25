import { FC, forwardRef } from 'react'
import { BaseProps } from 'models'
import Loader from './Loader'
import {
  ButtonA,
  ButtonB,
  ButtonC,
  ButtonD,
  ButtonE,
  ButtonF,
  ButtonG,
} from './styles'

export interface Props extends BaseProps {
  onClick?: () => void
  variant?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
  isDisabled?: boolean
  isSelected?: boolean
  type?: 'submit' | 'button'
  isLoading?: boolean
}

const Button: FC<Props> = forwardRef(
  (
    {
      children,
      onClick,
      variant = 'A',
      styles,
      isDisabled,
      isSelected,
      type = 'button',
      isLoading,
      className,
      isHidden,
    },
    ref,
  ) => {
    if (isHidden) return null

    let Styled

    switch (variant) {
      case 'B':
        Styled = ButtonB
        break
      case 'C':
        Styled = ButtonC
        break
      case 'D':
        Styled = ButtonD
        break
      case 'E':
        Styled = ButtonE
        break
      case 'F':
        Styled = ButtonF
        break
      case 'G':
        Styled = ButtonG
        break
      default:
        Styled = ButtonA
    }

    return (
      <Styled
        ref={ref}
        className={className}
        onClick={onClick}
        type={type}
        isLoading={isLoading}
        isDisabled={isDisabled}
        isSelected={isSelected}
        styles={styles}
      >
        <Loader isHidden={!isLoading} styles={{ position: 'absolute' }} />
        {children}
      </Styled>
    )
  },
)

Button.displayName = 'Button'

export default Button
