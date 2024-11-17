import React, { FC, useContext } from 'react'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import Paragraph from 'components/Paragraph'
import LanguageContext from 'contexts/language'
import Section from 'components/Section'
import SubSection from 'components/SubSection'
import { SectionProps } from 'models'

const ProjectsSection: FC<SectionProps> = () => {
  const { lang } = useContext(LanguageContext)

  return (
    <Section id="projects">
      <Title
        firstPart={
          (lang === 'ES' && 'QUÉ') ||
          (lang === 'EN' && 'WHAT') ||
          (lang === 'SW' && 'TUNAFANYA') ||
          ''
        }
        secondPart={
          (lang === 'ES' && 'HACEMOS') ||
          (lang === 'EN' && 'WE DO') ||
          (lang === 'SW' && 'NINI') ||
          ''
        }
      />

      <SubSection>
        <Subtitle>
          {lang === 'ES' && 'Deporte y salud'}
          {lang === 'EN' && 'Sports and health'}
          {lang === 'SW' && 'Michezo na afya'}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' &&
            'Maisha Roots utiliza el deporte como herramienta de transformación social. Implementamos un programa de actividades deportivas semanales en dos centros educativos de primaria, beneficiando a más de 600 alumnos y alumnas. Nuestras actividades van más allá del deporte, se centran también en una mejora de la salud integral, fomentan la actividad física y la vida saludable, desarrollan habilidades socioemocionales, empoderan a las niñas y fortalecen a la comunidad aportándoles las herramientas necesarias para un futuro más saludable.'}
          {lang === 'EN' &&
            'Maisha Roots uses sports as a way of social transformation. We implemented a program of weekly sports activities in two primary schools, benefiting more than 600 students. We also focus on improving comprehensive health, promoting physical activity and healthy living, developing socio-emotional skills, empowering girls and strengthening the community by providing them with the necessary tools for a healthier future.'}
          {lang === 'SW' &&
            'Maisha Roots hutumia michezo kama chombo cha mabadiliko ya kijamii. Tunatekeleza mpango wa shughuli za michezo za kila wiki katika shule mbili za msingi, na kunufaisha zaidi ya wanafunzi 600. Pia tunazingatia kuboresha afya kamili, kukuza shughuli za kimwili na maisha yenye afya, kukuza ujuzi wa kijamii na kihisia, kuwawezesha wasichana na kuimarisha jamii kwa kuwapa zana muhimu kwa maisha bora ya baadaye.'}
        </Paragraph>

        <Subtitle>
          {lang === 'ES' && 'Igualdad de género'}
          {lang === 'EN' && 'Gender equality'}
          {lang === 'SW' && 'Usawa wa kijinsia'}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' &&
            'En Maisha Roots, la igualdad de género es un pilar fundamental en nuestro trabajo. Implementamos dos estrategias clave para promover la igualdad: la primera es la incorporación de la perspectiva de género en todos los proyectos y la segunda es el fortalecimiento de los conocimientos y habilidades de las niñas y jóvenes de los centros educativos. Con la creación de clubes de debate para abordar temas como la desigualdad, la violencia de género y realizando talleres sobre la salud sexual y reproductiva.'}
          {lang === 'EN' &&
            'At Maisha Roots, gender equality is a fundamental pillar of our work. We implement two key strategies to promote equality: the first is the incorporation of the gender perspective in all projects and the second is the strengthening of the knowledge and skills of girls and young people in educational centers. With the creation of debate clubs to address issues such as inequality, gender violence and holding workshops on sexual and reproductive health.'}
          {lang === 'SW' &&
            'Katika Maisha Roots, usawa wa kijinsia ni nguzo kuu ya kazi yetu. Tunatekeleza mikakati miwili muhimu ya kukuza usawa: Ya kwanza ni kuingizwa kwa mtazamo wa kijinsia katika miradi yote na Ya pili ni uimarishaji wa ujuzi na wa wasichana na vijana katika vituo vya elimu, Kwa kuundwa kwa vilabu vya mijadala ili kushughulikia masuala kama vile ukosefu wa usawa, unyanyasaji wa kijinsia na kufanya warsha kuhusu afya ya ngono na uzazi.'}
        </Paragraph>

        <Subtitle>
          {lang === 'ES' && 'Educación'}
          {lang === 'EN' && 'Education'}
          {lang === 'SW' && 'Elimu'}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' &&
            'En Maisha Roots creemos en la educación como herramienta de transformación social. Por ello, implementamos un programa de clases de refuerzo para alumnas y alumnos con el objetivo de contribuir a la reducción del fracaso escolar y mejorar las oportunidades educativas de la población. Asistimos dos veces por semana a mejorar el rendimiento académico del estudiantado y fortalecer las habilidades y conocimientos tanto en inglés como en otras materias.'}
          {lang === 'EN' &&
            'At Maisha Roots we believe in education as a tool for social transformation. Therefore, we implement a tutoring program for students with the aim of reducing school failure and improving educational opportunities for the community. We attend twice a week to improve the academic performance of the students and strengthen their skills and knowledge in both English, Mathematics and other subjects.'}
          {lang === 'SW' &&
            'Maisha Roots tunaamini katika elimu kama nyenzo ya mabadiliko ya kijamii. Kwa sababu hiyo, tunatekeleza programu ya masomo ya ziada kwa wanafunzi kwa lengo la kupunguza kufeli shuleni na kuboresha fursa za kielimu kwa jamii. Tunahudhuria mara mbili kwa wiki ili kusaidia kuboresha utendaji wa kitaaluma wa wanafunzi na kuimarisha ujuzi na maarifa yao katika Kiingereza na masomo mengine.'}
        </Paragraph>

        <Subtitle>
          {lang === 'ES' && 'Educación para el Desarrollo'}
          {lang === 'EN' && 'Education for Development'}
          {lang === 'SW' && 'Elimu kwa maendeleo'}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' &&
            'Uno de nuestros objetivos es promover la comprensión del mundo globalizado y la construcción de una ciudadanía crítica y comprometida. Para ello, desarrollamos varias actividades de sensibilización y educación para el desarrollo. Realizamos charlas en centros educativos de diferentes edades, organizamos exposiciones mostrando diferentes realidades, difundimos material informativo en redes sociales y nuestro blog y colaboramos con otras organizaciones para ampliar nuestro alcance y tener el impacto necesario para crear una sociedad más justa, solidaria y sostenible.'}
          {lang === 'EN' &&
            'One of our objectives is to promote understanding of the globalized world and the construction of a critical and committed citizenry. To achieve this, we develop several awareness-raising and development education activities. We hold talks in educational centres of different ages, we organize exhibitions showing different realities, we disseminate informative material on social networks and our blog and we collaborate with other organizations to expand our reach and have the necessary impact to create a more just, supportive and sustainable society.'}
          {lang === 'SW' &&
            'Mojawapo ya malengo yetu ni kukuza uelewa wa ulimwengu wa utandawazi na ujenzi wa raia makini na anayejitolea. Ili kufanikisha hili, tunaendeleza shughuli kadhaa za kukuza uelewa na maendeleo. Tunafanya mazungumzo katika vituo vya elimu vya rika tofauti, tunapanga maonyesho yanayoonyesha hali halisi tofauti, tunasambaza nyenzo za kuelimisha kwenye mitandao ya kijamii na blogi yetu na tunashirikiana na mashirika mengine kupanua ufikiaji wetu na kuwa na athari muhimu ili kuunda haki zaidi, kuunga mkono na jamii endelevu.'}
        </Paragraph>
      </SubSection>
    </Section>
  )
}

export default ProjectsSection
