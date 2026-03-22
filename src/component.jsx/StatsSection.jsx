import React, { useEffect, useRef, useState } from "react";

function AnimatedStat({ target, suffix = "+", duration = 2000, start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration * 0.35) {
        const randomValue = Math.floor(Math.random() * (target + 50));
        setValue(randomValue);
      } else {
        const finalProgress = (progress - duration * 0.35) / (duration * 0.65);
        const easedProgress = Math.min(finalProgress, 1);
        const currentValue = Math.floor(easedProgress * target);
        setValue(currentValue);
      }

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, target, duration]);

  return (
    <h2>
      {value}
      {suffix}
    </h2>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-container" ref={sectionRef}>
      <div className="stat-box">
        <AnimatedStat target={2} start={startAnimation} />
        <p>Years of experience</p>
      </div>

      <div className="stat-box">
        <AnimatedStat target={790} start={startAnimation} />
        <p>Completed Project</p>
      </div>

      <div className="stat-box">
        <AnimatedStat target={701} start={startAnimation} />
        <p>Happy Client</p>
      </div>
    </div>
  );
}