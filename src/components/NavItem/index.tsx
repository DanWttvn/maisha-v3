import { useState, FC } from 'react'
import { BaseProps, SectionTitle, SubSectionTitle } from 'models'
import { Li, SubItemsWrapper, AppLink } from './styles'

export interface Props extends BaseProps {
  subItemsData?: { name: string, section: SubSectionTitle }[]
  sectionId: SectionTitle
  onClick?: () => void
  onOpen: (isShown: boolean) => void
  isHomePage?: boolean
}

const NavItem: FC<Props> = ({ children, subItemsData, sectionId, onClick, onOpen, isHomePage }) => {
  const [showSub, setShowSub] = useState(false)

  const subItems = subItemsData?.map((x, i) => (
    <Li key={i} isSubItem>
      <AppLink toSection={x.section} variant="menu" onClick={onClick} isSamePage={isHomePage}>
        {x.name}
      </AppLink>
    </Li>
  ))

  const handleToggle = (isShown: boolean) => {
    if (!subItemsData) return
    setShowSub(isShown)
    onOpen(isShown)
  }

  return (
    <Li onMouseEnter={() => handleToggle(true)} onMouseLeave={() => handleToggle(false)}>
      <AppLink toSection={sectionId} variant="menu" onClick={onClick} isSamePage={isHomePage}>{children}</AppLink>
      <SubItemsWrapper isOpen={showSub}>{subItems}</SubItemsWrapper>
    </Li>
  )
}

export default NavItem

