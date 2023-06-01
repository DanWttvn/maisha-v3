import React, { FC } from 'react'
import SubSection from 'components/SubSection'
import Subtitle from 'components/Subtitle'
import Accordion from 'components/Accordion'
import { Text, Paragraph } from './styles'

const Faq: FC = () => (
  <SubSection>
    <Subtitle styles={{ marginBottom: 8 }} isFullWidth>
      FAQ
    </Subtitle>
    {/* //! NO coje bien la altura */}
    <Accordion title="¿Qué significa ser socio/a de Maisha Roots?" isFullWidth>
      <Paragraph>
        La <strong>estabilidad económica</strong> es la clave del éxito de
        cualquier proyecto de cooperación al desarrollo, sobre todo para
        asociaciones pequeñas como la nuestra. Gracias a tu ayuda y la de las{' '}
        <strong>40 personas que ya son socias</strong> de Maisha Roots,
        conseguimos una financiación estable que nos permitirá:
      </Paragraph>
      <ul>
        <li>
          <Text>
            Seguir apoyando, por muchos años más, a las más de 100 personas
            beneficiarias de nuestros proyectos en la comunidad de Arusha,
            Tanzania, donde trabajamos.
          </Text>
        </li>
        <li>
          <Text>
            Aumentar el alcance de nuestro Proyecto Mawio y su continuación en
            el tiempo
          </Text>
        </li>
        <li>
          <Text>Sacar adelante futuros proyectos</Text>
        </li>
        <li>
          <Text>Potenciar nuestra sostenibilidad</Text>
        </li>
      </ul>
    </Accordion>
    <Accordion title="¿A qué va destinada mi aportación?" isFullWidth>
      <Text>
        Con tu contribución, no importa la cantidad, estás haciendo posible que
        saquemos adelante nuestros proyectos actuales y futuros. Tu aportación
        nos permite pagar a nuestro <strong>equipo local tanzano</strong>,
        comprar los <strong>materiales</strong> que necesitamos para desarrollar
        nuestros talleres y proyectos y hacer frente a los{' '}
        <strong>gastos</strong> de la ONG.
      </Text>
    </Accordion>
    <Accordion title="¿Qué ventajas obtengo como socio/a?" isFullWidth>
      <Text>
        Además de la correspondiente <strong>desgravación</strong> en tu
        Declaración de la Renta, recibirás cada tres meses nuestra{' '}
        <strong>Newsletter</strong> en la que te contaremos todos los avances
        que vamos consiguiendo gracias a tu ayuda.
      </Text>
    </Accordion>
    <Accordion title="¿Ser socio/a tiene beneficios fiscales?" isFullWidth>
      <Text>
        ¡Sí! La Utilidad Pública, concedida el pasado 29 de julio de 2020,
        permite que nuestros socios/as puedan desgravar en su Declaración de la
        Renta de acuerdo con los porcentajes indicados en la sección superior
      </Text>
    </Accordion>
    <Accordion title="¿Tengo que hacer una aportación mínima?" isFullWidth>
      <Text>
        No. Cuando te haces socio/a de Maisha Roots{' '}
        <strong>eliges la cantidad</strong> fija que quieres o puedes aportar{' '}
        <strong>cada mes</strong>. ¡Cada euro puede hacer una{' '}
        <strong>gran diferencia</strong>!
      </Text>
    </Accordion>
    <Accordion title="¿Puedo darme de baja?" isFullWidth>
      <Text>
        Ser socio/a de Maisha Roots es voluntario, puedes serlo{' '}
        <strong>durante el tiempo que quieras o puedas</strong>. ¡Desde Maisha
        Roots esperamos que sea durante mucho tiempo! Eso significaría que
        estamos haciendo las cosas bien y que estás{' '}
        <strong>feliz con nuestro trabajo</strong>.
      </Text>
    </Accordion>
  </SubSection>
)
export default Faq
