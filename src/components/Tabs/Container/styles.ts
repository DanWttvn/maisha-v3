import styled, { css } from 'styled-components'
import { Props } from './'

export default styled.section<Props>`
  display: flex;
  flex-direction: column;

  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`

export const TabBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`
export const TabButton = styled.button<{ isActive?: boolean }>`
  outline: none;
  border: none;
	padding: 2px 10px;
	font-size: 0.9em;
	font-weight: ${({ theme}) => theme.weights.bold};
	background: none;
	color: #888;
	transition: all 0.1s ease-out;

  ${({ isActive, theme }) => isActive && css`
    color: ${theme.colors.black};
    border-bottom: 2px solid ${theme.colors.black};
  `}

  &:hover,
  &:active  {
    color: ${({ theme }) => theme.colors.black};
  }
`
