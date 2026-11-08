import SiteFooter from '../components/layout/SiteFooter.jsx'
import SiteHeader from '../components/layout/SiteHeader.jsx'
import ParticleBackground from '../components/layout/ParticleBackground.jsx'
import AboutSection from '../components/sections/AboutSection.jsx'
import ContactSection from '../components/sections/ContactSection.jsx'
import ExperienceSection from '../components/sections/ExperienceSection.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import HobbiesSection from '../components/sections/HobbiesSection.jsx'
import ProjectsSection from '../components/sections/ProjectsSection.jsx'
import SkillsSection from '../components/sections/SkillsSection.jsx'

export default function HomePage() {
  return (
    <div id="top" className="relative isolate min-h-screen text-white">
      <ParticleBackground />
      <div className="portfolio-frame relative z-10">
        <SiteHeader />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <HobbiesSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
