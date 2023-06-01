import styled from 'styled-components'
import Button from 'components/Button'
import Container from 'components/Container'
import InputRoot from 'components/Input'
import Text from 'components/Text'

export default styled(Container)`
  margin: 0 auto 24px;
  transform: translateY(-50%);
  padding: 0 16px;
  z-index: ${({ theme }) => theme.zIndex.medium};
`

export const Input = styled(InputRoot)`
  width: 84px; // TODOs: it should take the width of its content
  margin-right: 12px;
  font-size: 2.5rem;

  @media ${({ theme }) => theme.breakpoints.sl} {
    font-size: 2rem;
  }
`

export const HelperText = styled(Text)`
  @media ${({ theme }) => theme.breakpoints.sl} {
    text-align: center;
  }
`

export const ErrorText = styled(HelperText).attrs({
  color: 'brightRed',
  weight: 'black',
  isFullWidth: true,
})``

export const JoinButton = styled(Button)`
  margin: 0 auto;
  font-size: 3rem;
  font-size: 2.3rem;
  font-weight: 800;
  border-radius: 40px;
  padding: 20px 35px;
  background: ${({ theme }) => theme.colors.offOrange};
  color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.colors.darkRed} 2px solid;
  z-index: ${({ theme }) => theme.zIndex.medium};

  @media ${({ theme }) => theme.breakpoints.sl} {
    font-size: 1.8rem;
  }
`
