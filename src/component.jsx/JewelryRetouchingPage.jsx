import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const benefits = [
  "High-end enhancement for rings, earrings, necklaces, bracelets, and luxury accessories.",
  "Better shine, metal cleanup, and gemstone detailing for premium presentation.",
  "Background cleanup and distraction removal for eCommerce and catalog use.",
  "Consistent image quality across entire product collections.",
];

const processSteps = [
  {
    title: "1. Upload your images",
    text: "Share your jewelry photos along with any editing notes or style preferences. We review the project and prepare the best retouching workflow.",
  },
  {
    title: "2. Precision retouching",
    text: "We clean dust, scratches, reflections, uneven tones, and unwanted distractions while improving brilliance and detail.",
  },
  {
    title: "3. Review and approval",
    text: "Preview the edited results and request any final changes before delivery.",
  },
  {
    title: "4. Delivery",
    text: "Once approved, we send the final high-resolution files ready for web, print, marketplace listings, and advertising.",
  },
];

const topGallery = [
  "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80",
];

const bottomGallery = [
  "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1611107683227-e9060eccd846?auto=format&fit=crop&w=1200&q=80",
];

export default function JewelryRetouchingPage() {
  return (
    <div className="jewelry-page">
            <Navbar />
      <div className="jewelry-container">
        <section className="jewelry-hero">
          <div className="jewelry-hero-images">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80"
              alt="Jewelry retouching"
            />
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80"
              alt="Jewelry retouching"
            />
          </div>

          <div className="jewelry-hero-content">
            <h1>JEWELRY RETOUCHING</h1>
            <button type="button">CONTACT US</button>
          </div>
        </section>

        <section className="jewelry-content-section first-section">
          <h2>Professional Jewelry Photo Retouching Services to Perfect Your Photos</h2>
          <p>
            Jewelry photography demands precision, brilliance, and a clean visual finish.
            Our jewelry photo retouching service helps transform ordinary product photos
            into polished, premium-looking images suitable for websites, ads, social media,
            catalogs, and luxury brand presentations.
          </p>
        </section>

        <section className="jewelry-content-section">
          <h2>Understanding Jewelry Photo Retouching</h2>
          <p>
            Jewelry retouching is the process of refining product photos by cleaning dust,
            scratches, reflections, unwanted shadows, color imbalance, and other distractions.
            It also includes improving gemstones, enhancing shine, balancing tones, and making
            the jewelry look crisp and elegant without appearing fake.
          </p>
        </section>

        <section className="jewelry-two-column">
          <div className="jewelry-text-column">
            <h2>Why Is Jewelry Photo Retouching Important?</h2>
            <p>
              The presentation of jewelry is critical because customers usually decide based
              on visual appeal. Tiny defects in product photography can reduce the premium feel
              of the item and affect trust.
            </p>
            <p>
              <strong>1. First impressions matter:</strong> Clean and sharp product images help
              jewelry appear more luxurious and desirable.
            </p>
            <p>
              <strong>2. Highlight details:</strong> Fine metal texture, gemstone cuts, sparkle,
              and reflections need careful enhancement to stand out properly.
            </p>
            <p>
              <strong>3. Consistency across collections:</strong> A uniform editing style helps
              create a stronger brand identity across your catalog or store.
            </p>
            <p>
              <strong>4. Better conversion:</strong> High-quality visuals increase confidence and
              can improve engagement and product sales.
            </p>
          </div>

          <div className="jewelry-image-column">
            <BeforeAfterCard
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80"
            />
          </div>
        </section>

        <section className="jewelry-content-section">
          <h2>Benefits of Using Our Jewelry Photo Retouching Services</h2>
          {benefits.map((item, index) => (
            <p key={index}>
              <strong>{index + 1}. </strong>
              {item}
            </p>
          ))}
        </section>

        <section className="jewelry-two-column">
          <div className="jewelry-text-column">
            <h2>The Jewelry Retouching Process</h2>
            {processSteps.map((step, index) => (
              <div className="jewelry-step-block" key={index}>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>

          <div className="jewelry-image-column">
            <BeforeAfterCard
              src="https://images.unsplash.com/photo-1611107683227-e9060eccd846?auto=format&fit=crop&w=1200&q=80"
            />
          </div>
        </section>

        <section className="jewelry-two-column jewelry-reverse-mobile">
          <div className="jewelry-image-column">
            <BeforeAfterCard
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80"
            />
          </div>

          <div className="jewelry-text-column">
            <h2>Why Choose Photon Retouch?</h2>
            <p>
              We focus on premium-quality jewelry editing that keeps the product realistic,
              refined, and market-ready. Our retouching process is built to support both small
              brands and high-volume product catalogs.
            </p>
            <p>
              <strong>1. Experienced professionals:</strong> We understand metal surfaces,
              gemstone reflections, and luxury presentation standards.
            </p>
            <p>
              <strong>2. Detail-focused editing:</strong> Every small imperfection is handled
              carefully so the product looks polished and attractive.
            </p>
            <p>
              <strong>3. Fast turnaround:</strong> We deliver efficiently while maintaining
              professional quality.
            </p>
            <p>
              <strong>4. Affordable service:</strong> Great for eCommerce brands, studios,
              marketplaces, and jewelry businesses.
            </p>
          </div>
        </section>

        <section className="jewelry-content-section">
          <h2>Transform Your Jewelry Images Today</h2>
          <p>
            If you want your jewelry photos to look clean, premium, and ready for customers,
            professional retouching makes all the difference. From dust removal to brilliance
            enhancement, we help turn simple product photos into elegant visual assets for your
            brand.
          </p>
        </section>

        <section className="jewelry-gallery-section">
          <div className="jewelry-gallery-two">
            {topGallery.map((img, index) => (
              <BeforeAfterCard key={index} src={img} />
            ))}
          </div>

          <div className="jewelry-dots">
            <span></span>
            <span className="active"></span>
            <span></span>
          </div>
        </section>

        <section className="jewelry-gallery-section bottom-space">
          <div className="jewelry-gallery-four">
            {bottomGallery.map((img, index) => (
              <BeforeAfterCard key={index} src={img} />
            ))}
          </div>
        </section>

        <section className="jewelry-form-section">
          <h2>Send us a message</h2>

          <form className="jewelry-contact-form">
            <div className="jewelry-form-row">
              <div className="jewelry-form-group">
                <label>Name*</label>
                <input type="text" placeholder="Enter name" />
              </div>
              <div className="jewelry-form-group">
                <label>Phone*</label>
                <input type="text" placeholder="Phone" />
              </div>
            </div>

            <div className="jewelry-form-row">
              <div className="jewelry-form-group">
                <label>Email*</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="jewelry-form-group">
                <label>Select Service</label>
                <input type="text" placeholder="Select service" />
              </div>
            </div>

            <div className="jewelry-form-row">
              <div className="jewelry-form-group">
                <label>Country</label>
                <input type="text" placeholder="Country" />
              </div>
              <div className="jewelry-form-group">
                <label>Project Source</label>
                <input type="text" placeholder="Upload file / paste source" />
              </div>
            </div>

            <div className="jewelry-form-group">
              <label>Work Requirement</label>
              <textarea rows="6" placeholder="Write requirement"></textarea>
            </div>

            <div className="jewelry-checkbox-row">
              <input type="checkbox" id="robot-check" />
              <label htmlFor="robot-check">I’m not a robot</label>
            </div>

            <button type="submit" className="jewelry-submit-btn">
              Submit
            </button>
          </form>
        </section>

        <section className="jewelry-review-section">
          <h2>Leave a review</h2>

          <form className="jewelry-review-form">
            <div className="jewelry-form-group">
              <label>Your review</label>
              <textarea rows="5" placeholder="Share your experience"></textarea>
            </div>

            <div className="jewelry-form-group">
              <label>Your name</label>
              <input type="text" placeholder="Tell us your name" />
            </div>

            <div className="jewelry-form-group">
              <label>Your email</label>
              <input type="email" placeholder="Tell us your email" />
            </div>

            <div className="jewelry-checkbox-row">
              <input type="checkbox" id="review-guideline" />
              <label htmlFor="review-guideline">
                I have read and agree to review guidelines.
              </label>
            </div>

            <button type="submit" className="jewelry-submit-btn">
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