import React, { FC } from 'react'
import Dialog from 'components/Dialog'
import { BaseProps } from 'models'
import Policy from 'containers/Common/Policy'

export interface Props extends BaseProps {
  onClose: () => void
}

const PolicyModal: FC<Props> = ({ isHidden, onClose }) => {
  if (isHidden) return null
  return (
    <Dialog onClose={onClose}>
      <Policy />
    </Dialog>
  )
}

export default PolicyModal
