import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <img className="logo-image-header" src="public/crmlogo.png" alt="" />
      </div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/product">Product</a>
        <a href="/solution">Solution</a>
        <a href="/pricing">Pricing</a>
        <a href="/community">Community</a>
      </nav>

      <button className="join-btn">Join Beta</button>
    </header>
  );
};

export default Header;
