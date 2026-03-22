import React from "react";

export default function WelcomeSection() {
  return (
    <div className="welcome-container">
      <div className="image-stack">
        <div className="img-layer layer1"></div>
        <div className="img-layer layer2"></div>
        <div className="img-layer main-img">
          <img src="https://photonretouch.com/wp-content/uploads/2024/10/Sequence-01.gif" alt="welcome" />
        </div>
      </div>

      <div className="text-section">
        <h2>
          Welcome to Photon Retouch, Your Premier Photo Editing Partner
        </h2>
        <p>
          At Photon Retouch, we pride ourselves on being the leading name in a
          photo editing company dedicated to helping photographers like you
          take your visual content to the next level. Our tailored photo
          retouching services are designed to meet your unique needs. We
          specialize in transforming your images into unexpected works of art,
          ensuring they capture attention and convey the stories you wish to
          tell.
        </p>
      </div>
    </div>
  );
}