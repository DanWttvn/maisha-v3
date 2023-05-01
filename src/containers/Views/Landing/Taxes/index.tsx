import React, { FC } from 'react'
import Paragraph from 'components/Paragraph'
import SubSection from 'components/SubSection'
import Subtitle from 'components/Subtitle'
import { Container, Image } from './styles'

const Taxes: FC = () => (
  <SubSection styles={{ alignItems: 'center' }}>
    <Image src="/images/IRPFGraph.png" />
    <Container>
      <Subtitle>Donar tiene recompensa!</Subtitle>
      <Paragraph>
        La Utilidad Pública, concedida el pasado 29 de julio de 2020, permite
        que nuestros socios/as puedan desgravar en su Declaración de la Renta de
        acuerdo con los porcentajes indicados en el esquema
      </Paragraph>
      <Paragraph size="s">
        * Si en los dos períodos impositivos inmediatos anteriores se hubieran
        realizado donativos, donaciones o aportaciones con derecho a deducción
        en favor de una misma entidad por importe igual o superior, en cada uno
        de ellos, al del ejercicio anterior, el porcentaje de deducción
        aplicable a la base de la deducción en favor de esa misma entidad que
        exceda de 150 euros, será el 40 por ciento.
      </Paragraph>
    </Container>
  </SubSection>
)

export default Taxes
