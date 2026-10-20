import Hero from './components/Hero'
import Intro from './components/Intro'
import Philosophy from './components/Philosophy'
import FeaturedProjects from './components/FeaturedProjects'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Philosophy />
      <FeaturedProjects />
      <Services />
      <Testimonials />
      <CTA />
    </>
  )
}