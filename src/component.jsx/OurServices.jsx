import React from "react";

const services = [
  {
    img: "https://photonretouch.com/wp-content/uploads/2024/10/image_5-11.jpg",
    title: "Newborn Baby Retouching",
    link: "/newborn-baby-retouching",
  },
  {
    img: "https://photonretouch.com/wp-content/uploads/2024/10/pexels-the-glorious-studio-3584518-5737277-copy.jpg",
    title: "Jewelry Retouching",
    link: "/jewelry-retouching-page",
  },
  {
    img: "https://photonretouch.com/wp-content/uploads/2018/05/Beauty-Retouching-scaled.jpg",
    title: "Beauty Retouching",
    link: "/beauty-retouching-page",
  },
  {
    img: "https://photonretouch.com/wp-content/uploads/2024/10/Nikon-D750-Shotkit-7-1-copy-2.jpg",
    title: "Color Correction",
    link: "/color-correction-page",
  },
];

export default function ServicesSection() {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>

      <div className="services-grid">
        {services.map((item, index) => (
          <a className="service-card" href={item.link} key={index}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}