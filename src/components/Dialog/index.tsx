import { FC } from 'react'
import { BaseProps } from 'models'
import Styled, { Modal } from './styles'

export interface Props extends BaseProps {
  onClose?: () => void
}

const Dialog: FC<Props> = ({ children, styles, onClose, className, isHidden }) => {
  if (isHidden) return null

  return (
    <Styled className={className}>
      <Modal styles={styles} onClose={onClose}>
        {children}
      </Modal>
    </Styled>
  )
}

export default Dialog
