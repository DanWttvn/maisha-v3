import styled from 'styled-components'
import { Props } from './'

export default styled.article<Partial<Props>>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${({ styles }) => ({ ...styles })}
`
