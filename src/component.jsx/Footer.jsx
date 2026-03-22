import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h3 className="logo">Photon Retouch</h3>
          <p>
            We are a photo retouching company based in Jaipur, Rajasthan,
            India with offices in Jaipur and New Delhi at this stage.
          </p>
          <div className="socials">
            <span>f</span>
            <span>ig</span>
            <span>in</span>
            <span>wa</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>OUR SERVICES</h4>
          <ul>
            <li>Photo Masking</li>
            <li>Clipping Path</li>
            <li>Beauty Retouching</li>
            <li>Jewelry Retouching</li>
            <li>Photo Restoration</li>
            <li>Newborn Baby Retouching</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>QUICK ACCESS</h4>
          <ul>
            <li>Object Removal</li>
            <li>Wedding Album Design</li>
            <li>Creative Retouching</li>
            <li>Color Correction</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>INFORMATION</h4>
          <ul>
            <li>+91 8447748022</li>
            <li>L-159, Aashiana Vrinda Gardens, Jaipur</li>
            <li>E-27, Naraina Vihar New Delhi</li>
            <li>info@photonretouch.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="payments">
          <span>PayPal</span>
          <span>Bank Transfer</span>
        </div>

        <div className="bottom-links">
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACT</a>
        </div>
      </div>
    </footer>
  );
}