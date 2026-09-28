import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import InternshipsSection from './sections/InternshipsSection'
import EducationSection from './sections/EducationSection'
import CertificationsSection from './sections/CertificationsSection'

export default function App() {
  return (
    <>
      <div className="min-h-screen site-background text-white overflow-x-hidden relative isolate antialiased">
        <Navbar />
        <Hero />
        <main className="stars-background">
          <About />
          <Services />
          <Skills />
          <Projects />
          <InternshipsSection />
          <EducationSection />
          <CertificationsSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
