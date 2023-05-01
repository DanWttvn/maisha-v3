import React, { FC, useContext } from 'react'
import Image from 'components/Image'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import Paragraph from 'components/Paragraph'
import Container from 'components/Container'
import LanguageContext from 'contexts/language'
import Section from 'components/Section'
import SubSection from 'components/SubSection'
import {
  StructureCard,
  GroupCard,
  GroupsBlock,
  CommissionIcon,
  StructureContainer,
  StructureParagraphContainer,
  ParagraphJustified,
  Text,
} from './styles'
import { SectionProps } from 'models'

const HowWorkSection: FC<SectionProps> = () => {
  const { lang } = useContext(LanguageContext)

  const imgSrcs = {
    ES: './images/esquema-organizacion-ES.webp',
    EN: './images/esquema-organizacion-EN.webp',
    SW: './images/esquema-organizacion-EN.webp',
  }

  return (
    <Section id="how-work">
      <Title
        firstPart={
          (lang === 'ES' && 'CÓMO') ||
          (lang === 'EN' && 'HOW') ||
          (lang === 'SW' && 'JINSI TUNAVYO') ||
          ''
        }
        secondPart={
          (lang === 'ES' && 'TRABAJAMOS') ||
          (lang === 'EN' && 'WE WORK') ||
          (lang === 'SW' && 'FANYA KAZI') ||
          ''
        }
        isSmall
      />
      <SubSection id="structure">
        <StructureContainer isFullWidth>
          <StructureParagraphContainer>
            <Paragraph>
              {lang === 'ES' &&
                'Nuestra estructura está basada, en su gran mayoría, en personal voluntario, sobre todo en el caso de España, donde la totalidad del equipo está formada por personal voluntario. No obstante, contamos con un equipo directivo fuerte, estable y comprometido que, en parte, se dedica a la cooperación y al desarrollo de manera profesional. En el caso de Tanzania, el personal es asalariado.'}
              {lang === 'EN' &&
                "Our current structure is mainly based on volunteers, especially in the case of Spain, where, apart from our Projects' Technician, all the team is composed of volunteers. In the case of Tanzania, the team is composed of workers."}
              {lang === 'SW' &&
                'Muundo wetu wa sasa ni kujitolea, haswa katika nchi ya Uhispania, ambapo mbali na Miradi yetu Ufundi, timu yetu inaundwa na wahisani. Kwa upande wa Tanzania, timu inaudwa na wafanyakazi.'}
            </Paragraph>
            <Paragraph styles={{ marginBottom: 0 }}>
              {lang === 'ES' && (
                <>
                  Creemos que, en nuestra organización,{' '}
                  <strong>todas las voces cuentan</strong> y deben ser
                  escuchadas. En las acciones de cooperación al desarrollo,
                  actuamos como dos contrapartes paralelas con dos órganos de
                  gobierno y dos asambleas generales. Además, contamos con
                  varios grupos de trabajo que van variando en función de las
                  necesidades del momento. En las acciones de Educación para el
                  Desarrollo y la ciudadanía global llevadas a cabo en España,
                  trabajamos de forma independiente, mientras que la entidad
                  tanzana también desarrolla acciones de sensibilización
                  autónomas.
                </>
              )}
              {lang === 'EN' && (
                <>
                  We believe that, within our organization,{' '}
                  <strong>all voices must be heard.</strong> Since we are two
                  parallel counterparts, we have two governing organs and two
                  general assemblies. Furthermore, in the Spanish team (where we
                  have all volunteers), we count with various working groups
                  which vary according to the needs of the current moment.
                </>
              )}
              {lang === 'SW' && (
                <>
                  Tunaamini kwamba, ndani ya shirika letu,{' '}
                  <strong>sauti zote lazima zisikilizwe</strong>. Kwa kuwa sisi
                  ni wawili tunaofanana, tunavyo vyombo viwili vya kutawala na
                  mkusanyiko mmoja wa jumla. Kwa kuongezea, kwenye timu ya
                  Uhispania (ambapo tunao watu wote wanaojitolea), tunahesabu na
                  vikundi mbali mbali vya kufanya kazi ambazo hutofautiana
                  kulingana na mahitaji ya wakati huo.
                </>
              )}
            </Paragraph>
          </StructureParagraphContainer>
          <Image
            src={imgSrcs[lang]}
            styles={{ paddingTop: 20, width: 430, maxWidth: '100%' }}
          />
        </StructureContainer>

        <Container styles={{ justifyContent: 'center' }}>
          <StructureCard>
            <Subtitle isSmall>
              {lang === 'ES' && 'Asamblea General'}
              {lang === 'EN' && 'General Assembly'}
              {lang === 'SW' && 'Mkutano Mkuu'}
            </Subtitle>
            <ParagraphJustified>
              {lang === 'ES' &&
                'Es el grupo de trabajo y de toma de decisiones principal. Está formado por personal voluntario que se ha comprometido con la organización a largo plazo. Se reúne, aproximadamente, una vez cada mes para debatir y tomar decisiones importantes.'}
              {lang === 'EN' &&
                'It is the main working and decision-making group. It is formed by volunteers who have compromised in the long term with the organization. It meets once a month (approximately) in order to debate and make important decisions.'}
              {lang === 'SW' &&
                'Ni kundi kuu la kufanya kazi na la kufanya maamuzi. Limeundwa na wafanyakazi wa kujitolea ambao wamejitolea kwa mda mrefu kwenye shirika. Hukutana mara moja kwa mwezi (takribani) ili kujadili na kufanya maamuzi muhimu.'}
            </ParagraphJustified>
          </StructureCard>
          <StructureCard>
            <Subtitle isSmall>
              {lang === 'ES' && 'Junta directiva'}
              {lang === 'EN' && 'Management Team'}
              {lang === 'SW' && 'Timu ya Usimamizi'}
            </Subtitle>
            <ParagraphJustified>
              {lang === 'ES' &&
                'Está formada por cuatro miembros elegidos cada año por la Asamblea. Se encarga de dirigir las actividades de la organización, así como de gestionar el voluntariado y los proyectos. Son la representación legal de la organización y tienen cargos no remunerados, voluntarios.'}
              {lang === 'EN' &&
                "It is composed of four members chosen every year by the Assembly. It oversees the organization's activities as well as managing the volunteers and the projects. It represents the organization legally and its members do not receive any salary for their work, they do it voluntarily."}
              {lang === 'SW' &&
                'Inaundwa na wanachama wanne waliochaguliwa na mkutano kila mwaka. Inasimamia shughuli za shirika na vile vile kusimamia watu wa kujitolea na mradi. Inawakilisha shirika kihalali na wanachama wake wake hawapati mshahara wowote kwa kazi yao, wanafanya kwa hiari.'}
            </ParagraphJustified>
          </StructureCard>
          <StructureCard>
            <Subtitle isSmall>
              {lang === 'ES' && 'Grupos de trabajo'}
              {lang === 'EN' && 'Working groups'}
              {lang === 'SW' && 'Makundi ya kufanya kazi'}
            </Subtitle>
            <ParagraphJustified>
              {lang === 'ES' &&
                'Están formados por voluntariado español que trabaja en colaboración con el personal tanzano. Fueron creados para coordinar las diferentes actividades de la organización de una forma más dinámica y eficiente.'}
              {lang === 'EN' &&
                "They are formed by Spanish volunteers working in collaboration with Tanzanian workers. These groups were created in order to coordinate the different organization's activities more dynamically and efficiently."}
              {lang === 'SW' &&
                'Huundwa na wajitoleaji wa Uhispania wanaofanya kazi kwa kushirikiana na wafanyakazi wa kitanzania. Vikundi hivi viliundwa ili kuratibu shughuli tofauti za shirika kwa nguvu na ufanisi zaidi.'}
            </ParagraphJustified>
          </StructureCard>
        </Container>

        <GroupsBlock>
          <GroupCard>
            <CommissionIcon src="./images/icons/mkt-orange.svg" />
            <Text>
              {lang === 'ES' && 'Grupo de comunicación, marketing'}
              {lang === 'EN' && 'Marketing and communication group'}
              {lang === 'SW' && 'Kikundi cha masoko na Mawasiliano'}
            </Text>
            <ParagraphJustified>
              {lang === 'ES' &&
                'Crea el contenido audiovisual de Maisha Roots. Coordina las actividades informativas y difunde este trabajo en las diferentes redes, la página web, las campañas de comunicación, etc.'}
              {lang === 'EN' &&
                "It creates Maisha Roots ' audio-visual content. It coordinates the informative activities and spreads this work in social networks, the webpage, the communication campaigns, etc."}
              {lang === 'SW' &&
                'Kinaunda maudhui yamaandishi na sauti za Maisha Roots. Inaratibu shughuli za kuelimisha na kueneza kazi hizi katika mitandao ya kijamii, kurasa za tovuti, kampeni za mawasiliano n.k.'}
            </ParagraphJustified>
          </GroupCard>
          <GroupCard>
            <CommissionIcon src="./images/icons/education-orange.svg" />
            <Text>
              {lang === 'ES' && 'Grupo de Educación para el Desarrollo'}
              {lang === 'EN' && 'Education for Development Group'}
              {lang === 'SW' && 'Kikundi cha Elimu kwa Maendeleo'}
            </Text>
            <ParagraphJustified>
              {lang === 'ES' &&
                'Coordina la relación con los distintos centros educativos con los que colaboramos. Transmite a colegios, universidades y otros centros educativos la realidad que se vive en Tanzania y las actividades de la organización, y promueve una ciudadanía global, crítica, responsable y comprometida con la lucha contra la pobreza y la exclusión.'}
              {lang === 'EN' &&
                "It coordinates the relationship with educational centers. It transmits among schools, universities, student residencies, and other educational centers (through different sensitization activities such as talks, workshops, or games) the reality lived in Tanzania as well as the organization's activities."}
              {lang === 'SW' &&
                'Kinaratibu uhusiano na vituo vya kielimu. kinazifikia shule, vyuo vikuu, makazi ya wanafunzi, na vituo vingine vya kielimu (kupitia shughuli tofauti za uhamasishaji kama mazungumzo, semina, au michezo) uhalisia uliopo Tanzania na pia shughuli za shirika.'}
            </ParagraphJustified>
          </GroupCard>

          <GroupCard>
            <CommissionIcon src="./images/icons/fundraising-orange.svg" />
            <Text>
              {lang === 'ES' && 'Eventos y recaudación de fondos'}
              {lang === 'EN' && 'Fundraising and events'}
              {lang === 'SW' && 'Harambee na hafla'}
            </Text>
            <ParagraphJustified>
              {lang === 'ES' &&
                'Promueve eventos, iniciativas solidarias y colaboraciones con otras entidades, con el fin de conseguir fuentes de financiación para nuestros proyectos.'}
              {lang === 'EN' &&
                'It promotes events, charitable initiatives, and collaborations with other entities, with the aim of raising funds for our projects.'}
              {lang === 'SW' &&
                'Inahamasisha hafla, mipango ya hisani, na ushirikiano na taasisi zingine, kwa lengo la kukusanya fedha kwaajili ya miradi yetu.'}
            </ParagraphJustified>
          </GroupCard>
          <GroupCard>
            <CommissionIcon src="./images/icons/global-orange.svg" />
            <Text>
              {lang === 'ES' && 'Estrategia Global'}
              {lang === 'EN' && 'Global Strategy'}
              {lang === 'SW' && 'Mkakati wa Ulimwenguni'}
            </Text>
            <ParagraphJustified>
              {lang === 'ES' &&
                'Coordina las acciones de los distintos grupos de trabajo, con el fin de proporcionar una visión global de las actividades llevadas a cabo en el seno de la organización. Se encarga de la recopilación de información y de la puesta en común de la misma.'}
              {lang === 'EN' &&
                "It coordinates the actions of the different working groups, with the aim of providing a global view of the organization's activities. It is in charge of compiling information."}
              {lang === 'SW' &&
                'Inaratibu vitendo vya vikundi anuwai vya utendaji kazi, kwa lengo la kutoa mtazamo wa ulimwengu kwa shughuli za shirika. Inasimamia ukusanyaji taarifa.'}
            </ParagraphJustified>
          </GroupCard>
          <GroupCard>
            <CommissionIcon src="./images/icons/agriculture-orange.svg" />
            <Text>
              {lang === 'ES' && 'Grupo de cuestiones agrícolas'}
              {lang === 'EN' && 'Agricultural Group'}
              {lang === 'SW' && 'Kikundi cha Kilimo'}
            </Text>
            <ParagraphJustified>
              {lang === 'ES' &&
                'Da apoyo al proyecto de empoderamiento agrícola, a través del estudio de nuevas técnicas y el fomento de prácticas sostenibles y ecológicas.'}
              {lang === 'EN' &&
                'It supports the agricultural empowerment project, through the study of new techniques and the promotion of sustainable and ecological practices.'}
              {lang === 'SW' &&
                'Inasaidia mradi wa uwezeshaji wa kilimo, kupitia utafiti wa mbinu mpya za kukuza kipato na kutunza mazingira.'}
            </ParagraphJustified>
          </GroupCard>
          <GroupCard>
            <CommissionIcon src="./images/icons/gender-orange.svg" />
            <Text>
              {lang === 'ES' && 'Grupo por la Equidad de género'}
              {lang === 'EN' && 'Group for Gender Equality'}
              {lang === 'SW' && 'Kikundi cha Usawa wa Kijinsia'}
            </Text>
            <ParagraphJustified>
              {lang === 'ES' &&
                'Garantiza el enfoque de género en todas las acciones de la asociación y trabaja por la equidad entre mujeres y hombres, internamente y en los diferentes proyectos que llevamos a cabo.'}
              {lang === 'EN' &&
                'It guarantees the gender approach in all the actions of the association and works for equality between women and men, internally and in the different projects we carry out.'}
              {lang === 'SW' &&
                'Inabeba dhamana ya mtazamo wa kijinsia katika shughuli zote za shirika na inafanya kazi kwaajili ya usawa kati ya wanawake na wanaume, ndani na katika miradi tofauti tunayofanya.'}
            </ParagraphJustified>
          </GroupCard>
        </GroupsBlock>
      </SubSection>

      <SubSection id="collaborators">
        <Subtitle>
          {lang === 'ES' && 'Colaboradores/as'}
          {lang === 'EN' && 'Collaborators'}
          {lang === 'SW' && 'Washirika'}
        </Subtitle>
        <Paragraph>
          {lang === 'ES' && (
            <>
              Colaborar con nosotros es muy fácil. Se puede hacer de distintas
              formas, como, por ejemplo, a través de donaciones puntuales, con
              la cesión de un local, mediante los voluntariados ocasionales,
              etc. Además, en Maisha Roots creemos que el{' '}
              <strong>tejido social</strong> es la base para el crecimiento, por
              lo que también buscamos{' '}
              <strong>establecer lazos y alianzas</strong> con empresas,
              entidades y otras ONGs. Tratamos de que estas colaboraciones sean
              más que un apoyo económico y buscamos establecer relaciones de
              colaboración que promuevan el crecimiento en Tanzania.
            </>
          )}
          {lang === 'EN' && (
            <>
              Collaborating with us is really simple. You can do it in different
              ways, such as, contributing with a punctual donation, granting us
              a space, volunteering with us, etc. Moreover, Maisha Roots
              believes that the <strong>social fabric</strong> of a community is
              the key to growth and, therefore, we also look for{' '}
              <strong>links and alliances</strong> with enterprises, entities,
              and other NGOs. We expect these collaborations to be more than
              economic support and we try to establish collaborations that
              promote the development in Tanzania.
            </>
          )}
          {lang === 'SW' && (
            <>
              Kuungana na sisi ni rahisi sana. Unaeza kufanya kwa njia tofauti,
              kama, kuchangia michango kwa wakati, kutupatia nafasi, kufanya
              shughuli za kujitolea na sisi, n.k. Zaidi ya hayo, Maisha Roots
              inaamini kuwa <strong>kitambaa cha kijamii</strong> ndio ufunguo
              wa kukua na, kwa hiyo, sisi pia tunatafuta mahusiano na
              ushirikiano na wafanya biashara, taasisi na mashirika mengine.
              Tunatarajia ushirikiano huu kuwa zaidi ya msaada wa kiuchumi na
              tunajaribu kuanzisha ushirikiano ambao unakuza maendeleo nchini
              Tanzania.
            </>
          )}
        </Paragraph>
      </SubSection>
    </Section>
  )
}

export default HowWorkSection
