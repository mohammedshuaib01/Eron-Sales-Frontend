import React, { useEffect, useRef } from "react";


const About = () => {
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("card-right")) {
              entry.target.classList.add("show-right");
            }
            if (entry.target.classList.contains("card-left")) {
              entry.target.classList.add("show-left");
            }
          } else {
            // Optional: Remove classes if you want it to animate OUT when scrolling away
            // entry.target.classList.remove("show-right", "show-left");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    if (rightCardRef.current) observer.observe(rightCardRef.current);
    if (leftCardRef.current) observer.observe(leftCardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="crm-section">
      {/* RIGHT CARD */}
      <div className="card card-right" ref={rightCardRef}>
        <p className="price">70 %</p>
        <span className="month">Saved on licensing fees</span>
        <div className="gradient-bar"></div>
      </div>

      {/* TEXT BLOCK */}
      <div className="text-block">
        <h1>
          Paying a Fortune on
        </h1>
        <h2 className="about-highlight-text">subscription</h2>
        <p className="small-text">
          You are probably asking yourself if this subscription is really
          worth the money. A successful business is built on great people and strong values,
          not just expensive software. If your
          CRM keeps getting more expensive without giving you more value, it is time to make a smart change
        </p>
      </div>

      {/* LEFT CARD */}
      <div className="card card-left" ref={leftCardRef}>
        <p className="price">50 %</p>
        <span className="month">Saved on licensing fees</span>
        <div className="gradient-bar"></div>
      </div>
    </section>
  );
};

export default About;
