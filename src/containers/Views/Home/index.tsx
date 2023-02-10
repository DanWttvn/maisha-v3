import { FC } from 'react'
import HeroSection from './HeroSection'
import WhoSection from './WhoSection'
import TimelineSection from './TimelineSection'
import HowWorkSection from './HowWorkSection'
import ProjectsSection from './ProjectsSection'
import CollaborateSection from './CollaborateSection'
import TransparencySection from './TransparencySection'
import MainLayout from 'containers/Layouts/Main'

// TODO: como meter google tag manager (.html)

const HomeView: FC = () => (
  <MainLayout isHomePage>
    <HeroSection />
    <WhoSection />
    <TimelineSection/>
    <HowWorkSection/>
    <ProjectsSection/>
    <CollaborateSection/>
    <TransparencySection/>
  </MainLayout>
)

export default HomeView
