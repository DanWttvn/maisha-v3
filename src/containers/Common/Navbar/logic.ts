import { useState, useEffect } from 'react'
import { Props } from '.'

export const useLogic = ({ isHomePage }: Pick<Props, 'isHomePage'>) => {
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
  }, [isHomePage])

  const handleOpen = (isOpen: boolean) => {
    setIsDesktopOpen(isOpen)
  }

  const handleClick = () => {
    if (isResponsiveOpen) setIsResponsiveOpen(false)
  }

  return {
    handleOpen,
    handleClick,
    isDesktopOpen,
    isHeroSection,
    isResponsiveOpen,
    setIsResponsiveOpen,
  }
}
