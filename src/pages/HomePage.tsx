import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { articles } from '../data';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content fade-in">
          <span className="hero-tag">Featured Research Portal</span>
          <h1>Advancing Scholarship on Indo-Semitic Christianity</h1>
          <p>
            SISC Academic Press brings you peer-reviewed discoveries on the Malankara Church,
            St. Thomas traditions, Syriac liturgies, and the rich interweaving of Indian and Semitic heritage.
          </p>
          <div className="hero-actions">
            <Link to="/browse" className="btn btn-primary">Browse Articles</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedGrid() {
  const navigate = useNavigate();
  const [homeSearch, setHomeSearch] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (homeSearch.trim()) {
      navigate(`/browse?query=${encodeURIComponent(homeSearch.trim())}`);
    }
  };

  // Get the most recent article as featured, and the rest as recent listings
  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1);

  // Dynamically count categories
  const categoriesList = [
    'Historical Theology',
    'Church History',
    'Liturgical Studies',
    'Ecclesiology',
    'Comparative Religion'
  ];
  const categoryCounts = categoriesList.map(cat => {
    const count = articles.filter(a => a.category === cat).length;
    return [cat, count] as [string, number];
  });

  return (
    <section className="container page-section">
      <div className="main-layout">
        <div className="content-area">
          <div id="latest">
            <div className="grid-header">
              <div>
                <div className="section-eyebrow">Featured Insight</div>
                <h2 className="section-h2-large" style={{ fontFamily: 'var(--font-serif)' }}>Current Issue Spotlight</h2>
              </div>
              <Link to="/browse" className="view-all-link" style={{
                fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                borderBottom: '1px solid var(--accent-primary)', paddingBottom: '2px'
              }}>
                View Full Library →
              </Link>
            </div>

            <div className="featured-single-container" style={{ marginTop: '2rem' }}>
              <div className="issue-meta-bar">
                <span>Current Volume: Vol. 01 No. 01 (Inaugural)</span>
                <span>Published: Upcoming</span>
              </div>
              {featuredArticle ? (
                <Link to={`/article/${featuredArticle.id}`} className="featured-single-card" style={{ display: 'block', textDecoration: 'none' }}>
                  <img src={featuredArticle.image} className="featured-single-img" alt={featuredArticle.title} />
                  <div className="featured-single-overlay">
                    <span className="card-meta">{featuredArticle.category}</span>
                    <h3 className="featured-single-title" style={{ fontFamily: 'var(--font-serif)' }}>{featuredArticle.title}</h3>
                    <p className="featured-single-excerpt">{featuredArticle.excerpt}</p>
                    <div className="card-footer">
                      <span className="featured-author" style={{ fontWeight: 600 }}>{featuredArticle.author}</span>
                      <span className="footer-dot">·</span>
                      <span>{featuredArticle.date}</span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="featured-single-card-empty" style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '4.5rem 2rem',
                  border: '1.5px dashed var(--border-mid)',
                  borderRadius: 'var(--border-radius)',
                  textAlign: 'center',
                  background: 'var(--bg-surface)'
                }}>
                  <span className="card-meta" style={{ marginBottom: '1.25rem', background: 'var(--accent-secondary)', color: '#ffffff', padding: '0.35rem 0.85rem', borderRadius: 'var(--border-radius)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.5px' }}>Call for Papers</span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', fontSize: '1.65rem', marginBottom: '1rem', fontWeight: 700 }}>
                    Inaugural Issue Call for Manuscripts
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                    SISC Academic Press is currently accepting original research papers, historical reviews, and theological studies for our upcoming inaugural volume. We invite scholars to contribute.
                  </p>
                  <Link to="/contact" className="btn btn-primary" style={{ padding: '0.75rem 2rem', borderRadius: 'var(--border-radius)', textDecoration: 'none' }}>Contact to Submit</Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="sidebar">
          {/* Search research widget */}
          <div className="sidebar-widget search-widget-premium">
            <h4 className="sidebar-title">Search Research</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem', marginBottom: '1rem', lineHeight: '1.5' }}>
              Find articles by title, author, DOI, or keyword
            </p>
            <form onSubmit={handleSearchSubmit}>
              <div className="search-input-wrap">
                <svg className="search-input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input
                  type="text"
                  className="search-box search-input-premium"
                  placeholder="e.g. St. Thomas, Syriac..."
                  value={homeSearch}
                  onChange={e => setHomeSearch(e.target.value)}
                  id="sidebar-search-input"
                />
                {homeSearch && (
                  <button
                    type="button"
                    onClick={() => setHomeSearch('')}
                    className="search-clear-btn"
                    aria-label="Clear search"
                  >✕</button>
                )}
              </div>
              <button type="submit" className="btn btn-primary search-submit-btn" style={{ width: '100%', marginTop: '0.75rem', borderRadius: 'var(--border-radius)', padding: '0.7rem', fontSize: '0.875rem', letterSpacing: '0.3px' }}>
                Search Library →
              </button>
            </form>
            <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
              <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>
                Popular Topics
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {['St. Thomas', 'Syriac Liturgy', 'Malankara', 'Ecclesiology', 'Church History'].map(topic => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => { setHomeSearch(topic); navigate(`/browse?query=${encodeURIComponent(topic)}`); }}
                    style={{
                      padding: '0.3rem 0.7rem',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--border-radius)',
                      fontSize: '0.72rem',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      transition: 'var(--transition-smooth)'
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'var(--accent-primary-soft)';
                      (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent-primary)';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-accent)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg-elevated)';
                      (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-subtle)';
                    }}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Articles widget */}
          {recentArticles.length > 0 && (
            <div className="sidebar-widget">
              <h4 className="sidebar-title">Recent Publications</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1.25rem' }}>
                {recentArticles.map(art => (
                  <Link key={art.id} to={`/article/${art.id}`} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', textDecoration: 'none', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.85rem' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--accent-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {art.category}
                    </span>
                    <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: '1.4', margin: 0 }}>
                      {art.title}
                    </h5>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      By {art.author}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Journal Categories widget */}
          <div className="sidebar-widget">
            <h4 className="sidebar-title">Research Categories</h4>
            <ul className="category-list" style={{ marginTop: '1rem' }}>
              {categoryCounts.map(([name, count]) => (
                <li key={name}>
                  <Link to={`/browse?category=${encodeURIComponent(name)}`}>
                    <span>{name}</span>
                    <span className="category-count">{String(count).padStart(2, '0')}</span>
                  </Link>
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
