import { Children, cloneElement, FC, ReactElement, useState, MouseEvent } from 'react'
import { BaseProps } from 'models'
import Styled, { TabBar, TabButton } from './styles'
import { Props as ItemProps } from '../Item'

export type Props = BaseProps

const Tabs: FC<Props> = ({ isHidden, styles, children, isFullWidth }) => {
  const [value, setValue] = useState(0)
  let tabs: ReactElement[] = []
  let content: ReactElement[] = []

  const handleClick = (index: number, event: MouseEvent<HTMLButtonElement>): void => {
    setValue(index)
    event.preventDefault()
  }

  Children.forEach(children as ReactElement<ItemProps>, (x, i) => {
    const tabButton = <TabButton key={i} onClick={(e) => handleClick(i, e)} isActive={value === i}>{x.props.title}</TabButton>
    const tabContent = cloneElement(x, { isHidden: value !== i, key: i })

    tabs = [...tabs, tabButton]
    content = [...content, tabContent]
  })

  if (isHidden) return null

  return (
    <Styled styles={styles} isFullWidth={isFullWidth}>
      <TabBar>{tabs}</TabBar>
      {content}
    </Styled>
  )
}

Tabs.displayName = 'Tabs'

export default Tabs
