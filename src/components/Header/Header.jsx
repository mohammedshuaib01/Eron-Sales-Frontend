import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img className="logo-image-header" src="public/eronlogo.png" alt="" />
      </div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/product">Product</a>
        <a href="/solution">Solution</a>
        <a href="/pricing">Pricing</a>
        <a href="/community">Community</a>
      </nav>

      <button className="join-btn">BOOK A DEMO</button>
    </header>
  );
};

export default Header;
