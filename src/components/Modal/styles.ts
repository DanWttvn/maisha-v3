import styled from 'styled-components'
import { Cross as CrossRoot } from 'styled-icons/entypo'
import { BaseProps } from 'models'
import { Color } from 'styles/themes'

export default styled.div<BaseProps>`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  background: ${({ theme }) => theme.colors.white};
  height: fit-content;
  overflow: scroll;
  padding: 32px;
  border-radius: 30px;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
    width: 5px;
  }

  ${({ styles }) => ({ ...styles })}
`

export const Cross = styled(CrossRoot)<{ color: Color }>`
  position: absolute;
  top: 17px;
  right: 20px;
  color: ${({ theme, color }) => theme.colors[color]};
  width: 25px;
  cursor: pointer;
`
