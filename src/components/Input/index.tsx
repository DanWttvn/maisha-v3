import { FC, KeyboardEvent } from 'react'
import { BaseProps } from 'models'
import Styled from './styles'

export interface Props extends BaseProps {
  type?: 'text' | 'number'
  onChange: (value: string) => void
  min?: number
}

const Input: FC<Props> = ({
  type = 'text',
  styles,
  className,
  min,
  onChange,
  isFullWidth,
}) => {
  const preventSymbols = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === '.' || e.key === ',') e.preventDefault()
  }

  return (
    <Styled
      step="1"
      min={min}
      onKeyDown={preventSymbols}
      onChange={e => onChange(e.currentTarget.value)}
      type={type}
      styles={styles}
      className={className}
      isFullWidth={isFullWidth}
    />
  )
}

export default Input
