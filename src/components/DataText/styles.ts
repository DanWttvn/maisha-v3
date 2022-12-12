import styled, { css } from 'styled-components'
import Text from 'components/Text'
import { Props } from '.'

export default styled(Text)<Props>`
  color: ${({ theme }) => theme.colors.darkRed};
  font-weight: 900;
  cursor: default;
  text-align: center;

  ${({ type, theme }) => type === 'number' && css`
    font-size: 7rem;
    line-height: 7rem;

    @media ${theme.breakpoints.sl} {
      font-size: 5rem;
      line-height: 5.3rem;
    }
  `}

  ${({type, theme }) => type === 'number' && css`
    font-size: 4.5rem;
    line-height: 4rem;

    @media ${theme.breakpoints.sl} {
      font-size: 3rem;
      line-height: 3rem;
    }
  `}
  

  ${({ styles }) => ({ ...styles })}
`
