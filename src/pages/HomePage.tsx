import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { articles } from '../data';
import { useSEO } from '../useSEO';


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content fade-in">
          <h1>Advancing Scholarship on Indo-Semitic Christianity</h1>
          <p>
            SISC Academic Press publishes peer-reviewed research on the Malankara Church,
            St. Thomas traditions, Syriac liturgies, and the rich interweaving of Indian and Semitic Christian heritage.
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
        <div className="content-area" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {/* About the Journal */}
          <div className="about-mission-block" style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--border-radius)',
            padding: '2.5rem',
            boxShadow: '0 1px 6px rgba(13, 27, 42, 0.04)'
          }}>
            <div className="section-eyebrow" style={{ marginBottom: '0.5rem' }}>Journal Overview</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--text-primary)', marginBottom: '1.25rem', fontWeight: 700 }}>
              About the Journal
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '1rem' }}>
              <em>The Journal of Syriac and Indo-Semitic Christianity</em> is an interdisciplinary academic journal dedicated to the study of Christianity in India, Asia, and the wider Semitic world. It explores the historical, theological, cultural, and ecclesial traditions that have shaped Christian identity across these contexts, with particular attention to the Indian and Syriac Christian traditions.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '1rem' }}>
              The journal seeks to examine the genealogy and contemporary expressions of Indo-Semitic Christianity, its relationship with West Syriac and other Asian Christian traditions, and the ways in which indigenous Christian identities have encountered, absorbed, resisted, and negotiated Western and Byzantine influences. It welcomes scholarship that critically engages questions of Christian identity, tradition, inculturation, ecclesiology, theology, history, liturgy, spirituality, culture, and the lived experience of Christian communities.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem' }}>
              By bringing together historical and theological inquiry with insights from the wider humanities and social sciences, the journal aims to foster a deeper understanding of Christianity as an Asian and Semitic phenomenon and to create space for critical reflection on its past, present, and future.
            </p>
          </div>

          {/* Our Mission */}
          <div className="about-mission-block" style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--border-radius)',
            padding: '2.5rem',
            boxShadow: '0 1px 6px rgba(13, 27, 42, 0.04)'
          }}>
            <div className="section-eyebrow" style={{ marginBottom: '0.5rem' }}>Scholarly Purpose</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--text-primary)', marginBottom: '1.25rem', fontWeight: 700 }}>
              Our Mission
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '1rem' }}>
              This journal attempts to bring to academic focus the identity of the Malankara Church and
              the genealogy of that identity. Following an <strong>interdisciplinary approach</strong>,
              it interweaves predominantly historical and theological methodologies — but is not limited
              to them alone. It will closely examine the Indian, Asian, and Semitic foundations upon which
              this identity is constructed, as well as the contemporary manifestations and challenges of
              its Christian being.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem' }}>
              The very cultural and theological foundation of this identity liberates this project from
              being narrowly confined to the ecclesial limits of the Malankara Church. Its enquiry
              includes the rich and varied Christian life in the Semitic world — a geography spanning
              ancient churches across Asia and North-eastern Africa — as well as the interaction of
              these churches with global currents and historical forces.
            </p>
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
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
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
  useSEO({
    title: 'Home',
    description:
      'SISC Academic Press — peer-reviewed research on Malankara Church, St. Thomas traditions, Syriac liturgies, and the Indo-Semitic heritage. Gold open-access journal.',
    keywords:
      'Indo-Semitic Christianity, Malankara Church, St. Thomas, Syriac liturgy, SISC Journal, open access, Kerala Christianity, church history, theology',
    canonical: '/',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ScholarlyArticle',
      name: 'Studies in Indo-Semitic Christianity Journal',
      description:
        'Peer-reviewed academic journal dedicated to Indo-Semitic Christianity, the Malankara Church, St. Thomas traditions, and Syriac liturgical heritage.',
      url: 'https://jsisc.in',
      publisher: {
        '@type': 'Organization',
        name: 'SISC Research Group',
        url: 'https://jsisc.in',
        logo: {
          '@type': 'ImageObject',
          url: 'https://jsisc.in/src/assets/logo.png',
        },
      },
      inLanguage: 'en',
      accessMode: 'textual',
      isAccessibleForFree: true,
    },
  });

  return (
    <>
      <Hero />
      <FeaturedGrid />
    </>
  );
}

