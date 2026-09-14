import React from 'react';
import { useSEO } from '../useSEO';

const news: { date: string; tag: string; title: string; excerpt: string }[] = [];

export default function NewsPage() {
  useSEO({
    title: 'News & Announcements',
    description:
      'Latest news, announcements, and updates from the SISC Journal editorial team. Stay informed about new publications, calls for papers, and academic events.',
    keywords:
      'SISC journal news, academic announcements, call for papers, new publications, Indo-Semitic Christianity events',
    canonical: '/news',
  });

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
              padding: '3.5rem 0',
              borderTop: '1px solid var(--border-subtle)',
              borderBottom: '1px solid var(--border-subtle)',
            }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
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
