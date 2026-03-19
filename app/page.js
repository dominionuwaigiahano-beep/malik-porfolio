import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main>
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}
