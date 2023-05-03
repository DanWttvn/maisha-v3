import React, { FC, useContext, useEffect, useState } from 'react'
import Button from 'components/Button'

import Text from 'components/Text'

import Banner from 'components/Banner'
import { useRouter } from 'next/router'
import { urls } from 'globals/routes'
import LanguageContext from 'contexts/language'

const JoinBanner: FC = () => {
  const { push } = useRouter()
  const { lang } = useContext(LanguageContext)
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 120) setIsShown(true)
      else setIsShown(false)
    }

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Banner
      variant="B"
      isShown={isShown}
      isHidden={lang !== 'ES'}
      styles={{ padding: '20px 20%', alignItems: 'center' }}>
      <Text color="black" weight="semibold">
        Ayúdanos a seguir creciendo!
      </Text>
      <Button
        variant="B"
        onClick={() => void push(urls.landing2)}
        styles={{ marginLeft: 'auto' }}>
        ÚNETE
      </Button>
    </Banner>
  )
}

export default JoinBanner
