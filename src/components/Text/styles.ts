import styled, { css } from 'styled-components'
import { TextProps } from 'models'

export const TextStyles = css<TextProps>`
  text-align: ${({ isCentered }) => isCentered ? 'center' : 'inherit'};

  ${({ size }) => {
    switch (size) {
      case 'xs':
        return css`
          font-size: 0.75rem;
          line-height: 24px;
        `;
      case 's':
        return css`
          font-size: 0.85rem;
          line-height: 1.3rem;
        `;
      case 'm':
        return css`
          font-size: 1rem;
          line-height: 1.59rem;
        `;
      case 'l':
        return css`
          font-size: 2rem;
          line-height: 2rem;
        `;
      default:
      case 'xl':
        return css`
          font-size: 3.2rem;
          line-height: 4rem;
        `;
    }
  }}

  ${({ weight }) => {
    switch (weight) {
      default:
      case 'normal':
        return css`
          font-weight: 400;
        `;
      case 'semibold':
        return css`
          font-weight: 500;
        `;
      case 'bold':
        return css`
          font-weight: 600;
        `;
      case 'black':
        return css`
          font-weight: 700;
        `;
    }
  }}  
`

export default styled.span<TextProps>`
  ${TextStyles}
  margin: 0;
  color: ${({ theme, color }) => !!color ? theme.colors[color] : 'inherit'};
  cursor: ${({ onClick }) => !!onClick ? 'pointer' : 'inherit'};

  ${({ isHighlighted }) => isHighlighted && css`
    color: ${({ theme }) => theme.colors.darkRed};
    font-size: 1.6rem;
    font-weight: 900;
    font-style: italic;
  `};
  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`
