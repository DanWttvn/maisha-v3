import styled from 'styled-components'
import Container from 'components/Container'
import DefaultSubSection from 'components/SubSection'
import DefaultText from 'components/Text'
import DataText from 'components/DataText'

export const SubSection = styled(DefaultSubSection)`
  @media ${({ theme }) => theme.breakpoints.sl} {
    flex-direction: column;
    align-items: center;
  }
`

export const Group = styled(Container)`
  justify-content: center;
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

export const SlashContainer = styled(DataText)`
  margin: 12px 0.2rem 0 0.2rem;
`
