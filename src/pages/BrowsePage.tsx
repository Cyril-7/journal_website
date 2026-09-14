import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { articles } from '../data';
import { useSEO } from '../useSEO';


const filters = ['All', 'Historical Theology', 'Church History', 'Liturgical Studies', 'Ecclesiology', 'Cultural Studies', 'Comparative Religion'];

export default function BrowsePage() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  useSEO({
    title: 'Research Library',
    description:
      'Browse the SISC open-access research library. Search peer-reviewed articles on Indo-Semitic Christianity, Malankara Church history, Syriac liturgy, ecclesiology, and theology.',
    keywords:
      'browse articles, Indo-Semitic Christianity research, Malankara church history, Syriac liturgy articles, open access theology papers, SISC library',
    canonical: '/browse',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SearchResultsPage',
      name: 'Research Library — SISC Journal',
      url: 'https://jsisc.in/browse',
      description: 'Browse and search all open-access peer-reviewed articles in the SISC journal library.',
    },
  });


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('query');
    const categoryParam = params.get('category');
    if (queryParam) setQuery(decodeURIComponent(queryParam));
    if (categoryParam) {
      const decodedCat = decodeURIComponent(categoryParam);
      if (filters.includes(decodedCat)) setActive(decodedCat);
    }
  }, [location.search]);

  const filtered = articles.filter(a => {
    const matchFilter = active === 'All' || a.category === active;
    const matchQuery = query === '' ||
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.author.toLowerCase().includes(query.toLowerCase()) ||
      (a.tags && a.tags.some(t => t.toLowerCase().includes(query.toLowerCase())));
    return matchFilter && matchQuery;
  });

  const isFiltering = active !== 'All' || query !== '';

  return (
    <>
      {/* Browse banner */}
      <div className="browse-banner">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(184,154,104,0.9)', marginBottom: '1rem' }}>
              Research Library
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#ffffff', marginBottom: '0.85rem', lineHeight: '1.2', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Browse Articles
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', maxWidth: '520px', margin: '0 auto', lineHeight: '1.75', fontFamily: 'var(--font-body)' }}>
              Search our open-access directory of peer-reviewed articles on Indo-Semitic Christianity.
            </p>
          </div>

          {/* Search bar */}
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: '#ffffff',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--border-radius)',
              gap: '0',
              overflow: 'hidden',
              boxShadow: isFocused ? '0 0 0 2px rgba(100,25,27,0.4)' : 'none',
              transition: 'box-shadow 0.18s ease'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginLeft: '1rem' }}>
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search by title, author, or keyword…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  padding: '0.75rem 0.75rem',
                  minWidth: 0
                }}
              />
              {query && (
                <button
                  onClick={() => { setQuery(''); inputRef.current?.focus(); }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '0.8rem', padding: '0 0.5rem', flexShrink: 0 }}
                  aria-label="Clear search"
                >✕</button>
              )}
              <button
                style={{
                  background: 'var(--accent-primary)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'background 0.18s ease',
                  letterSpacing: '0.03em'
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-primary-dark)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent-primary)')}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results section */}
      <section className="page-section" style={{ background: '#ffffff', minHeight: '50vh' }}>
        <div className="container">

          {/* Filter chips */}
          <div style={{ marginBottom: '1.75rem', paddingTop: '0.25rem' }}>
            <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem' }}>
              Filter by Subject
            </span>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  style={{
                    padding: '0.35rem 0.9rem',
                    borderRadius: '2px',
                    border: '1px solid',
                    borderColor: active === f ? 'var(--accent-primary)' : 'var(--border-mid)',
                    background: active === f ? 'var(--accent-primary)' : 'transparent',
                    color: active === f ? '#ffffff' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: active === f ? 600 : 400,
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                    letterSpacing: '0.01em'
                  }}
                >{f}</button>
              ))}
            </div>
          </div>

          {/* Results count bar */}
          <div className="browse-results-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{
                background: filtered.length > 0 ? 'var(--accent-primary-soft)' : 'var(--bg-elevated)',
                color: filtered.length > 0 ? 'var(--accent-primary)' : 'var(--text-muted)',
                borderRadius: '100px',
                padding: '0.2rem 0.75rem',
                fontSize: '0.8rem',
                fontWeight: 700
              }}>{filtered.length}</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {filtered.length === 1 ? 'peer-reviewed article found' : 'peer-reviewed articles found'}
                {query && <> for <em style={{ color: 'var(--text-primary)', fontStyle: 'normal', fontWeight: 600 }}>"{query}"</em></>}
              </span>
            </div>
            {isFiltering && (
              <button
                onClick={() => { setActive('All'); setQuery(''); }}
                style={{ fontSize: '0.83rem', color: 'var(--accent-primary)', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              >
                ✕ Clear all filters
              </button>
            )}
          </div>

          {/* Articles list or empty state */}
          {filtered.length === 0 ? (
            <div style={{ padding: '3rem 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                {isFiltering
                  ? `No articles matched "${query || active}". Try a different keyword or clear your filters.`
                  : 'No articles have been published yet. Check back soon for our inaugural issue.'}
              </p>
              {isFiltering && (
                <button
                  onClick={() => { setActive('All'); setQuery(''); }}
                  className="btn btn-outline"
                  style={{ marginTop: '1rem' }}
                >
                  Clear Filters
                </button>
              )}
            </div>
          ) : (
            <div className="articles-editorial-list">
              {filtered.map(a => (
                <Link key={a.id} to={`/article/${a.id}`} className="article-editorial-row">
                  <div className="browse-article-row-header" style={{ marginBottom: '0.4rem' }}>
                    <span className="card-meta article-editorial-category">{a.category}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>{a.date}</span>
                  </div>
                  <div className="article-editorial-title">{a.title}</div>
                  <div className="article-editorial-meta">
                    {a.author}
                    {a.volume && a.issueNumber && (
                      <> · Vol. {a.volume}, No. {a.issueNumber}{a.year ? ` (${a.year})` : ''}</>
                    )}
                    {a.doi && <> · <span style={{ fontFamily: 'monospace', fontSize: '0.75rem' }}>{a.doi}</span></>}
                  </div>
                  {a.excerpt && (
                    <p className="article-editorial-excerpt">
                      {a.excerpt.slice(0, 220)}{a.excerpt.length > 220 ? '…' : ''}
                    </p>
                  )}
                  <span className="article-editorial-cta">Read Article →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
