import React, { FC } from 'react'
import Dialog from 'components/Dialog'
import Privacy from 'containers/Common/Privacy'
import Cookies from 'containers/Common/Cookies'
import Tabs from 'components/Tabs'
import { BaseProps } from 'models'

export interface Props extends BaseProps {
  onClose: () => void
}

const PolicyModal: FC<Props> = ({ isHidden, onClose }) => {
  if (isHidden) return null
  return (
    <Dialog onClose={onClose}>
      <Tabs.Container>
        <Tabs.Item title="Privacy">
          <Privacy />
        </Tabs.Item>
        <Tabs.Item title="Cookies">
          <Cookies />
        </Tabs.Item>
      </Tabs.Container>
    </Dialog>
  )
}

export default PolicyModal
