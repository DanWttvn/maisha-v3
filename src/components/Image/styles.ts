import styled, { css } from 'styled-components'
import { Props } from '.'

export default styled.img<Props>`
  ${({ hasOverlay }) =>
    hasOverlay &&
    css`
      filter: brightness(50%);
    `};

  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%;' : '')};
  ${({ styles }) => ({ ...styles })}
`
