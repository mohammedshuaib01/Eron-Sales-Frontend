import React from 'react'
import './styles/Colour.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import HeroDemo from './components/Hero/HeroDemo'

function App() {
  return (
    <div>
      {/* <Header /> */}
      <HeroDemo/> 
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default App
