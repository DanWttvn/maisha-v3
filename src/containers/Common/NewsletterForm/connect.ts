import { yupResolver } from 'helpers/yup'

import { useForm } from 'react-hook-form'
import { FormValues, schema } from './types'
import { postNewsletterMember } from 'services/members'

export const useConnect = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    mode: 'all',
    resolver: yupResolver(schema),
  })

  const sendForm = async ({ email }: FormValues) => {
    try {
      await postNewsletterMember({ email })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  const onSubmit = handleSubmit(sendForm)

  return {
    register,
    isSubmitSuccessful,
    isSubmitting,
    onSubmit,
  }
}
