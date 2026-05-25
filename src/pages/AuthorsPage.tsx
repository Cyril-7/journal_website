import React from 'react';

const steps: { num: string; title: string; desc: string }[] = [];

export default function AuthorsPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">Author Guidelines</div>
          <h1 className="page-banner-title">Instruction for Authors</h1>
          <p className="page-banner-sub">
            Everything you need to prepare, submit, and publish your research with SISC Journal.
          </p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          {steps.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: 'var(--bg-surface)',
              borderRadius: 'var(--border-radius)',
              border: '1.5px dashed var(--border-mid)',
              marginBottom: '3rem',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.25rem', opacity: 0.25 }}>📝</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                Submission Guidelines Coming Soon
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto', lineHeight: 1.7 }}>
                Detailed instructions for authors will be published here. Contact the editorial office for interim guidance.
              </p>
            </div>
          ) : (
            <div className="steps-grid">
              {steps.map(s => (
                <div key={s.num} className="step-card">
                  <div className="step-num">{s.num}</div>
                  <h4 className="step-title">{s.title}</h4>
                  <p className="step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Policy panels */}
          <div className="authors-policy-grid">
          </div>
        </div>
      </section>
    </>
  );
}
