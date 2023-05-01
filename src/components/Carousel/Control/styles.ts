import styled from 'styled-components'
import { KeyboardArrowRight } from '@styled-icons/material/KeyboardArrowRight'

export default styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1;
  bottom: 60px;
  width: 100%;
  padding: 0 50px;

  @media ${({ theme }) => theme.breakpoints.s} {
    padding: 0 2rem;
  }
`

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const NodesWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.darkOrange};
  top: 22px;
`

export const NodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Node = styled.div`
  position: relative;
  padding: 15px 0;
  color: white;
  font-weight: ${({ theme }) => theme.weights.bold};
  left: -1px;
  z-index: 1;
  cursor: pointer;
  border-radius: 3px;

  display: flex;
  justify-content: center;

  transition: color 0.3s ease-in-out;

  &::before {
    position: relative;
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: ${({ theme }) => `1px solid ${theme.colors.darkOrange}`};
    background: rgba(241, 98, 58, 0.4);
    left: 50%;
    transform: translateX(-7px);
  }

  &::after {
    position: relative;
    content: '';
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #fff;
    top: 6px;
    left: -50%;
    transform: translateX(2px);
  }
`

export const Icon = styled(KeyboardArrowRight)<{ isLeft?: boolean }>`
  width: 1.2rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ isLeft }) => (isLeft ? 'transform: rotate(180deg);' : '')};
`
