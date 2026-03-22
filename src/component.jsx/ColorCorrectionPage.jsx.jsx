import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const whyChoosePoints = [
  "Accurate tone balancing for portraits, weddings, products, interiors, and commercial photos.",
  "Improved contrast, exposure, white balance, and consistency across image sets.",
  "Natural-looking enhancement without making colors feel fake or overprocessed.",
  "Professional results suitable for eCommerce, social media, catalogs, portfolios, and print.",
];

const processSteps = [
  {
    title: "1. Upload images",
    text: "Send your raw or edited photos along with any notes about the mood, tone, or output style you want.",
  },
  {
    title: "2. Analysis and adjustment",
    text: "We review lighting, exposure, shadows, highlights, white balance, and skin tones to identify what needs correction.",
  },
  {
    title: "3. Consistency tuning",
    text: "For galleries or bulk orders, we match color and brightness across the full image set for a unified finish.",
  },
  {
    title: "4. Delivery",
    text: "Final corrected images are delivered in high quality, ready for online use, print, portfolios, or client presentation.",
  },
];

const pricingPoints = [
  "Basic correction includes white balance, exposure, tone adjustment, and contrast enhancement.",
  "Advanced correction may include selective color work, background balancing, skin tone cleanup, and custom mood refinement.",
  "Pricing depends on image quantity, complexity, turnaround time, and the level of correction required.",
];

const choosePhoton = [
  "Skilled retouchers with experience across portrait, wedding, product, real estate, and commercial editing.",
  "Consistent results for single images and large-volume batches.",
  "Quick turnaround times with strong attention to detail.",
  "Affordable service plans for photographers, businesses, and agencies.",
];

const topGallery = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
];

const bottomGallery = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
];

export default function ColorCorrectionPage() {
  return (
    <div className="color-page">
        <Navbar />
      <div className="color-container">
        <section className="color-hero">
          <div className="color-hero-images">
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
              alt="Color correction"
            />
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
              alt="Color correction"
            />
          </div>

          <div className="color-hero-content">
            <h1>COLOR CORRECTION</h1>
            <button type="button">CONTACT US</button>
          </div>
        </section>

        <section className="color-content-section first-section">
          <h2>Professional Photo Color Correction Services at Photon Retouch</h2>
          <p>
            Color correction is one of the most important parts of professional photo
            editing. It improves brightness, contrast, tones, white balance, and
            overall consistency so that every image looks polished, clear, and visually
            balanced. Our professional color correction service is designed to bring
            life back into photos and make them ready for web, print, portfolios, and
            client delivery.
          </p>
        </section>

        <section className="color-content-section">
          <h2>Understanding Color Correction</h2>
          <p>
            Color correction is the process of adjusting tones and lighting to improve
            the visual quality and realism of an image. It corrects issues like dull
            colors, yellow or blue casts, uneven skin tones, poor contrast, low
            exposure, and inconsistent brightness. The goal is to make the image look
            clean, natural, and professionally finished.
          </p>
        </section>

        <section className="color-two-column">
          <div className="color-text-column">
            <h2>Why Choose Professional Color Correction Services?</h2>
            <p>
              Professional correction helps images look more balanced and premium while
              keeping them realistic. Whether the photo is for a wedding album,
              eCommerce listing, portrait portfolio, or real estate brochure, accurate
              color plays a huge role in the final impression.
            </p>
            {whyChoosePoints.map((item, index) => (
              <p key={index}>
                <strong>{index + 1}. </strong>
                {item}
              </p>
            ))}
          </div>

          <div className="color-image-column">
            <BeforeAfterCard
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
            />
          </div>
        </section>

        <section className="color-content-section compact-top">
          <p>
            <strong>Enhanced brightness:</strong> Proper exposure adjustments can make
            dark or flat images feel more vivid and professional.
          </p>
          <p>
            <strong>Balanced skin tones:</strong> Especially important for portraits,
            fashion, and beauty images where natural skin appearance matters.
          </p>
          <p>
            <strong>Better mood and clarity:</strong> Correct colors influence the
            atmosphere of the image and make details stand out more clearly.
          </p>
        </section>

        <section className="color-content-section">
          <h2>Our Photo Color Correction Services Process</h2>
          {processSteps.map((step, index) => (
            <p key={index}>
              <strong>{step.title}</strong> {step.text}
            </p>
          ))}
        </section>

        <section className="color-two-column">
          <div className="color-text-column">
            <h2>Understanding Photo Color Correction Cost</h2>
            {pricingPoints.map((item, index) => (
              <p key={index}>
                <strong>{index + 1}. </strong>
                {item}
              </p>
            ))}
            <p>
              We provide flexible pricing for both individual and bulk image orders,
              making the service useful for photographers, studios, businesses, and
              creative agencies.
            </p>
          </div>

          <div className="color-image-column">
            <BeforeAfterCard
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
            />
          </div>
        </section>

        <section className="color-two-column color-reverse-mobile">
          <div className="color-image-column">
            <BeforeAfterCard
              src="https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&w=1200&q=80"
            />
          </div>

          <div className="color-text-column">
            <h2>Why Choose Photon Retouch?</h2>
            {choosePhoton.map((item, index) => (
              <p key={index}>
                <strong>{index + 1}. </strong>
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="color-gallery-section">
          <div className="color-gallery-two">
            {topGallery.map((img, index) => (
              <BeforeAfterCard key={index} src={img} />
            ))}
          </div>

          <div className="color-dots">
            <span></span>
            <span className="active"></span>
            <span></span>
          </div>
        </section>

        <section className="color-gallery-section bottom-space">
          <div className="color-gallery-four">
            {bottomGallery.map((img, index) => (
              <BeforeAfterCard key={index} src={img} />
            ))}
          </div>
        </section>

        <section className="color-content-section">
          <h2>Get Started with Our Color Correction Services Today</h2>
          <p>
            If your images look dull, uneven, too warm, too cool, or simply lack the
            professional finish you want, color correction can make a major
            difference. From portraits and weddings to products and interiors, our
            editing service helps create cleaner, stronger, and more visually
            appealing photos that are ready to impress.
          </p>
        </section>

        <section className="color-form-section">
          <h2>Send us a message</h2>

          <form className="color-contact-form">
            <div className="color-form-row">
              <div className="color-form-group">
                <label>Name*</label>
                <input type="text" placeholder="Enter name" />
              </div>
              <div className="color-form-group">
                <label>Phone*</label>
                <input type="text" placeholder="Phone number" />
              </div>
            </div>

            <div className="color-form-row">
              <div className="color-form-group">
                <label>Email*</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="color-form-group">
                <label>Select Service</label>
                <input type="text" placeholder="Select service" />
              </div>
            </div>

            <div className="color-form-row">
              <div className="color-form-group">
                <label>Country</label>
                <input type="text" placeholder="Country" />
              </div>
              <div className="color-form-group">
                <label>Project Source</label>
                <input type="text" placeholder="Upload file / paste source" />
              </div>
            </div>

            <div className="color-form-group">
              <label>Work Requirement</label>
              <textarea rows="6" placeholder="Write requirement"></textarea>
            </div>

            <div className="color-checkbox-row">
              <input type="checkbox" id="color-robot" />
              <label htmlFor="color-robot">I’m not a robot</label>
            </div>

            <button type="submit" className="color-submit-btn">
              Submit
            </button>
          </form>
        </section>

        <section className="color-review-section">
          <h2>Leave a review</h2>

          <form className="color-review-form">
            <div className="color-form-group">
              <label>Your review</label>
              <textarea rows="5" placeholder="Write your review"></textarea>
            </div>

            <div className="color-form-group">
              <label>Your name</label>
              <input type="text" placeholder="Tell us your name" />
            </div>

            <div className="color-form-group">
              <label>Your email</label>
              <input type="email" placeholder="Tell us your email" />
            </div>

            <div className="color-checkbox-row">
              <input type="checkbox" id="color-review-rule" />
              <label htmlFor="color-review-rule">
                I have read and agree to review guidelines.
              </label>
            </div>

            <button type="submit" className="color-submit-btn">
              Submit Review
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}

function BeforeAfterCard({ src }) {
  return (
    <div className="color-before-after-card">
      <img src={src} alt="Color correction preview" />

      <div className="image-overlay"></div>

      <div className="before-label">Before</div>
      <div className="after-label">After</div>

      <div className="color-divider-line vertical"></div>
      <div className="color-divider-circle">
        <span>‹ ›</span>
      </div>
    </div>
  );
}