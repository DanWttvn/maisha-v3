import { useContext, useState, FC } from 'react'
import Paragraph from 'components/Paragraph'
import Subtitle from 'components/Subtitle'
import LanguageContext from 'contexts/language'
import Styled, { CardSp, CardTz, ButtonSp, ButtonTz, ModalSp, ModalTz, SectionSubtitle } from './styles'

export const Map: FC = () => {
  const { lang } = useContext(LanguageContext)
  const [selected, setSelected] = useState<'SP' | 'TZ'>()

  const spainCopy = (
    <>
      <Subtitle color="white" isSmall>
        {lang === 'ES' && 'España'}
        {lang === 'EN' && 'Spain'}
        {lang === 'SW' && 'Uhispania'}
      </Subtitle>
      <Paragraph color="white" size="s">
        {lang === 'ES' && 'Desde España intentamos reforzar la labor que se lleva a cabo en Tanzania. Creamos puentes culturales a través de programas de sensibilización (principalmente en centros educativos) y realizamos actividades de recaudación de fondos para financiar los proyectos de Tanzania. Nuestra acción y parte del programa de voluntariado se desarrollan, mayoritariamente, en la Comunidad de Madrid, aunque también se llevan a cabo actividades en otras comunidades autónomas, especialmente en Cataluña, donde también contamos con una delegación.'}
        {lang === 'EN' && 'In Spain, we try to reinforce the work carried out in Tanzania. We create cultural bridges through sensitization programs (especially in educational centers) and we develop fundraising activities to raise funds for our projects in Tanzania. Our action and part of our volunteering program are developed in the Comunidad de Madrid, though we also develop some activities in other communities, especially Cataluña, where we also have opened a delegation.'}
        {lang === 'SW' && 'Uhispania, tunajaribu kuimarisha kazi inayofanywa nchini Tanzania. Tunaunda madaraja ya kitamaduni kupitia program za uhamasishaji (haswa katika vituo vya elimu) na tunaendeleza shughuli za kutafuta fedha za kuinua mapato kwa miradi yetu Tanzania. Shughuli zetu na sehemu ya programu yetu ya kujitolea imekuzwa katika eneo la Comunidad de Madrid, ingawa sisi pia huendeleza shughuli nyingine katika jamii zingine, haswa Cataluna, ambapo pia tumefungua ujumbe.'}
      </Paragraph>
    </>
  )

  const tanzaniaCopy = (
    <>
      <Subtitle color="white" isSmall>
        Tanzania
      </Subtitle>
      <Paragraph color="white" size="s">
        {lang === 'ES' && 'Actualmente, desarrollamos nuestra actividad en la ciudad de Arusha, al norte de Tanzania, aunque no descartamos expandir nuestras acciones por otras zonas del país. Aquí es donde se desarrollan los proyectos de cooperación al desarrollo y los programas de voluntariado.'}
        {lang === 'EN' && 'Nowadays, we develop our activities and projects in Arusha, a city in the north of Tanzania, even though we do not rule out expanding our actions in other areas of the country. Here is where we develop our development projects and volunteering program..'}
        {lang === 'SW' && 'Siku hizi, tunaendeleza shughuli na miradi yetu Arusha, jiji lililopo kaskazini mwa Tanzania, ingawa hatujajiekea mipaka ya kuendelea kukua na kugusa sehemu zingine za nchi. Hapa ndipo tunapoendeleza miradi yetu ya maendeleo na program za kujitolea.'}
      </Paragraph>
    </>
  )

  return (
    <>
      <Styled>
        <SectionSubtitle color="white">
          {lang === 'ES' && 'Dónde trabajamos'}
          {lang === 'EN' && 'Where do we work'}
          {lang === 'SW' && 'Tunafanya kazi wapi'}
        </SectionSubtitle>

        <CardSp>{spainCopy}</CardSp>
        <CardTz>{tanzaniaCopy}</CardTz>

        <ButtonSp variant="F" onClick={() => setSelected('SP')}>+</ButtonSp>
        <ButtonTz variant="F" onClick={() => setSelected('TZ')}>+</ButtonTz>

        <ModalSp isHidden={selected !== 'SP'} variant="B" onClose={() => setSelected(undefined)}>
          {spainCopy}
        </ModalSp>
        <ModalTz isHidden={selected !== 'TZ'} variant="B" onClose={() => setSelected(undefined)}>
          {tanzaniaCopy}
        </ModalTz>
      </Styled>
    </>
  )
}

export default Map
