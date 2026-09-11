import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../useSEO';

export default function SubmitManuscriptPage() {
  useSEO({
    title: 'Submit Manuscript',
    description:
      'Submit your research manuscript to Studies in Indo-Semitic Christianity (SISC) Journal. Send your paper to contact@jsisc.in.',
    keywords:
      'submit manuscript, SISC journal submission, academic paper submission, open access theology journal, Indo-Semitic Christianity research paper',
    canonical: '/submit',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Submit Manuscript — SISC Academic Press',
      url: 'https://jsisc.in/submit',
      description: 'Manuscript submission guidelines and instructions for Studies in Indo-Semitic Christianity Journal.',
    },
  });

  return (
    <>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">Authors &amp; Submissions</div>
          <h1 className="page-banner-title">Submit Your Manuscript</h1>
          <p className="page-banner-sub">
            Publish your peer-reviewed research in <em>Studies in Indo-Semitic Christianity</em>.
          </p>
        </div>
      </div>

      <section className="page-section" style={{ background: '#ffffff' }}>
        <div className="container">
          
          <div className="main-layout" style={{ gridTemplateColumns: '1fr 340px' }}>
            {/* Left Column: Direct Submission Instructions */}
            <div className="content-area">
              <div style={{
                background: 'var(--bg-surface)',
                border: '1.5px solid var(--border-subtle)',
                borderRadius: 'var(--border-radius)',
                padding: '2.5rem',
                boxShadow: '0 4px 20px rgba(13,27,42,0.03)'
              }}>
                <div style={{ marginBottom: '1.75rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
                  <span className="section-eyebrow" style={{ color: 'var(--accent-secondary)' }}>Editorial Submission Desk</span>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--text-primary)', marginTop: '0.35rem', fontWeight: 700 }}>
                    How to Submit Your Paper
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', marginTop: '0.5rem', lineHeight: '1.7' }}>
                    Authors are invited to submit their original research manuscripts directly to the editorial office via email.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  
                  {/* Step 1 */}
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{
                      background: 'var(--accent-primary)',
                      color: '#ffffff',
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      flexShrink: 0
                    }}>
                      1
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>
                        Prepare Your Manuscript
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '0.35rem', lineHeight: '1.65' }}>
                        Ensure your paper is between <strong>5,000 and 7,000 words</strong>, written in English, includes an abstract of 150–200 words, up to 5 keywords, and uses clear footnote citations.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{
                      background: 'var(--accent-primary)',
                      color: '#ffffff',
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      flexShrink: 0
                    }}>
                      2
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>
                        Email Your Submission
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '0.35rem', lineHeight: '1.65' }}>
                        Attach your manuscript file (Microsoft Word <code>.docx</code> or PDF <code>.pdf</code>) and send it directly to our official submission address:
                      </p>
                      <div style={{
                        marginTop: '0.85rem',
                        background: '#ffffff',
                        border: '1.5px solid var(--accent-primary-soft)',
                        borderRadius: 'var(--border-radius)',
                        padding: '1rem 1.25rem',
                        display: 'inline-block'
                      }}>
                        <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Official Submission Email</span>
                        <a
                          href="mailto:contact@jsisc.in"
                          style={{
                            fontSize: '1.15rem',
                            color: 'var(--accent-primary)',
                            fontWeight: 700,
                            fontFamily: 'monospace',
                            textDecoration: 'none'
                          }}
                        >
                          contact@jsisc.in
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{
                      background: 'var(--accent-primary)',
                      color: '#ffffff',
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      flexShrink: 0
                    }}>
                      3
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>
                        Editorial Acknowledgment &amp; Review
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '0.35rem', lineHeight: '1.65' }}>
                        Our editorial desk will acknowledge receipt of your submission. Your manuscript will undergo initial editorial evaluation followed by double-blind peer review.
                      </p>
                    </div>
                  </div>

                </div>

                <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href="mailto:contact@jsisc.in?subject=Manuscript%20Submission"
                    className="btn btn-primary"
                    style={{ padding: '0.75rem 1.75rem', borderRadius: 'var(--border-radius)', textDecoration: 'none' }}
                  >
                    Email Manuscript Now →
                  </a>
                  <Link
                    to="/authors"
                    className="btn btn-outline"
                    style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--border-radius)', textDecoration: 'none' }}
                  >
                    Read Full Author Guidelines
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar Guidelines */}
            <aside className="sidebar">
              
              <div className="sidebar-widget">
                <h4 className="sidebar-title">Quick Author Checklist</h4>
                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.85rem', margin: 0 }}>
                  <li style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    <strong>Word Limit:</strong> 5,000 – 7,000 words
                  </li>
                  <li style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    <strong>Citations:</strong> Footnotes (not endnotes)
                  </li>
                  <li style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    <strong>Abstract:</strong> 150 – 200 words
                  </li>
                  <li style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    <strong>Language:</strong> English
                  </li>
                  <li style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <strong>Review:</strong> Double-Blind Peer Review
                  </li>
                </ul>
                <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
                  <Link to="/authors" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--accent-primary)' }}>
                    Full Author Instructions →
                  </Link>
                </div>
              </div>

              <div className="sidebar-widget">
                <h4 className="sidebar-title">Need Assistance?</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.6' }}>
                  For pre-submission inquiries, write to our editorial office at:
                </p>
                <a
                  href="mailto:contact@jsisc.in"
                  style={{
                    display: 'inline-block',
                    marginTop: '0.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--accent-primary)',
                    fontWeight: 700,
                    fontFamily: 'monospace'
                  }}
                >
                  contact@jsisc.in
                </a>
              </div>

            </aside>
          </div>

        </div>
      </section>
    </>
  );
}
