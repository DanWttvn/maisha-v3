import styled, { css } from 'styled-components'
import AppLinkRoot from 'components/AppLink'

export const Li = styled.li<{ isSubItem?: boolean }>`
  position: relative;
  font-size: ${({ isSubItem }) => (isSubItem ? '0.8125rem' : '0.875rem')};
  font-weight: ${({ theme }) => theme.weights.bold};
  text-decoration: none;
  padding: 20px;
  transition: 0.3s;
  white-space: nowrap;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  color: rgb(170, 170, 170);

  &:active {
    color: rgb(165, 42, 42);
  }
  &:hover {
    color: rgb(224, 133, 133);
  }
`

export const SubItemsWrapper = styled.ul<{ $isOpen: boolean }>`
  top: 0;
  opacity: 0;
  list-style: none;
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 50px;
  padding: 10px 0;
  z-index: ${({ theme }) => theme.zIndex.high};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      top: 35px;
      opacity: 1;
      pointer-events: all;
    `}
`

export const AppLink = styled(AppLinkRoot).attrs(() => ({
  activeClass: 'active',
}))`
  &.active {
    color: rgb(165, 42, 42);
  }
`
