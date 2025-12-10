import React from 'react';
import './HeroDemo.css';
import Plasma from '../../elements/Plasma/Plasma';

const HeroDemo = () => {
    return (
        <div className="hero-demo-container">



            {/* Background Elements */}
            <div className="hero-demo-background">
                {/* <Plasma
                    color= "#808080"
                    speed={0.3}
                    direction="forward"
                    scale={1.4}
                    opacity={0.9}
                    mouseInteractive={true}
                /> */}
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
                    when you can have your<span className="highlight-text">own CRM</span>
                </h1>

                <p className="hero-subtext">
                    Modern software agency crafting efficient, design-driven digital<br />
                    solutions for brands that want innovation and impact.
                </p>

                <div className="hero-cta-group">
                    <button className="btn-primary">Start 7 Days Trial <span className="arrow">↗</span></button>
                </div>
            </div>
        </div>
    );
};

export default HeroDemo;
