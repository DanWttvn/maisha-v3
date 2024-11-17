import { FC } from 'react'
import { TextProps } from 'models'
import { H3, H4 } from './styles'

export interface Props extends TextProps {
  isSmall?: boolean
}

const Subtitle: FC<Props> = ({
  children,
  styles,
  color,
  isSmall,
  isCentered,
  isFullWidth,
  className,
}) => (
  <>
    {isSmall ? (
      <H4
        color={color}
        isCentered={isCentered}
        styles={styles}
        isFullWidth={isFullWidth}
        className={className}
      >
        {children}
      </H4>
    ) : (
      <H3
        color={color}
        isCentered={isCentered}
        styles={styles}
        isFullWidth={isFullWidth}
        className={className}
      >
        {children}
      </H3>
    )}
  </>
)

export default Subtitle
