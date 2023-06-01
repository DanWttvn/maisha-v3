import styled from 'styled-components'
import { BaseProps } from 'models'
import TextRoot from 'components/Text'
import ImageRoot from 'components/Image'

export default styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 7% 7% 10%;
  line-height: 1.59rem;
  height: 70vh;
  overflow: hidden;
  max-height: 600px;
`

export const Image = styled(ImageRoot)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(70%);
  z-index: -1;
`

const Quote = styled.span<BaseProps>`
  position: relative;
  color: white;
  font-size: 120px;
  font-style: italic;
  font-weight: 800;

  @media ${({ theme }) => theme.breakpoints.m} {
    font-size: 3.75rem;
  }
`

export const OpenQuote = styled(Quote)`
  top: 1px;
  line-height: 75px;
  margin-right: -20px;
  left: 7px;

  &::before {
    content: '“';
  }
`

export const CloseQuote = styled(Quote)`
  top: 20px;
  line-height: 55px;

  &::before {
    content: '”';
  }

  @media ${({ theme }) => theme.breakpoints.m} {
    top: 10px;
    line-height: 12px;
  }
`

export const Text = styled(TextRoot)`
  font-size: 3.125rem;
  line-height: 130%;

  @media ${({ theme }) => theme.breakpoints.m} {
    font-size: 2rem;
    line-height: 3rem;
  }
`
