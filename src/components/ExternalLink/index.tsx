import { FC } from 'react'
import { TextProps } from 'models'
import { LinkProps } from 'components/AppLink'
import Styled from './styles'

export interface Props extends TextProps {
  href: string
  target?: string
  variant?: LinkProps['variant']
}

const ExternalLink: FC<Props> = ({
  children,
  href,
  target = '_blank',
  weight = 'bold',
  variant = 'app',
  color,
  onClick,
  styles,
  size = 'inherit',
  isHidden,
  className,
}) => {
  if (isHidden) return null

  return (
    <Styled
      href={href}
      target={target}
      rel="noreferrer"
      onClick={onClick}
      variant={variant}
      color={color}
      size={size}
      styles={styles}
      weight={weight}
      className={className}>
      {children}
    </Styled>
  )
}

export default ExternalLink
