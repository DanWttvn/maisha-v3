import { FC, forwardRef } from 'react'
import { BaseProps } from 'models'
import Styled from './styles'

export interface Props extends BaseProps {
  src: string
  onClick?: () => void
  hasOverlay?: boolean
}

const Item: FC<Props> = forwardRef(
  ({ children, isHidden, styles, onClick, src, hasOverlay }, ref) => {
    if (isHidden) return null

    return (
      <Styled
        ref={ref}
        src={src}
        onClick={onClick}
        hasOverlay={hasOverlay}
        styles={styles}
      >
        {children}
      </Styled>
    )
  },
)

Item.displayName = 'CarouselItem'

export default Item
