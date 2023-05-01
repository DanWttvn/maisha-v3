import styled from 'styled-components'
import { KeyboardArrowRight } from '@styled-icons/material/KeyboardArrowRight'
import ButtonRoot from 'components/Button'

export const Arrow = styled(KeyboardArrowRight)`
  color: ${({ theme }) => theme.colors.darkestRed};
`

export const Form = styled.form`
  display: flex;
  margin-top: 12px;
  width: 100%;
`

export const EmailInput = styled.input`
  font-weight: ${({ theme }) => theme.weights.bold};
  font-size: 0.8rem;
  border-radius: 5px;
  border: none;
  padding: 8px 12px;
  margin-right: 8px;
  flex: 1;
  min-width: 0;
`

export const Button = styled(ButtonRoot)`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.brightRed};
  }
`
