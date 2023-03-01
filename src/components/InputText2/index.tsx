import { FC, HTMLProps } from 'react'
import { BaseProps } from 'models'
import { Styled, Input, Label } from './styles'
import Text from 'components/Text'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

export interface Props extends BaseProps {
  register: UseFormRegisterReturn;
  label?: string;
  type?: 'text' | 'number' | 'email';
  value?: HTMLProps<HTMLInputElement>['value'];
  helper?: string
  autoComplete?: string;
  error?: FieldError;
}

const InputText2: FC<Props> = ({
  register,
  isHidden,
  label,
  type = 'text',
  value,
  error,
  helper,
  isFullWidth,
  autoComplete,
  className,
}) => {
  if (isHidden) return null

  return (
    <Styled className={className} isFullWidth={isFullWidth}>
      <Input 
        type={type}
        value={value}
        placeholder=" "
        autoComplete={autoComplete}
        {...register}
      />
      <Label>{label} *</Label>
      {!!helper && (
        <Text size='xs' color='lightGrey' isFullWidth>{helper}</Text>
      )}
      {!!error && (
        <Text size='xs' color='brightRed' isFullWidth>{error.message}</Text>
      )}
    </Styled>
  );
}


InputText2.displayName = 'InputText2'

export default InputText2
