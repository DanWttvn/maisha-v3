import styled, { css } from 'styled-components'
import DefaultContainer from 'components/Container'

export const Container = styled(DefaultContainer).attrs({
  direction: 'vertical',
  isFullWidth: true,
})<{ $isHomePage?: boolean }>`
  position: relative;
  min-height: 100vh;
  justify-content: space-between;

  ${({ $isHomePage }) =>
    !$isHomePage &&
    css`
      padding-block-start: 90px;
    `};
`
