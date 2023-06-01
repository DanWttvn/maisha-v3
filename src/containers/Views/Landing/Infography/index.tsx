import React, { FC } from 'react'
import Container from 'components/Container'
import DataText from 'components/DataText'
import {
  SubSection,
  DataContainer,
  Text,
  SlashContainer,
  Group,
} from './styles'

const Infography: FC = () => (
  <SubSection isNarrow>
    <Container
      direction="horizontal"
      styles={{ justifyContent: 'space-around' }}
      isFullWidth>
      <Group>
        <DataContainer>
          <DataText>320</DataText>
          <Text>menores</Text>
          <Text>beneficiarios</Text>
        </DataContainer>
        <SlashContainer>/</SlashContainer>
        <DataContainer>
          <DataText>44</DataText>
          <Text>personas adultas</Text>
          <Text>beneficiarias</Text>
        </DataContainer>
      </Group>
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
      <Group>
        <DataContainer>
          <DataText>5</DataText>
          <Text>convenios con</Text>
          <Text>universidades</Text>
        </DataContainer>
        <SlashContainer>/</SlashContainer>
        <DataContainer>
          <DataText>3</DataText>
          <Text>Colegios amigos</Text>
        </DataContainer>
      </Group>
      <DataContainer>
        <DataText>40</DataText>
        <Text>Socios/as</Text>
      </DataContainer>
    </Container>
  </SubSection>
)
export default Infography
