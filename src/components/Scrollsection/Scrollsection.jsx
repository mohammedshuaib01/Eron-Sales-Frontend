
import React, { useState, useEffect, useRef } from 'react';
import './ScrollSection.css';
import dashboardMock from '../../assets/dashboard_mock.png';

const Scrollsection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const contentRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // 1. Observer for Scrollspy (Active Step)
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when element is in the middle of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const step = Number(entry.target.dataset.step);
          setActiveStep(step);
        }
      });
    }, observerOptions);

    contentRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // 2. Observer for Section Entrance
    const entranceObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entranceObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      entranceObserver.observe(sectionRef.current);
    }

    return () => {
      contentRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
      entranceObserver.disconnect();
    };
  }, []);

  const steps = [
    {
      id: 0,
      title: "Comprehensive Dashboard",
      description: "Get a bird's eye view of your entire sales pipeline. Track performance metrics, upcoming tasks, and deal status all in one place.",
      img: 'data.png'
    },
    {
      id: 1,
      title: "Smart Lead Management",
      description: "Automatically capture and organize leads from multiple sources. Score and qualify them to focus on the most promising opportunities.",
      img: 'marketing.png'
    },
    {
      id: 2,
      title: "Automated Workflows",
      description: "Eliminate repetitive tasks with powerful automation. Trigger emails, follow-ups, and field updates based on specific criteria.",
      img: 'lead.png'
    },
    {
      id: 3,
      title: "Advanced Analytics",
      description: "Make data-driven decisions with in-depth reporting. Visualize trends, forecast revenue, and optimize your sales strategy.",
      img: 'intel.png'
    }
  ];

  return (
    <section className={`scroll-section ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="desktop-view">
        {/* Left: Sticky Title */}
        <div className="sticky-column left-text">
          <div className="text-wrapper">
            <span className="section-label">FEATURES</span>
            <h1>
              Powerful <span className="highlight">Tools</span><br />
              For Your <span className="highlight-alt">Growth</span>
            </h1>
          </div>
        </div>

        {/* Center: Sticky Images */}
        <div className="sticky-column center-image">
          <div className="image-stack">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`image-card ${activeStep === index ? 'active' : ''}`}
              >
                <img src={step.img} alt={step.title} className="card-image" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Scrolling Content */}
        <div className="scrolling-column right-content">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="content-block"
              ref={el => contentRefs.current[index] = el}
              data-step={index}
            >
              <h2 className={activeStep === index ? 'active-text' : ''}>{step.title}</h2>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

       {/* ================= MOBILE VIEW (NEW) ================= */}
    <div className="mobile-view">
      <h1 className="mobile-main-title">
        Powerful <span>Tools</span> For Your <span>Growth</span>
      </h1>

      {steps.map((step, index) => (
        <div className="mobile-feature" key={index}>
          <img src={step.img} alt={step.title} className="mobile-image" />
          <h2 className="mobile-title">{step.title}</h2>
          <p className="mobile-description">{step.description}</p>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Scrollsection;
