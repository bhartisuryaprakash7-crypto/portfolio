import Scene    from './components/canvas/Scene.jsx'
import Navbar   from './components/ui/Navbar.jsx'
import Cursor   from './components/ui/Cursor.jsx'
import Hero     from './components/sections/Hero.jsx'
import Skills   from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Team     from './components/sections/Team.jsx'
import Contact  from './components/sections/Contact.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg overflow-x-hidden">
      <Cursor />
      <Scene />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Team />
        <Contact />
      </main>
    </div>
  )
}