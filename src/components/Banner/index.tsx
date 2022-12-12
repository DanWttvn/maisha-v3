import { FC, useRef } from 'react'
import { BaseProps } from 'models'
import Styled from './styles'

export interface Props extends BaseProps {
  variant: 'A' | 'B'
  isShown?: boolean
}

const Banner: FC<Props> = ({ children, variant, isShown = false, styles, className, isHidden }) => {
  const ref = useRef<HTMLDivElement>()

  if (isHidden) return null

  return (
    <Styled
      ref={ref}
      height={ref?.current?.clientHeight || 300}
      variant={variant}
      isShown={isShown}
      className={className}
      styles={styles}
    >
      {children}
    </Styled>
  )
}

Banner.displayName = 'Banner'

export default Banner
