import Text from 'components/Text'
import { useLogic } from './logic'
import { Container, IconContainer, Button, ShareIcon, Dropdown } from './styles'
import type { Props } from './types'
import { useState } from 'react'

export default function Share({ url, ...props }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const { domain, socialMediaList } = useLogic()

  return (
    <Container onBlur={() => setIsOpen(false)} {...props}>
      <Button
        $isOpen={isOpen}
        onClick={e => {
          e.stopPropagation()
          setIsOpen(true)
        }}
      >
        <ShareIcon />
        <Text tag="span" size="s">
          Compartir
        </Text>
      </Button>

      {isOpen && (
        <Dropdown>
          {socialMediaList.map(x => (
            <a
              onClick={e => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              key={x.name}
              href={`${x.href}${domain}${url}`}
            >
              <IconContainer>
                <x.Icon />
              </IconContainer>
            </a>
          ))}
        </Dropdown>
      )}
    </Container>
  )
}
