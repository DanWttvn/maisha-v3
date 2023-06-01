import styled from 'styled-components'
import { Bars as BarsRoot } from '@styled-icons/fa-solid/Bars'
import { Cross as CrossRoot } from 'styled-icons/entypo'
import { colorFadeInAnimation } from 'styles/animations'
import { Li as DefaultLi } from 'components/NavItem/styles'

export default styled.nav<{ isOpen: boolean; isHeroSection: boolean }>`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 20px 50px;
  background: #fff;
  opacity: ${({ isHeroSection }) => (isHeroSection ? 0 : 1)};
  box-shadow: ${({ theme }) => theme.shadows.elevation2};
  z-index: ${({ theme }) => theme.zIndex.medium};

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;

  height: ${({ isOpen }) => (isOpen ? '115px' : '90px')};
  transition: all 0.4s ease-in-out;
`

export const Hamburger = styled(BarsRoot)`
  position: absolute;
  top: 36px;
  right: 24px;
  z-index: ${({ theme }) => theme.zIndex.medium};
  color: ${({ theme }) => theme.colors.lightGrey};
  width: 18px;
  cursor: pointer;
  display: none;

  @media (max-width: 1470px) {
    display: block;
  }
`

export const ItemsWrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndex.high};
`

export const Backdrop = styled.div<{ $isResponsiveOpen: boolean }>`
  display: ${({ $isResponsiveOpen }) => ($isResponsiveOpen ? 'block' : 'none')};
  animation: 0.4s ease-in-out ${colorFadeInAnimation} forwards;
  position: fixed;
  inset: 0;
  cursor: pointer;
`

export const Menu = styled.ul<{ $isResponsiveOpen: boolean }>`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style: none;

  @media (max-width: 1470px) {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 80%;
    right: ${({ $isResponsiveOpen }) => ($isResponsiveOpen ? '0px' : '-80%')};
    background: #fff;
    box-shadow: ${({ theme }) => theme.shadows.elevation2};
    flex-flow: column nowrap;
    transition: all 0.3s ease-in-out;
  }
`

export const Cross = styled(CrossRoot)<{ $isResponsiveOpen: boolean }>`
  position: absolute;
  top: 36px;
  right: 24px;
  color: ${({ theme }) => theme.colors.lightGrey};
  width: 25px;
  cursor: pointer;
  display: ${({ $isResponsiveOpen }) => ($isResponsiveOpen ? 'block' : 'none')};
  z-index: ${({ theme }) => theme.zIndex.high};
`

export const VerticalDivider = styled.div`
  width: 1px;
  height: 15px;
  margin: auto 0;
  background-color: rgba(204, 204, 204, 0.3);
  opacity: 0.5;
`

export const Li = styled(DefaultLi)`
  font-weight: ${({ theme }) => theme.weights.semibold};
  padding: 20px 10px;
`
