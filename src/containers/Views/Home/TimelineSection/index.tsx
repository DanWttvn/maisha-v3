import React, { FC, useContext } from 'react'
import Title from 'components/Title'
import LanguageContext from 'contexts/language'
import Section from 'components/Section'
import SubSection from 'components/SubSection'
import Carousel from 'components/Carousel'
import { SectionProps } from 'models'
import { Year, Paragraph } from './styles'

export const TimelineSection: FC<SectionProps> = () => {
  const { lang } = useContext(LanguageContext)

  const titles = {
    ES: 'Nuestra Experiencia',
    EN: 'Get to know us',
    SW: 'Pat a kutufahamu'
  }

  return (
    <Section id="timeline">
      <Title
        firstPart={(lang === 'ES' && 'DE DÓNDE') || (lang === 'EN' && 'WHERE WE') || (lang === 'SW' && 'TUMETOKA') || ''}
        secondPart={(lang === 'ES' && 'VENIMOS') || (lang === 'EN' && 'COME FROM') || (lang === 'SW' && 'WAPI') || ''}
      />

      <SubSection isFullWidth>
        <Carousel.Container
          title={titles[lang]}
          sectionTitles={[ '2021', '2020', '2019', '2018', '2017', '2016', '2014/15' ]}
          styles={{ height: 690 }}
          isFullWidth
        >
          <Carousel.Item src="/images/photo10.webp" hasOverlay>
            <Year>2021</Year>
            <Paragraph>
              {lang === 'ES' && 'Tras el análisis de necesidades realizado en 2020, comenzamos un programa de desarrollo comunitario en Mkono, un barrio en expansión a las afueras de Arusha. En el marco de este programa desarrollamos proyectos que contribuyan al desarrollo en esta comunidad. Algunos de estos proyectos incluyen actividades deportivas y de salud en varios colegios, clases de refuerzo para reducir el fracaso escolar, formación en técnicas agrícolas sostenibles y clubes de debate sobre igualdad de género.'}
              {lang === 'EN' && 'After the needs assessment was carried out in 2020, we started a community development program in Mkono, a sprawling neighborhood on the outskirts of Arusha. Within the framework of this program, we develop projects that contribute to development in this community. Some of these projects include sports and health activities in various schools, reinforcement classes to reduce school failure, training in sustainable agricultural techniques, and discussion clubs on gender equality.'}
              {lang === 'SW' && 'Baada ya kufanya tahmini ya mahitaji mwaka 2020, tulianza shughuli za kimaendeleo katika jamii ya Terrat, kata change iliopo pembezoni mwa jiji la Arusha. Kwa kuzingatia mpangilio wa uandaaji wa shughuli hizo,tumebuni miradi ambayo inachangia kwenye maendeleo katika jamii. Baadhi ya miradi hii inahusisha shughuli za michezo na afya katika shule mbalimbali, masomo ya ziada kuongeza ufaulu, mafunzo ya kilimo bora na vilabu vya majadiliano kuhusu usawa wa kijinsia.'}
            </Paragraph>
          </Carousel.Item>
          <Carousel.Item src="/images/photo1.webp" hasOverlay>
            <Year>2020</Year>
            <Paragraph>
              {lang === 'ES' && 'En 2020 decidimos lanzarnos hacia nuevos proyectos de la mano de un grupo de chicos y chicas tanzanos que también participaron en Chagua Maisha y que, desde hace años, están centrados en la cooperación al desarrollo. Junto a este equipo, comenzamos un estudio poblacional en Arusha, con el fin de evaluar las necesidades y fortalezas de las comunidades de la ciudad. Tras esto, y con la emergencia sanitaria de la pandemia, llevamos a cabo una campaña de prevención del COVID-19 con la que conseguimos reducir la vulnerabilidad de 118 familias a través del reparto de bienes de limpieza, cubos de agua para el lavado de mano y material informativo.'}
              {lang === 'EN' && 'In 2020 we decided to launch into new projects with the help of a group of Tanzanian boys and girls who also participated in Chagua Maisha and who, for years, have focused on development cooperation. Together with this team, we began a population study in Arusha, to assess the needs and strengths of the city\'s communities. After this, and with the health emergency of the pandemic, we carried out a COVID-19 prevention campaign with which we managed to reduce the vulnerability of 118 families through the distribution of cleaning goods, water buckets for hand washing, and informative material.'}
              {lang === 'SW' && 'Mnamo mwaka wa 2020 tuliamua kuanzisha miradi mipya kwa msaada wa kikundi cha vijana wa kike na wakiume wa Kitanzania ambao pia walishiriki katika kuijenga Chagua Maisha na ambao, kwa miaka mingi, wamezingatia ushirikiano wa kimaendeleo. Pamoja na timu hii, tulianza kufanya utafiti huko Arusha, kutathmini mahitaji na uwezo wa jamii. Baada ya haya, dharura ya kiafya ya janga la virusi vya corona, tulifanya kampeni ya kuzuia UVIKO-19 ambayo tuliweza kupunguza athari kwa familia 118 kupitia usambazaji wa vifaa vya kusafisha, ndoo za maji za kunawa mikono, na vipeperushi vyenye kuelimisha.'}
            </Paragraph>
          </Carousel.Item>
          <Carousel.Item src="/images/photo4.webp" hasOverlay>
            <Year>2019</Year>
            <Paragraph>
              {lang === 'ES' && 'En 2019 empezó a funcionar, en el espacio de Chagua Maisha, un huerto ecológico de uso comunitario con el que, además, los estudiantes aprendían técnicas agrícolas. A finales de año, decidimos ceder la gestión de Chagua Maisha por completo a la contraparte local para poder emprender nuevos proyectos.'}
              {lang === 'EN' && 'In 2019, an eco-friendly orchard for communitarian use as well as for the education of the children attending school was built in the Chagua Maisha space. At the end of this year, we gave the total Chagua Maisha management to the local counterpart. We decided to start a new project in the community.'}
              {lang === 'SW' && 'Mnamo mwaka 2019, bustani ya mazingira rafiki kwa matumizi ya jamii na kwa elimu ya watoto wanaohudhuria shule iliyojengwa katika eneo la Chagua Maisha. Mwisho wa mwaka huu, tulikabidhi usimamizi wa Chagua Maisha kwa washirika wa ndani. Tuliamua kuanza mradi mpya katika jamii.'}
            </Paragraph>
          </Carousel.Item>
          <Carousel.Item src="/images/photo6.jpg" hasOverlay>
            <Year>2018</Year>
            <Paragraph>
              {lang === 'ES' && 'En el año 2018, llevamos a cabo actividades deportivas para más de 100 niños y niñas de la zona, con el fin de promover el deporte y el disfrute del tiempo libre, a través de juegos educativos, entre la población joven. Además, este mismo año abrimos una tienda que vendía productos básicos, para contribuir a la sostenibilidad del proyecto.'}
              {lang === 'EN' && 'In 2018, we carried out sports activities for more than 100 children of the neighborhood to promote sports and free time enjoyment through educational activities. Besides, we opened a shop that sold basic products to contribute to the maintenance of the project.'}
              {lang === 'SW' && 'Mnamo mwaka 2018, tulifanya shughuli za michezo kwa watoto zaidi ya 100 katika jamii na kukuza michezo na starehe kwa wakati wa ziada kupitia shughuli za kielimu. Kwa kuongezea, tulifungua duka ambalo liliuza bidhaa za msingi ili kusaidia katika utunzaji wa mradi.'}
            </Paragraph>
          </Carousel.Item>
          <Carousel.Item src="/images/photo5.webp" hasOverlay>
            <Year>2017</Year>
            <Paragraph>
              {lang === 'ES' && 'Así, a finales de 2016 y principios de 2017 levantamos un aula de pre-primaria para 25 niños y niñas en riesgo de exclusión social. También desarrollamos talleres sociales con la comunidad y comenzamos un campamento deportivo para jóvenes.'}
              {lang === 'EN' && 'In late 2016 and early 2017, we built a pre-primary classroom for 25 kids at risk of social exclusion. We also develop social workshops with the community and start a youth sports camp.'}
              {lang === 'SW' && 'Mnamo mwaka 2017, tulifungua darasa la pili na tukajenga nafasi ya umma ambapo sinema zilifanyika, chakula kilipatikana, michezo ya mezani na vitabu vilikuzwa. Lengo kuu la nafasi kuu ya umma ilikuwa kuunda hali ya jamii na mtandao katika jamii inayokua.'}
            </Paragraph>
            <Paragraph>
              {lang === 'ES' && 'Además, abrimos una segunda aula y construimos un espacio público que sirvió para proyectar películas, ofrecer comidas, proveer de juegos de mesa y libros a los habitantes de la zona y, en definitiva, crear comunidad en un barrio en expansión.'}
              {lang === 'EN' && 'Besides, we opened a second class and we built a public space where movies were played, meals were held, and board games and books were promoted, and ultimately create a sense of community in a growing neighborhood. '}
              {lang === 'SW' && ''}
            </Paragraph>
          </Carousel.Item>
          <Carousel.Item src="/images/photo3.webp" hasOverlay>
            <Year>2016</Year>
            <Paragraph>
              {lang === 'ES' && 'Desde 2016 y hasta 2019 lanzamos, junto con la ONG tanzana Progress for Africa, un proyecto propio llamado \'Chagua Maisha\'. Bajo este nombre, que en swahili significa “elige vida”, desarrollamos diferentes proyectos de cooperación al desarrollo destinados a contribuir a la mejora de vida de la población beneficiaria, en un barrio en expansión y con un acceso limitado a recursos básicos, denominado \'Born City\'.'}
              {lang === 'EN' && 'From 2016 to 2019, we collaborated with the Tanzanian NGO Progress for Africa with a common project called \'Chagua Maisha\' which means \'choose life\' in Swahili. In this collaboration, we developed several development cooperation projects, aiming to contribute to the improvement of the beneficiaries in Born City, a growing neighborhood with limited access to basic needs.'}
              {lang === 'SW' && 'Kutokea mwaka 2016 hadi 2019, tulishirikiana na Progress for Africa NGO ya Tanzania kwa mradi unaoitwa \'Chagua Maisha\' ambao unamaanisha (choose life) \'Chagua Maisha\' kwa Kiswahili. Kwa ushirikiano huu, tulianzisha miradi kadhaa ya ushirikiano wa maendeleo, tulilenga kuchangia katika uboreshaji wa wanufaika wa Born City, mtaa unaokuwa na ufikiaji mdogo wa mahitaji ya kijamii.'}
            </Paragraph>
          </Carousel.Item>
          <Carousel.Item src="/images/photo7.webp" hasOverlay>
            <Year>2014/15</Year>
            <Paragraph>
              {lang === 'ES' && 'Aunque Maisha Roots ha nacido recientemente, nuestra experiencia e historia se remontan a 2014.'}
              {lang === 'EN' && 'Although Maisha Roots was born recently, our experience and history started in 2014.'}
              {lang === 'SW' && 'Ingawa Maisha Roots imezaliwa hivi karibuni, uzoefu wetu na historia yetu ilianza mnamo mwaka 2014.'}
            </Paragraph>
            <Paragraph>
              {lang === 'ES' && 'Durante los años 2014 y 2015, el grupo de jóvenes estudiantes que después fundaría la contraparte española comenzó a desarrollar actividades educativas y sanitarias en Arusha a través de programas de voluntariado en distintos centros de la ciudad. Entre otros, hemos colaborado en el Orfanato Good Hope, en la Escuela de Educación Infantil Upendo y en el Hospital Monte Meru.'}
              {lang === 'EN' && 'During 2014 and 2015, the group of students who later would fund the Spanish counterpart, begun to develop educational and health activities in Arusha through volunteer programs in other centers of the city. Among others, we have collaborated with Good Hope Orphanage, Upendo Pre-Primary school, and Mont Meru Hospital.'}
              {lang === 'SW' && 'Mnamo mwaka 2014 na 2015, kikundi cha wanafunzi ambao baadaye kilikuwa ni waashiriki wa Uhispania, walianza kukuza shughuli za kielimu na kiafya Arusha kupitia programu za kujitolea katika vituo vingine vya jiji. Kati ya zingine, tumeshirikiana na kituo cha kulea watoto yatima kinachoitwa Good Hope Orphanage, shule ya msingi Upendo na Hospitali ya Mont Meru.'}
            </Paragraph>
          </Carousel.Item>
        </Carousel.Container>
      </SubSection>
    </Section>
  )
}

export default TimelineSection
