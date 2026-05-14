import React, { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">Get In Touch</div>
          <h1 className="page-banner-title">Contact Us</h1>
          <p className="page-banner-sub">
            We welcome inquiries from researchers, institutions, and readers interested in
            Indo-Semitic Christian scholarship.
          </p>
        </div>
      </div>

      <section className="page-section">
        <div className="container contact-layout">
          <div className="contact-info">
            <div className="section-eyebrow">Reach Out</div>
            <h2 className="section-h2" style={{ textAlign: 'left', marginTop: '0.5rem' }}>We'd Love to Hear From You</h2>
            <p className="section-desc" style={{ textAlign: 'left', marginTop: '0.5rem' }}>
              Whether you have a question about submissions, subscriptions, editorial policies, or
              general enquiries, our team is here to help.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">✉</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Email</div>
                  <span>editor@nexusjournal.org</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Mailing Address</div>
                  <span>12/452 Academic Plaza, MG Road, Kottayam, Kerala 686001, India</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Response Time</div>
                  <span>Within 3–5 business days</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📝</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Submission Queries</div>
                  <span>submissions@nexusjournal.org</span>
                </div>
              </div>
            </div>
          </div>

          {sent ? (
            <div className="submit-form" style={{ alignItems: 'center', justifyContent: 'center', minHeight: '400px', textAlign: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '2.5rem' }}>✦</div>
              <h3 style={{ fontFamily: "'Lora', serif", fontSize: '1.6rem', color: 'var(--text-primary)' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
                Thank you for reaching out. We'll get back to you within 3–5 business days.
              </p>
              <button className="btn btn-outline" onClick={() => setSent(false)} style={{ marginTop: '1rem' }}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="submit-form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
              <h3 style={{ fontFamily: "'Lora', serif", fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Send a Message
              </h3>
              <input type="text" placeholder="Your Name *" className="search-box" style={{ marginBottom: '1rem' }} required />
              <input type="email" placeholder="Email Address *" className="search-box" style={{ marginBottom: '1rem' }} required />
              <select className="search-box" style={{ marginBottom: '1rem' }}>
                <option value="">Topic</option>
                <option>General Enquiry</option>
                <option>Submission Query</option>
                <option>Subscription Help</option>
                <option>Editorial Board</option>
                <option>Partnership / Collaboration</option>
              </select>
              <input type="text" placeholder="Subject *" className="search-box" style={{ marginBottom: '1rem' }} required />
              <textarea placeholder="Your message..." className="search-box" rows={5} style={{ resize: 'vertical', marginBottom: '1.5rem' }} />
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
