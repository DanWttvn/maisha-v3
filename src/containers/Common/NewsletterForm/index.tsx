/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { FC } from 'react'
import Text from 'components/Text'
import Container from 'components/Container'
import { BaseProps } from 'models'
import { Arrow, EmailInput, Form, Button } from './styles'
import { useConnect } from './connect'

export interface Props extends BaseProps {
  onClose?: () => void
}

const NewsletterForm: FC<Props> = () => {
  const { register, isSubmitSuccessful, isSubmitting, onSubmit } = useConnect()

  return (
    <Container>
      {!isSubmitSuccessful ? (
        <>
          <Text color="offOrange" size="s">
            Subscribete a nuestra newsletter y no te pierdas ninguna novedad!
          </Text>

          <Form onSubmit={onSubmit} noValidate>
            <EmailInput
              placeholder="introduce tu email..."
              type="email"
              id="email"
              {...register('email')}
            />
            <Button variant="B" type="submit" isDisabled={isSubmitting}>
              <Arrow size="20" />
            </Button>
          </Form>
        </>
      ) : (
        <Text color="offOrange" size="m" weight="bold">
          Ya te has unido a la newsletter!
        </Text>
      )}
    </Container>
  )
}

export default NewsletterForm
