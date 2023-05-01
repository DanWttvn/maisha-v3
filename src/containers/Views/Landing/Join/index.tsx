import React, { FC } from 'react'
import Button from 'components/Button'
import Container from 'components/Container'
import Dialog from 'components/Dialog'
import Subtitle from 'components/Subtitle'
import Text from 'components/Text'
import JoinForm from 'containers/Views/Join/Form'
import SkipWrap from 'components/SkipWrap'
import Banner from 'components/Banner'
import { handleScrollToTop } from 'helpers/screen'
import Styled, { Input, HelperText, JoinButton, ErrorText } from './styles'
import { useLogic } from './logic'

type Props = {
  variant: '1' | '2'
}

// TODOs: cuando se abra el modal, que no se pueda hacer scroll
const Join: FC<Props> = ({ variant }) => {
  const {
    handleSelectAmount,
    selectedAmount,
    customAmount,
    isError,
    isSmallerThanMin,
    handleOpenForm,
    elementRef,
    isFormModalOpen,
    setIsFormModalOpen,
    isCTAVisible,
    handleInputChange,
  } = useLogic()

  return (
    <>
      <Styled direction="vertical">
        <Container styles={{ justifyContent: 'center' }}>
          {[5, 10, 15, 20, 25].map(amount => (
            <Button
              key={amount}
              onClick={() => handleSelectAmount(amount)}
              isSelected={selectedAmount === amount && customAmount !== amount}
              variant="C">
              {amount}€
            </Button>
          ))}
          <Button
            variant="C"
            onClick={() => handleSelectAmount(customAmount)}
            isSelected={selectedAmount === customAmount}>
            <Input type="number" min={5} onChange={handleInputChange} />€
          </Button>
        </Container>
        <HelperText
          isHidden={isError}
          color="black"
          weight="semibold"
          isFullWidth>
          Elige tu aportación mensual
        </HelperText>
        <HelperText
          isHidden={selectedAmount !== 5}
          color="black"
          size="s"
          isFullWidth>
          *Para evitar comisiones del banco y sacar el máximo provecho a tu
          aportación, retiraremos cada dos meses 10€ de tu cuenta
        </HelperText>
        <SkipWrap />
        <ErrorText isHidden={!isError}>
          *Por favor, selecciona una cantidad mensual
        </ErrorText>
        <ErrorText isHidden={!isSmallerThanMin}>
          *La cantidad mínima es de 5€
        </ErrorText>
      </Styled>

      <SkipWrap />
      <JoinButton variant="B" onClick={handleOpenForm} ref={elementRef}>
        HAZTE SOCIA/O
      </JoinButton>
      <SkipWrap />

      <Dialog
        isHidden={!isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}>
        <Subtitle>Hazte socia/o</Subtitle>
        <Text color="black" weight="semibold" styles={{ marginRight: 8 }}>
          Tu aportación mensual seleccionada es de{' '}
          <strong>{selectedAmount}</strong>€.
        </Text>
        <Text
          size="s"
          color="lightGrey"
          onClick={() => setIsFormModalOpen(false)}
          styles={{
            textDecoration: 'underline',
            cursor: 'pointer',
            marginTop: 2,
          }}>
          Cambiar
        </Text>
        <SkipWrap />
        <JoinForm selectedAmount={selectedAmount || 0} variant={variant} />
      </Dialog>

      <Banner
        variant="B"
        isShown={!isCTAVisible && !isFormModalOpen}
        styles={{ padding: '20px 20%', alignItems: 'center' }}>
        <Text color="black" weight="semibold">
          Ayúdanos a seguir creciendo!
        </Text>
        <Button
          variant="B"
          onClick={handleScrollToTop}
          styles={{ marginLeft: 'auto' }}>
          ÚNETE
        </Button>
      </Banner>
    </>
  )
}
export default Join
