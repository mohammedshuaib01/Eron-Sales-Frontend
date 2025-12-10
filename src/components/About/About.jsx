import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1 className="about-headline">
          <span className="highlight">#Priceless</span>ForBusiness
        </h1>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Zoho CRM has it all: world-class features and capabilities, powerful automation and intelligence, expansive developer platform, and the entire assortment.
            </p>
            <p>
              In a market saturated with powerful, capable solutions, Zoho CRM continues to remain special. Because, <strong>what makes us priceless is not in the product; it's in the value created.</strong>
            </p>
          </div>

          <div className="stats-container">
            <div className="stat-card">
              <h2 className="stat-number">70%</h2>
              <p className="stat-label">Saved on licensing fees</p>
            </div>
            <div className="stat-card">
              <h2 className="stat-number">50%</h2>
              <p className="stat-label">Faster implementation</p>
            </div>
            <div className="stat-card">
              <h2 className="stat-number">1.5x</h2>
              <p className="stat-label">Improved adoption</p>
            </div>
          </div>
        </div>

        <p className="about-footnote">
          *In the Enterprise CRM market, compared against vendors like Salesforce, Microsoft, SAP, etc.
        </p>
      </div>
    </section>
  );
};

export default About;
