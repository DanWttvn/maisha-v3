import React, { FC } from 'react'
import Container from 'components/Container'
import DataText from 'components/DataText'
import { SubSection, DataContainer, Text } from './styles'

const Infography: FC = () => {
  return (
    <SubSection isNarrow>
      <Container direction="horizontal" styles={{ justifyContent: 'space-around' }} isFullWidth>
        <Container>
          <DataContainer>
            <DataText>320</DataText>
            <Text>menores</Text>
            <Text>beneficiarios</Text>
          </DataContainer>
          <DataText styles={{ margin: '34px 16px 0 16px' }}>/</DataText>
          <DataContainer>
            <DataText>44</DataText>
            <Text>personas adultas</Text>
            <Text>beneficiarias</Text>
          </DataContainer>
        </Container>
        <DataContainer>
          <DataText>+250</DataText>
          <Text>personas sensibilizadas</Text>
        </DataContainer>
      </Container>
      <Container styles={{ justifyContent: 'space-around' }} isFullWidth>
        <DataContainer>
          <DataText>120</DataText>
          <Text>Voluntarios/as</Text>
        </DataContainer>
        <Container>
          <DataContainer>
            <DataText>5</DataText>
            <Text>convenios con</Text>
            <Text>universidades</Text>
          </DataContainer>
          <DataText styles={{ margin: '34px 16px 0 16px' }}>/</DataText>
          <DataContainer>
            <DataText>3</DataText>
            <Text>Colegios amigos</Text>
          </DataContainer>
        </Container>
        <DataContainer>
          <DataText>40</DataText>
          <Text>Socios/as</Text>
        </DataContainer>
      </Container>
    </SubSection>
  )
}
export default Infography