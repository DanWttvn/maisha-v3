import styled, { css } from 'styled-components'
import { Cross as CrossRoot } from 'styled-icons/entypo'
import { BaseProps } from 'models'
import { Props } from '.'

export default styled.div<BaseProps & { $variant: Props['variant'] }>`
  z-index: ${({ theme }) => theme.zIndex.high};
  position: fixed;
  width: 60%;
  max-width: 600px;
  padding: 20px 30px;
  padding-block: 20px;
  padding-inline: 30px 34px;
  border-radius: 5px;
  bottom: 30px;
  right: 30px;
  box-shadow: ${({ theme }) => theme.shadows.elevation3};

  ${({ $variant }) =>
    $variant === 'A' &&
    css`
      background: ${({ theme }) => theme.colors.darkestRed};
      color: ${({ theme }) => theme.colors.offOrange};
    `};

  ${({ $variant }) =>
    $variant === 'B' &&
    css`
      background: rgba(0, 0, 0, 0.7);
      color: ${({ theme }) => theme.colors.white};
    `};

  ${({ styles }) => ({ ...styles })}
`

export const Cross = styled(CrossRoot)`
  position: absolute;
  top: 17px;
  right: 20px;
  width: 25px;
  cursor: pointer;
`
