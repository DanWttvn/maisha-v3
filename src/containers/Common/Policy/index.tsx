import React, { FC } from 'react'
import Privacy from 'containers/Common/Privacy'
import Cookies from 'containers/Common/Cookies'
import Tabs from 'components/Tabs'
import { BaseProps } from 'models'

const Policy: FC<BaseProps> = ({ isHidden }) => {
  if (isHidden) return null

  return (
    <Tabs.Container>
      <Tabs.Item title="Privacy">
        <Privacy />
      </Tabs.Item>
      <Tabs.Item title="Cookies">
        <Cookies />
      </Tabs.Item>
    </Tabs.Container>
  )
}

export default Policy
