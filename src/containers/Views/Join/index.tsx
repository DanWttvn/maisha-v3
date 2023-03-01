import React, { FC } from 'react'
import Subtitle from 'components/Subtitle'
import Section from 'components/Section'
import SubSection from 'components/SubSection'
import Form from './Form'
import MainLayout from 'containers/Layouts/Main'

const JoinView: FC = () => (
  <MainLayout>
    <Section>
      <SubSection>
        <Subtitle styles={{ marginTop: 16 }}>Hazte socia/o</Subtitle>
        <Form variant="3" selectedAmount={0}/>
      </SubSection>
    </Section>
  </MainLayout>
)

export default JoinView
