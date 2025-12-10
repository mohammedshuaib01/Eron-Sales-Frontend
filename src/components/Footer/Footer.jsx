import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">
                    <img
                        src="/crmlogo.png"
                        alt="Zoho Logo"
                        className="footer-zoho-logo"
                    />
                </div>

                <h2 className="footer-heading">
                    Make the sensible choice.
                    <br />
                    <span className="highlight-text">Choose Value. Choose Zoho CRM.</span>
                </h2>

                <div className="footer-actions">
                    <button className="btn-footer-primary">GET STARTED</button>
                    <button className="btn-footer-secondary">REQUEST DEMO</button>
                </div>

                <div className="footer-bottom">
                    <p className="disclaimer">
                        The names and logos for Zoho are trademarks of Zoho Corp. All other trademarks, brand names, or product names belong to their respective holders. Comparison information as of 01.09.2023
                    </p>

                    <div className="footer-links">
                        <a href="#">Terms of Service</a>
                        <span className="separator">|</span>
                        <a href="#">Privacy Policy</a>
                    </div>

                    <p className="copyright">
                        © 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
