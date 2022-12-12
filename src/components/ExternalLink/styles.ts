import styled from 'styled-components'
import { Props } from '.'
import { LinkStyles } from 'components/AppLink/styles'
import { TextStyles } from 'components/Text/styles'

export default styled.a<Props>`
  ${TextStyles}
  ${LinkStyles}
`
