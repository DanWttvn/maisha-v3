import { urls } from 'globals/routes'
import { yupResolver } from 'helpers/yup'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormValues, schema } from './types'

export const useConnect = ({ forcedAmount }: { forcedAmount: number }) => {
  const { push } = useRouter()
  const [selectedAmount, setSelectedAmount] = useState<number | null>(
    forcedAmount || null,
  )
  const [customAmount, setCustomAmount] = useState(0)
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false)
  const [generalErrors, setGeneralErrors] = useState<
    ('no-amount' | 'fail' | 'smaller-than-min')[]
  >([])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: 'all',
    resolver: yupResolver(schema),
  })

  const handleSelectAmount = (value: number) => {
    setSelectedAmount(value)
    if (value !== 0) setGeneralErrors([])
  }

  const handleInputChange = (value: string) => {
    setCustomAmount(Number(value))
    handleSelectAmount(Number(value))
    if (value !== '0') setGeneralErrors([])
  }

  const sendForm = async (data: FormValues) => {
    // Validation
    if (!selectedAmount)
      return setGeneralErrors([...generalErrors, 'no-amount'])
    if (selectedAmount < 5)
      return setGeneralErrors([...generalErrors, 'smaller-than-min'])

    // Parse Data
    const parsedData = {
      NOMBRE: data.name,
      APELLIDOS: data.lastName,
      ID: data.dni,
      EMAIL: data.email,
      CODIGO_POSTAL: data.zipCode,
      CUENTA_BANCARIA: data.IBAN,
      APORTACION_MENSUAL: String(selectedAmount || 0),
    }

    const formData = new FormData()
    Object.entries(parsedData).map(([name, value]) =>
      formData.append(name, value),
    )

    try {
      await fetch(`${process.env['REACT_APP_JOIN_SENDINBLUE']}`, {
        method: 'POST',
        body: formData,
      })

      void push(urls.thanks)
    } catch (error) {
      setGeneralErrors([...generalErrors, 'fail'])
    }
  }

  const onSubmit = handleSubmit(sendForm)

  return {
    register,
    errors,
    generalErrors,
    isSubmitting,
    onSubmit,
    handleSelectAmount,
    handleInputChange,
    selectedAmount,
    customAmount,
    isPolicyModalOpen,
    setIsPolicyModalOpen,
  }
}
