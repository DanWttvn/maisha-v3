import { FC } from 'react'

import MainLayout from 'containers/Layouts/Main'
import Policy from 'containers/Common/Policy'
import { Content } from './styles'

const PolicyView: FC = () => (
  <MainLayout>
    <Content>
      <Policy />
    </Content>
  </MainLayout>
)

export default PolicyView
