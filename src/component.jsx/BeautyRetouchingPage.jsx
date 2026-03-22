import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


const servicePoints = [
  "Skin retouching with natural texture preservation.",
  "Blemish, acne, wrinkle, and under-eye correction.",
  "Makeup enhancement and tone balancing.",
  "Hair retouching, flyaway cleanup, and facial detail refinement.",
  "Background cleanup and premium editorial finishing.",
];

const processSteps = [
  {
    title: "Step 1: Image submission",
    text: "Share your beauty portraits along with your preferred editing style, usage purpose, and any special retouching notes.",
  },
  {
    title: "Step 2: Professional retouching",
    text: "We enhance skin, color, contrast, makeup, lighting, and small distractions while keeping the image polished and realistic.",
  },
  {
    title: "Step 3: Review and revision",
    text: "You can review the edited previews and request final corrections so the result matches your exact expectations.",
  },
  {
    title: "Step 4: Delivery",
    text: "Once everything is approved, we send the final high-resolution files ready for social, portfolio, print, or campaign use.",
  },
];

const topGallery = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
];

const bottomGallery = [
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
];

export default function BeautyRetouchingPage() {
  return (
    <div className="beauty-page">
                    <Navbar />
      <div className="beauty-container">
        <section className="beauty-hero">
          <div className="beauty-hero-images">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
              alt="Beauty retouching"
            />
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
              alt="Beauty retouching"
            />
          </div>

          <div className="beauty-hero-content">
            <h1>BEAUTY RETOUCHING</h1>
            <button type="button">CONTACT US</button>
          </div>
        </section>

        <section className="beauty-content-section first-section">
          <h2>Transform Your Images with Professional Beauty Retouching Services</h2>
          <p>
            Beauty retouching is all about enhancing portraits while preserving the
            natural essence of the subject. Our service helps improve skin, makeup,
            hair, light, and fine details to create clean, polished, and visually
            striking beauty images for portfolios, campaigns, social media, and
            commercial use.
          </p>
        </section>

        <section className="beauty-content-section">
          <h2>Why Beauty Photo Retouching Matters for Perfect Images</h2>
          <p>
            Beauty photography places every detail under the spotlight. Even minor
            distractions such as blemishes, uneven tones, frizzy hair, harsh shadows,
            or texture issues can affect the final impact of an image. Professional
            beauty retouching helps present the subject at their best while still
            keeping the portrait believable and elegant.
          </p>
        </section>

        <section className="beauty-content-section">
          <h2>The Fine Line Between Enhancement and Authenticity</h2>
          <p>
            Great beauty retouching is not about making a person look fake. It is
            about refining the image carefully so the result feels elevated, clean,
            and premium. Skin should remain natural, features should stay true to the
            person, and every correction should support the photo rather than overpower it.
          </p>
        </section>

        <section className="beauty-two-column">
          <div className="beauty-image-column">
            <BeforeAfterCard
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"
            />
          </div>

          <div className="beauty-text-column">
            <h2>Our Comprehensive Beauty Retouching Services</h2>
            {servicePoints.map((item, index) => (
              <p key={index}>
                <strong>{index + 1}. </strong>
                {item}
              </p>
            ))}
            <p>
              We work on portraits, editorial looks, branding visuals, influencer
              content, model portfolios, and campaign images with an emphasis on
              realistic yet high-end results.
            </p>
          </div>
        </section>

        <section className="beauty-content-section compact-top">
          <p>
            <strong>Hair retouching:</strong> We clean stray hairs and improve shape
            without making the hairline look artificial.
          </p>
          <p>
            <strong>Skin retouching:</strong> We remove temporary imperfections while
            preserving pores and natural facial texture.
          </p>
          <p>
            <strong>Makeup enhancement:</strong> Lip color, blush, eye definition,
            and highlight balance are refined for a cleaner finish.
          </p>
          <p>
            <strong>Background cleanup:</strong> Minor distractions are removed to
            keep the focus fully on the subject.
          </p>
        </section>

        <section className="beauty-two-column">
          <div className="beauty-text-column">
            <h2>The Photon Retouch Process</h2>
            {processSteps.map((step, index) => (
              <div className="beauty-step-block" key={index}>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>

          <div className="beauty-image-column">
            <BeforeAfterCard
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80"
            />
          </div>
        </section>

        <section className="beauty-two-column beauty-reverse-mobile">
          <div className="beauty-image-column">
            <BeforeAfterCard
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80"
            />
          </div>

          <div className="beauty-text-column">
            <h2>Why Choose Us?</h2>
            <p>
              We focus on premium-quality beauty retouching that improves images
              without removing their personality. Our workflow is ideal for beauty
              brands, photographers, influencers, models, and agencies.
            </p>
            <p>
              <strong>1. Experienced retouchers:</strong> Skilled in beauty,
              portrait, editorial, and fashion-style enhancements.
            </p>
            <p>
              <strong>2. Natural results:</strong> Clean and polished edits without
              overly plastic skin or unrealistic features.
            </p>
            <p>
              <strong>3. Quality workflow:</strong> Every image is reviewed carefully
              for consistency and visual impact.
            </p>
            <p>
              <strong>4. Fast service:</strong> Reliable turnaround for both small
              and bulk orders.
            </p>
          </div>
        </section>

        <section className="beauty-gallery-section">
          <div className="beauty-gallery-two">
            {topGallery.map((img, index) => (
              <BeforeAfterCard key={index} src={img} />
            ))}
          </div>

          <div className="beauty-dots">
            <span></span>
            <span className="active"></span>
            <span></span>
          </div>
        </section>

        <section className="beauty-gallery-section bottom-space">
          <div className="beauty-gallery-four">
            {bottomGallery.map((img, index) => (
              <BeforeAfterCard key={index} src={img} />
            ))}
          </div>
        </section>

        <section className="beauty-content-section">
          <h2>Conclusion</h2>
          <p>
            Professional beauty retouching helps elevate portraits into polished,
            brand-ready visuals while preserving realism and personality. Whether
            you need edits for portfolios, campaigns, personal branding, or social
            content, refined retouching creates a stronger and more memorable image.
          </p>
        </section>

        <section className="beauty-form-section">
          <h2>Send us a message</h2>

          <form className="beauty-contact-form">
            <div className="beauty-form-row">
              <div className="beauty-form-group">
                <label>Name*</label>
                <input type="text" placeholder="Enter name" />
              </div>
              <div className="beauty-form-group">
                <label>Phone*</label>
                <input type="text" placeholder="Phone number" />
              </div>
            </div>

            <div className="beauty-form-row">
              <div className="beauty-form-group">
                <label>Email*</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="beauty-form-group">
                <label>Select Service</label>
                <input type="text" placeholder="Select service" />
              </div>
            </div>

            <div className="beauty-form-row">
              <div className="beauty-form-group">
                <label>Country</label>
                <input type="text" placeholder="Country" />
              </div>
              <div className="beauty-form-group">
                <label>Project Source</label>
                <input type="text" placeholder="Upload file / paste source" />
              </div>
            </div>

            <div className="beauty-form-group">
              <label>Work Requirement</label>
              <textarea rows="6" placeholder="Write requirement"></textarea>
            </div>

            <div className="beauty-checkbox-row">
              <input type="checkbox" id="beauty-robot" />
              <label htmlFor="beauty-robot">I’m not a robot</label>
            </div>

            <button type="submit" className="beauty-submit-btn">
              Submit
            </button>
          </form>
        </section>

        <section className="beauty-review-section">
          <h2>Leave a review</h2>

          <form className="beauty-review-form">
            <div className="beauty-form-group">
              <label>Your review</label>
              <textarea rows="5" placeholder="Write your review"></textarea>
            </div>

            <div className="beauty-form-group">
              <label>Your name</label>
              <input type="text" placeholder="Tell us your name" />
            </div>

            <div className="beauty-form-group">
              <label>Your email</label>
              <input type="email" placeholder="Tell us your email" />
            </div>

            <div className="beauty-checkbox-row">
              <input type="checkbox" id="beauty-review-rule" />
              <label htmlFor="beauty-review-rule">
                I have read and agree to review guidelines.
              </label>
            </div>

            <button type="submit" className="beauty-submit-btn">
              Submit Review
            </button>
          </form>
        </section>
      </div>
      <Footer/>
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