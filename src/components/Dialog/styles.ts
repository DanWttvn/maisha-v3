import styled from 'styled-components'
import { BaseProps } from 'models'
import ModalRoot from 'components/Modal'

export default styled.div<BaseProps>`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(50,50,50,.5);
  z-index: ${({ theme }) => theme.zIndex.high};

  ${({ styles }) => ({ ...styles })}
`

export const Modal = styled(ModalRoot)<BaseProps>`
	width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`

