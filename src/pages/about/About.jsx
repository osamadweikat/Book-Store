import "./about.css";
import ourStoryImage from "../../images/our-story.jpeg";

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Our Book Store</h1>
          <p>
            Welcome to <span>Brands Book Store</span> — your trusted destination
            for discovering and purchasing books across every genre. We believe
            that reading connects people and inspires endless imagination.
          </p>
        </div>
      </section>

      <section className="our-story">
        <div className="story-image">
          <img src={ourStoryImage} alt="Our Story" />
        </div>
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Founded with a passion for books and knowledge, our journey began
            with a small collection of titles and a big dream — to make reading
            accessible to everyone. Today, we are proud to connect readers with
            authors and ideas that inspire and empower.
          </p>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="features">
          <div className="feature-card">
            <i className="bi bi-book"></i>
            <h3>Wide Selection</h3>
            <p>
              Thousands of books from every category — fiction, science,
              history, and more.
            </p>
          </div>
          <div className="feature-card">
            <i className="bi bi-truck"></i>
            <h3>Fast Delivery</h3>
            <p>
              Enjoy quick and reliable shipping to all Palestinian cities and
              beyond.
            </p>
          </div>
          <div className="feature-card">
            <i className="bi bi-shield-check"></i>
            <h3>Trusted Quality</h3>
            <p>
              All our books are original and carefully packed to ensure best
              quality.
            </p>
          </div>
          <div className="feature-card">
            <i className="bi bi-people"></i>
            <h3>Reader Community</h3>
            <p>
              Join our community of passionate readers and share your
              experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="stat-item">
          <h3>500+</h3>
          <p>Books Available</p>
        </div>
        <div className="stat-item">
          <h3>100+</h3>
          <p>Authors Collaborated</p>
        </div>
        <div className="stat-item">
          <h3>1,000+</h3>
          <p>Happy Readers</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>
      </section>

      <section className="join-community">
        <h2>Join Our Reading Journey</h2>
        <p>
          Be part of our growing community of readers, writers, and dreamers.
          Discover, learn, and get inspired with every page.
        </p>
        <a href="/contact" className="btn-join">
          Contact Us
        </a>
      </section>
    </div>
  );
}
