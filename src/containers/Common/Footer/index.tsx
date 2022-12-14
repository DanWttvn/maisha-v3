import React, { FC, useContext, useState } from 'react'
import Button from 'components/Button'
import Container from 'components/Container'
import Text from 'components/Text'
import AppLink from 'components/AppLink'
import LanguageContext from 'contexts/language'
import { BaseProps } from 'models'
import theme from 'styles/themes/light'
import NewsletterForm from '../NewsletterForm'
import PolicyModal from '../PolicyModal'
import Styled, { InnerContainer, HorizontalDivider, VerticalDivider, Section, NewsletterSection, FacebookIcon, InstagramIcon, YoutubeIcon } from './styles'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'
import Paragraph from 'components/Paragraph'

export interface Props extends BaseProps {
  isHomePage?: boolean
  isSimplified?: boolean
}

const Footer: FC<Props> = ({ isHomePage, isSimplified, className, styles }) => {
  const { lang, setLang } = useContext(LanguageContext)
  const [ isPolicyModalOpen, setIsPolicyModalOpen ] = useState(false)

  return (
    <Styled className={className} styles={styles}>
      <InnerContainer>
        <Section>
          <AppLink variant="footer" isSamePage={isHomePage} size="s" toSection="about">
            {lang === 'ES' && 'Quiénes somos'}
            {lang === 'EN' && 'Who we are'}
            {lang === 'SW' && 'Sisi ni nani'}
          </AppLink>
          <HorizontalDivider />
          <AppLink variant="footer" isSamePage={isHomePage} size="s" toSection="donate">
            {lang === 'ES' && 'Dona'}
            {lang === 'EN' && 'Donate'}
            {lang === 'SW' && 'Changia'}
          </AppLink>
          <HorizontalDivider />
          <AppLink variant="footer" isSamePage={isHomePage} size="s" toSection="collaborate">
            {lang === 'ES' && 'Colabora'}
            {lang === 'EN' && 'Collaborate'}
            {lang === 'SW' && 'Shiriki'}
          </AppLink>
        </Section>
        <NewsletterSection isHidden={isSimplified || lang !== 'ES'}>
          <NewsletterForm />
        </NewsletterSection>
        <Section isHidden={!isSimplified} styles={{ justifyContent: 'center' }}>
          <AppLink toSection="header">
            <Image src="/images/MR-orange.png" styles={{ width: 100, height: 100 }} />
          </AppLink>
        </Section>
        <Section>
          <Text size="s" weight="bold" styles={{ color: theme.colors.offOrange, marginBottom: 15 }} isFullWidth>
            {lang === 'ES' && 'Sígenos'}
            {lang === 'EN' && 'Follow us'}
            {lang === 'SW' && 'Follow us'}
          </Text>
          <Container styles={{ marginBottom: 15, justifyContent: 'space-around'}} isFullWidth>
            <ExternalLink variant="footer" size="xs" href="https://www.facebook.com/maisharoots/">
              <FacebookIcon />
            </ExternalLink>
            <ExternalLink variant="footer" size="xs" href="https://www.instagram.com/maisharoots/">
              <InstagramIcon />
            </ExternalLink>
            <ExternalLink variant="footer" size="xs" href="https://www.youtube.com/channel/UCuKDNl0yLjyZppYISnFrtZg">
              <YoutubeIcon />
            </ExternalLink>
          </Container>
          <ExternalLink variant="footer" size="xs" href="mailto:info@maisharoots.org">info@maisharoots.org</ExternalLink>
        </Section>
        <Section isHidden={isSimplified}>
          <Text size="s" weight="bold" color="offOrange" styles={{ marginBottom: 15 }} isCentered isFullWidth>Languages</Text>
          <Container styles={{ marginBottom: 15, justifyContent: 'center' }} isFullWidth>
            <Button variant="D" onClick={() => setLang('ES')}>ESP</Button>
            <VerticalDivider />
            <Button variant="D" onClick={() => setLang('EN')}>ENG</Button>
            <VerticalDivider />
            <Button variant="D" onClick={() => setLang('SW')}>SWA</Button>
          </Container>
          <Text size="s" color="offOrange" onClick={() => setIsPolicyModalOpen(true)} styles={{ textDecoration: 'underline' }} isCentered isFullWidth>
            {lang === 'ES' && 'Política de Privacidad'}
            {lang === 'EN' && 'Privacy Policy'}
            {lang === 'SW' && 'Sera ya faragha'}
          </Text>
        </Section>
      </InnerContainer>
      <Paragraph styles={{ fontSize: 11, color: '#ccc', margin: '16px 0 0' }} isCentered isFullWidth>CIF G87557476 - Registro de Fundaciones de competencia estatal</Paragraph>
      <PolicyModal isHidden={!isPolicyModalOpen} onClose={() => setIsPolicyModalOpen(false)} />
    </Styled>
  )
}

export default Footer
