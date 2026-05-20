import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { articles } from '../data';

const filters = ['All', 'Historical Theology', 'Church History', 'Liturgical Studies', 'Ecclesiology', 'Cultural Studies', 'Comparative Religion'];

export default function BrowsePage() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

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
      {/* Dark banner with integrated search bar */}
      <div style={{
        background: 'linear-gradient(160deg, #0d1b2a 0%, #1c2e42 60%, #253446 100%)',
        padding: '7rem 0 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative radial blobs */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(176,58,46,0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-40px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(154,122,46,0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>
              Research Library
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#ffffff', marginBottom: '1rem', lineHeight: '1.2', fontWeight: 700 }}>
              Browse Manuscripts
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', margin: '0 auto', lineHeight: '1.75' }}>
              Search our open-access directory of peer-reviewed articles, theological treatises, and historical studies.
            </p>
          </div>

          {/* Premium search bar */}
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: '#ffffff',
              borderRadius: '14px',
              padding: '0.5rem 0.5rem 0.5rem 1.25rem',
              boxShadow: isFocused
                ? '0 0 0 3px rgba(176,58,46,0.3), 0 20px 60px rgba(0,0,0,0.3)'
                : '0 20px 60px rgba(0,0,0,0.2)',
              transition: 'box-shadow 0.3s ease',
              gap: '0.75rem'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search by title, author, DOI, or keyword…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  padding: '0.6rem 0',
                  minWidth: 0
                }}
              />
              {query && (
                <button
                  onClick={() => { setQuery(''); inputRef.current?.focus(); }}
                  style={{ background: 'var(--bg-elevated)', border: 'none', borderRadius: '8px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: '0.8rem', flexShrink: 0, transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--border-mid)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-elevated)')}
                  aria-label="Clear search"
                >✕</button>
              )}
              <button
                style={{
                  background: 'var(--accent-primary)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '0.65rem 1.5rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'background 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#8e2e24')}
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
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.85rem' }}>
              Filter by Subject Area
            </span>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  style={{
                    padding: '0.45rem 1.1rem',
                    borderRadius: '100px',
                    border: '1.5px solid',
                    borderColor: active === f ? 'var(--accent-primary)' : 'var(--border-mid)',
                    background: active === f ? 'var(--accent-primary)' : '#ffffff',
                    color: active === f ? '#ffffff' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.83rem',
                    fontWeight: active === f ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                    boxShadow: active === f ? '0 4px 12px rgba(176,58,46,0.2)' : 'none'
                  }}
                >{f}</button>
              ))}
            </div>
          </div>

          {/* Results count bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
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
            <div style={{ textAlign: 'center', padding: '6rem 2rem', background: 'var(--bg-surface)', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1.25rem', opacity: 0.3 }}>🔍</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                No articles found
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 2rem', lineHeight: '1.7' }}>
                {isFiltering
                  ? `No publications matched "${query || active}". Try a different keyword or clear your filters.`
                  : 'No articles have been published yet. Check back soon for our inaugural issue.'}
              </p>
              {isFiltering && (
                <button
                  onClick={() => { setActive('All'); setQuery(''); }}
                  className="btn btn-primary"
                  style={{ padding: '0.65rem 1.75rem', borderRadius: '8px' }}
                >
                  Clear Search &amp; Filters
                </button>
              )}
            </div>
          ) : (
            <div className="articles-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {filtered.map(a => (
                <Link key={a.id} to={`/article/${a.id}`} className="article-row" style={{
                  display: 'block', background: '#ffffff', border: '1px solid var(--border-subtle)',
                  borderRadius: '14px', padding: '2rem', boxShadow: '0 2px 8px rgba(13,27,42,0.02)',
                  transition: 'var(--transition-smooth)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span className="card-meta" style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem' }}>{a.category}</span>
                      {a.doi && <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>DOI: {a.doi}</span>}
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{a.date}</span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--text-primary)', lineHeight: '1.35', marginBottom: '0.6rem' }}>
                    {a.title}
                  </h4>
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '1rem' }}>
                    {a.excerpt}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                      — By {a.author} {a.affiliation ? `(${a.affiliation.split(',').pop()?.trim()})` : ''}
                    </span>
                    {a.tags && a.tags.length > 0 && (
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {a.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx} style={{ padding: '0.2rem 0.6rem', background: 'var(--bg-elevated)', borderRadius: '100px', fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
