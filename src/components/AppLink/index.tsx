import { FC } from 'react'
import { TextProps, SectionTitle, SubSectionTitle } from 'models'
import { urls } from 'globals/routes'
import { ScrollLink,  RouteLink } from './styles'

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
      >
        {children}
      </ScrollLink>
    )
  }

  // if (!!toSection)
  //   return (
  //     <HashLink to={`${urls.root}#${toSection}`} onClick={onClick} variant={variant} size={size} weight={weight}>
  //       {children}
  //     </HashLink>
  //   )
  // TODOs: probar si funciona. Para eso tiene que ser desde otra pagina
  if (!!toSection) {
    return (
      <RouteLink href={`${urls.root}#${toSection}`} onClick={onClick} variant={variant} size={size} weight={weight}>
        {children}
      </RouteLink>
    )
  }

  return (
    <RouteLink href={toPage ?? '#'} onClick={onClick} variant={variant} size={size} weight={weight}>
      {children}
    </RouteLink>
  )
}

export default AppLink
