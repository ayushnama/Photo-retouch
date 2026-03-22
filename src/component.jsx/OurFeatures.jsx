import React from "react";

const features = [
  {
    icon: "🧠",
    title: "Skilled Professionals",
    desc: "Our team, comprised of seasoned editors who are deeply passionate about enhancing visuals, is dedicated to providing expert attention to each project."
  },
  {
    icon: "⏱️",
    title: "Fast Turnaround",
    desc: "We understand deadlines matter. Our streamlined workflow enables us to offer high-quality results and edits quickly, so you never have to wait long."
  },
  {
    icon: "🛠️",
    title: "Modern Techniques",
    desc: "We use the latest editing software and techniques to ensure your photos and videos look fresh and professional."
  },
  {
    icon: "🔍",
    title: "Satisfaction Focus",
    desc: "We are unwavering in our commitment to your satisfaction, offering modifications until you are completely happy with the final output."
  },
  {
    icon: "🏷️",
    title: "Transparent Pricing",
    desc: "Our pricing is straightforward and competitive, with nothing concealed expenses, allowing you to budget confidently."
  },
  {
    icon: "🎧",
    title: "24/7 Customer Support",
    desc: "Our dedicated support team is here for you around the clock to ensure assistance is always just a message away."
  }
];

export default function FeaturesSection() {
  return (
    <div className="features-container">
      <h2 className="features-title">Our Features</h2>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}