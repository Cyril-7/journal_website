import React from 'react';
import { useSEO } from '../useSEO';

export default function ContactPage() {
  useSEO({
    title: 'Contact the Editorial Office',
    description:
      'Contact the Studies in Indo-Semitic Christianity (SISC) Journal editorial office. Reach us for editorial inquiries, manuscript submissions, scholarly partnerships, and author support.',
    keywords:
      'contact SISC journal, editorial office, manuscript submission contact, SISC Research Group, Kerala academic journal contact, editor@jsisc.in',
    canonical: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact — Studies in Indo-Semitic Christianity Journal',
      url: 'https://jsisc.in/contact',
      description: 'Contact the editorial board and administrative office of the Studies in Indo-Semitic Christianity Journal.',
      publisher: {
        '@type': 'Organization',
        name: 'SISC Research Group',
        email: 'editor@jsisc.in',
      },
    },
  });

  return (
    <>
      {/* Page Header */}
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
            <span><strong>ISSN (Print):</strong> XXXX-XXXX</span>
            <span><strong>E-ISSN (Online):</strong> XXXX-XXXX</span>
          </div>

          {/* Directory Sections */}
          <div className="contact-sections">

            {/* 1. Editorial Correspondence */}
            <div className="contact-section-block">
              <h2 className="contact-section-heading">
                1. Editorial Board &amp; General Inquiries
              </h2>
              <p className="contact-section-desc">
                For inquiries regarding thematic volumes, special editions, scholarly partnerships, or to
                contact the Editor-in-Chief directly.
              </p>

              <dl className="contact-info-grid">
                <dt>Corresponding Desk:</dt>
                <dd>Office of the Editor-in-Chief</dd>

                <dt>Email:</dt>
                <dd className="contact-email">
                  <a href="mailto:editor@jsisc.in" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                    editor@jsisc.in
                  </a>
                </dd>

                <dt>Office Hours:</dt>
                <dd>Monday – Friday, 09:00 – 17:00 IST</dd>
              </dl>
            </div>

            {/* 2. Manuscript Submission Desk */}
            <div className="contact-section-block">
              <h2 className="contact-section-heading">
                2. Manuscript Submission &amp; Author Queries
              </h2>
              <p className="contact-section-desc">
                For manuscript preparation guidance, peer-review progress inquiries, and submission revisions.
                Please review the Author Instructions prior to contacting this desk.
              </p>

              <dl className="contact-info-grid">
                <dt>Submission Email:</dt>
                <dd className="contact-email">
                  <a href="mailto:editor@jsisc.in" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                    editor@jsisc.in
                  </a>
                </dd>

                <dt>Initial Assessment:</dt>
                <dd>Up to 4 weeks</dd>

                <dt>Peer Review Duration:</dt>
                <dd>Up to 3 months</dd>

                <dt>Revision Review:</dt>
                <dd>Up to 1 month from resubmission</dd>
              </dl>
            </div>

            {/* 3. No Publication Charges */}
            <div className="contact-section-block contact-section-block--last">
              <h2 className="contact-section-heading">
                3. Processing &amp; Publication Charges
              </h2>
              <p className="contact-section-desc">
                There are <strong>no submission or publication charges</strong> associated with this journal.
                Authors are not required to pay any fees at any stage of the submission or publication process.
              </p>

              <dl className="contact-info-grid">
                <dt>Submission Fee:</dt>
                <dd>None</dd>

                <dt>Publication Fee (APC):</dt>
                <dd>None</dd>

                <dt>Open Access:</dt>
                <dd>Yes — all published content is freely accessible</dd>
              </dl>
            </div>

          </div>

          {/* Submission Instructions Callout Box */}
          <div className="contact-callout">
            <h4 className="contact-callout-title">
              Important Note for Submitting Authors
            </h4>
            Please review the full submission requirements before sending your manuscript. Details on
            word limits, citation style, abstract requirements, and ethical disclosures are available
            under the{' '}
            <a href="/authors" style={{ color: 'var(--accent-primary)', fontWeight: 600, textDecoration: 'underline' }}>
              Instructions for Authors
            </a>{' '}
            page. For all queries, write to{' '}
            <a href="mailto:editor@jsisc.in" style={{ color: 'var(--accent-primary)', fontWeight: 600, textDecoration: 'underline' }}>
              editor@jsisc.in
            </a>
            .
          </div>

        </div>
      </section>
    </>
  );
}
