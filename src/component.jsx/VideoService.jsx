import React from "react";

const services = [
  {
    icon: "🎬",
    title: "Linear Editing",
    desc: "Being the best video editing service provider, we specialize in linear editing which involves arranging and modifying selected pictures and sounds in a preset manner."
  },
  {
    icon: "🎥",
    title: "Non-linear Editing",
    desc: "Our experienced non-linear editing services provide quick, flexible, and random access to your content allowing multiple copies for ultimate creative control."
  },
  {
    icon: "📽️",
    title: "Multisource Editing",
    desc: "Our multisource editing services enrich your videos with footage from numerous cameras and angles resulting in a polished & professional appearance."
  },
  {
    icon: "👁️",
    title: "Rotoscoping",
    desc: "We help you transform your videos using our frame-by-frame motion tracking approach to bring concepts to life in a visually dynamic manner."
  }
];

export default function VideoServices() {
  return (
    <div className="video-container">
      <h2 className="video-title">Our Video Editing Services</h2>

      <div className="video-grid">
        {services.map((item, index) => (
          <div className="video-card" key={index}>
            <div className="video-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}