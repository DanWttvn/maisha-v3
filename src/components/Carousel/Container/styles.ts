import styled from 'styled-components'
import { BaseProps } from 'models'
import SubtitleRoot from 'components/Subtitle'

export default styled.section<BaseProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  position: relative;

  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%;' : '')};
  ${({ styles }) => ({ ...styles })}
`

export const Content = styled.div<BaseProps>`
  position: relative;
  height: 100%;
  overflow: hidden;

  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%;' : '')};
  ${({ styles }) => ({ ...styles })};
`

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  margin: 5px 0;
  box-sizing: border-box;
  width: fit-content;
  display: flex;
  align-items: center;
  height: 100%;
`

export const Subtitle = styled(SubtitleRoot)`
  position: absolute;
  top: 10px;
  left: 5rem;
  z-index: 1;

  @media ${({ theme }) => theme.breakpoints.s} {
    left: 2rem;
  }
`
