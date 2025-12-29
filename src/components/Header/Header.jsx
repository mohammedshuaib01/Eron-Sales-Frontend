import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight - 100; // Threshold (approx Hero height)

      // 1. Existing Pill Logic (> 50px)
      setIsScrolled(currentScrollY > 50);

      // 2. Smart Hide/Show Logic
      if (currentScrollY > heroHeight) {
        if (currentScrollY > lastScrollY) {
          // Scrolling DOWN -> Hide
          setIsHidden(true);
        } else {
          // Scrolling UP -> Show
          setIsHidden(false);
        }
      } else {
        // Still in Hero section -> Always Show
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`main-header ${isScrolled ? "scrolled" : ""} ${isHidden ? "hidden" : ""}`}>
        <div className="logo">
          <img className="logo-image-header" src="public/eronlogo.png" alt="" />
        </div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/product">Product</a>
          <a href="/solution">Solution</a>
          <a href="/pricing">Pricing</a>
          <a href="/community">Community</a>
        </nav>

        <div className="header-actions">
          {/* <button className="join-btn">Book A Demo</button> */}
          <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer" className="btn-whatsapp-header">
            <svg className="whatsapp-icon-header" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382C17.119 14.382 16.51 14.167 15.659 13.738C14.81 13.308 14.384 13.093 14.241 13.159C14.098 13.226 13.844 13.391 13.48 13.853C13.116 14.316 12.871 14.398 12.729 14.332C12.585 14.266 11.97 13.992 11.127 13.243C10.4579 12.6486 9.94054 11.9665 9.59399 11.221C9.43199 10.966 9.57599 10.822 9.68299 10.709C9.77899 10.608 9.90799 10.431 10.07 10.233C10.232 10.035 10.297 9.87 10.395 9.673C10.493 9.475 10.443 9.311 10.378 9.179C10.313 9.046 9.80999 7.81 9.59399 7.319C9.38799 6.845 9.17699 6.907 9.02799 6.907H8.62599C8.42399 6.907 8.09599 6.985 7.82099 7.287C7.54599 7.589 6.76699 8.318 6.76699 9.803C6.76699 11.288 7.85099 12.723 8.00399 12.93C8.15699 13.136 10.076 16.294 13.195 17.458C16.314 18.622 16.314 18.204 16.864 18.154C17.414 18.104 18.636 17.432 18.889 16.712C19.141 15.993 19.141 15.378 19.066 15.253C18.991 15.128 18.799 15.054 18.428 14.869" fill="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M12.008 0.599609C5.70016 0.599609 0.589163 5.71961 0.589163 12.0166C0.589163 14.0046 1.09616 15.9406 2.08316 17.6536L0.599156 23.0856L6.15516 21.6256C7.79516 22.5206 9.81616 23.0826 12.0052 23.0826H12.0092C18.3132 23.0826 23.4242 17.9626 23.4242 11.6666C23.4242 8.70661 22.2742 5.92261 20.1802 3.82961C18.0872 1.73461 15.3052 0.599609 12.0082 0.599609V0.599609ZM12.0082 2.51861C14.7932 2.51861 17.1512 3.48061 18.9242 5.08761C20.6972 6.69461 21.6702 8.91861 21.6702 11.6686C21.6702 16.9956 17.3362 21.3296 12.0092 21.3296C10.0812 21.3296 8.29716 20.8036 6.80416 19.9236L6.44916 19.7046L3.19016 20.5606L4.05916 17.3786L3.83416 17.0196C2.86816 15.4836 2.34216 13.8226 2.34216 12.0166C2.34216 6.68761 6.67816 2.51861 12.0082 2.51861Z" fill="currentColor" />
            </svg>
            Connect Us
          </a>
        </div>

        <button className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}></div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <button className="close-btn" onClick={toggleMenu}>
            ×
          </button>
        </div>
        <nav className="mobile-nav-links">
          <a href="/" onClick={toggleMenu}>HOME</a>
          <a href="/about" onClick={toggleMenu}>ABOUT US</a>
          <a href="/classes" className="has-dropdown" onClick={toggleMenu}>CLASSES <span>&#8964;</span></a>
          <a href="/parents" onClick={toggleMenu}>PARENTS</a>
          <a href="/gallery" onClick={toggleMenu}>GALLERY</a>
          <a href="/contact" onClick={toggleMenu}>CONTACT</a>
        </nav>

        <div className="mobile-menu-footer">
          <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer" className="mobile-contact-btn btn-whatsapp-mobile">
            <svg className="whatsapp-icon-header" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382C17.119 14.382 16.51 14.167 15.659 13.738C14.81 13.308 14.384 13.093 14.241 13.159C14.098 13.226 13.844 13.391 13.48 13.853C13.116 14.316 12.871 14.398 12.729 14.332C12.585 14.266 11.97 13.992 11.127 13.243C10.4579 12.6486 9.94054 11.9665 9.59399 11.221C9.43199 10.966 9.57599 10.822 9.68299 10.709C9.77899 10.608 9.90799 10.431 10.07 10.233C10.232 10.035 10.297 9.87 10.395 9.673C10.493 9.475 10.443 9.311 10.378 9.179C10.313 9.046 9.80999 7.81 9.59399 7.319C9.38799 6.845 9.17699 6.907 9.02799 6.907H8.62599C8.42399 6.907 8.09599 6.985 7.82099 7.287C7.54599 7.589 6.76699 8.318 6.76699 9.803C6.76699 11.288 7.85099 12.723 8.00399 12.93C8.15699 13.136 10.076 16.294 13.195 17.458C16.314 18.622 16.314 18.204 16.864 18.154C17.414 18.104 18.636 17.432 18.889 16.712C19.141 15.993 19.141 15.378 19.066 15.253C18.991 15.128 18.799 15.054 18.428 14.869" fill="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M12.008 0.599609C5.70016 0.599609 0.589163 5.71961 0.589163 12.0166C0.589163 14.0046 1.09616 15.9406 2.08316 17.6536L0.599156 23.0856L6.15516 21.6256C7.79516 22.5206 9.81616 23.0826 12.0052 23.0826H12.0092C18.3132 23.0826 23.4242 17.9626 23.4242 11.6666C23.4242 8.70661 22.2742 5.92261 20.1802 3.82961C18.0872 1.73461 15.3052 0.599609 12.0082 0.599609V0.599609ZM12.0082 2.51861C14.7932 2.51861 17.1512 3.48061 18.9242 5.08761C20.6972 6.69461 21.6702 8.91861 21.6702 11.6686C21.6702 16.9956 17.3362 21.3296 12.0092 21.3296C10.0812 21.3296 8.29716 20.8036 6.80416 19.9236L6.44916 19.7046L3.19016 20.5606L4.05916 17.3786L3.83416 17.0196C2.86816 15.4836 2.34216 13.8226 2.34216 12.0166C2.34216 6.68761 6.67816 2.51861 12.0082 2.51861Z" fill="currentColor" />
            </svg>
            Connect Us
          </a>
          <div className="social-icons">
            {/* Facebook Icon (Solid Circle) */}
            <a href="#" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM15.015 12H13.062V18H10.594V12H9.375V9.89H10.594V8.461C10.594 7.273 11.234 6.25 12.984 6.25H15.062V8.297H13.75C12.937 8.297 12.937 8.5 12.937 9.094V9.89H15.203L15.015 12Z" />
              </svg>
            </a>
            {/* Twitter Icon (Bird) */}
            <a href="#" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
              </svg>
            </a>
            {/* YouTube Icon (Solid Rect) */}
            <a href="#" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.582 5.253C21.328 4.303 20.582 3.557 19.632 3.303C17.923 2.843 12 2.843 12 2.843C12 2.843 6.077 2.843 4.368 3.303C3.418 3.557 2.672 4.303 2.418 5.253C1.96 6.963 1.96 10.547 1.96 10.547C1.96 10.547 1.96 14.131 2.418 15.841C2.672 16.791 3.418 17.537 4.368 17.791C6.077 18.251 12 18.251 12 18.251C12 18.251 17.923 18.251 19.632 17.791C20.582 17.537 21.328 16.791 21.582 15.841C22.04 14.131 22.04 10.547 22.04 10.547C22.04 10.547 22.04 6.963 21.582 5.253ZM9.955 13.693V7.401L15.474 10.547L9.955 13.693Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
