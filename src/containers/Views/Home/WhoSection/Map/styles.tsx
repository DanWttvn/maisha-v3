import styled, { css } from 'styled-components'
import ButtonRoot from 'components/Button'
import ModalRoot from 'components/Modal'
import SubtitleRoot from 'components/Subtitle'
import { BaseProps } from 'models'

export default styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  background: url(/images/map.webp);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${({ theme }) => theme.breakpoints.sl} {
    height: 70vh;
  }
`

export const SectionSubtitle = styled(SubtitleRoot)`
  position: absolute;
  top: 30px;

  ${({ isFullWidth, theme }) =>
    !isFullWidth &&
    css`
      padding-left: 120px;
      padding-right: 120px;

      @media ${theme.breakpoints.m} {
        padding-left: 80px;
        padding-right: 80px;
      }
      @media ${theme.breakpoints.s} {
        padding-left: 40px;
        padding-right: 40px;
      }
      @media ${theme.breakpoints.xs} {
        padding-left: 20px;
        padding-right: 20px;
      }
    `}
`

const Card = styled.div<BaseProps>`
  position: absolute;
  border-radius: 0;
  background: ${({ theme }) => theme.colors.darkOrange};
  padding: 15px 20px 10px;
  width: 90%;
  max-width: 900px;
  font-size: 0.95rem;

  @media ${({ theme }) => theme.breakpoints.m} {
    display: none;
  }
`

export const CardSp = styled(Card)`
  top: 26%;
  left: 8%;
`

export const CardTz = styled(Card)`
  right: 8%;
  bottom: 20%;
`

const Modal = styled(ModalRoot)`
  position: absolute;
  border-radius: 0;
  background: ${({ theme }) => theme.colors.darkOrange};
  padding: 15px 20px 10px;
  font-size: 0.95rem;
  display: none;

  @media ${({ theme }) => theme.breakpoints.m} {
    display: flex;
    width: 42%;
  }

  @media ${({ theme }) => theme.breakpoints.sl} {
    width: 280px;
  }

  ${({ styles }) => ({ ...styles })}
`

export const ModalSp = styled(Modal)`
  top: 26%;
  left: 8%;
`

export const ModalTz = styled(Modal)`
  right: 8%;
  bottom: 20%;
`

export const Button = styled(ButtonRoot)`
  position: absolute;
  z-index: 1;
  display: none;

  @media ${({ theme }) => theme.breakpoints.m} {
    display: flex;
  }
`

export const ButtonSp = styled(Button)`
  top: 17%;
  left: 29%;
  @media ${({ theme }) => theme.breakpoints.sl} {
    left: 26%;
  }
  @media ${({ theme }) => theme.breakpoints.s} {
    left: 20%;
  }
  @media ${({ theme }) => theme.breakpoints.xs} {
    left: 12%;
  }
`

export const ButtonTz = styled(Button)`
  bottom: 11%;
  right: 24%;
  @media ${({ theme }) => theme.breakpoints.sl} {
    right: 21%;
  }
  @media ${({ theme }) => theme.breakpoints.s} {
    right: 11%;
  }
  @media ${({ theme }) => theme.breakpoints.xs} {
    right: 5%;
  }
`
