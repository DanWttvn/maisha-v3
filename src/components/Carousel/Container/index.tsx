import { Children, cloneElement, FC, PropsWithChildren, ReactElement, useEffect, useRef, useState } from 'react'
import { BaseProps } from 'models'
import Control from '../Control'
import { Props as ItemProps } from '../Item'
import Styled, { Content, Wrapper, Subtitle } from './styles'

export interface Props extends BaseProps {
  title?: string
  onChange?: (i: number) => void
  sectionTitles: string[]
}

const Container: FC<PropsWithChildren<Props>> = ({ children, isHidden, title, sectionTitles, styles, onChange, isFullWidth }) => {
  const ref = useRef<HTMLDivElement>(null)
  const activeCardRef = useRef<HTMLDivElement>(null)
  const [ currentIndex, setCurrentIndex ] = useState(0)

  useEffect(() => {
    if (!ref?.current) return

    const scrollWidth = ref?.current?.clientWidth || 0
    const cardsWidth = scrollWidth * 0.9

    ref.current.scrollTo({ 
      left: cardsWidth * currentIndex, 
      top: 0, 
      behavior: 'smooth'
    })
  }, [ currentIndex, ref.current ])

  const handleChange = (i: number) => {
    setCurrentIndex(i)
    if (onChange) onChange(i)
  }

  const items = Children.map(children as ReactElement, (x: ReactElement<ItemProps>, i) => {
    return cloneElement(x, {
      onClick: () => handleChange(i),
      ref: currentIndex === i ? activeCardRef : null,
    })
  })

  if (isHidden) return null

  return (
    <Styled styles={styles} isFullWidth={isFullWidth}>
      <Subtitle color="white">{title}</Subtitle>
      <Content ref={ref} isFullWidth>
        <Wrapper>
          {items}
        </Wrapper>
      </Content>
      <Control control={{ currentIndex, totalItems: items?.length || 0 }} sectionTitles={sectionTitles} onChange={handleChange}/>
    </Styled>
  )
}

export default Container
