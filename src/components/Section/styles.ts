import styled from 'styled-components'
import { Props } from '.'

export default styled.div<Props>`
  position: relative;
  width: 100%;
  max-width: 2500px;
  margin: 0 auto;
  padding-top: 90px;
  padding-bottom: 20px;
  margin-top: -40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ styles }) => ({ ...styles })}
`
