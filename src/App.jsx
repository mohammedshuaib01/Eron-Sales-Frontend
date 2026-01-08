import ContactModal from './components/ContactModal/ContactModal'
import React, { useState } from 'react'
import './styles/Colour.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import HeroDemo from './components/Hero/HeroDemo'
import Scrollsection from './components/Scrollsection/Scrollsection'
import Price from './components/Price/Price'
import FAQ from './components/FAQ/FAQ'
import FooterDemo from './components/Footer/FooterDemo'



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(() => {
    const saved = localStorage.getItem('waitlistCount');
    return saved ? parseInt(saved, 10) : 100;
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const incrementWaitlist = () => {
    setWaitlistCount(prev => {
      const newCount = prev + 1;
      localStorage.setItem('waitlistCount', newCount);
      return newCount;
    });
  };

  return (
    <div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSuccess={incrementWaitlist}
      />
      <Header />
      <HeroDemo
        onOpenModal={openModal}
        waitlistCount={waitlistCount}
      />
      {/* <Hero /> */}
      <About />
      <Scrollsection />
      <Price />
      <FAQ />
      {/* <Footer/> */}
      <FooterDemo onOpenModal={openModal} />
    </div>
  )
}

export default App
