import React from 'react';

const news: { date: string; tag: string; title: string; excerpt: string }[] = [];

export default function NewsPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">Latest Updates</div>
          <h1 className="page-banner-title">News</h1>
          <p className="page-banner-sub">
            Announcements, events, new publications, and updates from the SISC Journal editorial team.
          </p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          {news.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '5rem 2rem',
              background: 'var(--bg-surface)',
              borderRadius: 'var(--border-radius)',
              border: '1.5px dashed var(--border-mid)',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.25rem', opacity: 0.25 }}>📰</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                No News Yet
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto', lineHeight: 1.7 }}>
                Announcements, events, and updates will appear here once published by the editorial office.
              </p>
            </div>
          ) : (
            <div className="news-grid-auto">
              {news.map((n, i) => (
                <a href="#" key={i} className="news-card" style={{ textDecoration: 'none' }}>
                  <div className="news-card-top">
                    <span className="card-meta">{n.tag}</span>
                    <span className="news-date">{n.date}</span>
                  </div>
                  <h4 className="news-title">{n.title}</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.7', flex: 1 }}>{n.excerpt}</p>
                  <span className="news-read">Read more →</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
