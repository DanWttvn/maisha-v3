import { FC, useEffect, useState } from 'react'
import { BaseProps } from 'models'
import Styled, { Cross } from './styles'

export interface Props extends BaseProps {
  onClose?: () => void
  isShown?: boolean
}

const Popup: FC<Props> = ({ children, onClose, isShown = false, isHidden, styles, className }) => {
  const [isOpen, setIsOpen] = useState(isShown || false)

  useEffect(() => {
    if (isShown !== isOpen) setIsOpen(isShown)
  }, [isShown])

  if (isHidden || !isOpen) return null

  const handleClose = () => {
    setIsOpen(false)
    if (onClose) onClose()
  }

  return (
    <Styled styles={styles} className={className}>
      <Cross onClick={handleClose}/>
      {children}
    </Styled>
  )
}

export default Popup
