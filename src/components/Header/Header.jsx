import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight - 100; // Threshold (approx Hero height)

      // 1. Existing Pill Logic (> 50px)
      setIsScrolled(currentScrollY > 50);

      // 2. Smart Hide/Show Logic
      if (currentScrollY > heroHeight) {
        if (currentScrollY > lastScrollY) {
          // Scrolling DOWN -> Hide
          setIsHidden(true);
        } else {
          // Scrolling UP -> Show
          setIsHidden(false);
        }
      } else {
        // Still in Hero section -> Always Show
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`main-header ${isScrolled ? "scrolled" : ""} ${isHidden ? "hidden" : ""}`}>
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
