import styled from 'styled-components'
import { circularRotate, prixClipFix } from 'styles/animations'
import { Props } from '.'

export default styled.span<Props>`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  position: relative;
  animation: ${circularRotate} 1s linear infinite;
  margin: 1.5rem auto;

  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid ${({ theme }) => theme.colors.darkRed};
    animation: ${prixClipFix} 2s linear infinite;
  }

  ${({ styles }) => ({ ...styles })}
`
