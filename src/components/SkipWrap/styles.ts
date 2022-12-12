import styled from 'styled-components'
import { BaseProps } from 'models'

export default styled.figure<BaseProps>`
  width: 100%;
  ${({ styles }) => ({ ...styles })};
`
