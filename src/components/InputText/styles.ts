import { BaseProps } from 'models'
import styled from 'styled-components'

export const Styled = styled.div<BaseProps>`
  position: relative;
  padding-block: 20px;

  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%;' : '')};
  ${({ styles }) => ({ ...styles })};
`

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: ${({ theme }) => theme.weights.semibold};
  pointer-events: none;
  transform: translateY(30px);
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightestGrey};
  padding: 6px 0;
  width: 100%;

  &:focus,
  &:not(:placeholder-shown) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkestRed};

    & + ${Label} {
      transform: translateY(0) scale(0.75);
      transform-origin: top left;
      color: ${({ theme }) => theme.colors.darkestRed};
    }
  }

  /**For Chrome */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }

  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active,
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0rem 62.5rem white inset !important;
    box-shadow: 0 0 0px 1000px white inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }
  /**For Firefox */
  :autofill {
    background: transparent !important;
  }
`
