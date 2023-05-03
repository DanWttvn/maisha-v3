import { FC, useEffect, useState } from 'react'
import { BaseProps } from 'models'
import Styled, { Cross } from './styles'

export interface Props extends BaseProps {
  variant?: 'A' | 'B'
  onClose?: () => void
  isShown?: boolean
}

const Popup: FC<Props> = ({
  children,
  onClose,
  isShown = false,
  isHidden,
  styles,
  variant = 'A',
  className,
}) => {
  const [isOpen, setIsOpen] = useState(isShown || false)

  useEffect(() => {
    if (isShown !== isOpen) setIsOpen(isShown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShown])

  if (isHidden || !isOpen) return null

  const handleClose = () => {
    setIsOpen(false)
    if (onClose) onClose()
  }

  return (
    <Styled $variant={variant} styles={styles} className={className}>
      <Cross onClick={handleClose} />
      {children}
    </Styled>
  )
}

export default Popup
