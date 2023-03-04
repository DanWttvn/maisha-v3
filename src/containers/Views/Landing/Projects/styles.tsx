import styled from 'styled-components'
import Container from 'components/Container'
import DefaultText from 'components/Text'

export const ProjectContainer = styled(Container)`
  justify-content: space-between;
  margin-bottom: 56px;

  @media ${({ theme }) => theme.breakpoints.sl} {
    justify-content: center;
  }
`

export const Project = styled(Container).attrs({
  direction: 'vertical'
})`
  width: 33%;
  padding: 25px 20px;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.sl} {
    width: 50%;
  }

  @media ${({ theme }) => theme.breakpoints.s} {
    width: 100%;
    padding: 0;
  }
`

export const Title = styled(DefaultText).attrs({
  weight: 'black',
  size: 'm'
})`
  margin-block: 16px 8px;
  text-align: center;
`
