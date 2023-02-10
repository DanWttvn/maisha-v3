import { FC } from 'react'
import { SectionProps } from 'models'
import { Section, Image, Icon } from './styles'
import AppLink from 'components/AppLink'

const HeroSection: FC<SectionProps> = () => (
  <Section id="header" styles={{ justifyContent: 'center', marginTop: 20 }}>
    <Image src="/images/Header.png" loading="eager" />
    <AppLink toSection="about" isSamePage>
      <Icon />
    </AppLink>
  </Section>
)

export default HeroSection
