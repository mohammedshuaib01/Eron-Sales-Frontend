import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <footer className={`footer-wrapper ${isVisible ? 'animate-in' : ''}`} ref={footerRef}>

            {/* Gradient CTA Card (Kept as is) */}
            <div className="footer-cta-card anim-item" style={{ transitionDelay: '0ms' }}>
                <div className="cta-content">
                    <h2>
                        Send Your First 1,000 Cold Emails With<br />
                        ManyReach For Free
                    </h2>
                    <button className="cta-btn">
                        Start for Free Now <span className="arrow">→</span>
                    </button>
                </div>
            </div>

            {/* --- NEW 2-TIER FOOTER LAYOUT --- */}

            {/* 1. UPPER SECTION (Black Background) */}
            <div className="footer-links-container anim-item" style={{ transitionDelay: '150ms' }}>
                <div className="links-grid-wrapper">

                    {/* Column 1: Logo */}
                    <div className="footer-col logo-col">
                        <img src="/eronlogo.png" alt="Eron Logo" className="footer-top-logo" />
                    </div>

                    {/* Column 2: Company */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact</a>
                        <a href="#">Press</a>
                    </div>

                    {/* Column 3: Product */}
                    <div className="footer-col">
                        <h4>Product</h4>
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Integrations</a>
                        <a href="#">API</a>
                    </div>

                    {/* Column 4: Resources */}
                    <div className="footer-col">
                        <h4>Resources</h4>
                        <a href="#">Blog</a>
                        <a href="#">Community</a>
                        <a href="#">Help Center</a>
                        <a href="#">Success Stories</a>
                    </div>

                    {/* Column 5: Connect */}
                    <div className="footer-col connect-col">
                        <h4>Connect</h4>
                        <div className="social-icons-grid">
                            <a href="#" aria-label="Twitter">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. LOWER SECTION (Grey Background) */}
            <div className="footer-legal-bar anim-item" style={{ transitionDelay: '300ms' }}>
                <div className="legal-content-wrapper">
                    <div className="legal-left">
                        <span className="copyright">Copyright © 2025 . All Rights Reserved By Eron</span>
                        <nav className="legal-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Site Map</a>
                        </nav>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
