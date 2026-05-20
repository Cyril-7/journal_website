import React from 'react';

const steps = [
  { num: "01", title: "Prepare Manuscript", desc: "Follow our style guide. Use APA 7th edition citations. Maximum 8,000 words for full articles, 4,000 for research notes." },
  { num: "02", title: "Anonymise for Review", desc: "Remove all identifying information (name, institution, acknowledgements) from the manuscript file for double-blind peer review." },
  { num: "03", title: "Submit Manuscript", desc: "Submit your manuscript files along with a cover letter directly to our editorial team via email or our contact channel." },
  { num: "04", title: "Peer Review", desc: "Your paper will be reviewed by two independent subject experts. The editorial team will send you a decision within 6–8 weeks." },
  { num: "05", title: "Revision & Decision", desc: "Address reviewer comments systematically. A point-by-point response letter is required. Final decisions communicated within 2 weeks of revision." },
  { num: "06", title: "Publication", desc: "Accepted articles receive a DOI, are copy-edited, typeset, and published open-access within 4 weeks of final acceptance." },
];

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
          <div className="steps-grid">
            {steps.map(s => (
              <div key={s.num} className="step-card">
                <div className="step-num">{s.num}</div>
                <h4 className="step-title">{s.title}</h4>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Policy panels */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '4rem' }}>
            {[
              { title: "Formatting Requirements", items: ["Microsoft Word (.docx) or LaTeX", "12pt Times New Roman, double-spaced", "APA 7th edition reference style", "Figures submitted separately as high-res PNG/TIFF", "Tables embedded in manuscript"] },
              { title: "Ethical Standards", items: ["All submissions must be original and unpublished", "Simultaneous submission to other journals is not permitted", "Plagiarism screening applied to all manuscripts", "Authors must disclose funding and conflicts of interest", "Research involving human subjects requires ethics clearance"] },
            ].map(panel => (
              <div key={panel.title} className="about-text-block">
                <h3 className="about-block-title">{panel.title}</h3>
                <ul style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {panel.items.map(item => (
                    <li key={item} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', listStyle: 'disc' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
