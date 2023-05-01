import styled, { css } from 'styled-components'
import { Props } from '.'

export default styled.div<Props>`
  position: relative;
  width: 100%;
  padding-top: 90px;
  padding-bottom: 20px;
  margin-top: -40px;
  display: flex;
  flex-flow: row wrap;

  ${({ isFullWidth, theme }) =>
    !isFullWidth &&
    css`
      padding-inline: 120px;

      @media ${theme.breakpoints.m} {
        padding-inline: 80px;
      }
      @media ${theme.breakpoints.s} {
        padding-inline: 40px;
      }
      @media ${theme.breakpoints.xs} {
        padding-inline: 20px;
      }
    `}

  ${({ isNarrow, theme }) =>
    isNarrow &&
    css`
      padding-inline: 170px;
      justify-content: center;

      @media ${theme.breakpoints.l} {
        padding-inline: 120px;
      }
      @media ${theme.breakpoints.m} {
        padding-inline: 80px;
      }
      @media ${theme.breakpoints.s} {
        padding-inline: 40px;
      }
      @media ${theme.breakpoints.xs} {
        padding-inline: 20px;
      }
    `}

  ${({ styles }) => ({ ...styles })}
`
