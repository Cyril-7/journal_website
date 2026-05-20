import React from 'react';

export default function ContactPage() {
  return (
    <>
      {/* Authentic, Minimal Academic Page Header */}
      <div style={{ 
        padding: '5rem 0 3rem', 
        background: '#ffffff', 
        borderBottom: '1px solid var(--border-mid)',
        textAlign: 'center' 
      }}>
        <div className="container">
          <h1 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '2.8rem', 
            fontWeight: 700, 
            color: 'var(--text-primary)',
            margin: 0
          }}>
            Editorial Directory &amp; Office Contact
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            color: 'var(--text-secondary)', 
            maxWidth: '650px', 
            margin: '0.85rem auto 0', 
            lineHeight: '1.6' 
          }}>
            Direct your correspondence to the appropriate editorial desk or administrative department listed below.
          </p>
        </div>
      </div>

      <section className="page-section" style={{ background: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          
          {/* Institutional Identifiers Summary Bar */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            background: 'var(--bg-surface)', 
            border: '1px solid var(--border-subtle)', 
            padding: '1rem 1.5rem', 
            fontSize: '0.85rem', 
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            borderRadius: 'var(--border-radius)'
          }}>
            <span><strong>Publisher:</strong> SISC Research Group</span>
            <span><strong>E-ISSN:</strong> 2831-402X</span>
            <span><strong>P-ISSN:</strong> 2831-4011</span>
          </div>

          {/* Directory Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* 1. Editorial Correspondence */}
            <div style={{ borderBottom: '1px solid var(--border-mid)', paddingBottom: '2rem' }}>
              <h2 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.4rem', 
                fontWeight: 700, 
                color: 'var(--accent-primary)',
                marginBottom: '1.25rem' 
              }}>
                1. Editorial Board &amp; Scientific Inquiries
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                For inquiries regarding thematic volumes, special editions, scholarly partnerships, or to contact the Editor-in-Chief directly.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '0.5rem 1.5rem', fontSize: '0.95rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Corresponding Desk:</span>
                <span style={{ color: 'var(--text-secondary)' }}>Office of the General Editor</span>

                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Email:</span>
                <span style={{ fontFamily: 'monospace', color: 'var(--accent-secondary)' }}>editor@siscpress.org</span>

                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Office Hours:</span>
                <span style={{ color: 'var(--text-secondary)' }}>Monday – Friday, 09:00 – 16:00 IST</span>
              </div>
            </div>

            {/* 2. Manuscript Submission Desk */}
            <div style={{ borderBottom: '1px solid var(--border-mid)', paddingBottom: '2rem' }}>
              <h2 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.4rem', 
                fontWeight: 700, 
                color: 'var(--accent-primary)',
                marginBottom: '1.25rem' 
              }}>
                2. Manuscript Office &amp; Submission Queries
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                For manuscript preparation guidance, peer-review progress inquiries, and submission revisions. Please review the Author Instructions prior to contacting this desk.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '0.5rem 1.5rem', fontSize: '0.95rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Submission Desk:</span>
                <span style={{ color: 'var(--text-secondary)' }}>SISC Editorial Submission &amp; Review Panel</span>

                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Email:</span>
                <span style={{ fontFamily: 'monospace', color: 'var(--accent-secondary)' }}>submissions@siscpress.org</span>

                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Average Response:</span>
                <span style={{ color: 'var(--text-secondary)' }}>3–5 business days</span>
              </div>
            </div>

            {/* 3. Administrative Office */}
            <div>
              <h2 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.4rem', 
                fontWeight: 700, 
                color: 'var(--accent-primary)',
                marginBottom: '1.25rem' 
              }}>
                3. Administrative Headquarters &amp; Mailing Registry
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                All formal physical correspondence, institutional inquiries, permissions requests, and hardcopy records must be sent to our registered headquarters.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '0.85rem 1.5rem', fontSize: '0.95rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Registered Office:</span>
                <span style={{ color: 'var(--text-secondary)' }}>
                  SISC Academic Press Headquarters,<br />
                  12/452 Academic Plaza, MG Road,<br />
                  Kottayam, Kerala 686001, India
                </span>

                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Administrative Contact:</span>
                <span style={{ fontFamily: 'monospace', color: 'var(--accent-secondary)' }}>admin@siscpress.org</span>
              </div>
            </div>

          </div>

          {/* Submission Instructions Callout Box */}
          <div style={{ 
            marginTop: '4rem', 
            padding: '2rem', 
            border: '1px solid var(--border-mid)',
            background: 'var(--bg-surface)',
            borderRadius: 'var(--border-radius)',
            fontSize: '0.92rem',
            lineHeight: '1.6',
            color: 'var(--text-secondary)'
          }}>
            <h4 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '1.1rem', 
              color: 'var(--text-primary)', 
              fontWeight: 700, 
              marginBottom: '0.5rem' 
            }}>
              Important Note for Submitting Authors
            </h4>
            Do not send completed manuscripts as attachments without verifying compliance with the peer-review guidelines. Full submission guidelines, formatting templates, and referencing specifications are available under the official <a href="/authors" style={{ color: 'var(--accent-primary)', fontWeight: 600, textDecoration: 'underline' }}>Author Guidelines</a> page.
          </div>

        </div>
      </section>
    </>
  );
}
