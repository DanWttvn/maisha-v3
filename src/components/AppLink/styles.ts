import styled, { css } from 'styled-components'
import { Link as ScrollLinkRoot, LinkProps } from 'react-scroll'
import NextLink from 'next/link'
import { Props } from '.'
import { TextStyles } from 'components/Text/styles'

export const LinkStyles = css<Props>`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ variant }) =>
    variant === 'app' &&
    css`
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.darkRed};
      &:hover {
        color: ${({ theme }) => theme.colors.brightRed};
      }
    `};

  ${({ variant }) =>
    variant === 'menu' &&
    css`
      color: rgb(170, 170, 170);
      &:hover {
        color: rgb(224, 133, 133);
      }
    `};

  ${({ variant }) =>
    variant === 'footer' &&
    css`
      color: ${({ theme }) => theme.colors.offOrange};
      &:hover {
        color: ${({ theme }) => theme.colors.brightRed};
      }
    `};

  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%;' : '')}
  ${({ styles }) => ({ ...styles })}
`

export const ScrollLink = styled(ScrollLinkRoot)<Props & LinkProps>`
  ${TextStyles}
  ${LinkStyles}
`

export const RouteLink = styled(NextLink)<Props>`
  ${TextStyles}
  ${LinkStyles}
`
