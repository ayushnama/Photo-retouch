import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const contactCards = [
  {
    icon: "🪪",
    title: "Headquarters",
    lines: [
      "Photon Retouch L-159, Aashiana",
      "Vrinda Gardens, Jagatpura",
      "Jaipur, Rajasthan, India –",
      "302017",
    ],
  },
  {
    icon: "👤",
    title: "Delhi Office",
    lines: [
      "E-27, Naraina Vihar New Delhi,",
      "India - 110028",
    ],
  },
  {
    icon: "✉️",
    title: "General Support",
    lines: ["info@photonretouch.com"],
  },
  {
    icon: "📞",
    title: "Contact Number",
    lines: ["+91 8447748022"],
  },
];

const services = [
  "Please choose an option",
  "Photo Masking",
  "Clipping Path",
  "Beauty Retouching",
  "Jewelry Retouching",
  "Photo Restoration",
  "Newborn Baby Retouching",
  "Object Removal",
  "Wedding Album Design",
  "Creative Retouching",
  "Color Correction",
];

export default function ContactUsPage() {
  return (
    <div className="contact-page">
        <Navbar />
      <div className="contact-container">
        <section className="contact-top">
          <h1>Contact us</h1>
          <div className="contact-underline"></div>

          <div className="contact-card-grid">
            {contactCards.map((item, index) => (
              <div className="contact-info-card" key={index}>
                <div className="contact-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                {item.lines.map((line, lineIndex) => (
                  <p key={lineIndex}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="contact-main">
        <div className="contact-map-box">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113913.08722850213!2d75.7563392!3d26.846822399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5debf22fa8f%3A0x79ea81d0af2764a3!2sCityPark%20Jaipur!5e0!3m2!1sen!2sin!4v1774209649060!5m2!1sen!2sin"
    width="500"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Photon Retouch location map"
  ></iframe>
</div>

          <div className="contact-form-box">
            <h2>Send us a message</h2>
            <div className="contact-underline small"></div>

            <form className="contact-form">
              <div className="contact-form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter Name" />
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>Email*</label>
                  <input type="email" placeholder="Enter your email" />
                </div>

                <div className="contact-form-group">
                  <label>Phone*</label>
                  <input type="text" placeholder="Enter Phone Number" />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>Country</label>
                  <select>
                    <option>—Please choose an option—</option>
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                  </select>
                </div>

                <div className="contact-form-group">
                  <label>Select Service</label>
                  <select>
                    {services.map((service, index) => (
                      <option key={index}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="contact-form-group">
                <label>Upload Free Trial Sample (25 MB jpg, jpeg, png)</label>
                <input type="file" className="file-input" />
              </div>

              <div className="contact-form-group">
                <label>
                  Send your files (RAW, TIFF, PSD, etc.) via WeTransfer, Dropbox,
                  Google Drive, or any other file-sharing link for smooth uploads
                  over 25MB
                </label>
                <input type="text" placeholder="Enter Drive link OR Image URL" />
              </div>

              <div className="contact-form-group">
                <label>Work Requirement</label>
                <textarea rows="6"></textarea>
              </div>

              <div className="fake-recaptcha">
                <div className="fake-recaptcha-left">
                  <div className="fake-checkbox"></div>
                  <span>I’m not a robot</span>
                </div>
                <div className="fake-recaptcha-right">reCAPTCHA</div>
              </div>

              <button type="submit" className="contact-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}