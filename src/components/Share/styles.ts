import styled from 'styled-components'
import { Share as DefaultShareIcon } from '@styled-icons/material/Share'
import { BaseProps } from 'models'

export const Container = styled.div<BaseProps>`
  position: relative;
  ${({ styles }) => ({ ...styles })};
`

export const Button = styled.button<{ $isOpen: boolean }>`
  display: flex;
  gap: 0.5rem;
  padding: 6px 10px;
  margin-inline-start: auto;
  align-items: center;
  border-radius: 8px;

  :hover {
    outline: ${({ theme, $isOpen }) =>
      $isOpen ? 'none' : `1px solid ${theme.colors.black}`};
  }
`

export const ShareIcon = styled(DefaultShareIcon)`
  width: 1rem;
  color: ${({ theme }) => theme.colors.black};
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.2rem;
  color: ${({ theme }) => theme.colors.black};
`

export const Dropdown = styled.div`
  position: absolute;
  top: 2.25rem;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.black};

  a {
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;

    :hover {
      outline: 1px solid ${({ theme }) => theme.colors.black};
    }
  }
`
