import React, { FC, useContext, useEffect, useState } from 'react'
import LanguageContext from 'contexts/language'
import { checkCookie, setCookie } from 'helpers/cookies'
import { BaseProps } from 'models'
import NewsletterForm from 'containers/Common/NewsletterForm'
import Styled from './styles'

export interface Props extends BaseProps {
  onClose?: () => void
}

const NewsletterPopup: FC<Props> = () => {
  const { lang } = useContext(LanguageContext)
  const [isShown, setIsShown] = useState(false)
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false)

  useEffect(() => {
    const nextIsPolicyAccepted = checkCookie('is_policy_accepted')
    setIsPolicyAccepted(nextIsPolicyAccepted === 'true')
    if (isShown) return

    const isNewsletterClosed = checkCookie('is_newsletter_closed')
    if (isNewsletterClosed !== 'true') setIsShown(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClose = () => {
    setCookie('is_newsletter_closed', 'true', 1)
  }

  return (
    <Styled
      isHidden={lang !== 'ES'}
      isShown={isShown}
      onClose={handleClose}
      styles={{ bottom: isPolicyAccepted ? 30 : 100 }}>
      <NewsletterForm />
    </Styled>
  )
}
export default NewsletterPopup
