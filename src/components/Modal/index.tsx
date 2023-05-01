import { FC } from 'react'
import { BaseProps } from 'models'
import Styled, { Cross } from './styles'

export interface Props extends BaseProps {
  onClose?: () => void
  variant?: 'A' | 'B'
}

const Modal: FC<Props> = ({
  children,
  variant = 'A',
  styles,
  onClose,
  isHidden,
  className,
}) => {
  if (isHidden) return null

  return (
    <Styled styles={styles} className={className}>
      <Cross
        color={variant === 'A' ? 'lightGrey' : 'white'}
        onClick={onClose}
      />
      {children}
    </Styled>
  )
}

export default Modal
