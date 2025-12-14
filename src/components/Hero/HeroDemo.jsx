import React from 'react';
import './HeroDemo.css';
import LightRays from '../../elements/lightray/LightRay';
const HeroDemo = () => {
    return (
        <div className="hero-demo-container">



            {/* Background Elements */}
            <div className="hero-demo-background">
                <LightRays />
                <div className="glow-wave wave-1"></div>

                <div className="glow-wave wave-2"></div>
            </div>



            {/* Hero Content */}

            <div className="hero-content">

                <div className="tag-container">
                    <span className="tag-text">Customer Relationship Management</span>
                </div>

                <h1 className="hero-headline">
                    Why you need subscription,<br />
                    when you can have your own <span className="highlight-text">CRM</span>
                </h1>

                <p className="hero-subtext">
                    If rising CRM subscription fees are costing you time, money, and team focus,
it’s time for a smarter choice <br /> that grows with your business not your budget.
                </p>

                <div className="hero-cta-group">
                    <button className="btn-primary">GET STARTED<span className="arrow"></span></button>
                </div>
            </div>
        </div>
    );
};

export default HeroDemo;
