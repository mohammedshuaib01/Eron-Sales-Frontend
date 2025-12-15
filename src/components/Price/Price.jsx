import React, { useState, useEffect, useRef } from 'react';
import './Price.css';

const Price = () => {
  // Logic: 
  // Left = Fixed Base (e.g. 10%)
  // Right = Variable (e.g. starts at 25%, changes with input)

  // Animation State
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Using simple "users" count mapping to chart scale
  const [users, setUsers] = useState(1);

  const leftValue = 10;
  const handleSliderChange = (e) => {
    setUsers(Number(e.target.value));
  };

  // Calculate percentage for slider background/tooltip alignment
  const maxUsers = 50; // slider max
  const percentage = ((users - 1) / (maxUsers - 1)) * 100;

  // Logic: Base 25% + Scaled growth to reach exactly 100% at maxUsers
  // Linear interpolation: Start at 25, Add up to 75 based on slider percentage
  const rightValue = 25 + (percentage / 100) * 75;

  return (
    <section className="price-section-3d" ref={sectionRef}>
      <div className={`price-container-3d ${isVisible ? 'animate-in' : ''}`}>

        {/* LEFT: Calculator Section */}
        <div className="calculator-wrapper">
          {/* Slider Control Container */}


          <div className="chart-stage">

            {/* Left Chart (Yellow - Fixed) */}
            <div className="chart-item left-item">
              <div className="text-content">
                <span className="big-percent" style={{ color: '#F7FE2C' }}>{leftValue}%</span>
                <p style={{ color: '#F7FE2C' }}>of second-level referrals<br />deposits</p>
              </div>
              <div className="bar-visual" style={{ height: `${leftValue * 3}px` }}>
                <div className="dot-top yellow-dot"></div>
                <div className="dashed-line yellow-dash"></div>
                <div className="top-plate yellow-plate"></div>
                <div className="dashed-drop-left yellow-drop"></div>
                <div className="dashed-drop-right yellow-drop"></div>
              </div>
            </div>

            {/* Right Chart (White - Dynamic) */}
            <div className="chart-item right-item">
              <div className="text-content">
                <span className="big-percent">{Math.round(rightValue)}%</span>
                <p>of direct referrals deposits</p>
              </div>
              <div className="bar-visual" style={{ height: `${rightValue * 4}px` }}>
                <div className="dot-top"></div>
                <div className="dashed-line"></div>
                <div className="top-plate"></div>
                <div className="dashed-drop-left"></div>
                <div className="dashed-drop-right"></div>
              </div>
            </div>

          </div>

          <div className="slider-container">
            {/* Tooltip */}
            <div
              className="slider-tooltip"
              style={{ left: `calc(${percentage}% + (${8 - percentage * 0.15}px))` }}
            >
              <span className="tooltip-val">{users}</span>
              <span className="tooltip-label">users</span>
            </div>

            <input
              type="range"
              min="1"
              max={maxUsers}
              value={users}
              onChange={handleSliderChange}
              className="custom-range"
              style={{
                background: `linear-gradient(to right, #ffffff ${percentage}%, #4b5563 ${percentage}%)`
              }}
            />
          </div>


        </div>

        {/* RIGHT: Info/Title Section */}
        <div className="price-info-right">
          <h2>
            Real Savings, <br />
            <span className="highlight-yellow">Real Growth.</span>
          </h2>
          <p style={{ maxWidth: '400px', fontSize: '18px', color: '#999', lineHeight: '1.6' }}>
            See how your referral bonuses stack up against standard rates.
            Maximize your potential returns as you grow your network.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Price;