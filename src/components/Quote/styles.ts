import styled from 'styled-components'
import Text from 'components/Text'
import { Props } from '.'

export default styled(Text)<Props>`
  position: relative;

  &::before {
    content: '“';
    font-size: 9rem;
    color: ${({ theme, quotesColor }) =>
      quotesColor === 'inherit' ? 'inherit' : theme.colors[quotesColor]};
    position: relative;
    top: 45px;
    left: 40px;
    z-index: -1;
  }

  &::after {
    content: '”';
    font-size: 9rem;
    color: ${({ theme, quotesColor }) =>
      quotesColor === 'inherit' ? 'inherit' : theme.colors[quotesColor]};
    position: absolute;
    right: 40px;
    z-index: -1;
  }

  @media ${({ theme }) => theme.breakpoints.s} {
    font-size: 2rem;
    line-height: 2.6rem;
  }
`
