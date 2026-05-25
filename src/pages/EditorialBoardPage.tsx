import React from 'react';

// ─── Editorial Board Data ─────────────────────────────────────────────────────
// Each member includes all fields required by ISSN India guidelines:
// Full Name, Designation, Complete Institutional Address, Institutional Email,
// and Institutional Profile Link.

interface BoardMember {
  role: string;
  name: string;
  designation: string;
  department: string;
  institution: string;
  address: string;
  email: string;
  profileUrl: string;
  specialisation: string;
}

const patronAndChief: BoardMember[] = [];

const managingEditors: BoardMember[] = [];

const editorialBoard: BoardMember[] = [];

// ─── Sub-components ────────────────────────────────────────────────────────────

const roleBadgeColors: Record<string, string> = {
  Patron: 'var(--accent-primary)',
  'Editor-in-Chief': 'var(--accent-secondary)',
  'Managing Editor': '#5c7a9e',
  'Editorial Board Member': 'var(--text-muted)',
  'International Editorial Board Member': '#3b7a57',
};

function MemberCard({ member }: { member: BoardMember }) {
  const badgeColor = roleBadgeColors[member.role] ?? 'var(--text-muted)';

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1.5px solid var(--border-subtle)',
        borderRadius: 'var(--border-radius)',
        padding: '2rem',
        boxShadow: '0 4px 16px rgba(13,27,42,0.03)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.9rem',
        transition: 'var(--transition-smooth)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(13,27,42,0.08)';
        e.currentTarget.style.borderColor = 'var(--border-accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(13,27,42,0.03)';
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
      }}
    >
      {/* Role Badge */}
      <span
        style={{
          display: 'inline-block',
          alignSelf: 'flex-start',
          background: `${badgeColor}18`,
          color: badgeColor,
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.8px',
          textTransform: 'uppercase',
          padding: '0.3rem 0.75rem',
          borderRadius: '100px',
          border: `1px solid ${badgeColor}40`,
        }}
      >
        {member.role}
      </span>

      {/* Name */}
      <div>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            margin: '0.3rem 0 0',
            fontSize: '0.88rem',
            fontWeight: 600,
            color: 'var(--accent-secondary)',
          }}
        >
          {member.designation}
        </p>
      </div>

      {/* Divider */}
      <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: 0 }} />

      {/* Details table */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {/* Institution */}
        <DetailRow
          icon="🏛️"
          label="Institution"
          value={`${member.department}, ${member.institution}`}
        />

        {/* Address */}
        <DetailRow icon="📍" label="Address" value={member.address} />

        {/* Email */}
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '0.9rem', marginTop: '1px', flexShrink: 0 }}>✉️</span>
          <div>
            <span
              style={{
                display: 'block',
                fontSize: '0.68rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.6px',
                color: 'var(--text-muted)',
                marginBottom: '0.15rem',
              }}
            >
              Official Email
            </span>
            <a
              href={`mailto:${member.email}`}
              style={{
                fontSize: '0.85rem',
                color: 'var(--accent-primary)',
                fontFamily: 'monospace',
                fontWeight: 600,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.textDecoration = 'underline')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.textDecoration = 'none')}
            >
              {member.email}
            </a>
          </div>
        </div>

        {/* Specialisation */}
        <DetailRow icon="🔬" label="Specialisation" value={member.specialisation} />
      </div>

      {/* Profile Link */}
      <a
        href={member.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: '0.5rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.8rem',
          fontWeight: 700,
          color: 'var(--accent-secondary)',
          textDecoration: 'none',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1rem',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-primary)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-secondary)')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        View Institutional Profile
      </a>
    </div>
  );
}

function DetailRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
      <span style={{ fontSize: '0.9rem', marginTop: '1px', flexShrink: 0 }}>{icon}</span>
      <div>
        <span
          style={{
            display: 'block',
            fontSize: '0.68rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            color: 'var(--text-muted)',
            marginBottom: '0.15rem',
          }}
        >
          {label}
        </span>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          {value}
        </span>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '0.5rem',
        }}
      >
        <div
          style={{
            width: '28px',
            height: '3px',
            background: 'var(--accent-primary)',
            borderRadius: '2px',
          }}
        />
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.55rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            margin: 0,
          }}
        >
          {children}
        </h2>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function EditorialBoardPage() {
  const allMembers = [...patronAndChief, ...managingEditors, ...editorialBoard];

  return (
    <>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">SISC Academic Press</div>
          <h1 className="page-banner-title">Editorial Board</h1>
          <p className="page-banner-sub">
            Our Editorial Board comprises distinguished scholars in theology, history, Syriac
            studies, and comparative religion from leading institutions across India and abroad.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        style={{
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1.5rem 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
          }}
        >
          {[
            { label: 'Total Members', value: String(allMembers.length) },
            { label: 'Indian Institutions', value: String(allMembers.filter(m => !m.role.startsWith('International')).length) },
            { label: 'International Members', value: String(allMembers.filter(m => m.role.startsWith('International')).length) },
            { label: 'Review Policy', value: 'Double-Blind' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--accent-primary)',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '0.2rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Board Content */}
      <section className="page-section" style={{ background: '#ffffff' }}>
        <div className="container">

          {/* ISSN Compliance Note */}
          <div
            style={{
              background: 'linear-gradient(135deg, #f0f7f4, #e8f4f0)',
              border: '1.5px solid #b2d8c8',
              borderLeft: '5px solid #2d8a62',
              borderRadius: 'var(--border-radius)',
              padding: '1.25rem 1.75rem',
              marginBottom: '3.5rem',
              fontSize: '0.88rem',
              color: '#2c5f4a',
              lineHeight: 1.7,
            }}
          >
            <strong>Editorial Board Disclosure:</strong> All members of the Editorial Board are
            affiliated with recognised academic institutions. Complete postal addresses and
            official institutional email addresses are displayed in compliance with ISSN India
            (ISSN National Centre, CSIR-NIScPR) registration requirements. Personal email
            addresses are not used. International members are included in compliance with ISSN
            requirements for journals with international scope.
          </div>

          {/* Section 1 – Patron & Editor-in-Chief */}
          <SectionTitle>Patron &amp; Editor-in-Chief</SectionTitle>
          <div className="board-grid-auto">
            {patronAndChief.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>

          {/* Section 2 – Managing Editor */}
          <SectionTitle>Managing Editor</SectionTitle>
          <div className="board-grid-auto">
            {managingEditors.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>

          {/* Section 3 – Editorial Board Members */}
          <SectionTitle>Editorial Board Members</SectionTitle>
          <div className="board-grid-auto">
            {editorialBoard.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>

          {/* Verification Note */}
          <div
            style={{
              marginTop: '2rem',
              padding: '2rem',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--border-radius)',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
            }}
          >
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              Editorial Board Verification Policy
            </h4>
            <p>
              All Editorial Board members listed on this page have formally consented to serve on
              the board of SISC Academic Press. Their institutional affiliations, addresses, and
              email addresses are displayed as provided by the members themselves and reflect their
              current positions. Any queries regarding editorial board membership may be directed
              to{' '}
              <a
                href="mailto:editor@siscpress.org"
                style={{ color: 'var(--accent-primary)', fontWeight: 600 }}
              >
                editor@siscpress.org
              </a>
              . Any corrections or updates to member information should be communicated to the
              editorial office in writing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
