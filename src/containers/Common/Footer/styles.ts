import styled from 'styled-components'
import Container from 'components/Container'
import { Facebook } from '@styled-icons/entypo-social/Facebook'
import { Instagram } from '@styled-icons/entypo-social/Instagram'
import { Youtube } from '@styled-icons/entypo-social/Youtube'
import { Props } from '.'

export default styled.footer<Partial<Props>>`
  width: 100%;
  margin-top: 50px;
  background: ${({ theme }) => theme.colors.darkestRed};
  padding: 40px 8%;

  ${({ styles }) => ({ ...styles })}
`

export const InnerContainer = styled.div<Partial<Props>>`
  margin: 0 auto;
  max-width: 950px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(204, 204, 204, 0.3);
  opacity: 0.5;
`

export const VerticalDivider = styled.div`
  width: 1px;
  height: 15px;
  margin: auto 0;
  background-color: rgba(204, 204, 204, 0.3);
  opacity: 0.5;
`

export const Section = styled(Container)`
  flex: 1;
  padding: 0 20px;

  @media ${({ theme }) => theme.breakpoints.sl} {
    margin-bottom: 15px;
  }
`

export const NewsletterSection = styled(Section)`
  @media ${({ theme }) => theme.breakpoints.sl} {
    width: 100%;
    border-top: 1px solid rgba(204, 204, 204, 0.3);
    padding-top: 15px;
    order: 3;
  }
`

export const FacebookIcon = styled(Facebook)`
  width: 1.5rem;
`

export const InstagramIcon = styled(Instagram)`
  width: 1.5rem;
`

export const YoutubeIcon = styled(Youtube)`
  width: 1.5rem;
`
