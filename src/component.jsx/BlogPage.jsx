import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const blogPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    date: "January 13, 2025",
    title: "Top 10 Benefits of Using Clipping Path Services for Your Photography Business",
    size: "large",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    date: "January 13, 2025",
    title: "How to Choose the Right Photo Editing Services for Your Business Needs",
    size: "small",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    date: "December 31, 2024",
    title: "Clipping Path vs. Background Removal: Everything You Need to Know",
    size: "small",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=80",
    date: "December 31, 2024",
    title: "Top 10 Reasons Why Outsourcing Photo Editing is Worth It",
    size: "wide",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    date: "December 24, 2024",
    title: "How Photo Retouching Can Boost Your Brand’s Success in Real-Life",
    size: "small",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    date: "December 24, 2024",
    title: "The Ultimate Guide to Choosing the Best Photo Editing Service for Your Needs",
    size: "small",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    date: "November 25, 2024",
    title: "Best Photography Locations And Places in USA For Wedding Photography",
    size: "small",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80",
    date: "November 25, 2024",
    title: "How to Take Your Photography to the Next Level",
    size: "large-right",
  },
];

export default function BlogPage() {
  return (
    <div className="blog-page">
      <Navbar />

      <div className="blog-container">
        <section className="blog-hero">
          <img
            src="https://images.unsplash.com/photo-1522205408450-add114ad53fe?auto=format&fit=crop&w=1800&q=80"
            alt="Our Blogs"
          />
          <div className="blog-hero-overlay">
            <h1>Our Blogs</h1>
          </div>
        </section>

        <section className="blog-grid-section">
          <div className="blog-grid">
            <BlogCard post={blogPosts[0]} className="blog-card-large" />
            <div className="blog-right-stack">
              <BlogCard post={blogPosts[1]} className="blog-card-small" />
              <BlogCard post={blogPosts[2]} className="blog-card-small" />
            </div>

            <BlogCard post={blogPosts[3]} className="blog-card-wide" />
            <BlogCard post={blogPosts[4]} className="blog-card-small" />

            <div className="blog-left-stack">
              <BlogCard post={blogPosts[5]} className="blog-card-small" />
              <BlogCard post={blogPosts[6]} className="blog-card-small" />
            </div>
            <BlogCard post={blogPosts[7]} className="blog-card-large-right" />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

function BlogCard({ post, className }) {
  return (
    <div className={`blog-card ${className}`}>
      <img src={post.image} alt={post.title} />
      <div className="blog-card-overlay">
        <p className="blog-date">{post.date} | By PHOTON RETOUCH</p>
        <h3>{post.title}</h3>
      </div>
    </div>
  );
}