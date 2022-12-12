import styled from 'styled-components'
import { Props } from '.'
import { sizeAnimation } from 'styles/animations'

const Button = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
`

export const ButtonA = styled(Button)`
  background: ${({ theme, isSelected }) => isSelected ? theme.colors.offOrange : theme.colors.darkRed};
  color: ${({ theme, isSelected, isLoading }) => isLoading ? 'transparent' : isSelected ? theme.colors.darkRed : theme.colors.offOrange};

  &:hover {
    transform: none;
    background: ${({ theme, isSelected }) => isSelected ? theme.colors.offOrange : theme.colors.brightRed};
  }

  ${({ styles }) => ({ ...styles })}
`

export const ButtonB = styled(Button)`
  background: ${({ theme }) => theme.colors.offOrange};
  color: ${({ theme, isLoading }) => isLoading ? 'transparent' : theme.colors.darkRed};
  box-shadow: ${({ theme }) => theme.shadows.elevation1};

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.colors.darkRed};
    color: ${({ theme }) => theme.colors.offOrange};
  }

  ${({ styles }) => ({ ...styles })}
`

export const ButtonC = styled(ButtonA)`
  font-size: 3rem;
  font-weight: 700;
  padding: 20px 35px;
  border-radius: 0;

  @media ${({ theme }) => theme.breakpoints.sl} {
    font-size: 2rem;
    padding: 15px 22px;
  }

  ${({ styles }) => ({ ...styles })}
`

export const ButtonD = styled(Button)`
  font-size: 0.95rem;
  background: transparent;
  font-weight: 400;
  padding: 0 5px;
  color: ${({ theme }) => theme.colors.offOrange};

  ${({ styles }) => ({ ...styles })};
`

export const ButtonE = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: ${({ theme }) => `2px solid ${theme.colors.darkOrange}`};
  background: rgba(241, 98, 58, 0.3);
  font-size: 1.2rem;

  &:hover {
    background: rgba(241, 98, 58, 0.5);
  }

  ${({ styles }) => ({ ...styles })};
`

export const ButtonF = styled(Button)`
  font-size: 25px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid white;
  color: white;
  animation: 0.7s ease-in-out infinite alternate ${sizeAnimation};

  ${({ styles }) => ({ ...styles })};
`

export const ButtonG = styled(Button)`
  font-size: 14px;
  border-radius: 5px;
  padding: 5px 10px;
  font-weight: 400;
  background: ${({ theme }) => theme.colors.offRed};
  color: ${({ theme }) => theme.colors.white};

  ${({ styles }) => ({ ...styles })};
`
