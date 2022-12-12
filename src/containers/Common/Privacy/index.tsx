import  { FC, PropsWithChildren } from 'react'
import Accordion from 'components/Accordion'
import Subtitle from 'components/Subtitle'
import { BaseProps } from 'models'
import { Text, Paragraph } from './styles'
import Container from 'components/Container'

export type Props = BaseProps

const Li: FC<PropsWithChildren> = ({ children }) => (
  <li>
    <Text>{children}</Text>
  </li>
)

const Privacy: FC<Props> = ({ isHidden }) => {
  if (isHidden) return null

  return (
    <Container styles={{ fontSize: '0.9rem' }}>
      <Subtitle styles={{ marginBottom: 8 }} isSmall isFullWidth>Política de privacidad</Subtitle>
      <Paragraph>
        Para saber cómo se procede con los datos personales, te rogamos leas la siguiente política de privacidad que aconsejamos consultar con regularidad, dado que puede ser actualizada.
        <br />
        El visitante se hace responsable y garantiza que los datos personales que facilita a Maisha Roots Spain son veraces y cuenta, cuando proceda, con la debida autorización para ello del titular de los mismos.
        <br />
        Maisha Roots Spain tratará los datos de carácter personal vinculados a sus espacios webs respetando las exigencias de la legislación vigente.
      </Paragraph>
      <Accordion title="¿Quién es el responsable del tratamiento de tus datos personales?">
        <Paragraph>
          El responsable del tratamiento es la Asociación Maisha Roots Spain, provista e CIF G-87557476, con domicilio social en Avenida Bélgica, 12, drch 7ºB 28916, Leganés (España).
          <br />
          Puedes contactar con nosotros a través de nuestro correo electrónico: canaldenuncias@maisharoots.org
        </Paragraph>
      </Accordion>
      <Accordion title="¿Con qué finalidad tratamos tus datos personales?">
        <Paragraph>
          En Maisha Roots Spain tratamos la información que nos facilitas con la finalidad de atender tu petición y prestar el servicio solicitado, así como para mantenerte informado por diversos canales de comunicación sobre cuestiones relativas a nuestra actividad, iniciativas de naturaleza similar a las que hayas participado con anterioridad o sobre las que nos hayas solicitado información y sobre campañas de información, sensibilización y captación de fondos.
        </Paragraph>
      </Accordion>
      <Accordion title="¿Cuál es la legitimación para el tratamiento de sus datos?">
        <Paragraph>
          El tratamiento de tus datos se realiza para el cumplimiento de obligaciones legales por parte de Maisha Roots Spain:
        </Paragraph>
        <ul>
          <Li>A la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales y al Real Decreto 1720/2007, de 21 de diciembre, conocido como el Reglamento de desarrollo de la LOPD.</Li>
          <Li>El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).</Li>
          <Li>El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).</Li>
        </ul>
      </Accordion>
      <Accordion title="¿Cuáles son los principios aplicados al tratamiento de tu información personal?">
        <Paragraph>
          En el tratamiento de tus datos personales, aplicaremos los siguientes principios que se ajustan a las exigencias del nuevo reglamento europeo de protección de datos:
        </Paragraph>
        <ul>
          <Li>
              <strong>Principio de licitud, lealtad y transparencia: </strong>
              siempre requeriremos tu consentimiento para el tratamiento de tus datos personales para uno o varios fines específicos que te informaremos previamente con absoluta transparencia.
          </Li>
          <Li>
              <strong>Principio de minimización de datos: </strong>
              solo solicitaremos datos estrictamente necesarios en relación con los fines para los que los requerimos. Los mínimos posibles.
          </Li>
          <Li>
              <strong>Principio de limitación del plazo de conservación: </strong>
              mantendremos tus datos personales mientras exista una relación o mientras no ejerzas tu derecho de supresión, cancelación y/o limitación del tratamiento de tus datos. En estos casos, bloquearemos tus datos, sin darle ningún uso, salvo que exista obligación legal de mantenerlos, en cuyo caso sería necesaria su recuperación.
          </Li>
          <Li>
              <strong>Principio de integridad y confidencialidad: </strong>
              tus datos serán tratados de tal manera que se garantice una seguridad adecuada de los datos personales y se garantice confidencialidad. Debes saber que tomamos todas las precauciones necesarias para evitar el acceso no autorizado o uso indebido de los datos de los usuarios por parte de terceros.
          </Li>
        </ul>
      </Accordion>
      <Accordion title="¿A qué destinatarios se comunicarán sus datos?">
        <Paragraph>
          Con carácter general no se comunicarán tus datos personales a terceros salvo en las siguientes excepciones:
        </Paragraph>
        <ul>
          <Li>
              Cuando te hagas socio o realices un donativo enviaremos tus datos a la Administración Tributaria incluyendo la cuantía de tus aportaciones con el fin de que puedas desgravar tus contribuciones monetarias.
          </Li>
          <Li>
              En el caso de que una autoridad judicial o administrativa nos solicite datos de nuestros ficheros, se los comunicaremos siempre que se cumplan las exigencias legales previstas.
          </Li>
          <Li>
              A colaboradores que trabajan con Maisha Roots Spain. Estas terceras entidades solo tienen acceso a los datos personales necesarios para llevar a cabo el servicio requerido, no pueden utilizarlos de ninguna otra forma que aquella que les hemos solicitado y siempre bajo acuerdo de confidencialidad.
          </Li>
        </ul>
        <Paragraph>
          Sólo en los casos en que la cesión de los datos venga impuesta por ley o fuera necesaria para hacer frente a una situación de emergencia que exija la cooperación de personas o entidades distintas de las mencionadas anteriormente, tus datos podrán ser cedidos a terceros en la medida en que resulte necesaria para cumplir la legislación vigente o para hacer frente a la situación de emergencia planteada.
        </Paragraph>
      </Accordion>
      <Accordion title="¿Cuáles son tus derechos?">
        <Paragraph>
          Mediante solicitud escrita y firmada, acompañada de copia del Documento de Identidad, dirigida a Maisha Roots Spain, Avenida Bélgica, 12, drch 7ºB 28916, Leganés (España), o a canaldenuncias@maisharoots.org, puedes
        </Paragraph>
        <ul>
          <Li>
            ejercer tus derechos de acceso, rectificación, supresión y portabilidad de sus datos, de limitación y oposición a su tratamiento
          </Li>
          <Li>
           responderemos a tus peticiones a la mayor brevedad posible y, en todo caso, en el plazo de un mes desde la recepción de su solicitud. Dicho plazo podrá prorrogarse otros dos meses en caso necesario, teniendo en cuenta la complejidad y el número de solicitudes. El responsable informará al interesado de la prórroga dentro del primer mes desde la solicitud.
          </Li>
          <Li>
           retirar en cualquier momento el consentimiento prestado para el tratamiento o comunicación de tus datos.
          </Li>
        </ul>
        <Paragraph>
          Asimismo, si no estás conforme con cómo hemos atendido tus derechos, podrás presentar una reclamación ante la Agencia Española de Protección de Datos, a través de la página Web www.aepd.es.
        </Paragraph>
      </Accordion>
      <Accordion title="Actualización">
        <Paragraph>
          La presente Política de privacidad ha sido actualizada el 05/06/2020. Maisha Roots Spain se reserva el derecho de modificar su política de protección de datos en el supuesto de que exista un cambio de la legislación vigente, doctrina jurisprudencial o por criterios propios. Si se introdujese algún cambio en esta Política, el nuevo texto se publicará en esta misma dirección web.
        </Paragraph>
      </Accordion>
    </Container>
  )
}

export default Privacy
