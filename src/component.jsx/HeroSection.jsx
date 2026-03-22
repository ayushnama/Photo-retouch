import React, { useState } from "react";

const images = [
  "https://i.pinimg.com/736x/2e/e1/7e/2ee17e16b0ce774ce091c1c02f8c3a4a.jpg",
  "https://i.pinimg.com/1200x/03/23/13/032313f18e781b7b1017a8317e98717b.jpg",
  "https://i.pinimg.com/1200x/1e/01/d6/1e01d6d3400da8d254af6f6129095bd3.jpg",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(prev => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent(prev => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="slider">
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <img
        src={images[current]}
        alt="slide"
        className="slide-image"
      />

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}