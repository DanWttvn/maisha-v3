import React, { FC } from 'react'
import Paragraph from 'components/Paragraph'
import Styled, { OpenQuote, CloseQuote, Text, Image } from './styles'

const Header: FC = () => (
  <Styled>
    <Image
      src="/images/playing_kids.webp"
      srcSet="
        /images/playing_kids-1400w.webp 1400w,
        /images/playing_kids-1200w.webp 1200w,
        /images/playing_kids-800w.webp 800w,
        /images/playing_kids-400w.webp 400w
      "
      loading="eager"
    />
    <Paragraph>
      <OpenQuote />
      <Text
        weight="black"
        color="white"
        size="xl"
        styles={{ fontStyle: 'italic' }}>
        Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede
        cambiar el mundo
      </Text>
      <CloseQuote />
      <Text weight="black" color="white" size="xl" styles={{ marginLeft: 16 }}>
        E. Galeano
      </Text>
    </Paragraph>
  </Styled>
)

export default Header
