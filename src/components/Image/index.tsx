import { FC } from 'react'
import { BaseProps } from 'models'
import Styled from './styles'

export interface Props extends BaseProps {
  src: string
  srcSet?: string
  hasOverlay?: boolean
  loading?: 'lazy' | 'eager'
}

const Image: FC<Props> = ({
  src,
  srcSet,
  hasOverlay,
  isHidden,
  styles,
  isFullWidth,
  loading = 'lazy',
  className,
}) => {
  if (isHidden) return null
  return (
    <Styled
      src={src}
      srcSet={srcSet}
      styles={styles}
      loading={loading}
      hasOverlay={hasOverlay}
      className={className}
      isFullWidth={isFullWidth}
    />
  )
}

export default Image
