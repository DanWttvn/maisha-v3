import { FC, PropsWithChildren, useContext, useEffect, useState } from 'react'
import LanguageContext from 'contexts/language'
import { getUrlParam } from 'helpers/url'
import { Language } from 'models'
import Container from 'components/Container'
import PolicyBanner from 'containers/Common/PolicyBanner'
import Footer from 'containers/Common/Footer'
import Navbar from 'containers/Common/Navbar'

interface Props {
  isHomePage?: boolean
}

const Layout: FC<PropsWithChildren<Props>> = ({ children, isHomePage }) => {
  const { setLang } = useContext(LanguageContext)
  const [isHeroSection, setIsHeroSection] = useState(true)

  useEffect(() => {
    const requestedLang = getUrlParam('lang') as Language
    const availableLanguages: Language[] = ['ES', 'SW', 'EN']

    if (availableLanguages.includes(requestedLang)) setLang(requestedLang)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isHomePage) return setIsHeroSection(false)

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 120) setIsHeroSection(false)
      else setIsHeroSection(true)
    }

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container
      direction="vertical"
      styles={{
        position: 'relative',
        minHeight: '100vh',
        justifyContent: 'space-between',
      }}
      isFullWidth
    >
      <Navbar isHomePage={isHomePage} />
      {children}
      <Footer />
      {/* <NewsletterPopup /> */}
      <PolicyBanner isHidden={isHeroSection} />
    </Container>
  )
}

export default Layout
