import { FC, ChangeEvent, useState } from 'react'
import { BaseProps, InputProps } from 'models'
import theme from 'styles/themes/light'
import {Styled, Input, Label} from './styles'

export interface Props extends BaseProps, InputProps {
  label?: string
  name: string
  autocomplete?: string
  type?: 'text' | 'number' | 'email'
  onChange?: (value: string) => void
  helper?: string
  register?: any
}

const InputText2: FC<Props> = ({
  isHidden,
  styles,
  name,
  label,
  autocomplete,
  type = 'text',
  onChange,
  isError,
  helper,
  isRequired,
  register,
  isFullWidth,
  className,
}) => {
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const nextValue = event.currentTarget.value
    setValue(nextValue)
    if (onChange) onChange(nextValue)
  }

  if (isHidden) return null

  return (
    <Styled className={className}>
      <Input 
        value={value}
        type="text"
        name={name}
        onChange={handleChange}
        placeholder=" "
      />
      <Label>{label} *</Label>
    </Styled>
  )
}

InputText2.displayName = 'InputText2'

export default InputText2

// TODOs: quitar required
