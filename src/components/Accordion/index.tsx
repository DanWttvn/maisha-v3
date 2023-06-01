import { FC, useState, useRef, useEffect } from 'react'
import { BaseProps } from 'models'
import Text from 'components/Text'
import Separator from 'components/Separator'
import Styled, { Icon, Content, Wrapper, Header } from './styles'

export interface Props extends BaseProps {
  title: string
  isDefaultOpen?: boolean
}

//! poner cuando eventhandler cuando cambia el ancho de la pantalla
const Accordion: FC<Props> = ({
  isHidden,
  title,
  styles,
  children,
  isFullWidth,
  isDefaultOpen,
}) => {
  const [isOpen, setIsOpen] = useState(!!isDefaultOpen)
  const [height, setHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (!contentRef.current) return
    setHeight(contentRef.current.clientHeight)
  }, [contentRef])

  if (isHidden) return null

  return (
    <Styled styles={styles} isFullWidth={isFullWidth}>
      <Header onClick={handleToggle}>
        <Text weight="bold" styles={{ marginTop: 4 }}>
          <Icon isOpen={isOpen} onClick={handleToggle} />
          {title}
        </Text>
        <Separator styles={{ margin: '5px 0' }} />
      </Header>
      <Content isOpen={isOpen} height={height}>
        <Wrapper ref={contentRef}>{children}</Wrapper>
      </Content>
    </Styled>
  )
}

export default Accordion
