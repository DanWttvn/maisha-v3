import { FC } from 'react'
import { BaseProps } from 'models'
import theme from 'styles/themes/light'
import Button from 'components/Button'
import Text from 'components/Text'
import Styled, {
  ButtonsWrapper,
  NodesWrapper,
  NodeWrapper,
  Node,
  Line,
  Icon,
} from './styles'

export interface Props extends BaseProps {
  control: { currentIndex: number; totalItems: number }
  onChange: (i: number) => void
  sectionTitles: string[]
}

const Control: FC<Props> = ({ isHidden, control, sectionTitles, onChange }) => {
  const { currentIndex, totalItems } = control

  if (isHidden) return null

  const nodes = sectionTitles.map((x, i) => {
    const isActive = currentIndex === i
    return (
      <NodeWrapper key={i}>
        <Node />
        <Text
          onClick={onChange.bind(undefined, i)}
          weight={isActive ? 'black' : 'bold'}
          size={isActive ? 'l' : 'm'}
          styles={{
            color: isActive ? theme.colors.darkOrange : theme.colors.white,
          }}
        >
          {x}
        </Text>
      </NodeWrapper>
    )
  })

  const handleChange = (index: number) => {
    let nextIndex = index
    if (index > totalItems - 1) nextIndex = 0
    if (index < 0) nextIndex = totalItems - 1
    onChange(nextIndex)
  }

  return (
    <Styled>
      <ButtonsWrapper>
        <Button variant="E" onClick={() => handleChange(currentIndex - 1)}>
          <Icon $isLeft />
        </Button>
        <Button variant="E" onClick={() => handleChange(currentIndex + 1)}>
          <Icon />
        </Button>
      </ButtonsWrapper>
      <NodesWrapper>
        <Line />
        {nodes}
      </NodesWrapper>
    </Styled>
  )
}

export default Control
