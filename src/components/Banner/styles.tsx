import styled, { css } from 'styled-components'
import { Props } from './'

export default styled.div<Props & { height: number }>`
  display: flex;
  flex-flow: row wrap;
  z-index: ${({ theme }) => theme.zIndex.high};
  position: fixed;
  width: 100%;
  padding: 20px 30px;
  left: 0;
  bottom: ${({ isShown, height }) => (!isShown ? `-${height}px` : 0)};
  transition: bottom 0.5s ease;
  box-shadow: ${({ theme }) => theme.shadows.elevation3};

  ${({ variant }) =>
    variant === 'A' &&
    css`
      background: rgba(0, 0, 0, 0.7);
      color: ${({ theme }) => theme.colors.white};
    `};

  ${({ variant }) =>
    variant === 'B' &&
    css`
      background: ${({ theme }) => theme.colors.darkOrange};
    `};

  @media ${({ theme }) => theme.breakpoints.sl} {
    padding: 20px;
  }

  ${({ styles }) => ({ ...styles })};
`
