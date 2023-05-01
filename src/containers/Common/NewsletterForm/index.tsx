import React, { FC } from 'react'
import Text from 'components/Text'
import Container from 'components/Container'
import { BaseProps } from 'models'
import { Arrow, EmailInput, Form, Button } from './styles'

export interface Props extends BaseProps {
  onClose?: () => void
}

const NewsletterForm: FC<Props> = () => (
  <Container>
    <Text color="offOrange" size="s">
      Subscribete a nuestra newsletter y no te pierdas ninguna novedad!
    </Text>
    <Form
      action={process.env['REACT_APP_SUBSCRIBE_SENDINBLUE']}
      id="sib-form"
      method="POST"
      data-type="subscription"
      target="_blank">
      <EmailInput
        placeholder="introduce tu email..."
        type="email"
        id="EMAIL"
        name="EMAIL"
      />
      <Button variant="B" type="submit">
        <Arrow size="20" />
      </Button>
      <div
        id="error-message"
        className="sib-form-message-panel"
        style={{ display: 'none' }}
      />
      <div
        id="success-message"
        className="sib-form-message-panel"
        style={{ display: 'none' }}
      />
    </Form>
  </Container>
)

export default NewsletterForm
