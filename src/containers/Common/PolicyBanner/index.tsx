import React, { FC, useContext, useEffect, useState } from 'react'
import Button from 'components/Button'
import Text from 'components/Text'
import LanguageContext from 'contexts/language'
import { checkCookie, setCookie } from 'helpers/cookies'
import { BaseProps } from 'models'
import Styled from './styles'
import { urls } from 'globals/routes'
import AppLink from 'components/AppLink'

const PolicyBanner: FC<BaseProps> = ({ isHidden, className }) => {
  const { lang } = useContext(LanguageContext)
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    if (isShown) return
    const isPolicyAccepted = checkCookie('is_policy_accepted')
    if (isPolicyAccepted !== 'true') setIsShown(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAccept = () => {
    setCookie('is_policy_accepted', 'true', 15)
    setIsShown(false)
  }

  if (isHidden) return null

  return (
    <>
      <Styled isShown={isShown} className={className}>
        <Text size="s" styles={{ flex: 1 }}>
          {lang === 'ES' &&
            'Esta web utiliza cookies para proporcionar un uso personalizado al usuario del Web. Si continuas la navegación consideramos que aceptas su uso.'}
          {lang === 'EN' &&
            'This website uses cookies to provide personalized use to the Web user. If you continue browsing we consider that you accept its use.'}
          {lang === 'SW' &&
            'Tovuti hii hutumia kuki kutoa matumizi ya kibinafsi kwa mtumiaji wa Wavuti. Ukiendelea kuvinjari tunathibitisha kuwa unakubali matumizi yake.'}
        </Text>
        <AppLink
          size="s"
          variant="menu"
          weight="normal"
          toPage={urls.policy}
          styles={{
            textDecoration: 'underline',
            color: 'white',
          }}
        >
          {lang === 'ES' && 'Política de Privacidad'}
          {lang === 'EN' && 'Privacy Policy'}
          {lang === 'SW' && 'Sera ya faragha'}
        </AppLink>
        <Button
          variant="G"
          onClick={handleAccept}
          styles={{ marginLeft: 'auto' }}
        >
          {lang === 'ES' && 'Aceptar'}
          {lang === 'EN' && 'Accept'}
          {lang === 'SW' && 'Kubali'}
        </Button>
      </Styled>
    </>
  )
}

export default PolicyBanner
