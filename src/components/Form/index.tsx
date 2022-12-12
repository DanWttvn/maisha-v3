import { FC, cloneElement, Children, ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { BaseProps } from 'models'
import Styled from './styles'

export interface Props extends BaseProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit: (data: Record<string, any>) => void
  id?: string
}

const Form: FC<Props> = ({ children, handleSubmit, id, isFullWidth, isHidden, styles }) => {
  const { register, handleSubmit: handleFormSubmit } = useForm()

  const inputs = Children.map(children as ReactElement, (x) => {
    const inputTypes = [ 'InputText' ]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!inputTypes.includes((x?.type as any)?.displayName)) return x
    return cloneElement(x, { register })
  })
  
  if (isHidden) return null

  return (
    <Styled id={id} onSubmit={handleFormSubmit(handleSubmit)} isFullWidth={isFullWidth} styles={styles}>
      {inputs}
    </Styled>
  )
}

export default Form