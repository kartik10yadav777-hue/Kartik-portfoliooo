import { useState, Suspense } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FounderStory from './components/FounderStory'
import Projects from './components/Projects'
import CoFounder from './components/CoFounder'
import Vision from './components/Vision'
import Journey from './components/Journey'
import Skills from './components/Skills'
import GlobalGoals from './components/GlobalGoals'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ScrollProgress, CustomCursor } from './components/UI'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      {loaded && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />

          <main className="animated-gradient min-h-screen">
            <Hero />
            <About />
            <FounderStory />
            <Projects />
            <CoFounder />
            <Vision />
            <Journey />
            <Skills />
            <GlobalGoals />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </>
  )
}
