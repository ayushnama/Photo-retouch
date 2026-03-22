import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const processSteps = [
  {
    title: "1. Contact us first",
    text: "Let us know your retouching requirements and preferred editing style. We review your project and help you get the best result for newborn photography.",
  },
  {
    title: "2. Professional Editing",
    text: "Our editors carefully enhance skin, remove redness, soften distractions, and keep the image natural while improving overall quality.",
  },
  {
    title: "3. Review and Feedback",
    text: "We share the edited previews so you can review the output and request any final refinements if needed.",
  },
  {
    title: "4. Final Delivery",
    text: "Once approved, we deliver the final high-resolution files ready for print, albums, websites, and social media use.",
  },
];

const benefits = [
  "High-quality results with natural skin retouching and soft enhancement.",
  "Affordable pricing for photographers, studios, and parents.",
  "Fast turnaround without compromising the final image quality.",
  "Safe and secure handling of your personal newborn photos.",
];

const galleryTop = [
  "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1200&q=80",
];

const galleryBottom = [
  "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
];

export default function OurServicesItem() {
  return (
    <div className="newborn-page">
           <Navbar />
      <div className="newborn-container">
        <section className="hero-section">
          <div className="hero-images">
            <img
              src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80"
              alt="newborn"
            />
            <img
              src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80"
              alt="newborn"
            />
          </div>

          <div className="hero-content">
            <h1>NEWBORN BABY RETOUCHING</h1>
            <button>CONTACT US</button>
          </div>
        </section>

        <section className="content-section">
          <h2>Newborn Baby Photo Retouching Services at Photon Retouch</h2>
          <p>
            Welcoming a new baby is a magical experience, and capturing such
            wonderful moments through photographs is special. However, making
            sure these images truly shine can take professional retouching. Our
            newborn baby photo retouching services are designed to enhance your
            photographs while keeping every detail soft, natural, and beautiful.
          </p>
        </section>

        <section className="content-section">
          <h2>Why Choose Our Newborn Photo Retouching Services?</h2>
          <p>
            <strong>1. Expert Newborn Skin Retouching:</strong> Newborn babies
            often have delicate skin with redness, flakes, or tiny marks. We
            retouch carefully while preserving natural texture.
          </p>
          <p>
            <strong>2. Soft and Natural Enhancement:</strong> We improve tones,
            lighting, and tiny distractions without making your baby look
            over-edited.
          </p>
          <p>
            <strong>3. Custom Editing Style:</strong> We can match your desired
            editing style and keep your newborn photos dreamy, soft, and warm.
          </p>
          <p>
            <strong>4. Quick Turnaround Time:</strong> We understand newborn
            galleries are time-sensitive, so we deliver polished work on time.
          </p>
        </section>

        <section className="two-column-section">
          <div className="text-column">
            <h2>Our Newborn Photo Retouching Process</h2>
            {processSteps.map((step, index) => (
              <div key={index} className="step-block">
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>

          <div className="image-column">
            <BeforeAfterCard
              src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1200&q=80"
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>
        </section>

        <section className="two-column-section reverse-mobile">
          <div className="image-column">
            <BeforeAfterCard
              src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80"
            />
          </div>

          <div className="text-column">
            <h2>Benefits of Choosing Photon Retouch</h2>
            {benefits.map((item, index) => (
              <p key={index}>
                <strong>{index + 1}. </strong>
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <div className="gallery-two">
            {galleryTop.map((img, index) => (
              <BeforeAfterCard key={index} src={img} />
            ))}
          </div>

          <div className="dots">
            <span></span>
            <span className="active"></span>
            <span></span>
          </div>
        </section>

        <section className="gallery-section">
          <div className="gallery-four">
            {galleryBottom.map((img, index) => (
              <BeforeAfterCard key={index} src={img} />
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2>Conclusion</h2>
          <p>
            Capturing your newborn’s early days is a memory worth saving, and we
            are here to help you do just that. With our newborn retouching
            services, your photos stay soft, sweet, and beautifully polished.
          </p>
        </section>

        <section className="form-section">
          <h2>Send us a message</h2>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name*</label>
                <input type="text" placeholder="Enter name" />
              </div>
              <div className="form-group">
                <label>Phone*</label>
                <input type="text" placeholder="Enter phone number" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email*</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Service</label>
                <input type="text" placeholder="Select service" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Country</label>
                <input type="text" placeholder="Country" />
              </div>
              <div className="form-group">
                <label>Project Source</label>
                <input type="text" placeholder="Paste drive / file source" />
              </div>
            </div>

            <div className="form-group">
              <label>Work Requirement</label>
              <textarea rows="5" placeholder="Write requirement"></textarea>
            </div>

            <div className="checkbox-row">
              <input type="checkbox" id="robot" />
              <label htmlFor="robot">I’m not a robot</label>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </section>

        <section className="review-section">
          <h2>Leave a review</h2>

          <form className="review-form">
            <div className="form-group">
              <label>Your review</label>
              <textarea rows="5" placeholder="Tell us your review"></textarea>
            </div>

            <div className="form-group">
              <label>Your name</label>
              <input type="text" placeholder="Tell us your name" />
            </div>

            <div className="form-group">
              <label>Your email</label>
              <input type="email" placeholder="Tell us your email" />
            </div>

            <div className="checkbox-row">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">
                I have read and agree to review guidelines.
              </label>
            </div>

            <button type="submit" className="submit-btn">
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
