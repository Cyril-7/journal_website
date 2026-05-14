import React from 'react';
import { journals } from '../data';

export default function JournalsPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">Our Publications</div>
          <h1 className="page-banner-title">Journals</h1>
          <p className="page-banner-sub">
            Peer-reviewed publications spanning theology, history, and cultural studies of Indo-Semitic Christianity.
          </p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="journals-grid">
            {journals.map((j, i) => (
              <div key={i} className="journal-card">
                <div className="journal-num">0{i + 1}</div>
                <h3>{j.title}</h3>
                <p className="journal-focus">{j.focus}</p>
                <p className="journal-issues">{j.issues} Issues Published</p>
                <a href="#" className="journal-link">Explore Journal →</a>
              </div>
            ))}
          </div>

          {/* Extra journal info */}
          <div className="about-mission-block" style={{ marginTop: '4rem' }}>
            <div className="about-mission-icon">✦</div>
            <h3>Scope &amp; Focus</h3>
            <p>
              Our journals maintain rigorous academic standards through a double-blind peer review process.
              All published works explore the intersection of Indo-Semitic cultural heritage with Christian
              theological traditions — spanning historical research, comparative religion, ecclesiological
              studies, and contemporary cultural analysis.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Submissions are welcome from scholars worldwide working on topics related to the Malankara
              Church, Syriac Christianity, Asian Christian communities, and the broader Semitic world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
