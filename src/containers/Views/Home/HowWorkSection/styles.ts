import styled from 'styled-components'
import Image from 'components/Image'
import Container from 'components/Container'
import Paragraph from 'components/Paragraph'
import DefaultText from 'components/Text'

export const ParagraphJustified = styled(Paragraph)`
	text-align: justify;
`

export const Text = styled(DefaultText).attrs({
	weight: 'bold'
})`
	text-align: justify;
`

export const StructureCard = styled.div`
  width: 370px;
	max-width: 650px;
	margin: 0 25px;

	@media ${({ theme }) => theme.breakpoints.sl} {
		width: 100%;
	}
`

export const GroupCard = styled.div`
	width: 50%;
	max-width: 450px;
	padding: 0 30px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;

	@media ${({ theme }) => theme.breakpoints.sl} {
		width: 100%;
	}
`

export const GroupsBlock = styled.div`
	margin-top: 30px;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: flex-start;

	@media ${({ theme }) => theme.breakpoints.xl} {
		width: 100%;
	}
`

export const CommissionIcon = styled(Image)`
	height: 150px;
	margin: 20px 0;

	@media ${({ theme }) => theme.breakpoints.s} {
		height: 120px;
	}
`

export const StructureContainer = styled(Container)`
	justify-content: space-around;
	align-items: center;
	margin-bottom: 60px;
`

export const StructureParagraphContainer = styled(Container)`
	border-left: ${({ theme }) => `10px solid ${theme.colors.offRed}`};
	padding: 0 20px 0 40px;
	width: 55%;
	padding-right: 20px;

	@media ${({ theme }) => theme.breakpoints.m} {
		width: 100%;
	}
`
