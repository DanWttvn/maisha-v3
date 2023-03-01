import styled, { css } from 'styled-components'
import { TextProps } from 'models'

export const TextStyles = css<TextProps>`
  text-align: ${({ isCentered }) => (isCentered ? 'center' : 'inherit')};

  ${({ size }) => {
    switch (size) {
      case 'inherit':
      default:
        return css`
          font-size: inherit;
          line-height: inherit;
        `
      case 'xs':
        return css`
          font-size: 0.75rem;
          line-height: 24px;
        `
      case 's':
        return css`
          font-size: 0.85rem;
          line-height: 1.3rem;
        `
      case 'm':
        return css`
          font-size: 1rem;
          line-height: 1.59rem;
        `
      case 'l':
        return css`
          font-size: 2rem;
          line-height: 2rem;
        `
      case 'xl':
        return css`
          font-size: 3.2rem;
          line-height: 4rem;
        `
    }
  }}

  ${({ theme, weight }) =>
    weight &&
    css`
      font-weight: ${weight === 'inherit' ? 'inherit' : theme.weights[weight]};
    `}
`

export default styled.span<TextProps>`
  ${TextStyles}
  display: inline-block;
  margin: 0;
  color: ${({ theme, color }) =>
    !!color && color !== 'inherit' ? theme.colors[color] : 'inherit'};
  cursor: ${({ onClick }) => (!!onClick ? 'pointer' : 'inherit')};

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      color: ${({ theme }) => theme.colors.darkRed};
      font-size: 1.6rem;
      font-weight: 900;
      font-style: italic;
    `};
  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%;' : '')};
  ${({ styles }) => ({ ...styles })}
`
