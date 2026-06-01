import React from 'react';
import { useSEO } from '../useSEO';

export default function ContactPage() {
  useSEO({
    title: 'Contact the Editorial Office',
    description:
      'Contact the SISC Journal editorial office, manuscript submission desk, or administrative headquarters. Reach us for editorial inquiries, scholarly partnerships, and author support.',
    keywords:
      'contact SISC journal, editorial office, manuscript submission contact, SISC Research Group address, Kerala academic journal contact',
    canonical: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact — SISC Journal Editorial Office',
      url: 'https://jsisc.in/contact',
      description: 'Contact the editorial board and administrative office of the Studies in Indo-Semitic Christianity Journal.',
      publisher: {
        '@type': 'Organization',
        name: 'SISC Research Group',
        email: 'editor@siscpress.org',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '12/452 Academic Plaza, MG Road',
          addressLocality: 'Kottayam',
          addressRegion: 'Kerala',
          postalCode: '686001',
          addressCountry: 'IN',
        },
      },
    },
  });

  return (
    <>
      {/* Authentic, Minimal Academic Page Header */}
      <div className="contact-page-header">
        <div className="container">
          <h1 className="contact-page-title">
            Editorial Directory &amp; Office Contact
          </h1>
          <p className="contact-page-subtitle">
            Direct your correspondence to the appropriate editorial desk or administrative department listed below.
          </p>
        </div>
      </div>

      <section className="page-section contact-page-section">
        <div className="container contact-container">
          
          {/* Institutional Identifiers Summary Bar */}
          <div className="contact-issn-bar">
            <span><strong>Publisher:</strong> SISC Research Group</span>
            <span><strong>E-ISSN:</strong> Applied / Pending Registration</span>
            <span><strong>ISSN Centre:</strong> CSIR-NIScPR, India</span>
          </div>

          {/* Directory Sections */}
          <div className="contact-sections">
            
            {/* 1. Editorial Correspondence */}
            <div className="contact-section-block">
              <h2 className="contact-section-heading">
                1. Editorial Board &amp; Scientific Inquiries
              </h2>
              <p className="contact-section-desc">
                For inquiries regarding thematic volumes, special editions, scholarly partnerships, or to contact the Editor-in-Chief directly.
              </p>
              
              <dl className="contact-info-grid">
                <dt>Corresponding Desk:</dt>
                <dd>Office of the General Editor</dd>

                <dt>Email:</dt>
                <dd className="contact-email">editor@siscpress.org</dd>

                <dt>Office Hours:</dt>
                <dd>Monday – Friday, 09:00 – 16:00 IST</dd>
              </dl>
            </div>

            {/* 2. Manuscript Submission Desk */}
            <div className="contact-section-block">
              <h2 className="contact-section-heading">
                2. Manuscript Office &amp; Submission Queries
              </h2>
              <p className="contact-section-desc">
                For manuscript preparation guidance, peer-review progress inquiries, and submission revisions. Please review the Author Instructions prior to contacting this desk.
              </p>
              
              <dl className="contact-info-grid">
                <dt>Submission Desk:</dt>
                <dd>SISC Editorial Submission &amp; Review Panel</dd>

                <dt>Email:</dt>
                <dd className="contact-email">submissions@siscpress.org</dd>

                <dt>Average Response:</dt>
                <dd>3–5 business days</dd>
              </dl>
            </div>

            {/* 3. Administrative Office */}
            <div className="contact-section-block contact-section-block--last">
              <h2 className="contact-section-heading">
                3. Administrative Headquarters &amp; Mailing Registry
              </h2>
              <p className="contact-section-desc">
                All formal physical correspondence, institutional inquiries, permissions requests, and hardcopy records must be sent to our registered headquarters.
              </p>
              
              <dl className="contact-info-grid">
                <dt>Registered Office:</dt>
                <dd>
                  SISC Academic Press Headquarters,<br />
                  12/452 Academic Plaza, MG Road,<br />
                  Kottayam, Kerala 686001, India
                </dd>

                <dt>Administrative Contact:</dt>
                <dd className="contact-email">admin@siscpress.org</dd>
              </dl>
            </div>

          </div>

          {/* Submission Instructions Callout Box */}
          <div className="contact-callout">
            <h4 className="contact-callout-title">
              Important Note for Submitting Authors
            </h4>
            Do not send completed manuscripts as attachments without verifying compliance with the peer-review guidelines. Full submission guidelines, formatting templates, and referencing specifications are available under the official <a href="/authors" style={{ color: 'var(--accent-primary)', fontWeight: 600, textDecoration: 'underline' }}>Author Guidelines</a> page.
          </div>

        </div>
      </section>
    </>
  );
}
