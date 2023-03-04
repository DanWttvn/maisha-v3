import { FC } from 'react'

import Header from './Header'
import Join from './Join'
import Projects from './Projects'
import Container from 'components/Container'
import Video from 'components/Video'
import Infography from './Infography'
import Taxes from './Taxes'
import Faq from './Faq'
import Footer from 'containers/Common/Footer'

const LandingView: FC<{ variant: '1' | '2'}> = ({ variant }) => (
  <Container>
    <Header />
    <Join variant={variant} />
    <Projects />
    <Container isFullWidth>
      {variant === '1' ? 
        <Video poster="/images/campana-socios-1-poster.webp" src="https://vimeo.com/804686929" />
        : <Video poster="/images/campana-socios-2-poster.webp" src="https://vimeo.com/804686955" />
      }
    </Container>
    <Infography />
    <Taxes />
    <Faq />
    <Footer styles={{ marginBottom: 83 }} isSimplified/>
  </Container>
)

export default LandingView
