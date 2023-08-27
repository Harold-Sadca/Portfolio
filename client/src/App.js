import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import ProjectShowcase from './components/ProjectShowcase'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<ProjectShowcase />} />
          <Route path="particle" element={<ParticlesBackground />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App