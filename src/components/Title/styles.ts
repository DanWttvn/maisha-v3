import styled, { css } from 'styled-components'
import { Props } from '.'

export default styled.h2<Partial<Props>>`
	width: fit-content;
	font-size: 4.8rem;
	letter-spacing: 4px;
	font-weight: 800;
	display: block;
  margin: 0 auto;

  display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.s} {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.8rem;
  }

  ${({ isSmall }) => isSmall && css`
    @media ${({ theme }) => theme.breakpoints.sl} {
      font-size: 4rem;
    }

    @media ${({ theme }) => theme.breakpoints.s} {
      font-size: 2.8rem;
    }

    @media (max-width: 480px) {
      font-size: 2.1rem;
    }
  `};

  ${({ styles }) => ({ ...styles })}
`

export const Wrapper = styled.span<{ content: string, isVisible: boolean }>`
	position: relative;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	font-size: 4.8rem;
	line-height: 1.2em;
	padding: 0 10px;

	-webkit-text-stroke-width: 2px;
	-webkit-text-stroke-color: ${({ theme }) => theme.colors.darkRed};
	color: transparent;
	transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(.23,1,.32,1);
  font-size: inherit;

  &:first-of-type::after {
    transition-delay: .1s;
  }

  &:nth-of-type(2)::after {
    transition-delay: .3s;
  }

  &::after { 
    position: absolute;
    inset: 0;
    padding: 0 10px;

    display: block;
    overflow: hidden;
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(.23,1,.32,1);
    white-space: nowrap;

    color: ${({ theme }) => theme.colors.darkRed};
    content: '${({ isVisible, content }) => isVisible ? `${content}` : ''}';
    width: ${({ isVisible }) => isVisible ? '100%' : 0};
  }
`

