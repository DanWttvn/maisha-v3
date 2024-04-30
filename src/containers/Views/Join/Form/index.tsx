/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { FC } from 'react'
import { BaseProps } from 'models'
import Button from 'components/Button'
import Text from 'components/Text'
import Container from 'components/Container'
import SkipWrap from 'components/SkipWrap'
import PolicyModal from 'containers/Common/PolicyModal'
import InputText from 'components/InputText'
import { OptionsButton, AmountInput } from './styles'
import { useConnect } from './connect'

export interface Props extends BaseProps {
  selectedAmount: number
  variant: '1' | '2' | '3'
}

//TODOs: add recaptcha
const JoinForm: FC<Props> = ({
  selectedAmount: forcedAmount,
  variant,
  isHidden,
  styles,
}) => {
  const {
    register,
    errors,
    isSubmitting,
    onSubmit,
    handleSelectAmount,
    handleInputChange,
    selectedAmount,
    customAmount,
    isPolicyModalOpen,
    setIsPolicyModalOpen,
    generalErrors,
  } = useConnect({ forcedAmount })

  if (isHidden) return null

  return (
    <>
      <form onSubmit={onSubmit} style={{ ...styles, width: '100%' }} noValidate>
        <InputText
          label="Nombre"
          autocomplete="first-name"
          error={errors.name}
          register={register('name')}
        />
        <InputText
          label="Apellidos"
          autocomplete="family-name"
          error={errors.lastName}
          register={register('lastName')}
        />
        {/* <InputText
          label="DNI/Pasaporte"
          autocomplete="id"
          error={errors.dni}
          register={register('dni')}
        /> */}
        <InputText
          label="Email"
          type="email"
          autocomplete="email"
          error={errors.email}
          register={register('email')}
        />
        {/* <InputText
          label="Código Postal"
          type="number"
          autocomplete="postal-code"
          error={errors.zipCode}
          register={register('zipCode')}
        /> */}
        <InputText
          label="Cuenta Bancaria"
          autocomplete="IBAN"
          helper="Recuerda que debes añadir el IBAN (Ej.: ES1212341234110123456789)"
          styles={{ marginBottom: 32 }}
          error={errors.iban}
          register={register('iban')}
        />

        <Container
          isHidden={variant !== '3'}
          styles={{ marginBottom: 16 }}
          isFullWidth
        >
          <Container styles={{ margin: '0 auto' }}>
            <Text weight="bold" styles={{ marginBottom: 8 }} isFullWidth>
              Donación mensual
            </Text>
            {[9, 15].map(amount => (
              <OptionsButton
                key={amount}
                onClick={() => handleSelectAmount(amount)}
                isSelected={
                  selectedAmount === amount && customAmount !== amount
                }
              >
                {amount}€
              </OptionsButton>
            ))}
            <OptionsButton
              onClick={() => handleSelectAmount(customAmount)}
              isSelected={selectedAmount === customAmount}
            >
              <AmountInput type="number" onChange={handleInputChange} />€
            </OptionsButton>
          </Container>

          <Text
            isHidden={selectedAmount !== 5}
            color="black"
            size="s"
            styles={{ maxWidth: 860 }}
          >
            *Para evitar comisiones del banco y sacar el máximo provecho a tu
            aportación, retiraremos cada dos meses 10€ de tu cuenta
          </Text>
          <SkipWrap />
          <Text
            isHidden={!generalErrors.includes('no-amount')}
            color="brightRed"
            weight="black"
            isFullWidth
          >
            *Por favor, selecciona una cantidad mensual
          </Text>
          <Text
            isHidden={!generalErrors.includes('smaller-than-min')}
            color="brightRed"
            weight="black"
            isFullWidth
          >
            *La cantidad mínima es de 5€
          </Text>
        </Container>

        <input
          type="checkbox"
          style={{ margin: '4px 12px 0 0' }}
          required
          {...register('termsAccepted')}
        />
        <Text size="xs" styles={{ marginRight: 6 }}>
          He leído y acepto la
        </Text>
        <Text
          size="xs"
          onClick={() => setIsPolicyModalOpen(true)}
          styles={{ textDecoration: 'underline' }}
        >
          Política de Privacidad
        </Text>
        {!!generalErrors.includes('terms-not-accepted') && (
          <Text size="xs" color="brightRed" isFullWidth>
            Debes aceptar la Política de Privacidad
          </Text>
        )}
        <SkipWrap />
        <Text
          color="brightRed"
          weight="bold"
          styles={{ marginBottom: 16 }}
          isHidden={!generalErrors.includes('fail')}
          isFullWidth
        >
          Ha ocurrido un error, por favor, vuelve a intentarlo más tarde o envía
          un email a info@maisharoots.org
        </Text>
        <Button
          type="submit"
          isLoading={isSubmitting}
          styles={{ margin: '0 auto' }}
        >
          Enviar
        </Button>
      </form>
      <PolicyModal
        isHidden={!isPolicyModalOpen}
        onClose={() => setIsPolicyModalOpen(false)}
      />
    </>
  )
}

export default JoinForm
