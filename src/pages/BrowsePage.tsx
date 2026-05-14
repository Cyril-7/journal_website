import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data';

const filters = ['All', 'Historical Theology', 'Church History', 'Ecclesiology', 'Cultural Studies', 'Comparative Religion', 'Liturgical Studies'];

export default function BrowsePage() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = articles.filter(a => {
    const matchFilter = active === 'All' || a.category === active;
    const matchQuery = query === '' || a.title.toLowerCase().includes(query.toLowerCase()) || a.author.toLowerCase().includes(query.toLowerCase());
    return matchFilter && matchQuery;
  });

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">Research Library</div>
          <h1 className="page-banner-title">Browse Articles</h1>
          <p className="page-banner-sub">Search our full archive of scholarly articles across all published journals.</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="browse-bar">
            <input
              type="text"
              className="search-box browse-search"
              placeholder="Search by title, author, keyword or DOI..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button className="btn btn-primary">Search</button>
          </div>

          <div className="browse-filters">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-chip ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '1.1rem' }}>No articles found. Try a different search or filter.</p>
            </div>
          ) : (
            <div className="articles-list">
              {filtered.map(a => (
                <Link key={a.id} to={`/article/${a.id}`} className="article-row" style={{ display: 'block' }}>
                  <div className="article-row-meta">
                    <span className="card-meta">{a.category}</span>
                    <span className="article-row-date">{a.date}</span>
                  </div>
                  <h4 className="article-row-title">{a.title}</h4>
                  <p className="article-row-excerpt">{a.excerpt}</p>
                  <span className="article-row-author">— {a.author}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
