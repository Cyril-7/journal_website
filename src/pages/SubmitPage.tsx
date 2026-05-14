import React, { useState } from 'react';

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">Contribute</div>
          <h1 className="page-banner-title">Submit Your Paper</h1>
          <p className="page-banner-sub">
            We welcome original, unpublished research on Indo-Semitic Christianity, Malankara Church
            history, Syriac traditions, and related Asian theological studies.
          </p>
        </div>
      </div>

      <section className="page-section">
        <div className="container submit-layout">
          <div className="submit-info">
            <div className="section-eyebrow">Why Publish With Us</div>
            <h2 className="section-h2" style={{ textAlign: 'left', marginTop: '0.5rem' }}>
              Open Access. Globally Cited.
            </h2>
            <p className="section-desc" style={{ textAlign: 'left', marginTop: '0.5rem' }}>
              All published articles are freely accessible worldwide, maximising the reach and
              impact of your scholarship.
            </p>
            <ul className="submit-checklist">
              <li>✦ Double-blind peer review process</li>
              <li>✦ Open-access publication at no author charge</li>
              <li>✦ Average review time: 6–8 weeks</li>
              <li>✦ DOI assigned to all accepted articles</li>
              <li>✦ Indexed in major theological databases</li>
              <li>✦ Copyediting support provided</li>
            </ul>

            <div style={{ marginTop: '2.5rem' }}>
              <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Manuscript Types</h4>
              <ul className="policy-list" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <li><strong>Original Research:</strong> Full-length empirical or theoretical papers (6,000–8,000 words).</li>
                <li><strong>Review Articles:</strong> Critical syntheses of existing literature (5,000–7,000 words).</li>
                <li><strong>Short Communications:</strong> Brief reports on significant new findings (2,500–3,500 words).</li>
                <li><strong>Book Reviews:</strong> Evaluations of recent scholarly works (1,000–1,500 words).</li>
              </ul>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Authorship Criteria</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Authorship should be limited to those who have made a significant contribution to the conception, 
                design, execution, or interpretation of the reported study. All those who have made significant 
                contributions should be listed as co-authors.
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="submit-form" style={{ alignItems: 'center', justifyContent: 'center', minHeight: '400px', textAlign: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '3rem' }}>✦</div>
              <h3 style={{ fontFamily: "'Lora', serif", fontSize: '1.8rem', color: 'var(--text-primary)' }}>
                Submission Received
              </h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '320px' }}>
                Thank you. Our editorial team will review your manuscript and contact you within 6–8 weeks.
              </p>
              <button className="btn btn-outline" onClick={() => setSubmitted(false)} style={{ marginTop: '1rem' }}>
                Submit Another
              </button>
            </div>
          ) : (
            <form className="submit-form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
              <h3 style={{ fontFamily: "'Lora', serif", fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Manuscript Submission Form
              </h3>
              <input type="text" placeholder="Full Name *" className="search-box" style={{ marginBottom: '1rem' }} required />
              <input type="email" placeholder="Email Address *" className="search-box" style={{ marginBottom: '1rem' }} required />
              <input type="text" placeholder="Institution / Affiliation" className="search-box" style={{ marginBottom: '1rem' }} />
              <input type="text" placeholder="Paper Title *" className="search-box" style={{ marginBottom: '1rem' }} required />
              <select className="search-box" style={{ marginBottom: '1rem' }} required>
                <option value="">Select Target Journal *</option>
                <option>Indo-Semitic Studies</option>
                <option>Malankara Heritage Review</option>
                <option>Asian Christianity Quarterly</option>
                <option>Syriac Ecclesiology Journal</option>
              </select>
              <textarea placeholder="Abstract (max 300 words) *" className="search-box" rows={5} style={{ resize: 'vertical', marginBottom: '1rem' }} required />
              <input type="text" placeholder="Keywords (comma-separated)" className="search-box" style={{ marginBottom: '1.5rem' }} />
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Submit Manuscript
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
