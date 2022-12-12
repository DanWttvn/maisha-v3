import Container from 'components/Container'
import React, { FC, PropsWithChildren } from 'react'
import Accordion from 'components/Accordion'
import Paragraph from 'components/Paragraph'
import Subtitle from 'components/Subtitle'
import Text from 'components/Text'
import { BaseProps } from 'models'
import { Ol, TextBold, TextDarkGrey } from './styles'

export type Props = BaseProps

const Li: FC<PropsWithChildren> = ({ children }) => (
  <li>
    <TextDarkGrey>{children}</TextDarkGrey>
  </li>
)

const Cookies: FC<Props> = ({ isHidden }) => {
  if (isHidden) return null

  return (
    <Container styles={{ fontSize: '0.9rem' }}>
      <Subtitle styles={{ marginBottom: 8 }} isSmall>Política de cookies</Subtitle>
      <Text size="s" styles={{ marginBottom: 16 }} isFullWidth>Maisha Roots Spain utiliza cookies para proporcionar un uso personalizado al usuario de la Web.</Text>
      <Accordion title="¿Qué es una cookie?">
        <Text size="s">
          El tratamiento de tus datos se realiza para el cumplimiento de obligaciones legales por parte de Maisha Roots Spain:
        </Text>
        <Paragraph size="s">
          Una cookie es un fichero que se descarga en el ordenador/smartphone/tablet del usuario al acceder a determinadas páginas Web, para almacenar y recuperar información sobre la navegación que se efectúa desde dicho equipo.
          <br />
          El navegador del usuario utiliza la información sobre la visita a la Web para personalizar ciertas páginas o elementos. A efectos de análisis estadísticos, también puede utilizarse una cookie para transmitir a nuestro servidor un número único y anónimo generado al azar. No es posible identificar al usuario mediante una cookie. Generalmente, una cookie contiene el nombre del dominio de donde procede la misma, su &quot;tiempo de vida&quot; y un valor, que suele ser un valor de texto o un número único generado al azar.
        </Paragraph>
      </Accordion>
      <Accordion title="¿Qué tipos de cookies hay?">
        <TextBold isFullWidth>Según su origen:</TextBold>
        <ul>
          <Li>
              <strong>Propias: </strong>
              son las cookies generadas por la propia página Web que se está visitando.
          </Li>
          <Li>
              <strong>De terceros: </strong>
              Son cookies que se reciben al navegar por una página Web, pero no son generadas por el titular de la Web, sino por otra entidad que trata los datos obtenidos a través de las cookies. Dentro de esta categoría se incluyen las cookies analíticas y las usadas por complementos externos de contenido, las cuales son necesarias para que el usuario pueda acceder a contenidos o servicios proporcionados por terceros proveedores como, por ejemplo, ubicaciones geográficas en Google Maps.
          </Li>
        </ul>
        <Text size="s" styles={{ marginBottom: 24 }} isFullWidth>
          En el caso de que las cookies sean instaladas desde un equipo o dominio gestionado por el propio editor pero la información que se recoja mediante estas sea gestionada por un tercero, no pueden ser consideradas como cookies propias.
        </Text>
        <TextBold isFullWidth>Según el tiempo que permanecen activas:</TextBold>
        <ul style={{ marginBottom: 24 }}>
          <Li>
              <strong>Cookies de sesión: </strong>
              Son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página Web. No quedan registradas en el terminal del usuario cuando éste abandona la página Web.
          </Li>
          <Li>
              <strong>Cookies persistentes: </strong>
              Son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.
          </Li>
        </ul>
        <TextBold isFullWidth>Según su finalidad:</TextBold>
        <ul>
          <Li>
              <strong>Cookies Técnicas: </strong>
              Son las cookies estrictamente necesarias para la prestación de determinados servicios solicitados expresamente por el usuario. Si se desactivan estas cookies, no podrá recibir correctamente los contenidos y servicios ofrecidos en nuestra Web.
          </Li>
          <Li>
              <strong>Cookies Analíticas: </strong>
              Son aquellas que permiten el seguimiento y análisis estadístico del comportamiento del conjunto de los usuarios en nuestra Web, reuniendo y proporcionando información anónima. Esta información nos ayuda a mejorar el funcionamiento de la misma.
          </Li>
          <Li>
              <strong>Cookies Publicitarias: </strong>
              Son las cookies que permiten la gestión de los espacios publicitarios en base a criterios como la frecuencia en la que se muestran los anuncios.
          </Li>
          <Li>
              <strong>Cookies Comportamentales: </strong>
              Permiten la gestión de los espacios publicitarios según el perfil específico del usuario.
          </Li>
        </ul>
      </Accordion>
      <Accordion title="¿Qué tipos de cookies utiliza Maisha Roots Spain?">
        <TextBold isFullWidth>A. COOKIES PROPIAS</TextBold>
        <TextBold isFullWidth>Cookies de Sesión</TextBold>
        <Text size="s" styles={{ marginBottom: 16 }} isFullWidth>
          Permiten moverse por muchas páginas de un mismo sitio de manera fácil y rápida sin tener que autenticarse de nuevo o tener que iniciar el proceso en cada zona que visita.
        </Text>
        <TextBold isFullWidth>Cookies Técnicas</TextBold>
        <Paragraph size="s">
          Necesarias para permitir al usuario la navegación a través de la página Web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.
          <br />
          Facilitan el control del tráfico y la comunicación de datos; permiten identificar la sesión y acceder a partes de acceso restringido; realizar la solicitud de inscripción o participación en un evento, así como utilizar elementos de seguridad durante la navegación.
        </Paragraph>
        <TextBold isFullWidth>B. COOKIES DE TERCEROS</TextBold>
        <TextBold isFullWidth>Cookies analíticas</TextBold>
        <Paragraph size="s">
          Permiten la realización de informes estadísticos sobre el tráfico del sitio Web.
          <br />
          Estas cookies generan un ID de usuario anónimo que proporciona información sobre el número de páginas visitadas dentro de la Web, secciones visitadas, tiempo de navegación, dirección IP y dominios desde los cuales se accede a la página Web de Maisha Roots Spain.
        </Paragraph>
        <TextBold isFullWidth>Cookies usadas por complementos externos de contenido</TextBold>
        <Text size="s" styles={{ marginBottom: 16 }} isFullWidth>
          Son necesarias para que el usuario pueda acceder a páginas de terceros alojados en nuestra Web.
        </Text>
      </Accordion>
      <Accordion title="¿Cómo puedo desactivar las cookies?">
        <Paragraph size="s">
          Puesto que las cookies son archivos de texto normales, se pueden explorar con la mayoría de editores de texto o programas de procesamiento de texto. Puedes hacer clic en una cookie para abrirla.
          <br />
          A continuación, se indica una lista de enlaces sobre cómo ver cookies en diferentes navegadores. Si utilizas otro navegador, consulte la información sobre cookies en el propio navegador. Si utilizas un teléfono móvil, consulta el manual del dispositivo para obtener más información.
        </Paragraph>
        <ul style={{ marginBottom: 16 }}>
          <li><a rel="noreferrer" href="https://support.mozilla.org/en-US/kb/cookies-information-Websites-store-on-your-computer">Firefox</a></li>
          <li><a rel="noreferrer" href="https://support.google.com/chrome/bin/answer.py?hl=en&answer=95647&topic=14666&ctx=topic">Chrome</a></li>
          <li><a rel="noreferrer" href="http://windows.microsoft.com/en-US/internet-explorer/delete-manage-cookies">Internet Explorer 8-10</a></li>
          <li><a rel="noreferrer" href="http://support.apple.com/kb/ph5042">Safari</a></li>
          <li><a rel="noreferrer" href="http://support.apple.com/kb/ph5042">Opera</a></li>
        </ul>
        <TextBold isFullWidth>Configuración de cookies para los navegadores más populares</TextBold>
        <Text size="s" styles={{ marginBottom: 16 }} isFullWidth>
          A continuación, te indicamos cómo acceder a una cookie determinada del navegador <TextBold>Chrome</TextBold> a: estos pasos pueden variar en función de la versión del navegador:
        </Text>
        <Ol>
          <Li>Ve a Configuración o Preferencias mediante el menú Archivo o bien pinchando el icono de personalización que aparece arriba a la derecha.</Li>
          <Li>Verás diferentes secciones, pincha la opción <i>Mostrar opciones avanzadas.</i></Li>
          <Li>Ve a Privacidad, <i>Configuración de contenido.</i></Li>
          <Li>Selecciona <i>Todas las cookies y los datos de sitios.</i></Li>
          <Li>Aparecerá un listado con todas las cookies ordenadas por dominio. Para que te sea más fácil encontrar las cookies de un determinado dominio introduzca parcial o totalmente la dirección en el campo <i>Buscar cookies.</i></Li>
          <Li>Tras realizar este filtro aparecerán en pantalla una o varias líneas con las cookies de la Web solicitada. Ahora sólo tienes que seleccionarla y pulsar la X para proceder a su eliminación.</Li>
        </Ol>
        <Text size="s" styles={{ marginBottom: 16 }} isFullWidth>
          A continuación, te indicamos cómo acceder a una cookie determinada del navegador <TextBold>Internet Explorer</TextBold> a: estos pasos pueden variar en función de la versión del navegador:
        </Text>
        <Ol>
          <Li>Ve a <i>Herramientas, Opciones de Internet</i></Li>
          <Li>Haz clic en <i>Privacidad</i></Li>
          <Li>Mueve el deslizador hasta ajustar el nivel de privacidad que desees.</Li>
        </Ol>
        <Text size="s" styles={{ marginBottom: 16 }} isFullWidth>
          A continuación, te indicamos cómo acceder a una cookie determinada del navegador <TextBold>Firefox</TextBold> a: estos pasos pueden variar en función de la versión del navegador:
        </Text>
        <Ol>
          <Li>Ve a <i>Opciones o Preferencias</i> según tu sistema operativo.</Li>
          <Li>Haz clic en <i>Privacidad</i>.</Li>
          <Li>En <i>Historial</i> elige <i>Usar una configuración personalizada para el historial.</i></Li>
          <Li>Ahora verás la opción <i>Aceptar cookies</i>, puedes activarla o desactivarla según tus preferencias.</Li>
        </Ol>
        <Text size="s" styles={{ marginBottom: 16 }} isFullWidth>
          A continuación, te indicamos cómo acceder a una cookie determinada del navegador <TextBold>Safari para OSX</TextBold> a: estos pasos pueden variar en función de la versión del navegador:
        </Text>
        <Ol>
          <Li>Ve a <i>Preferencias</i>, luego <i>Privacidad</i>.</Li>
          <Li>En este lugar verás la opción <i>Bloquear cookies</i> para que ajuste el tipo de bloqueo que deseas realizar.</Li>
        </Ol>
        <Text size="s" styles={{ marginBottom: 16 }} isFullWidth>
          A continuación, te indicamos cómo acceder a una cookie determinada del navegador <TextBold>Safari para iOS</TextBold> a: estos pasos pueden variar en función de la versión del navegador:
        </Text>
        <Ol>
          <Li>Ve a <i>Ajustes</i>, luego <i>Safari</i>.</Li>
          <Li>Ve a <i>Privacidad y Seguridad</i>, verás la opción <i>Bloquear cookies</i> para que ajuste el tipo de bloqueo que deseas realizar.</Li>
        </Ol>
        <Text size="s" styles={{ marginBottom: 16 }} isFullWidth>
          A continuación, te indicamos cómo acceder a una cookie determinada del navegador <TextBold>Android</TextBold> a: estos pasos pueden variar en función de la versión del navegador:
        </Text>
        <Ol>
          <Li>Ejecuta el navegador y pulsa la tecla <i>Menú</i>, luego <i>Ajustes</i>.</Li>
          <Li>Ve a <i>Seguridad y Privacidad</i>, verás la opción <i>Aceptar cookies</i> para que active o desactive la casilla.</Li>
        </Ol>
        <Text size="s" styles={{ marginBottom: 16 }} isFullWidth>
          A continuación, te indicamos cómo acceder a una cookie determinada del navegador <TextBold>Windows Phone</TextBold> a: estos pasos pueden variar en función de la versión del navegador:
        </Text>
        <Ol>
          <Li>Abre <i>Internet Explorer</i>, luego <i>Más</i>, luego <i>Configuración</i></Li>
          <Li>Ahora puedes activar o desactivar la casilla <i>Permitir cookies.</i></Li>
        </Ol>
      </Accordion>
    </Container>
  )
}

export default Cookies
