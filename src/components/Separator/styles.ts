import styled from 'styled-components'
import { BaseProps } from 'models'

export default styled.div<BaseProps>`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightestGrey};
  height: 1px;

  ${({ styles }) => ({ ...styles })};
`
