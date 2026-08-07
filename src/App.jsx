import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import CodingCorner from './components/CodingCorner/CodingCorner'

const App = () => {
  return (
    <div>
      <div className="bg-glow-2"></div>


      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />

      <MyWork />
      <Services />
      <CodingCorner />

      <Contact />
      <Footer />

    </div>
  )
}
export default App