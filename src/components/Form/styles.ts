import styled from 'styled-components'
import { Props } from '.'

export default styled.form<Partial<Props>>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  
  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`
