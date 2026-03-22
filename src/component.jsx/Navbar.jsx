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
          <a href="#">HOME</a>
          <a href="about-us">ABOUT US</a>
          <a href="#">SERVICES</a>
          <a href="contact-us">CONTACT US</a>
          <a href="blog">BLOG</a>
          <a href="policy">POLICY</a>
        </div>

        <button className="trial-btn">FREE TRIAL</button>
      </div>
    </div>
  );
}
