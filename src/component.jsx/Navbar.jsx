import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo-section">
          <img src="/vite.svg" alt="Photon Retouch" className="logo-img" />
          <span className="logo-text">Photon Retouch</span>
        </Link>

        <div className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/about-us">ABOUT US</Link>
          <a href="#">SERVICES</a>
          <Link to="/contact-us">CONTACT US</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/policy">POLICY</Link>
        </div>

        <button className="trial-btn">FREE TRIAL</button>
      </div>
    </div>
  );
}
