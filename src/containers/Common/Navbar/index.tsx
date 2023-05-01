import { useState, FC, useContext, useEffect } from 'react'
import NavItem from 'components/NavItem'
import Image from 'components/Image'
import Container from 'components/Container'
import LanguageContext from 'contexts/language'
import { BaseProps, Language } from 'models'
import AppLink from 'components/AppLink'
import Styled, {
  Hamburger,
  Cross,
  ItemsWrapper,
  Menu,
  Backdrop,
  VerticalDivider,
  Li,
} from './styles'
import { SECTIONS_DATA } from './constants'

interface Props extends BaseProps {
  isHomePage?: boolean
}

export const Navbar: FC<Props> = ({ isHomePage }) => {
  const { lang, setLang } = useContext(LanguageContext)
  const [isDesktopOpen, setIsDesktopOpen] = useState(false)
  const [isResponsiveOpen, setIsResponsiveOpen] = useState(false)
  const [isHeroSection, setIsHeroSection] = useState(true)

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

  const handleOpen = (isOpen: boolean) => {
    setIsDesktopOpen(isOpen)
  }

  const handleClick = () => {
    if (isResponsiveOpen) setIsResponsiveOpen(false)
  }

  const items = SECTIONS_DATA.map(section => {
    const subItems = section.subsections?.map(subSection => ({
      name: subSection.title[lang],
      section: subSection.id,
    }))

    return (
      <NavItem
        sectionId={section.id}
        key={section.id}
        subItemsData={subItems}
        onOpen={handleOpen}
        onClick={handleClick}
        isHomePage={isHomePage}>
        {section.title[lang]}
      </NavItem>
    )
  })

  const onLanguageChange = (nextLang: Language) => {
    setLang(nextLang)
    setIsResponsiveOpen(false)
  }

  return (
    <Styled isOpen={isDesktopOpen} isHeroSection={isHeroSection}>
      <AppLink toSection="header" isSamePage={isHomePage}>
        <Image styles={{ width: 200, marginTop: 16 }} src="./images/logo.png" />
      </AppLink>

      <Hamburger onClick={() => setIsResponsiveOpen(true)} />

      <ItemsWrapper>
        <Backdrop
          onClick={() => setIsResponsiveOpen(false)}
          isResponsiveOpen={isResponsiveOpen}
        />
        <Cross
          onClick={() => setIsResponsiveOpen(false)}
          isResponsiveOpen={isResponsiveOpen}
        />
        <Menu isResponsiveOpen={isResponsiveOpen}>
          {items}
          <Container>
            <Li onClick={() => onLanguageChange('ES')} isSubItem>
              ESP
            </Li>
            <VerticalDivider />
            <Li onClick={() => onLanguageChange('EN')} isSubItem>
              ENG
            </Li>
            <VerticalDivider />
            <Li onClick={() => onLanguageChange('SW')} isSubItem>
              SWA
            </Li>
          </Container>
        </Menu>
      </ItemsWrapper>
    </Styled>
  )
}

export default Navbar
