import React from 'react';

const boardMembers = [
  {
    name: "Dr. Abraham K. Joseph",
    role: "Editor-in-Chief",
    affiliation: "University of Kerala, Department of History",
    specialty: "Syriac Traditions & Indian Christianity"
  },
  {
    name: "Prof. Sarah Varghese",
    role: "Executive Editor",
    affiliation: "Theological College of Asia",
    specialty: "Ecclesiology & Liturgical Studies"
  },
  {
    name: "Dr. Matthew Philip",
    role: "Section Editor: Historical Theology",
    affiliation: "Oxford Centre for Mission Studies",
    specialty: "Asian Christian Genealogy"
  },
  {
    name: "Fr. Benjamin Mathai",
    role: "Section Editor: Liturgy",
    affiliation: "Orthodox Theological Seminary, Kottayam",
    specialty: "West Syriac Rites"
  },
  {
    name: "Dr. Anita George",
    role: "Managing Editor",
    affiliation: "SISC Research Group",
    specialty: "Journal Management & Ethics"
  },
  {
    name: "Prof. John Samuel",
    role: "Advisory Board",
    affiliation: "Princeton Theological Seminary",
    specialty: "Global Christianity"
  }
];

export default function EditorialBoardPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">Academic Governance</div>
          <h1 className="page-banner-title">Editorial Board</h1>
          <p className="page-banner-sub">
            Our board consists of recognized experts in the field of Indo-Semitic studies, 
            committed to maintaining the highest academic standards.
          </p>
        </div>
      </div>

      <section className="about-section" style={{ borderTop: 'none' }}>
        <div className="container">
          <div className="board-grid">
            {boardMembers.map((member, index) => (
              <div key={index} className="board-card">
                <div className="board-role">{member.role}</div>
                <h3 className="board-name">{member.name}</h3>
                <div className="board-affiliation">{member.affiliation}</div>
                <div className="board-specialty">{member.specialty}</div>
              </div>
            ))}
          </div>

          <div className="editorial-office" style={{ marginTop: '5rem', padding: '3rem', background: 'var(--bg-elevated)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
            <h3 style={{ fontFamily: "'Lora', serif", marginBottom: '1.5rem' }}>Editorial Office</h3>
            <p><strong>SISC Journal Office</strong></p>
            <p>12/452 Academic Plaza, MG Road</p>
            <p>Kottayam, Kerala 686001, India</p>
            <p style={{ marginTop: '1rem' }}>Email: <a href="mailto:editorial@siscjournal.org" style={{ color: 'var(--accent-primary)' }}>editorial@siscjournal.org</a></p>
            <p>Phone: +91 481 2345678</p>
          </div>
        </div>
      </section>
    </>
  );
}
