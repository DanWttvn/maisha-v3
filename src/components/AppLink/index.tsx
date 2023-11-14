import { FC } from 'react'
import { TextProps, SectionTitle, SubSectionTitle } from 'models'
import { urls } from 'globals/routes'
import { ScrollLink, RouteLink } from './styles'

export interface LinkProps extends TextProps {
  variant?: 'menu' | 'footer' | 'app'
}

export interface Props extends LinkProps {
  toPage?: string
  toSection?: SectionTitle | SubSectionTitle
  isSamePage?: boolean
}

const AppLink: FC<Props> = ({
  children,
  toPage,
  toSection,
  className = '',
  onClick,
  size = 'inherit',
  weight = 'bold',
  variant = 'app',
  isSamePage,
  isHidden,
  styles,
}) => {
  if (isHidden) return null

  if (isSamePage && !!toSection) {
    return (
      <ScrollLink
        to={toSection}
        onClick={onClick}
        variant={variant}
        weight={weight}
        activeClass="active"
        spy={true}
        smooth={true}
        className={className}
        styles={styles}
      >
        {children}
      </ScrollLink>
    )
  }

  if (!!toSection) {
    return (
      <RouteLink
        href={`${urls.root}#${toSection}`}
        onClick={onClick}
        variant={variant}
        size={size}
        weight={weight}
        styles={styles}
      >
        {children}
      </RouteLink>
    )
  }

  return (
    <RouteLink
      href={toPage ?? '#'}
      onClick={onClick}
      variant={variant}
      size={size}
      weight={weight}
      styles={styles}
    >
      {children}
    </RouteLink>
  )
}

export default AppLink
