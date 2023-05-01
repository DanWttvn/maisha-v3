import React, { FC, useContext } from 'react'
import AppLink from 'components/AppLink'
import Image from 'components/Image'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import Paragraph from 'components/Paragraph'
import Text from 'components/Text'
import Quote from 'components/Quote'
import Button from 'components/Button'
import theme from 'styles/themes/light'
import LanguageContext from 'contexts/language'
import Section from 'components/Section'
import SubSection from 'components/SubSection'
import { SectionProps } from 'models'
import ExternalLink from 'components/ExternalLink'
import Accordion from 'components/Accordion'
import Container from 'components/Container'
import Li from 'components/Li'
import ColabLink from './ColabLink'
import { urls } from 'globals/routes'
import { ExternalLinkRound } from './styles'

const CollaborateSection: FC<SectionProps> = () => {
  const { lang } = useContext(LanguageContext)
  const emailHref = 'mailto:info@maisharoots.org'

  return (
    <Section id="collaborate">
      <Title
        firstPart={
          (lang === 'ES' && 'COLABORA') ||
          (lang === 'EN' && 'COLLABORATE') ||
          (lang === 'SW' && 'SHIRIKI') ||
          ''
        }
      />

      <SubSection id="volunteering">
        <Subtitle>
          {lang === 'ES' && 'Hazte voluntaria/o'}
          {lang === 'EN' && 'Become a volunteer'}
          {lang === 'SW' && 'Kuwa wa kujitolea'}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && (
            <>
              El voluntariado es uno de los pilares de Maisha Roots y
              necesitamos personal voluntario, tanto en España como en Tanzania.
              Envíanos tu <strong>CV</strong> y una{' '}
              <strong>carta explicándonos tu motivación</strong> a{' '}
              <ExternalLink href={emailHref}>info@maisharoots.org</ExternalLink>
              , y estaremos encantadas/os de que te unas a nuestro equipo.
            </>
          )}
          {lang === 'EN' && (
            <>
              Volunteering is one of the most important roots of this
              organization, therefore we need volunteers to join our teams both
              in Spain and Tanzania. Send us your <strong>CV</strong> and a{' '}
              <strong>letter in which you explain to us your motivation</strong>{' '}
              to{' '}
              <ExternalLink href={emailHref}>info@maisharoots.org</ExternalLink>
              . We are happy that you join our team.
            </>
          )}
          {lang === 'SW' && (
            <>
              Kujitolea ni moja ya mzizi muhimu wa shirika hili, kwa hivyo
              tunahitaji kujitolea kuungana na timu zetu zote nchini Uhispania
              na Tanzania. Tutumie <strong>wasifu</strong> wako na{' '}
              <strong>barua ambayo utatuelezea motisha yako</strong> kwa{' '}
              <ExternalLink href={emailHref}>info@maisharoots.org</ExternalLink>
              . Tunafurahi kwamba unajiunga na timu yetu.
            </>
          )}
        </Paragraph>
      </SubSection>
      <SubSection>
        <Subtitle>
          {lang === 'ES' && 'Haz prácticas'}
          {lang === 'EN' && 'Do your internship'}
          {lang === 'SW' && 'Fanya masomo yako kwa vitendo na sisi'}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && (
            <>
              Si eres <strong>estudiante de grado o de máster</strong>{' '}
              universitarios y estás buscando dónde realizar tus prácticas
              universitarias, Maisha Roots puede que sea tu sitio. Hasta el
              momento han participado estudiantes de grado de la Universidad Rey
              Juan Carlos (grados en Relaciones Internacionales, Economía,
              Historia, Ciencias Políticas, Comunicación Audiovisual, etc.) y de
              máster en la Universidad Carlos III de Madrid (Máster en Acción
              Solidaria Internacional e Inclusión Social), de la Universidad
              Politécnica de Madrid y de la Universidad Complutense de Madrid
              (Máster en Estrategias y Tecnologías para el Desarrollo).
            </>
          )}
          {lang === 'EN' && (
            <>
              If you are a university student,{' '}
              <strong>currently doing a degree or a masters</strong>, and you
              are looking for a place where to do your internship, Maisha Roots
              might be the correct place. Students from Rey Juan Carlos
              University (degrees in International, Relations, Economics,
              History, Political Sciences, Communication, and Media, etc.),
              Carlos III de Madrid University (master's in international
              Solidarity and Social Inclusion), and Complutense and Politécnica
              de Madrid Universities (master's in Strategies and Technologies
              for Development).
            </>
          )}
          {lang === 'SW' && (
            <>
              Ikiwa wewe ni mwanafunzi wa chuo kikuu, kwa sasa unafanya{' '}
              <strong>shahada au stashahada</strong> na unatafuta mahali pa
              kufanya mafunzo yako kwa vitendo, Maisha Roots inaweza kuwa ni
              mahali sahihi. Wanafunzi kutoka chuo kikuu cha Rey Juan Carlos
              (shahada ya Kimataifa, Mahusiano, Uchumi, Historia, Sayansi ya
              Kisiasa, Mawasiliano na Vyombo vya Habari, n.k.), Chuo kikuu cha
              cha Carlos III de Madrid (masta katika Ushirikiano wa Kimataifa na
              Ushirikiano wa Jamii), na Ushirika wa Chuo Kikuu cha Politecnica
              de Madrid (masta ya Mikakati na Teknolojia za Maendeleo)
            </>
          )}
        </Paragraph>
        <Paragraph>
          {lang === 'ES' && (
            <>
              <strong>
                Buscamos gente comprometida que se una a nuestros equipos
              </strong>{' '}
              de Tanzania y/o España para dar apoyo en las tareas de gestión de
              proyectos, finanzas y contabilidad, legalidad, comunicación y
              redes, etc.
            </>
          )}
          {lang === 'EN' && (
            <>
              <strong>
                We are looking for committed students who join our teams
              </strong>{' '}
              in Tanzania and/or Spain to support our areas of project
              management, finance and accounting, legality, communication and
              media, etc.
            </>
          )}
          {lang === 'SW' && (
            <>
              <strong>
                Tunatafuta wanafunzi wakujitolea ambao watajiunga na timu zetu
              </strong>{' '}
              za Tanzania na Uhispania kusaidia maeneo yetu ya usimamizi wa
              miradi, fedha na uhasibu, sheria, mawasiliano na habari, n.k.
            </>
          )}
        </Paragraph>
        <Paragraph>
          {lang === 'ES' && (
            <>
              Si te interesa envíanos un correo a{' '}
              <ExternalLink href={emailHref}>info@maisharoots.org</ExternalLink>{' '}
              y estudiaremos la forma de ponernos en contacto con tu universidad
              para realizar todos los trámites pertinentes, o si ya existiera
              convenio, contacta con tu gestor de prácticas para solicitar plaza
              en nuestras vacantes.
            </>
          )}
          {lang === 'EN' && (
            <>
              If you are interested, send an email to{' '}
              <ExternalLink href={emailHref}>info@maisharoots.org</ExternalLink>{' '}
              and we will contact your University to do all the paperwork, and
              if we already have an agreement with your University, please
              contact the internship manager to ask for our vacancies and the
              procedure to apply to it.
            </>
          )}
          {lang === 'SW' && (
            <>
              Ukiwa una nia, tuma barua pepe kwa{' '}
              <ExternalLink href={emailHref}>info@maisharoots.org</ExternalLink>{' '}
              na tutawasiliana na Chuo Kikuu chako, tafadhali wasiliana na
              msimamizi wa kitengo cha kuuliza kazi zetu na utaratibu wa kuomba
              ndani yake.
            </>
          )}
        </Paragraph>
        <Text isFullWidth isCentered>
          {lang === 'ES' && 'Como Eduardo Galeano, creemos que...'}
          {lang === 'EN' && 'As Eduardo Galeano said, we believe that...'}
          {lang === 'SW' &&
            'Kama Eduardo Galeano alivyosema, tunamini hivyo...'}
        </Text>
        <Quote
          color="darkRed"
          quotesColor="offOrange"
          weight="black"
          size="xl"
          isFullWidth
          isCentered>
          {lang === 'ES' &&
            'mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el mundo'}
          {lang === 'EN' &&
            'many small people, in small places, doing small things, can change the world'}
          {lang === 'SW' &&
            'watu wengi kwenye maeneo madogo madogo, wanaofanya shughuli ndogo ndogo, wanaweza kuibadilisha dunia'}
        </Quote>
      </SubSection>
      <SubSection id="donate">
        <Subtitle>
          {lang === 'ES' && 'Haz una donación'}
          {lang === 'EN' && 'Make a donation'}
          {lang === 'SW' && 'Changia'}
        </Subtitle>
        <Accordion
          title="Hazte socia/o"
          isHidden={lang !== 'ES'}
          isFullWidth
          isDefaultOpen>
          <Text styles={{ marginBottom: 8 }}>
            Puedes donarnos una cantidad fija al mes. Uno de los pilares de
            nuestra asociación es la estabilidad económica. Si conseguimos una
            financiación estable, contribuiremos activamente a la sostenibilidad
            de nuestros proyectos. Por ello, te animamos a que colabores con una
            aportación mensual.
          </Text>
          <AppLink toPage={urls.join}>
            <Button styles={{ marginBottom: 16 }}>Hazte socia/o aquí</Button>
          </AppLink>
        </Accordion>
        <Accordion
          title={
            (lang === 'ES' && 'Haz una transferencia') ||
            (lang === 'EN' && 'Make a transfer') ||
            (lang === 'SW' && 'Fanya uhamishaji') ||
            ''
          }
          isFullWidth>
          <Text styles={{ marginBottom: 8 }}>
            {lang === 'ES' && (
              <>
                Puedes ayudarnos con una donación puntual. La cantidad que tú
                consideres será un granito de arena para nuestra sostenibilidad.
                Puedes hacerlo a través de{' '}
                <strong>transferencia bancaria o con un ingreso</strong> en la
                cuenta:
              </>
            )}
            {lang === 'EN' && (
              <>
                You can help us with a punctual donation. Any amount you
                consider will be very important for our sustainability. You can
                do it through a <strong>wire transfer or a deposit</strong> in
                this account:
              </>
            )}
            {lang === 'SW' && (
              <>
                Unaeza kushirikiana na Maisha Roots kupitia kuchangia kwa
                wakati. Unaeza kuchangia kwa kiasi chochote. Ikiwa unataka
                kuongeza kiasi chochote, unaweza kufanya kupitia uhamishaji wa
                fedha kielektroniki, au amana katika akauti yetu, kila kiasi ni
                muhimu!
              </>
            )}
          </Text>
          <Container
            styles={{
              background: theme.colors.darkRed,
              padding: '30px 50px',
              borderRadius: 30,
              margin: '0 auto',
              marginBottom: 16,
            }}>
            <ul>
              <li style={{ color: theme.colors.offOrange }}>
                <Text weight="semibold">
                  {lang === 'ES' && 'Banco: La CAIXA'}
                  {lang === 'EN' && 'Bank: La CAIXA'}
                  {lang === 'SW' && 'Benki: La Caixa'}
                </Text>
              </li>
              <li style={{ color: theme.colors.offOrange }}>
                <Text weight="semibold">
                  {lang === 'ES' && 'Titular: Maisha Roots Spain'}
                  {lang === 'EN' && 'Owner: Maisha Roots Spain'}
                  {lang === 'SW' && 'Mmiliki: Progress Spain'}
                </Text>
              </li>
              <li style={{ color: theme.colors.offOrange }}>
                <Text weight="semibold">
                  IBAN: ES55 2100 0955 8002 1028 3299
                </Text>
              </li>
              <li style={{ color: theme.colors.offOrange }}>
                <Text weight="semibold">BIC/SWIFT: CAIXESBBXXX</Text>
              </li>
            </ul>
          </Container>
          <Text size="s" styles={{ marginBottom: 16 }}>
            {lang === 'ES' && (
              <>
                Por favor, para que podamos cumplir con nuestro compromiso de
                transparencia, no olvide incluir en el{' '}
                <strong>concepto: 'donación' + nombre completo + DNI</strong>.
              </>
            )}
            {lang === 'EN' && (
              <>
                Please, for us to accomplish with our transparency engagement,
                do not forget to include in the{' '}
                <strong>concept: 'donation' + completed name + ID</strong>.
              </>
            )}
            {lang === 'SW' && (
              <>
                Tafadhali, ili tuweze kukamilisha kwa ushirika wetu wa uwazi,
                usisahau kujumuika kwenye{' '}
                <strong>dhima: 'mchango' + jina kamili + kitambulisho</strong>.
              </>
            )}
          </Text>
        </Accordion>
        <Accordion title="Dona con Bizum" isHidden={lang !== 'ES'} isFullWidth>
          <Text styles={{ marginBottom: 16 }}>
            Desde tu móvil usando la aplicación Bizum la app de tu banco,
            introduce manualmente el número{' '}
            <Text color="darkRed" weight="black">
              02780
            </Text>
            .
          </Text>
          <Text styles={{ marginBottom: 8 }}>
            En caso de que quieras solicitar el certificado de donaciones,
            envíanos un correo a{' '}
            <ExternalLink href={emailHref}>info@maisharoots.org</ExternalLink>,
            con los siguientes datos:
          </Text>
          <ul>
            <Li>Nombre y apellidos</Li>
            <Li>DNI</Li>
            <Li>Código Postal</Li>
            <Li>Email</Li>
            <Li>Fecha e importe donación</Li>
          </ul>
        </Accordion>
      </SubSection>
      <SubSection isHidden={lang === 'SW'}>
        <Subtitle>
          {lang === 'ES' && 'Hazte teamer'}
          {lang === 'EN' && 'Become a teamer'}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && (
            <>
              En Maisha Roots creemos que la estabilidad económica es la base
              para el éxito de cualquier proyecto de cooperación al desarrollo.
              Consideramos que las micro donaciones tienen un gran impacto en la
              estabilidad económica de la ONG y nos hemos sumado a la plataforma
              Teaming. Con menos de lo que cuesta un café, estarás colaborando a
              la sostenibilidad de nuestros proyectos.{' '}
              <strong>Dona 1€ al mes y ayúdanos a seguir creciendo.</strong>
            </>
          )}
          {lang === 'EN' && (
            <>
              In Maisha Roots we believe that economic sustainability is the key
              to success in any development project. We consider that
              microdonations have a bigger impact on the sustainability of the
              NGO, so we have created a profile in Teaming. For less than the
              price of a coffee, you will be collaborating on the sustainability
              of our projects.{' '}
              <strong>Donate 1€ monthly and help us keep on growing.</strong>
            </>
          )}
        </Paragraph>
        <ExternalLinkRound href="https://www.teaming.net/maisharoots">
          <Image
            src="/images/colabora-teaming.jpg"
            styles={{ height: 150, width: 150 }}
          />
        </ExternalLinkRound>
      </SubSection>
      <SubSection>
        <Subtitle>
          {lang === 'ES' && 'Colegios hermanados'}
          {lang === 'EN' && 'Schools partners'}
          {lang === 'SW' && 'Washirika wa shule'}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && (
            <>
              Si formas parte de algún colegio o centro educativo, puedes unirte
              a nosotros y colaborar con un proyecto solidario. En Maisha Roots
              promovemos actividades entre algunos centros educativos de España,
              con el fin de lograr la sensibilización del alumnado respecto al
              continente africano, la situación en Tanzania y la importancia de
              la educación para el desarrollo.
            </>
          )}
          {lang === 'EN' && (
            <>
              If you are a member of any school or educational center, you can
              join us an collaborate with our projects. In Maisha Roots we
              promote activities in some educational centers in Spain, with the
              aim of achieving the sensitization of the students regarding the
              African continent, the situation in Tanzania and the importance of
              education to development.
            </>
          )}
          {lang === 'SW' && (
            <>
              Ikiwa wewe ni mwanachama wa shule yoyote au kituo cha elimu,
              unaweza kuungana nasi kushirikiana na miradi yetu. Katika Maisha
              Roots tunakuza shughuli katika baadhi ya vituo vya elimu nchini
              Uhispania, kwa madhumuni ya kufikia uhamasishaji wa wanafunzi
              katika bara la Afrika, hali nchini Tanzania na umuhimu wa elimu
              kwa maendeleo.{' '}
            </>
          )}
        </Paragraph>
        <Paragraph>
          {lang === 'ES' && (
            <>
              Actualmente, nuestro hermanamiento más sólido es con el{' '}
              <ExternalLink href="https://colegioarcadia.com/">
                Colegio Arcadia
              </ExternalLink>
              , con quien tenemos una colaboración activa y realizamos
              actividades de sensibilización a lo largo del curso. También hemos
              llevado a cabo colaboraciones puntuales de sensibilización con
              otros centros, como el{' '}
              <strong>Colegio Público de Valdepiélagos</strong> o el{' '}
              <strong>Colegio Manuel Núñez de Arenas</strong> en Getafe. Además,
              estamos iniciando una relación colaborativa con el{' '}
              <strong>Colegio Mayor Antonio de Nebrija</strong>, adscrito a la
              Universidad Complutense de Madrid.
            </>
          )}
          {lang === 'EN' && (
            <>
              Our most solid school partner nowadays is{' '}
              <ExternalLink href="https://colegioarcadia.com/">
                Arcadia School
              </ExternalLink>
              , with whom we have an active collaboration and we develop
              sensitization activities during the school year. We have also
              developed punctual collaborations in other schools, such as
              African Day in <strong>Valdepiélagos Public School</strong>,
              solidarity race in{' '}
              <strong>Manuel Núñez de Arenas Public School</strong>.
            </>
          )}
          {lang === 'SW' && (
            <>
              Wenzetu wa shule hivi sasa ni{' '}
              <ExternalLink href="https://colegioarcadia.com/">
                schule ya Arcadia
              </ExternalLink>
              , ambayo tunashirikiana nao kwa bidii na tunakuza shughuli za
              uhamasishaji kwa wakati wa mwaka wa shule. Tumeendeleza pia
              kushirikiana kwa muda katika shule zingine, kama vile siku ya
              Kiafrika katika <strong>shule ya Umma ya Valdepielagos</strong>,
              mbio za mshikamano katika shule ya Umma ya{' '}
              <strong>Manuel Nuñez de Arenas</strong>.
            </>
          )}
        </Paragraph>
      </SubSection>
      <SubSection id="entities">
        <Subtitle>
          {lang === 'ES' && 'Entidades colaboradoras'}
          {lang === 'EN' && 'Partner organizations'}
          {lang === 'SW' && 'Washirika wa mashirika'}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && (
            <>
              Maisha Roots busca entidades que quieran colaborar para el
              desarrollo de la comunidad tanzana. Tratamos de establecer
              relaciones duraderas que vayan más allá de la donación económica y
              que aporten beneficios a ambas partes, ya sea a través del
              voluntariado corporativo, la cesión de servicios o espacios, o la
              simple donación. Además, buscamos entidades éticas, que cumplan
              con nuestros{' '}
              <ExternalLink href="/images/docs/Criterios_de_selecci%C3%B3n_de_colaboradores_y_contrapartes-Maisha_Roots.pdf">
                mecanismos de selección de colaboradores
              </ExternalLink>
              .
            </>
          )}
          {lang === 'EN' && (
            <>
              Maisha Roots looks for organizations that aim to collaborate in
              the development of Tanzanian societies. We try to establish
              long-duration relations that go further than economic donations,
              based on a win-win strategy for both organizations. It can be
              through corporative volunteering, pro bono services, or economic
              donation. We also look for ethical corporations, that accomplish
              with our{' '}
              <ExternalLink href="/images/docs/Criterios_de_selecci%C3%B3n_de_colaboradores_y_contrapartes-Maisha_Roots.pdf">
                partnership selection mechanisms
              </ExternalLink>
              .
            </>
          )}
          {lang === 'SW' && (
            <>
              Maisha Roots inatafuta shirika ambalo linalenga kushirikiana
              katika maendeleo ya jamii za Kitanzania. Tunajaribu kuweka
              uhusiano wa mda mrefu ambao huenda zaidi kuliko michango ya
              kiuchumi, kwa msingi wa mkakati wa kushinda kwa mashirika yote
              mawili. Inaweza kujitolea kupitia kwa ushirika, huduma za bro
              bono, au mchango wa kiuchumi. Tunatafuta pia mashirika ya maadili,
              ambayo hutimiza kwa{' '}
              <ExternalLink href="/images/docs/Criterios_de_selecci%C3%B3n_de_colaboradores_y_contrapartes-Maisha_Roots.pdf">
                njia za uteuzi kwa ushirikiano wetu
              </ExternalLink>
              .
            </>
          )}
        </Paragraph>
        <Paragraph>
          {lang === 'ES' && (
            <>
              Hemos colaborado con empresas como Gajo, una marca de ropa ética
              con un gran sentido de la responsabilidad social. Mantenemos
              también una colaboración sólida con Proyecto Amanecer, una ONG que
              colabora en el desarrollo de proyectos de cooperación al
              desarrollo. De manera puntual, también han colaborado con nosotros
              dos compañías teatrales (La Locandiera Teatro y Katharsis Teatro),
              la Diputación de Deportes de Palencia, la Asociación Mbuyu y la
              Exposición de Arte 50x50x50.
            </>
          )}
          {lang === 'EN' && (
            <>
              We have collaborated with enterprises such as GAJO, an ethical
              trademark of clothes with developed corporate social
              responsibility. We also keep a solid partnership with Proyecto
              Amanecer, a Spanish NGO which collaborate in the execution of
              development projects. Punctually, other organizations have
              collaborated in some of our actions, such as two theatre companies
              (La Locandiera Teatro y Katharsis Teatro), Palencia's Diputación
              de Deportes, Mbuyu Association and an Arts exhibition '50x50x50',
            </>
          )}
          {lang === 'SW' && (
            <>
              Tumeshirikiana na biashara kama GAJO, alama za biashara za jukumu
              la maendeleo ya kijamii. Pia tunaushirikiano na Proyecto Amanecer,
              Shirika lisilo la Kiserikali la Uhispania ambalo linashiriki
              katika utekelezaji wa miradi ya maendeleo. Kwa wakati, mashirika
              mengine yameshiriki katika baadhi ya vitendo vyetu, kama vile
              kampuni mbili za maonyesho (La Locandiera Teatro y Katharsis
              Teatro), Palencia's Diputacion de Deportes, Mbuyu Association and
              an Arts exhibition '50x50x50.
            </>
          )}
        </Paragraph>

        <Container styles={{ justifyContent: 'space-around' }} isFullWidth>
          <ColabLink
            src="/images/colab-logos/1.png"
            href="https://www.facebook.com/katharsismedicinaucm"
          />
          <ColabLink
            src="/images/colab-logos/2.png"
            href="https://colegioarcadia.com/"
          />
          <ColabLink
            src="/images/colab-logos/3.png"
            href="https://www.facebook.com/lalocandierateatro/"
          />
          <ColabLink
            src="/images/colab-logos/4.png"
            href="https://asociacionmbuyu.org/"
          />
          <ColabLink
            src="/images/colab-logos/5.png"
            href="https://www.urjc.es/"
          />
          <ColabLink
            src="/images/colab-logos/6.png"
            href="https://www.diputaciondepalencia.es/"
          />
          <ColabLink src="/images/colab-logos/7.png" href="#" />
          <ColabLink
            src="/images/colab-logos/8.png"
            href="https://www.nodo50.org/pamanecer/"
          />
          <ColabLink
            src="/images/colab-logos/9.png"
            href="https://www.uc3m.es/"
          />
          <ColabLink
            src="/images/colab-logos/10.png"
            href="https://www.instagram.com/thegajosociety/"
          />
        </Container>
      </SubSection>
    </Section>
  )
}

export default CollaborateSection
