import styled from 'styled-components'
import RootImage from 'components/Image'
import SectionRoot from 'components/Section'
import { headerAnimation, scrollIconAnimation } from 'styles/animations'
import { KeyboardArrowDown } from '@styled-icons/material/KeyboardArrowDown'

export const Section = styled(SectionRoot)`
  height: 100vh;
  box-shadow: ${({ theme }) => theme.shadows.elevation4};
`

export const Image = styled(RootImage)`
  width: 70%;
  animation: 2s ease-out forwards ${headerAnimation};
`

export const Icon = styled(KeyboardArrowDown)`
  position: absolute;
  margin: 0 auto;
  width: 40px;
  color: rgb(170, 170, 170);
  animation: ${scrollIconAnimation} 0.8s ease-out infinite;
  cursor: pointer;
`
