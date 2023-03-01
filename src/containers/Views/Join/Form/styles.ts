import styled from 'styled-components'
import Button from 'components/Button'
import Input from 'components/Input'

export const OptionsButton = styled(Button).attrs({
  variant: 'A',
})`
  margin: 0.625rem 0.3125rem;
  font-weight: bold;
  font-size: 1.3rem;
`

export const AmountInput = styled(Input)`
  margin-right: 0.75rem;
  font-size: 1.1rem;
  width: 3.125rem;
`
