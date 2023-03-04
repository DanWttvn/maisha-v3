import styled from 'styled-components'
import Container from 'components/Container'
import DefaultSubSection from 'components/SubSection'
import DefaultText from 'components/Text'

export const SubSection = styled(DefaultSubSection)`
  @media ${({ theme }) => theme.breakpoints.sl} {
    flex-direction: column;
    align-items: center;
  }
`

export const Text = styled(DefaultText).attrs({
  weight: 'bold',
  isCentered: true,
})``

export const DataContainer = styled(Container).attrs({
  direction: 'vertical',
})`
  margin: 30px 0px;
  @media ${({ theme }) => theme.breakpoints.sl} {
    margin: 8px 0px;
  }
`
