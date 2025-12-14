import React, { useEffect, useState, useRef } from "react";
import "./Scrollsection.css";

const steps = [
  {
    title: "Lead Management",
    desc: "Organize, capture, and track leads with ease.",
    img: "/lead_mgmt.png"
  },
  {
    title: "Smart Automation",
    desc: "Automate repetitive work and save hours every week.",
    img: "/automation.png"
  },
  {
    title: "Pipeline Management",
    desc: "Visualize deals and move them forward effortlessly.",
    img: "/pipeline.png"
  },
  {
    title: "Analytics Dashboard",
    desc: "Monitor performance with real-time insights.",
    img: "/analytics.png"
  }
];

export default function Scrollsection() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sec = sectionRef.current;
    const totalHeight = window.innerHeight * steps.length;

    const onScroll = () => {
      const top = sec.getBoundingClientRect().top;

      const progress = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(-top / window.innerHeight))
      );

      setIndex(progress);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-steps-wrapper" ref={sectionRef}>

      <div className="fixed-box">
        <div className="fade-container">
          <h1 key={steps[index].title} className="fade-text">
            {steps[index].title}
          </h1>

          <p key={steps[index].desc} className="fade-subtext">
            {steps[index].desc}
          </p>

          <img
            key={steps[index].img}
            src={steps[index].img}
            className="fade-image"
            alt=""
          />
        </div>
      </div>

      {/* Invisible scroll area */}
      <div style={{ height: `${steps.length * 100}vh` }}></div>

    </div>
  );
}
