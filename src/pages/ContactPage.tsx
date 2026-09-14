import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../useSEO';

export default function ContactPage() {
  useSEO({
    title: 'Contact the Editorial Office',
    description:
      'Contact the Studies in Indo-Semitic Christianity (SISC) Journal editorial office. Reach us for general inquiries, scholarly partnerships, and editorial correspondence.',
    keywords:
      'contact SISC journal, editorial office, SISC Research Group, Kerala academic journal contact, contact@jsisc.in',
    canonical: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact — Studies in Indo-Semitic Christianity',
      url: 'https://jsisc.in/contact',
      description: 'Contact the editorial board and administrative office of Studies in Indo-Semitic Christianity.',
      publisher: {
        '@type': 'Organization',
        name: 'SISC Research Group',
        email: 'contact@jsisc.in',
      },
    },
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">Editorial Office</div>
          <h1 className="page-banner-title">Contact Us</h1>
          <p className="page-banner-sub">
            Get in touch with the editorial team and administration of <em>Studies in Indo-Semitic Christianity</em>.
          </p>
        </div>
      </div>

      <section className="page-section" style={{ background: '#ffffff' }}>
        <div className="container">

          {/* Section 1: Editorial Board & General Inquiries */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1.5px solid var(--border-subtle)',
            borderRadius: 'var(--border-radius)',
            padding: '2rem 2.5rem',
            marginBottom: '3rem',
            boxShadow: '0 2px 10px rgba(13,27,42,0.02)'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.45rem',
              color: 'var(--text-primary)',
              marginBottom: '0.65rem',
              fontWeight: 700
            }}>
              1. Editorial Board &amp; General Inquiries
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              lineHeight: 1.65,
              marginBottom: '1.5rem',
              maxWidth: '850px'
            }}>
              For inquiries regarding thematic volumes, special editions, scholarly partnerships, or to contact the Editor-in-Chief directly.
            </p>

            <dl className="contact-info-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '0.75rem 2rem',
              alignItems: 'baseline',
              fontSize: '0.92rem',
              margin: 0
            }}>
              <dt style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Corresponding Desk:</dt>
              <dd style={{ color: 'var(--text-secondary)', margin: 0 }}>Office of the Editor-in-Chief</dd>

              <dt style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Email:</dt>
              <dd style={{ margin: 0 }}>
                <a href="mailto:contact@jsisc.in" style={{ color: 'var(--accent-primary)', fontWeight: 700, fontFamily: 'monospace' }}>
                  contact@jsisc.in
                </a>
              </dd>

              <dt style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Office Hours:</dt>
              <dd style={{ color: 'var(--text-secondary)', margin: 0 }}>Monday – Friday, 09:00 – 17:00 IST</dd>
            </dl>
          </div>

          {/* Main Layout: Contact Form + Sidebar */}
          <div className="main-layout" style={{ gridTemplateColumns: '1fr 340px' }}>
            
            {/* Form Column */}
            <div className="content-area">
              {submitted ? (
                <div style={{
                  background: 'linear-gradient(135deg, #f0f7f4, #e8f4f0)',
                  border: '2px solid #2d8a62',
                  borderRadius: 'var(--border-radius)',
                  padding: '3rem 2rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✉️</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', color: '#1e523b', fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                    Message Sent Successfully!
                  </h3>
                  <p style={{ color: '#2c5f4a', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                    Thank you for reaching out, <strong>{formState.name}</strong>. The editorial office has received your message and will respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline"
                    style={{ padding: '0.6rem 1.25rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div style={{
                  background: '#ffffff',
                  border: '1.5px solid var(--border-subtle)',
                  borderRadius: 'var(--border-radius)',
                  padding: '2.5rem',
                  boxShadow: '0 4px 20px rgba(13,27,42,0.03)'
                }}>
                  <div style={{ marginBottom: '1.75rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>
                      Send Us a Message
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.35rem' }}>
                      Fill out the form below to reach the editorial desk directly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Full Name"
                          value={formState.name}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '0.7rem 0.9rem',
                            border: '1.5px solid var(--border-mid)',
                            borderRadius: 'var(--border-radius)',
                            fontSize: '0.9rem',
                            fontFamily: 'var(--font-body)',
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          Your Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="email@domain.com"
                          value={formState.email}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '0.7rem 0.9rem',
                            border: '1.5px solid var(--border-mid)',
                            borderRadius: 'var(--border-radius)',
                            fontSize: '0.9rem',
                            fontFamily: 'var(--font-body)',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          Inquiry Category
                        </label>
                        <select
                          name="category"
                          value={formState.category}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '0.7rem 0.9rem',
                            border: '1.5px solid var(--border-mid)',
                            borderRadius: 'var(--border-radius)',
                            fontSize: '0.9rem',
                            fontFamily: 'var(--font-body)',
                            background: '#ffffff',
                            outline: 'none'
                          }}
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Special Issue Proposal">Special Issue Proposal</option>
                          <option value="Editorial Board Query">Editorial Board Query</option>
                          <option value="Institutional Subscription">Institutional Subscription</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          required
                          placeholder="Brief summary of your query"
                          value={formState.subject}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            padding: '0.7rem 0.9rem',
                            border: '1.5px solid var(--border-mid)',
                            borderRadius: 'var(--border-radius)',
                            fontSize: '0.9rem',
                            fontFamily: 'var(--font-body)',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        placeholder="Please detail your question or proposal..."
                        value={formState.message}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.9rem',
                          border: '1.5px solid var(--border-mid)',
                          borderRadius: 'var(--border-radius)',
                          fontSize: '0.9rem',
                          fontFamily: 'var(--font-body)',
                          resize: 'vertical',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        padding: '0.8rem 1.75rem',
                        alignSelf: 'flex-start',
                        borderRadius: 'var(--border-radius)',
                        fontWeight: 700
                      }}
                    >
                      Send Message →
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar Column */}
            <aside className="sidebar">
              
              <div className="sidebar-widget">
                <h4 className="sidebar-title">Submitting a Paper?</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.6' }}>
                  If you wish to submit a manuscript, please use our dedicated submission portal which includes full guidelines and checklists.
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <Link to="/submit" className="btn btn-primary" style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem', textAlign: 'center' }}>
                    Go to Submit Manuscript →
                  </Link>
                </div>
              </div>

              <div className="sidebar-widget">
                <h4 className="sidebar-title">Useful Resources</h4>
                <ul style={{ paddingLeft: '1.1rem', marginTop: '0.75rem', margin: 0 }}>
                  <li style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <Link to="/editorial-board" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                      Editorial Board Roster
                    </Link>
                  </li>
                  <li style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <Link to="/authors" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                      Instructions for Authors
                    </Link>
                  </li>
                  <li style={{ fontSize: '0.85rem' }}>
                    <Link to="/about" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                      About SISC Journal
                    </Link>
                  </li>
                </ul>
              </div>

            </aside>

          </div>

        </div>
      </section>
    </>
  );
}
