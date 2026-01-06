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


  const handleSliderChange = (e) => {
    setUsers(Number(e.target.value));
  };

  // Per user rates
  const ERON_RATE = 399;
  const ZOHO_RATE = 1299;

  // Calculate pricing based on user count
  const leftValue = ERON_RATE * users;
  const rightValue = ZOHO_RATE * users;

  // Scaling for visual bars to fit in the 400px container
  const maxUsers = 50;
  const percentage = ((users - 1) / (maxUsers - 1)) * 100;
  const maxPossibleValue = ZOHO_RATE * maxUsers;
  const visualMaxHeight = 320; // height in px

  const leftBarHeight = Math.max((leftValue / maxPossibleValue) * visualMaxHeight, 40);
  const rightBarHeight = Math.max((rightValue / maxPossibleValue) * visualMaxHeight, 40);

  return (
    <section className="price-section-3d" ref={sectionRef} id='pricing'>
      <div className={`price-container-3d ${isVisible ? 'animate-in' : ''}`}>

        {/* LEFT: Calculator Section */}
        <div className="calculator-wrapper anim-item" style={{ transitionDelay: '0ms' }}>
          {/* Slider Control Container */}


          <div className="chart-stage">

            {/* Left Chart (Yellow - Fixed) */}
            <div className="chart-item left-item">
              <div className="text-content">
                <span className="big-percent" style={{ color: '#F7FE2C' }}>₹{Math.round(leftValue)}</span>
              </div>
              <div className="bar-visual" style={{ height: `${leftBarHeight}px` }}>
                <div className="dot-top yellow-dot"></div>
                <div className="dashed-line yellow-dash"></div>
                <div className="top-plate yellow-plate"></div>
                <div className="dashed-drop-left yellow-drop"></div>
                <div className="dashed-drop-right yellow-drop"></div>
              </div>
              <p className="chart-label" style={{ color: '#F7FE2C' }}>ERON CRM</p>
            </div>

            {/* Right Chart (White - Dynamic) */}
            <div className="chart-item right-item">
              <div className="text-content">
                <span className="big-percent">₹{Math.round(rightValue)}</span>
              </div>
              <div className="bar-visual" style={{ height: `${rightBarHeight}px` }}> {/* Height animated via CSS transition, separate from entrance */}
                <div className="dot-top"></div>
                <div className="dashed-line"></div>
                <div className="top-plate"></div>
                <div className="dashed-drop-left"></div>
                <div className="dashed-drop-right"></div>
              </div>
              <p className="chart-label">ZOHO CRM</p>
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
                background: `linear-gradient(to right, #F7FE2C ${percentage}%, #ffffff ${percentage}%)`
              }}
            />
          </div>


        </div>

        {/* RIGHT: Info/Title Section */}
        <div className="price-info-right">
          <h2 className="anim-item" style={{ transitionDelay: '0ms' }}>
            Real Savings, <br />
            <span className="highlight-yellow">Real Growth.</span>
          </h2>
          <p className="anim-item" style={{ maxWidth: '400px', fontSize: '18px', color: '#999', lineHeight: '1.6', transitionDelay: '100ms' }}>
            Compare Eron CRM's transparent pricing against industry leaders.
            Save significantly as you scale your team and your business.
          </p>

          <div className="anim-item" style={{ transitionDelay: '200ms' }}>
            <a href="https://wa.me/7510991147" target="_blank" rel="noopener noreferrer" className="btn-whatsapp-price">
              <svg className="whatsapp-icon-price" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382C17.119 14.382 16.51 14.167 15.659 13.738C14.81 13.308 14.384 13.093 14.241 13.159C14.098 13.226 13.844 13.391 13.48 13.853C13.116 14.316 12.871 14.398 12.729 14.332C12.585 14.266 11.97 13.992 11.127 13.243C10.4579 12.6486 9.94054 11.9665 9.59399 11.221C9.43199 10.966 9.57599 10.822 9.68299 10.709C9.77899 10.608 9.90799 10.431 10.07 10.233C10.232 10.035 10.297 9.87 10.395 9.673C10.493 9.475 10.443 9.311 10.378 9.179C10.313 9.046 9.80999 7.81 9.59399 7.319C9.38799 6.845 9.17699 6.907 9.02799 6.907H8.62599C8.42399 6.907 8.09599 6.985 7.82099 7.287C7.54599 7.589 6.76699 8.318 6.76699 9.803C6.76699 11.288 7.85099 12.723 8.00399 12.93C8.15699 13.136 10.076 16.294 13.195 17.458C16.314 18.622 16.314 18.204 16.864 18.154C17.414 18.104 18.636 17.432 18.889 16.712C19.141 15.993 19.141 15.378 19.066 15.253C18.991 15.128 18.799 15.054 18.428 14.869" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.008 0.599609C5.70016 0.599609 0.589163 5.71961 0.589163 12.0166C0.589163 14.0046 1.09616 15.9406 2.08316 17.6536L0.599156 23.0856L6.15516 21.6256C7.79516 22.5206 9.81616 23.0826 12.0052 23.0826H12.0092C18.3132 23.0826 23.4242 17.9626 23.4242 11.6666C23.4242 8.70661 22.2742 5.92261 20.1802 3.82961C18.0872 1.73461 15.3052 0.599609 12.0082 0.599609V0.599609ZM12.0082 2.51861C14.7932 2.51861 17.1512 3.48061 18.9242 5.08761C20.6972 6.69461 21.6702 8.91861 21.6702 11.6686C21.6702 16.9956 17.3362 21.3296 12.0092 21.3296C10.0812 21.3296 8.29716 20.8036 6.80416 19.9236L6.44916 19.7046L3.19016 20.5606L4.05916 17.3786L3.83416 17.0196C2.86816 15.4836 2.34216 13.8226 2.34216 12.0166C2.34216 6.68761 6.67816 2.51861 12.0082 2.51861Z" fill="currentColor" />
              </svg>
              Connect Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Price;