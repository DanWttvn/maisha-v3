import { FC } from 'react'
import HeroSection from './HeroSection'
import WhoSection from './WhoSection'
import TimelineSection from './TimelineSection'
import HowWorkSection from './HowWorkSection'
import ProjectsSection from './ProjectsSection'
import CollaborateSection from './CollaborateSection'
import TransparencySection from './TransparencySection'
import MainLayout from 'containers/Layouts/Main'
import InputText2 from 'components/InputText2'

// TODO: como meter google tag manager (.html)
// TODO: ir haciendo las siguientes páginas

const HomeView: FC = () => (
  <MainLayout isHomePage>
    <HeroSection />
    <InputText2 name="hi" label="Username" />
    {/* <WhoSection />
    <TimelineSection/>
    <HowWorkSection/>
    <ProjectsSection/>
    <CollaborateSection/>
    <TransparencySection/> */}
  </MainLayout>
)

export default HomeView
