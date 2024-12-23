import { urls } from 'globals/routes'
import { yupResolver } from 'helpers/yup'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormValues, schema } from './types'
import { postMember } from 'services/members'

export const useConnect = ({ forcedAmount }: { forcedAmount: number }) => {
  const { push } = useRouter()
  const [selectedAmount, setSelectedAmount] = useState<number | null>(
    forcedAmount || null,
  )
  const [customAmount, setCustomAmount] = useState(0)
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false)
  const [generalErrors, setGeneralErrors] = useState<
    ('no-amount' | 'fail' | 'smaller-than-min' | 'terms-not-accepted')[]
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
    if (!data.termsAccepted)
      return setGeneralErrors([...generalErrors, 'terms-not-accepted']) // Temporarily solution: Should be handled by yup

    try {
      const res = await postMember({ ...data, monthlyPayment: selectedAmount })

      if (!!res) void push(urls.thanks)
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
