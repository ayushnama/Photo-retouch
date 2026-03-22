import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AboutUsPage() {
  return (
    <div className="about-page">
        <Navbar />
      <div className="about-container">
        <section className="about-hero">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"
            alt="About Photon Retouch"
          />
        </section>

        <section className="about-content">
          <h1>About us</h1>
          <div className="about-underline"></div>

          <p>
            Based in Jaipur, Rajasthan, with an additional office in New Delhi,
            Photon Retouch is your go-to destination for digital image
            retouching. Founded by seasoned professionals in the industry, we
            specialize in a range of services, including basic retouching, color
            correction, beauty editing, image manipulation, background removal,
            and photo cropping.
          </p>

          <p>
            Our goal is to provide exceptional service at lightning speed while
            maintaining quality at reasonable costs. We employ highly skilled
            retouchers who consistently deliver outstanding results. We invite
            you to experience our services by sending us a free sample image for
            review.
          </p>

          <p>
            At Photon Retouch, we offer a comprehensive suite of
            image-retouching services designed to meet all your editing needs.
            Our expertise includes basic retouching, color correction, beauty
            retouching, masking, restoration, clipping paths, newborn
            retouching, jewelry retouching, object removal, creative
            retouching, and album design. Additionally, we provide professional
            video editing services to enhance your visual content.
          </p>

          <p>
            Our commitment to quality serves a variety of clientele. We work
            tirelessly, often late into the night, to ensure a quick turnaround
            time without compromising quality.
          </p>

          <h2>24/7 Availability and Exceptional Service</h2>

          <p>
            We are available around the clock, ready to deliver top-notch
            services with swift turnaround times at competitive prices. Our
            devoted team spends the time to understand your precise criteria to
            ensure that we satisfy your expectations efficiently and within the
            agreed timelines.
          </p>

          <p>
            To help you gauge our capabilities, we offer a free photo editing
            sample. This allows you to evaluate our work before placing bulk
            orders. Customer satisfaction is our number one goal, and we
            endeavor to bring your ideas and concepts to life with the utmost
            quality.
          </p>

          <h2>Building Strong Client Relationships</h2>

          <p>
            We provide frequent connections with our clientele. We fully
            understand their needs and provide updates throughout the editing
            process. Our focus is on delivering the best solutions while
            fostering long-term relationships with our customers. Our team is
            well-equipped and trained to meet the expectations of a global
            clientele, ensuring a seamless connection that transforms your
            visions into reality.
          </p>

          <p>Experience the Photon Retouch difference today!</p>
        </section>
      </div>
      <Footer />
    </div>
  );
}