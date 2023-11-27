import { SocialNetwork } from './types'
import { Facebook } from '@styled-icons/entypo-social/Facebook'
import { Twitter } from '@styled-icons/entypo-social/Twitter'
import { Linkedin } from '@styled-icons/entypo-social/Linkedin'
import { useEffect, useState } from 'react'

export function useLogic() {
  const [domain, setDomain] = useState<string>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname
      setDomain(currentDomain)
    }
  }, [])

  const socialMediaList: SocialNetwork[] = [
    {
      name: 'Facebook',
      Icon: Facebook,
      href: 'https://www.facebook.com/sharer/sharer.php?u=',
    },
    {
      name: 'Twitter',
      Icon: Twitter,
      href: 'https://twitter.com/intent/tweet?url=',
    },
    {
      name: 'Linkedin',
      Icon: Linkedin,
      href: 'https://www.linkedin.com/shareArticle?mini=true&url=',
    },
  ]

  return {
    domain,
    socialMediaList,
  }
}
