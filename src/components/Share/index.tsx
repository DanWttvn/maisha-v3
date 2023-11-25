import Text from 'components/Text'
import { useLogic } from './logic'
import { Container, IconContainer, Button, ShareIcon, Dropdown } from './styles'
import type { Props } from './types'
import { useState } from 'react'

export default function Share({ url, ...props }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const { domain, socialMediaList } = useLogic()

  return (
    <Container {...props}>
      <Button
        $isOpen={isOpen}
        onClick={e => {
          e.stopPropagation()
          setIsOpen(prev => !prev)
        }}
      >
        <ShareIcon />
        <Text tag="span" size="s">
          Compartir
        </Text>
      </Button>

      {/*  TO-DO: close on click outside */}
      {isOpen && (
        <Dropdown onBlur={() => setIsOpen(false)}>
          {socialMediaList.map(x => (
            <a
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
