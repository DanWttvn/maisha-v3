import styled from 'styled-components'
import DefaultContainer from 'components/Container'
import DefaultImage from 'components/Image'

export const Image = styled(DefaultImage)`
  height: 400px;

  @media ${({ theme }) => theme.breakpoints.s} {
    width: 100%;
    height: fit-content;
  }
`

export const Container = styled(DefaultContainer)`
  flex: 1;
  margin-left: 100px;

  @media ${({ theme }) => theme.breakpoints.s} {
    margin-left: 0;
    margin-top: 40px;
  }
`
