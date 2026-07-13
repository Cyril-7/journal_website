import React from 'react';
import { useSEO } from '../useSEO';

const guidelines: { icon: string; title: string; items: string[] }[] = [
  {
    icon: '📄',
    title: 'Manuscript Requirements',
    items: [
      'Word limit: 5,000 – 7,000 words (excluding footnotes and references)',
      'Language of submission: English',
      'All papers must be original work of the author(s)',
      'A Word file of any legible font in 1.5 spacing is accepted',
      'Dual submission is not permissible',
    ],
  },
  {
    icon: '📋',
    title: 'Abstract & Keywords',
    items: [
      'All papers shall include an abstract of 150–200 words',
      'Up to 5 keywords may be included with the abstract',
    ],
  },
  {
    icon: '🔗',
    title: 'Citations & References',
    items: [
      'The Journal follows an open citation policy',
      'Authors may follow any citation style as long as it is clear and consistently applied',
      'Footnotes (not endnotes) must be used',
      'All sources must be acknowledged appropriately',
    ],
  },
  {
    icon: '⚖️',
    title: 'Ethics & Disclosure',
    items: [
      'AI tools used in the work shall be disclosed',
      'Potential conflicts of interest of the author(s) shall be disclosed',
      'Funding sources shall be disclosed',
      'All papers will be subjected to rigorous plagiarism review',
      'Where copyrights apply, they shall be duly mentioned',
    ],
  },
  {
    icon: '👥',
    title: 'Human Participants',
    items: [
      'If human participants are involved, all internationally accepted ethical guidelines shall be followed',
      'Where permission is required, it shall be obtained and documented',
    ],
  },
  {
    icon: '🏗️',
    title: 'Paper Structure',
    items: [
      'The journal does not prescribe any particular structure for the paper',
      'However, the paper\'s objective, scope, and methodology shall be clear',
    ],
  },
];

export default function AuthorsPage() {
  useSEO({
    title: 'Instructions for Authors',
    description:
      'Instructions for authors submitting to Studies in Indo-Semitic Christianity (SISC). Learn about manuscript preparation, peer-review process, formatting requirements, citation policy, ethical disclosures, and open-access publication policies.',
    keywords:
      'author guidelines, manuscript submission, SISC journal submission, peer review process, academic publishing India, open access theology journal, footnotes, word limit, abstract',
    canonical: '/authors',
  });

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">Contributions</div>
          <h1 className="page-banner-title">Instructions for Authors</h1>
          <p className="page-banner-sub">
            Everything you need to prepare and submit your research to <em>Studies in Indo-Semitic Christianity</em>.
          </p>
        </div>
      </div>

      <section className="about-section" style={{ borderTop: 'none' }}>
        <div className="about-inner">
          <div className="about-body">

            {/* Intro block */}
            <div className="about-mission-block">
              <h3>Before You Submit</h3>
              <p>
                <em>Studies in Indo-Semitic Christianity</em> (SISC) is a multidisciplinary journal focused on
                the history, culture, theology and philosophical foundations of Indo-Semitic Christianity.
                We welcome original scholarly contributions that advance understanding in this field.
                Please review all guidelines below carefully before preparing your manuscript.
              </p>
              <p style={{ marginTop: '0.85rem' }}>
                There are <strong>no submission or publication charges</strong> associated with this journal.
                All papers will undergo an initial editorial assessment followed by double-blind peer review.
              </p>
            </div>

            {/* Guidelines grid */}
            <div style={{ marginTop: '3rem' }}>
              <h3 className="about-block-title" style={{ marginBottom: '2rem' }}>Submission Guidelines</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem',
              }}>
                {guidelines.map((g) => (
                  <div
                    key={g.title}
                    style={{
                      background: 'var(--bg-surface)',
                      border: '1.5px solid var(--border-subtle)',
                      borderRadius: 'var(--border-radius)',
                      padding: '1.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>{g.icon}</span>
                      <h4 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.05rem',
                        color: 'var(--text-primary)',
                        margin: 0,
                      }}>{g.title}</h4>
                    </div>
                    <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
                      {g.items.map((item, i) => (
                        <li key={i} style={{
                          fontSize: '0.88rem',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.65',
                          marginBottom: '0.45rem',
                        }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Timeline */}
            <div className="about-text-block" style={{ marginTop: '3.5rem' }}>
              <h3 className="about-block-title">Review Timeline</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
                marginTop: '1.25rem',
              }}>
                {[
                  { stage: 'Initial Editorial Assessment', duration: 'Up to 4 weeks', desc: 'Scope check, quality threshold review' },
                  { stage: 'Double-Blind Peer Review', duration: 'Up to 3 months', desc: 'Expert reviewer evaluation' },
                  { stage: 'Revision Review', duration: 'Up to 1 month', desc: 'From date of resubmission' },
                ].map(({ stage, duration, desc }) => (
                  <div
                    key={stage}
                    style={{
                      background: '#ffffff',
                      border: '1.5px solid var(--border-subtle)',
                      borderRadius: 'var(--border-radius)',
                      padding: '1.5rem',
                      borderTop: '4px solid var(--accent-primary)',
                    }}
                  >
                    <span style={{
                      display: 'block',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      color: 'var(--text-muted)',
                      marginBottom: '0.3rem',
                    }}>{stage}</span>
                    <span style={{
                      display: 'block',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      marginBottom: '0.35rem',
                    }}>{duration}</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Copyright & Licensing */}
            <div className="about-text-block">
              <h3 className="about-block-title">Copyright &amp; Licensing</h3>
              <p>
                If a paper is selected for publication, the journal will contact the author with copyright
                and licensing details before proceeding further. Authors are encouraged to disclose any
                prior copyright obligations when submitting their manuscript.
              </p>
            </div>

            {/* Appeals */}
            <div className="about-text-block">
              <h3 className="about-block-title">Appeals Process</h3>
              <p>
                Authors who believe a significant <strong>procedural error</strong> occurred during peer
                review may submit a written appeal to the Editor-in-Chief. Appeals should clearly explain
                the grounds for reconsideration. Editorial decisions based solely on scholarly judgment
                are generally not subject to appeal.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="about-mission-block" style={{ marginTop: '1rem' }}>
              <h3>Questions?</h3>
              <p>
                For any queries regarding manuscript preparation or submission, contact the editorial
                office at{' '}
                <a
                  href="mailto:editor@jsisc.in"
                  style={{ color: 'var(--accent-primary)', fontWeight: 600, textDecoration: 'underline' }}
                >
                  editor@jsisc.in
                </a>
                .
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
