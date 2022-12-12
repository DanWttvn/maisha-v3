import { FC, useContext } from 'react'
import Title from 'components/Title'
import Subtitle from 'components/Subtitle'
import Paragraph from 'components/Paragraph'
import Text from 'components/Text'
import Container from 'components/Container'
import SkipWrap from 'components/SkipWrap'
import LanguageContext from 'contexts/language'
import Map from './Map'
import Section from 'components/Section'
import SubSection from 'components/SubSection'
import DataText from 'components/DataText'
import { SectionProps } from 'models'
import { BorderedBox, DataContainer, DataParagraph, InnerContainer, Image } from './styles'
import light from 'styles/themes/light'

export const WhoSection: FC<SectionProps> = () => {
  const { lang } = useContext(LanguageContext)

  return (
    <Section id="about">
      <Title
        firstPart={(lang === 'ES' && 'QUIÉNES') || (lang === 'EN' && 'WHO') || (lang === 'SW' && 'SISI') || ''}
        secondPart={(lang === 'ES' && 'SOMOS') || (lang === 'EN' && 'ARE WE') || (lang === 'SW' && 'NI NANI') || ''}
      />

      <SubSection id="know-us" styles={{ maxHeight: 600 }} isFullWidth>
        <InnerContainer>
          <Subtitle color="white">
            {lang === 'ES' && 'Conócenos'}
            {lang === 'EN' && 'Get to know us'}
            {lang === 'SW' && 'Pata kutufahamu'}
          </Subtitle>
          <Paragraph color="white" weight="bold" size="inherit">
            {lang === 'ES' &&
              'Maisha Roots es una ONG que aúna los esfuerzos de dos entidades, una española (Maisha Roots Spain) y otra tanzana (FYWCO, Focus for Youth, Woman and Children Organization), con el fin de fomentar el desarrollo en Tanzania.'}
            {lang === 'EN' &&
              'Maisha Roots is an NGO that combines the efforts of two entities, a Spanish one (Maisha Roots Spain) and a Tanzanian one (FYWCO, Focus for Youth, Woman and Children Organization), with the common goal of fostering development in Tanzania.'}
            {lang === 'SW' &&
              'Maisha Roots ni Shirika Lisilo La Kiserikali ambalo linalounganisha nguvu za taasisi mbili Moja ya Uhispania (Maisha Roots Spain) na nyingine ya Tanzania (Focus for youth, women and children organisation kwa lengo la Pamoja la kuchochea maendeleo Tanzania.'}
          </Paragraph>
          <Paragraph color="white" weight="bold" size="inherit">
            {lang === 'ES' &&
              'Nace de la decisión local de establecer un tejido comunitario fértil a través del cual lograr el desarrollo de la comunidad en la que trabajamos.'}
            {lang === 'EN' &&
              'Its origins are found in the local decision of establishing a prosperous community to achieve the development of the community where we work.'}
            {lang === 'SW' &&
              'Imezaliwa kutokana na maamuzi ya wenyeji kwa lengo la kuiboresha jamii tunayoifanyia kazi kimaendeleo.'}
          </Paragraph>
        </InnerContainer>
      </SubSection>

      <SubSection>
        <Subtitle>
          {lang === 'ES' && 'Misión, Visión y Áreas de actuación'}
          {lang === 'EN' && 'Mission, Vision and Action areas'}
          {lang === 'SW' && 'Malengo, Matarajio na Maeneo ya kimkakati'}
        </Subtitle>
        <Paragraph>
          <Image src="/images/photo8.jpg" />
          {lang === 'ES' &&
            'Maisha Roots cree en la cooperación al desarrollo como forma de acompañamiento y empoderamiento local, siempre a través de un enfoque participativo. Por ello, nuestra misión se centra en la mejora de la calidad de vida de sus beneficiarios en las áreas de medios de vida y educación, teniendo en cuenta que para ello es necesario promover también otras áreas.'}
          {lang === 'EN' &&
            'Maisha roots believes in development cooperation as a tool of accompaniment and local empowerment, always through a participative approach. Thus, our mission focuses on the improvement of the life quality of its beneficiaries in the areas of livelihood and education. We also consider that, in order to achieve it, it is also necessary to promote other areas.'}
          {lang === 'SW' &&
            'Maisha Roots inaamini katika ushirikiano katika maendeleo na uwezeshwaji wa jamii, daima kupitia njia shirikishi. Kwa hivyo, malengo yetu yanazingatia uboreshaji wa hali ya maisha ya wanufaika katika nyanja za kijamii na elimu. Tunazingatia pia kuwa, ili kufanikisha, ni muhimu kukuza nyanja zingine pia.'}
          <br />
          <br />
          {lang === 'ES' && (
            <>
              El nombre Maisha Roots procede de la palabra swahili<strong> ‘maisha '</strong>, que significa vida, y de
              la palabra inglesa<strong> ‘roots ',</strong> que significa raíces formando la expresión ‘raíces de vida '.
              Y representa los dos pilares de actuación de la organización: la educación y los medios de vida.
            </>
          )}
          {lang === 'EN' && (
            <>
              The name Maisha Roots comes from the Swahili word<strong> ‘maisha '</strong>, which means life, and the
              English word<strong> ‘roots '</strong>, forming the expression ‘life roots '. It represents the two main
              action pillars of the organization: education and livelihood.
            </>
          )}
          {lang === 'SW' && (
            <>
              Jina Maisha Roots linatokana na neno la Kiswahili ‘<strong> ‘maisha '</strong>, na neno la Kingereza
              <strong> ‘roots ' </strong>(mzizi), huunda usemi ‘Maisha Roots '. Inawakilisha nguzo kuu mbili za shirika:
              elimu na uinuaji wa maisha.
            </>
          )}
          <br />
          <br />
          {lang === 'ES' &&
            'Creemos que el desarrollo de las personas y de las comunidades está estrechamente ligado con los medios de vida y la educación, por lo que ambas áreas constituyen los pilares de actuación de la organización.'}
          {lang === 'EN' &&
            'We have chosen livelihood and education to be our core action areas because we believe the development of people and communities is closely linked to both of them.'}
          {lang === 'SW' &&
            'Tumechagua uinuaji wa maisha na elimu kuwa maeneo yetu ya hatua za msingi kwasababu tunaamini maendeleo ya watu na jamii yote kwa pamoja yanauhusiano wa karibu.'}
          <br />
          <br />
          {lang === 'ES' && (
            <>
              Entendemos<strong> ‘medios de vida ' </strong>como toda aquella actividad que desarrolla el aspecto
              productivo de una persona, a través de la cual obtiene experiencia y remuneración. Y entendemos la
              <strong> ‘educación ' </strong>como toda formación destinada a desarrollar la capacidad intelectual, moral
              y afectiva de una persona y como el derecho de toda la ciudadanía a una enseñanza básica gratuita.
            </>
          )}
          {lang === 'EN' && (
            <>
              We understand<strong> ‘livelihood ' </strong>as every activity developing the productive aspect of a
              person, through which the person obtains experience and remuneration. We understand{' '}
              <strong> ‘education ' </strong>as every training or formation dedicated to developing the intellectual,
              moral, and affective capacity of a person as well as the civil right to receive basic and free education.
            </>
          )}
          {lang === 'SW' && (
            <>
              Tunaelewa<strong> ‘uinuaji wa maisha ' </strong>kama kila shughuli inayokuza hali ya uchumi wa mtu, ambayo
              kupitia yeye mtu hupata uzoefu na ujira. Tunaelewa<strong> ‘elimu ' </strong>kama mafunzo yote yanayolenga
              kumletea maendeleo mtu kifikra, kimaadili na uwezo wa kihisia kama haki ya kila raia kupata elimu ya
              msingi na ya bure.
            </>
          )}
        </Paragraph>
        <Paragraph styles={{ borderLeft: `10px solid ${light.colors.offRed}`, paddingLeft: 40 }}>
          {lang === 'ES' && (
            <>
              Los medios de vida y la educación son herramientas que contribuyen a la{' '}
              <strong> autonomía, independencia y empoderamiento </strong>de las personas. Además, a través de los
              medios de vida y de la educación se consolidan valores, dinámicas e iniciativas que responden a las
              demandas y deseos de la población. Por ello, Maisha Roots se centra en fomentar la capacidad y los
              recursos pertinentes para la
              <strong> construcción del bienestar común, la evolución y el desarrollo.</strong>
            </>
          )}
          {lang === 'EN' && (
            <>
              Livelihood and education are two tools that contribute to the
              <strong> autonomy, independence, and empowerment </strong>of people. Moreover, education and livelihood
              strengthen values, dynamics, and initiatives that answers other population demands and wishes. Therefore,
              Maisha Roots focuses on fostering the capacity and resources for the
              <strong> construction of common well-being, evolution, and development.</strong>
            </>
          )}
          {lang === 'SW' && (
            <>
              Uinuaji wa maisha na elimu ni zana mbili ambazo zinachangia
              <strong> uhuru, kujitegemea na uwezeshaji </strong>wa watu. Kwa kuongezea, elimu na uinuaji wa maisha
              huimarisha maadili na mipango ambayo inajibu mahitaji na matakwa ya watu wengine. Kwa hivyo, Maisha Roots
              inalenga katika kukuza uwezo na rasilimali kwaajili ya
              <strong> ujenzi wa ustawi wa kawaida, uvumbuzi na maendeleo.</strong>
            </>
          )}
        </Paragraph>
      </SubSection>

      <SubSection id="where" isFullWidth>
        <Map />
      </SubSection>

      <SubSection id="context" isNarrow>
        <Subtitle>
          {lang === 'ES' && 'Nuestro contexto'}
          {lang === 'EN' && 'Our context'}
          {lang === 'SW' && 'Muktadha wetu'}
        </Subtitle>
        <DataParagraph>
          {lang === 'ES' && (
            <>
              Desde 2016, Maisha Roots desarrolla y colabora con proyectos de raíces locales en
              <Text isHighlighted> Tanzania</Text>, y más concretamente, en la ciudad de
              <Text isHighlighted> Arusha</Text>.
            </>
          )}
          {lang === 'EN' && (
            <>
              From 2016, Maisha Roots is developing and collaborating with projects with
              <Text isHighlighted> Tanzanian Roots</Text>, specifically, in the city of
              <Text isHighlighted> Arusha</Text>.
            </>
          )}
          {lang === 'SW' && (
            <>
              {' '}
              Kutokea 2016, Maisha Roots imekuwa na kushirikiana na miradi ya mizizi ya{' '}
              <Text isHighlighted> Tanzania</Text>haswa katika mji wa<Text isHighlighted> Arusha</Text>.
            </>
          )}
        </DataParagraph>
        <DataParagraph>
          {lang === 'ES' && (
            <>
              A pesar de que, desde su independencia, Tanzania ha disfrutado de
              <Text isHighlighted> estabilidad política y paz, </Text>esto no se ha traducido en un mejor nivel de vida
              para la mayoría de la población.
            </>
          )}
          {lang === 'EN' && (
            <>
              Although, since its independence, Tanzania has enjoyed
              <Text isHighlighted> political stability and peace, </Text> this has not meant a better level of life for
              most of its population.
            </>
          )}
          {lang === 'SW' && (
            <>
              Ijapokuwa, tangu uhuru wa Tanzania imefurahia kwa kuwa na{' '}
              <Text isHighlighted> utulivu wa kisiasa na amani, </Text> hii haimanishi kiwango bora cha maisha kwa
              wakazi wake wengi.
            </>
          )}
        </DataParagraph>

        <DataContainer isFullWidth>
          <Container direction="vertical" styles={{ margin: '30px 0' }}>
            <DataText>194º</DataText>
            <Text>
              {lang === 'ES' && 'Ránking Índice de'}
              {lang === 'EN' && 'Human Development'}
              {lang === 'SW' && 'Katika orodha ya'}
            </Text>
            <Text>
              {lang === 'ES' && 'Desarrollo Humano'}
              {lang === 'EN' && 'Index ranking'}
              {lang === 'SW' && 'Maendeleo ya Binadamu'}
            </Text>
          </Container>
          <Container direction="vertical" styles={{ margin: '30px 0' }}>
            <DataText>64</DataText>
            <DataText styles={{ fontSize: '5rem', lineHeight: '5rem', marginTop: '-12px' }}>
              {lang === 'ES' && 'años'}
              {lang === 'EN' && 'years'}
              {lang === 'SW' && 'miaka'}
            </DataText>
            <Text>
              {lang === 'ES' && 'Esperanza de vida'}
              {lang === 'EN' && 'Life expectancy'}
              {lang === 'SW' && 'ya maisha'}
            </Text>
          </Container>
          <Container direction="vertical" styles={{ margin: '30px 0' }}>
            <DataText>
              {lang === 'ES' && (
                <>
                  862<span style={{ fontSize: '5rem' }}>€</span>
                </>
              )}
              {lang === 'EN' && (
                <>
                  862<span style={{ fontSize: '5rem' }}>€</span>
                </>
              )}
              {lang === 'SW' && (
                <>
                  <span style={{ fontSize: '4rem' }}>2,284,300</span>
                </>
              )}
            </DataText>

            <Text>
              {lang === 'ES' && 'Renta per cápita'}
              {lang === 'EN' && 'Rent per capita'}
              {lang === 'SW' && 'tzs ya kodi ya kila mtu'}
            </Text>
          </Container>
        </DataContainer>

        <DataParagraph styles={{ width: '65%', marginBottom: 30, marginRight: 'auto' }}>
          {lang === 'ES' && (
            <>
              Arusha es una gran ciudad y un importante centro diplomático internacional. Es una ciudad caracterizada
              por su <Text isHighlighted> multiculturalidad</Text>, poblada por tanzanos de distintos orígenes, bantús,
              árabes e indios, aunque también hay minorías europeas y americanas.
            </>
          )}
          {lang === 'EN' && (
            <>
              Arusha is a big city and an important international diplomatic center. It is a city characterized by its
              <Text isHighlighted> multiculturalism</Text>, populated by Tanzanian from different origins, Bantus,
              Arabs, and Indians, though also by Caucasic minorities from Europe and North America.
            </>
          )}
          {lang === 'SW' && (
            <>
              Arusha ni jiji kubwa na kituo muhimu cha kidiplomasia. Ni mji unaoonyeshwa na
              <Text isHighlighted> tamaduni zake nyingi</Text>, zilizokusanywa na Watanzania kutoka asili tofauti, za
              kibantu, kiarabu na kihindi, ingawa pia na wachache kidogo wa Caucasic kutoka Ulaya na Amerika ya
              Kaskazini.
            </>
          )}
        </DataParagraph>

        <DataParagraph styles={{ width: '65%', marginLeft: 'auto', textAlign: 'end', marginBottom: 30 }}>
          {lang === 'ES' && (
            <>
              Arusha es una ciudad <Text isHighlighted>en expansión</Text>, por lo que cuenta con muchos barrios que
              están en continuo y rápido crecimiento y, por tanto, carecen de recursos básicos. Es aquí donde
              intentaremos centrar <Text isHighlighted>nuestra acción</Text>.
            </>
          )}
          {lang === 'EN' && (
            <>
              Arusha is a <Text isHighlighted>sprawling city</Text>, this is why many of its neighborhoods are in
              continuous and fast growth, therefore they lack minimum services. Here is where we try to focus on{' '}
              <Text isHighlighted>our actions</Text>.
            </>
          )}
          {lang === 'SW' && (
            <>
              Arusha ni <Text isHighlighted>mji unaofurika</Text>, ndio maana vitongoji vyake vingi vinaendelea
              kuongezeka watu kwa kasi, hivyo basi wanakosa huduma za msingi. Hapa ndipo tunapotilia mkazo{' '}
              <Text isHighlighted>utendaji wetu</Text>.
            </>
          )}
        </DataParagraph>

        <SkipWrap />

        <Container direction="vertical">
          <DataText type="text">
            {lang === 'ES' && 'swahili'}
            {lang === 'EN' && 'swahili'}
            {lang === 'SW' && 'kiswahili'}
          </DataText>
          <DataText type="text">
            {lang === 'ES' && 'inglés'}
            {lang === 'EN' && 'english'}
            {lang === 'SW' && 'kingereza'}
          </DataText>
        </Container>

        <DataParagraph styles={{ flex: 1, minWidth: 200, margin: '0 30px', marginBottom: 30 }}>
          {lang === 'ES' &&
            'Son los idiomas oficiales, aunque sólo las personas que han recibido educación hablan este último. La educación primaria se ofrece en swahili, y la secundaria en inglés, uno de los motivos por los cuales muchos estudiantes dejan la escuela en los niveles de secundaria.'}
          {lang === 'EN' &&
            'They are the official languages, although only educated people speak the latter. Primary education is offered in Swahili, and secondary education in English, one of the reasons why many students leave school at the secondary levels.'}
          {lang === 'SW' &&
            'Ndio lugha rasmi, ingawa ni watu wenye elimu tu ndio huzungumza lugha ya mwisho. Elimu ya msingi hutolewa kwa Kiswahili, na sekondari kwa Kiingereza, moja ya sababu kwa nini wanafunzi wengi huacha shule katika ngazi za sekondari.'}
        </DataParagraph>

        <Container direction="vertical" styles={{ marginBottom: 30 }}>
          <DataText>
            77,9
            <span style={{ fontSize: '5rem' }}>%</span>
          </DataText>
          <Text>
            {lang === 'ES' && 'Tasa de alfabetización'}
            {lang === 'EN' && 'Literacy rate'}
            {lang === 'SW' && 'ni kiwango cha waliosoma'}
          </Text>
        </Container>

        <DataParagraph styles={{ width: '65%', marginLeft: 'auto', textAlign: 'end', marginBottom: 30 }}>
          {lang === 'ES' && (
            <>
              Por otro lado, las tasas de desempleo en medios oficiales no registran números muy elevados, pero la
              realidad, en especial en las grandes ciudades como Arusha, es que las y los jóvenes que abandonan sus
              estudios, especialmente durante o al finalizar la secundaria, se encuentran en situación de{' '}
              <Text isHighlighted>desempleo</Text> y <Text isHighlighted>sin tecnificaciones necesarias</Text> para
              encontrar un buen empleo o empezar un negocio.
            </>
          )}
          {lang === 'EN' && (
            <>
              Kwa upande mwingine, kiwango cha ukosefu wa ajira katika vyombo vya habari rasmi na taasisi za umma sio za
              idadi kubwa, lakini kwa hali halisi, hasa katika miji mikubwa kama Arusha, vijana ambao wameacha shule,
              haswa katika elimu ya sekondari au waliomaliza kwa wakati, <Text isHighlighted>unemployed </Text>and{' '}
              <Text isHighlighted>without the necessary qualifications</Text> to find a proper job or start a business.{' '}
            </>
          )}
          {lang === 'SW' && (
            <>
              Kwa upande mwingine, kiwango cha ukosefu wa ajira katika vyombo vya habari rasmi na taasisi za umma sio za
              idadi kubwa, lakini kwa hali halisi, hasa katika miji mikubwa kama Arusha, vijana ambao wameacha shule,
              haswa katika elimu ya sekondari au waliomaliza kwa wakati, <Text isHighlighted>hawana kazi</Text> na{' '}
              <Text isHighlighted>bila sifa zinazostahiki</Text> kupata kazi sahihi au kuanza biashara.
            </>
          )}
        </DataParagraph>

        <BorderedBox>
          <Text>
            {lang === 'ES' && (
              <>
                Es en estos ámbitos en los que Maisha Roots pretende incidir y transformar esta realidad, situando a las{' '}
                <strong>personas beneficiarias en el centro</strong> de cada intervención, empleando un{' '}
                <strong>enfoque participativo</strong> en todas sus acciones, y haciendo <strong>protagonistas</strong>{' '}
                de cambio y <strong>evolución</strong> a las personas.
              </>
            )}
            {lang === 'EN' && (
              <>
                These are the main areas where Maisha Roots aims to influence and change this reality, putting its{' '}
                <strong>beneficiaries in the center</strong> of each intervention, using a{' '}
                <strong>participatory approach</strong> in all its actions, and making people become their own main{' '}
                <strong>protagonist</strong> of change and <strong>life promotion</strong>.
              </>
            )}
            {lang === 'SW' && (
              <>
                Haya ndo maeneo makubwa ambayo Maisha Roots inasaidia kushawishi na kubadili uhalisia huu, kuweka
                walengwa wake katikati kwa kila upande, kwa kutumia <strong>njia shirikishi</strong> katika shughuli
                zake zote, na kuwafanya watu kuwa <strong>wahusika wakuu</strong> wa mabadiliko na{' '}
                <strong>kukuza maisha</strong>.
              </>
            )}
          </Text>
        </BorderedBox>
      </SubSection>
    </Section>
  )
}

export default WhoSection
