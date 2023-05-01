import styled from 'styled-components'
import { TextProps } from 'models'
import { TextStyles } from 'components/Text/styles'

export default styled.p<TextProps>`
  /* si le pongo el flex, no sigue la frase con spans dentro */
  ${TextStyles}
  margin-bottom: 1rem;
  color: ${({ theme, color }) =>
    !color || color === 'inherit' ? 'inherit' : theme.colors[color]};
  word-wrap: break-word;
  white-space: pre-wrap;

  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%;' : '')};
  ${({ styles }) => ({ ...styles })}
`
