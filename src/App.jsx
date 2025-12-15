import React from 'react'
import './styles/Colour.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import HeroDemo from './components/Hero/HeroDemo'
import Scrollsection from './components/Scrollsection/Scrollsection'
import Price from './components/Price/Price'

function App() {
  return (
    <div>
      <Header />
      <HeroDemo />
      {/* <Hero /> */}
      <About />
      <Scrollsection />
      <Price />
      <Footer />
    </div>
  )
}

export default App
