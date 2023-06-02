import styled from 'styled-components'
import { KeyboardArrowLeft } from '@styled-icons/material/KeyboardArrowLeft'
import Text from 'components/Text'

export const Arrowicon = styled(KeyboardArrowLeft)`
  width: 1rem;
`

export const UpdatedText = styled(Text).attrs({
  size: 'xs',
})`
  color: ${({ theme }) => theme.colors.lightGrey};
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
`

export const Content = styled.div`
  width: 100%;
  overflow-x: hidden;

  * {
    text-align: start !important;
    margin-block-end: 1.5rem;
    line-height: 160%;
  }

  ul {
    li {
      margin: 0;
      line-height: 180%;
      list-style: disc inside;
    }
  }

  strong {
    font-weight: 600;
  }
  a {
    margin: 0 !important;
    text-decoration: underline;
  }

  table {
    max-width: 41.25rem;
    margin-right: auto;
    margin-left: auto;
    margin-block: 2.5rem;
  }

  td,
  tr {
    padding-block: 1rem;
    padding-inline: 1rem;
  }
  img {
    width: 100%;
  }
`
