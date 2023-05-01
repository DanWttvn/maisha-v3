import styled from 'styled-components'
import { Props } from '.'

export const H3 = styled.h3<Props>`
  width: 100%;
  margin: 0;
  margin-bottom: 20px;
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.weights.black};
  line-height: 1.5em;
  color: ${({ theme, color = 'black' }) =>
    color === 'inherit' ? 'inherit' : theme.colors[color]};
  word-wrap: break-word;
  text-align: ${({ isCentered }) => (isCentered ? 'center' : 'inherit')};

  @media ${({ theme }) => theme.breakpoints.sl} {
    font-size: 2.2rem;
  }

  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%;' : '')};
  ${({ styles }) => ({ ...styles })}
`

export const H4 = styled.h4<Props>`
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.weights.bold};
  margin-bottom: 10px;
  color: ${({ theme, color = 'black' }) =>
    color === 'inherit' ? 'inherit' : theme.colors[color]};
  text-align: ${({ isCentered }) => (isCentered ? 'center' : 'inherit')};

  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%;' : '')};
  ${({ styles }) => ({ ...styles })}
`
