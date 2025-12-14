import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="crm-section">
      <div className="about-header">
        <div className="headline-box">
          <h2>Paying a Fortune on</h2>
          <h2 className="highlight-yellow">Subscription</h2>
        </div>
        <div className="description-box">
          <p>
            You are probably asking yourself if this subscription is really worth the money.
            A successful business is built on great people and strong values, not just expensive software.
            If your CRM keeps getting more expensive without giving you more value, it is time to make a smart change.
          </p>
        </div>
      </div>

      <div className="cards-container">
        {/* Card 1 */}
        <div className="stat-card">
          <h3 className="stat-percentage">50 %</h3>
          <p className="stat-label">Faster implementation</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '50%' }}></div>
          </div>
        </div>

        {/* Card 2 (Highlighted) */}
        <div className="stat-card highlight-card">
          <h3 className="stat-percentage">70 %</h3>
          <p className="stat-label">Saved on licensing fees</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '70%' }}></div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="stat-card">
          <h3 className="stat-percentage">1.5 X</h3>
          <p className="stat-label">Improved adoption</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '50%' }}></div>
          </div>
        </div>

        <div className="about-footer">
        <p>
          If your CRM keeps getting more expensive without giving you more value
        </p>
      </div>
      </div>

      
    </section>
  );
};

export default About;
