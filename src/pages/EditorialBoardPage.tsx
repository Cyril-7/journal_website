import React from 'react';
import { useSEO } from '../useSEO';


// ─── Editorial Board Data ─────────────────────────────────────────────────────
// Each member includes all fields required by ISSN India guidelines:
// Full Name, Designation, Complete Institutional Address, Institutional Email,
// and Institutional Profile Link.

interface BoardMember {
  role: string;
  name: string;
  designation?: string;
  department?: string;
  institution?: string;
  address?: string;
  email?: string;
  profileUrl?: string;
  specialisation?: string;
}

const patronAndChief: BoardMember[] = [];

const managingEditors: BoardMember[] = [];

const editorialBoard: BoardMember[] = [
  {
    role: 'Editorial Board Member',
    name: 'Fr. Dr. Jossi Jacob Ponodath',
  },
  {
    role: 'Editorial Board Member',
    name: 'Fr. Aaron Joshua John',
  },
  {
    role: 'Editorial Board Member',
    name: 'Mr. Thomas Kuriakose PhD',
  }
];

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
  const instValue = [member.department, member.institution].filter(Boolean).join(', ');
  const hasDetails = Boolean(instValue || member.address || member.email || member.specialisation);

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
            fontSize: '1.25rem',
            color: 'var(--text-primary)',
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {member.name}
        </h3>
        {member.designation && (
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
        )}
      </div>

      {hasDetails && (
        <>
          {/* Divider */}
          <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: 0 }} />

          {/* Details table */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {/* Institution */}
            {instValue && (
              <DetailRow
                icon="🏛️"
                label="Institution"
                value={instValue}
              />
            )}

            {/* Address */}
            {member.address && <DetailRow icon="📍" label="Address" value={member.address} />}

            {/* Email */}
            {member.email && (
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
            )}

            {/* Specialisation */}
            {member.specialisation && (
              <DetailRow icon="🔬" label="Specialisation" value={member.specialisation} />
            )}
          </div>
        </>
      )}

      {/* Profile Link */}
      {member.profileUrl && (
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
      )}
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

  useSEO({
    title: 'Editorial Board',
    description:
      'Meet the distinguished scholars on the SISC Journal Editorial Board — theologians, historians, and Syriac studies experts from leading institutions across India and abroad.',
    keywords:
      'editorial board, SISC journal editors, theology scholars, Syriac studies board, Malankara church scholars, academic journal India editorial',
    canonical: '/editorial-board',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Editorial Board — SISC Academic Press',
      url: 'https://jsisc.in/editorial-board',
      description: 'The SISC Journal editorial board comprises distinguished scholars in theology, history, and comparative religion from leading global institutions.',
    },
  });


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

      {/* Board Content */}
      <section className="page-section" style={{ background: '#ffffff' }}>
        <div className="container">
          {patronAndChief.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <SectionTitle>Patron &amp; Editor-in-Chief</SectionTitle>
              <div className="board-grid-auto">
                {patronAndChief.map((m) => (
                  <MemberCard key={m.name} member={m} />
                ))}
              </div>
            </div>
          )}

          {managingEditors.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <SectionTitle>Managing Editor</SectionTitle>
              <div className="board-grid-auto">
                {managingEditors.map((m) => (
                  <MemberCard key={m.name} member={m} />
                ))}
              </div>
            </div>
          )}

          {editorialBoard.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <SectionTitle>Editorial Board Members</SectionTitle>
              <div className="board-grid-auto">
                {editorialBoard.map((m) => (
                  <MemberCard key={m.name} member={m} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
