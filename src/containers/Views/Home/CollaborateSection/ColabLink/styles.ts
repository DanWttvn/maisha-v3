import styled from 'styled-components'
import ExternalLink from 'components/ExternalLink'
import ImageRoot from 'components/Image'
import { Props } from '.'

export default styled(ExternalLink)<Partial<Props>>`
  position: relative;
  height: 120px;
  margin: 0 8px 20px;
  box-shadow: ${({ theme }) => theme.shadows.elevation2};
`

export const Image = styled(ImageRoot)`
  height: 120px;
  transition: all 0.2s ease-in;

  &:hover {
    filter: brightness(80%);
  }
`
