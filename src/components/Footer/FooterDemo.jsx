import React, { useState, useEffect } from 'react';
import { HashLink } from "react-router-hash-link";

import './FooterDemo.css';

function FooterDemo({ onOpenModal }) {
  const [showScroll, setShowScroll] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <div className="footer-container">

      {/* Gradient CTA Card */}
      <div className="footer-cta-card">
        <div className="cta-content">
          <h2>
            Send Your First 1,000 With<br />
            Eron CRM For Free
          </h2>
          <button className="cta-btn" onClick={onOpenModal}>
            Join the Waitlist<span className="arrow">→</span>
          </button>
        </div>
      </div>

      {/* Top Section using a grid or flex for big text and smaller links */}
      <div className="footer-content">

        {/* Upper content: Links and Newsletter */}
        <div className="footer-top">
          <div className="footer-links">
            <HashLink smooth to="#" className="footer-link">Home</HashLink>
            <HashLink smooth to="https://www.sysdevcode.com/" className="footer-link">Service</HashLink>
            <HashLink smooth to="https://www.sysdevcode.com/" className="footer-link">Academy</HashLink>
            <HashLink smooth to="#pricing" className="footer-link">Pricing</HashLink>
          </div>
          <div className="footer-newsletter">
            <p>Get industry insights and creative inspiration straight to your inbox.</p>
            <div className="email-input-wrapper">
              <input type="email" placeholder="Email address" />
              <button type="submit" aria-label="Subscribe">→</button>
            </div>
          </div>
        </div>

        {/* Massive Brand Name */}
        <h2 className="footer-brand-title">
          <span>ERON</span>
          <span className="brand-space"> </span>
          <span>CRM</span>
        </h2>
      </div>

      {/* Bottom Bar: Copyright, Location, Time, Socials */}
      <div className="footer-bottom">
        <div className="footer-bottom-item">
          <span>Copyright © Eron</span>
        </div>
        <div className="footer-bottom-item">
          <span>Kerala, India</span>
        </div>
        <div className="footer-bottom-item">
          <span><a href="https://www.instagram.com/sysdevcode/" target="_blank" rel="noopener noreferrer">Instagram</a></span>
          <span><a href="https://www.linkedin.com/company/sysdevcode/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div
        className={`footer-scroll-top ${showScroll ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </div>
    </div>
  );
}

export default FooterDemo;