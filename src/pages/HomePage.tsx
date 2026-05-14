import React from 'react';
import { Link } from 'react-router-dom';
import { articles, journals } from '../data';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg float-slow"></div>
      <div className="container">
        <div className="hero-content fade-in">
          <span className="hero-tag">Featured Research</span>
          <h1>Advancing Scholarship on Indo-Semitic Christianity</h1>
          <p>
            SISC Journal brings you peer-reviewed insights on the Malankara Church,
            St. Thomas traditions, and the entanglement of Indian and Semitic spiritual heritage.
          </p>
          <div className="hero-actions">
            <Link to="/browse" className="btn btn-primary">Browse Articles</Link>
            <Link to="/submit" className="btn btn-outline">Submit Paper</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedGrid() {
  return (
    <section className="container page-section">
      <div className="main-layout">
        <div className="content-area">
          <div id="latest">
            <div className="grid-header">
              <div>
                <div className="section-eyebrow">Featured Insights</div>
                <h2 className="section-h2-large">The Knowledge Hub</h2>
              </div>
              <Link to="/browse" className="view-all-link" style={{
                fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                borderBottom: '1px solid var(--accent-primary)', paddingBottom: '2px'
              }}>
                View All →
              </Link>
            </div>

            <div className="featured-single-container">
              <div className="issue-meta-bar">
                <span>Current Issue: Vol. 04 No. 02 (2024)</span>
                <span>Published: May 15, 2024</span>
              </div>
              <Link to={`/article/${articles[0].id}`} className="featured-single-card">
                <img src={articles[0].image} className="featured-single-img" alt={articles[0].title} />
                <div className="featured-single-overlay">
                  <div className="card-meta">{articles[0].category}</div>
                  <h3 className="featured-single-title">{articles[0].title}</h3>
                  <p className="featured-single-excerpt">{articles[0].excerpt}</p>
                  <div className="card-footer">
                    <span className="featured-author">{articles[0].author}</span>
                    <span className="footer-dot">·</span>
                    <span>{articles[0].date}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="newsletter reveal" style={{ marginTop: '4rem' }}>
            <div className="newsletter-inner">
              <span className="hero-tag" style={{ marginBottom: '1.5rem' }}>Stay Updated</span>
              <h2>Join the SISC Network</h2>
              <p>Get the latest research and theological insights delivered to your inbox weekly.</p>
              <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Enter your academic email" className="newsletter-input" />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <aside className="sidebar">
          <div className="sidebar-widget">
            <h4 className="sidebar-title">Search Research</h4>
            <input type="text" className="search-box" placeholder="Keywords, Authors, DOI..." />
          </div>
          <div className="sidebar-widget">
            <h4 className="sidebar-title">Journal Categories</h4>
            <ul className="category-list">
              {[['Historical Theology', 12], ['Church History', 24], ['Ecclesiology', 18],
                ['Comparative Religion', 15]
              ].map(([name, count]) => (
                <li key={name as string}>
                  <a href="#"><span>{name}</span>
                    <span className="category-count">{String(count).padStart(2, '0')}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedGrid />
    </>
  );
}
