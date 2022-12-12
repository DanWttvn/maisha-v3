import styled from "styled-components";
import DefaultText from 'components/Text'
import DefaultParagraph from 'components/Paragraph'

export const Year = styled(DefaultText).attrs({
  size: 'xl',
  weight: 'black',
  color: 'white',
  isFullWidth: true
})`
  margin-bottom: 25px;
`

export const Paragraph = styled(DefaultParagraph).attrs({
  weight: 'semibold',
  color: 'white',
})``
