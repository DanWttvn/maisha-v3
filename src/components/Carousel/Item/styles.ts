import styled from 'styled-components'
import { Props } from '.'

export default styled.div<Props>`
  display: flex;
  flex-direction: column;
  transition: all 0.9s cubic-bezier(0.2, 0, 0.2, 1);
  width: 90vw;
  height: 100%;
  padding: 100px 5rem;
  background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
  background-image: ${({ src, hasOverlay }) => hasOverlay ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${src})` : `url(${src})`};

  @media ${({ theme }) => theme.breakpoints.s} {
    padding: 60px 2rem;
  }

  ${({ styles }) => ({ ...styles })}
`
