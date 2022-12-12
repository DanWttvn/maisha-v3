import React, { FC, useContext, useEffect, useState } from 'react'
import Banner from 'components/Banner'
import Button from 'components/Button'
import Text from 'components/Text'
import LanguageContext from 'contexts/language'
import { checkCookie, setCookie } from 'helpers/cookies'
import { BaseProps } from 'models'
import PolicyModal from 'containers/Common/PolicyModal'

const PolicyBanner: FC<BaseProps> = () => {
  const { lang } = useContext(LanguageContext)
  const [ isShown, setIsShown ] = useState(false)
  const [ isPolicyModalOpen, setIsPolicyModalOpen ] = useState(false)

  useEffect(() => {
    if (isShown) return
    const isPolicyAccepted = checkCookie('is_policy_accepted')
    if (isPolicyAccepted !== 'true') setIsShown(true)
  }, [])

  const handleAccept = () => {
    setCookie('is_policy_accepted', 'true', 15)
    setIsShown(false)
  }

  return (
    <>
      <Banner variant="A" isShown={isShown} styles={{ padding: '20px 30px', alignItems: 'center' }}>
        <Text size="s" styles={{ flex: 1 }}>
          {lang === 'ES' && 'Esta web utiliza cookies para proporcionar un uso personalizado al usuario del Web. Si continuas la navegación consideramos que aceptas su uso.'}
          {lang === 'EN' && 'This website uses cookies to provide personalized use to the Web user. If you continue browsing we consider that you accept its use.'}
          {lang === 'SW' && 'Tovuti hii hutumia kuki kutoa matumizi ya kibinafsi kwa mtumiaji wa Wavuti. Ukiendelea kuvinjari tunathibitisha kuwa unakubali matumizi yake.'}
          <Text size="s" onClick={() => setIsPolicyModalOpen(true)} styles={{ textDecoration: 'underline', marginLeft: 8 }}>
            {lang === 'ES' && 'Política de Privacidad'}
            {lang === 'EN' && 'Privacy Policy'}
            {lang === 'SW' && 'Sera ya faragha'}
          </Text>
        </Text>
        <Button variant="G" onClick={handleAccept} styles={{ marginLeft: 'auto' }}>
          {lang === 'ES' && 'Aceptar'}
          {lang === 'EN' && 'Accept'}
          {lang === 'SW' && 'Kubali'}
        </Button>
      </Banner>
      <PolicyModal isHidden={!isPolicyModalOpen} onClose={() => setIsPolicyModalOpen(false)} />
    </>
  )
}

export default PolicyBanner
