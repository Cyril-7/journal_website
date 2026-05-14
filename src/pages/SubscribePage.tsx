import React, { useState } from 'react';

export default function SubscribePage() {
  const [done, setDone] = useState(false);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">Stay Connected</div>
          <h1 className="page-banner-title">Subscribe</h1>
          <p className="page-banner-sub">
            Receive new articles, event announcements, and call-for-papers directly in your inbox.
          </p>
        </div>
      </div>

      <section className="page-section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="newsletter" style={{ marginTop: 0 }}>
            <span className="hero-tag" style={{ marginBottom: '1.5rem' }}>Free &amp; Open Access</span>
            <h2>Join the SISC Network</h2>
            <p>Over 2,400 scholars, theologians, and researchers receive our newsletter. Join them today.</p>

            {done ? (
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✦</div>
                <h3 style={{ fontFamily: "'Lora', serif", color: 'var(--text-primary)', marginBottom: '0.5rem' }}>You're subscribed!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Thank you. Check your inbox for a confirmation email.</p>
              </div>
            ) : (
              <form className="newsletter-form" style={{ marginTop: '1.5rem' }} onSubmit={e => { e.preventDefault(); setDone(true); }}>
                <input type="email" placeholder="Enter your academic email" className="newsletter-input" required />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginTop: '3rem' }}>
            {[
              { icon: '📄', label: 'New Articles', desc: 'First to know when new research is published' },
              { icon: '📅', label: 'Events', desc: 'Symposia, workshops, and conference announcements' },
              { icon: '📢', label: 'Call for Papers', desc: 'Submission deadlines and special issue invitations' },
            ].map(item => (
              <div key={item.label} className="step-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h4 className="step-title" style={{ textAlign: 'center' }}>{item.label}</h4>
                <p className="step-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
