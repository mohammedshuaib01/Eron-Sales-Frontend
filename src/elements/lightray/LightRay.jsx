import React from "react";
import "./LightRay.css";

const LightRays = () => {
  const rays = Array.from({ length: 32 }).map(() => ({
    deg: Math.random(),
    thickness: 8 + Math.random() * 26,
    length: -50 + Math.random() * 100,
    duration: 1.3 + Math.random() * 1.5,
    delay: 2 + Math.random() * 1,
    rotate: -4 + Math.random() * 8,
    degRange: 72.5,
    spreadRange: 45, // vw
  }));

  return (
    <div className="light-rays-wrap">
      <ul className="light-rays">
        {rays.map((ray, i) => (
          <li
            key={i}
            style={{
              "--deg": ray.deg,
              "--thickness": `${ray.thickness}px`,
              "--length": `${ray.length}px`,
              "--duration": `${ray.duration}s`,
              "--delay": `${ray.delay}s`,
              "--rotate": `${ray.rotate}deg`,
              "--degRange": `${ray.degRange}deg`,
              "--spreadRange": `${ray.spreadRange}vw`,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default LightRays;
