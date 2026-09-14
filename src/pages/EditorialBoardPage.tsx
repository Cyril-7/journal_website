import React from 'react';
import { useSEO } from '../useSEO';

// ─── Editorial Board Data ─────────────────────────────────────────────────────

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
    name: 'Mr. Thomas Kuriakose',
  }
];

// ─── Member Row ───────────────────────────────────────────────────────────────

function MemberRow({ member }: { member: BoardMember }) {
  const instValue = [member.department, member.institution].filter(Boolean).join(', ');

  return (
    <div className="board-member-row">
      <div className="board-member-name">{member.name}</div>
      {member.designation && (
        <div className="board-member-detail">{member.designation}</div>
      )}
      {instValue && (
        <div className="board-member-detail">{instValue}</div>
      )}
      {member.address && (
        <div className="board-member-detail">{member.address}</div>
      )}
      {member.email && (
        <div className="board-member-detail" style={{ marginTop: '0.3rem' }}>
          <a
            href={`mailto:${member.email}`}
            style={{ color: 'var(--accent-primary)', fontFamily: 'monospace', fontSize: '0.82rem', fontWeight: 600 }}
          >
            {member.email}
          </a>
        </div>
      )}
      {member.specialisation && (
        <div className="board-member-detail">
          <em>Specialisation:</em> {member.specialisation}
        </div>
      )}
      {member.profileUrl && (
        <div style={{ marginTop: '0.5rem' }}>
          <a
            href={member.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', fontWeight: 600 }}
          >
            Institutional Profile →
          </a>
        </div>
      )}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

function BoardSection({ title, members }: { title: string; members: BoardMember[] }) {
  if (members.length === 0) return null;
  return (
    <div style={{ marginBottom: '3.5rem' }}>
      <div className="board-section-title">{title}</div>
      <div className="board-grid-auto">
        {members.map(m => <MemberRow key={m.name} member={m} />)}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function EditorialBoardPage() {
  useSEO({
    title: 'Editorial Board',
    description:
      'Meet the scholars on the SISC Journal Editorial Board — theologians, historians, and Syriac studies experts from leading institutions.',
    keywords:
      'editorial board, SISC journal editors, theology scholars, Syriac studies board, Malankara church scholars, academic journal India editorial',
    canonical: '/editorial-board',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Editorial Board — Studies in Indo-Semitic Christianity',
      url: 'https://jsisc.in/editorial-board',
      description: 'The SISC Journal editorial board comprises distinguished scholars in theology, history, and comparative religion.',
    },
  });

  const hasAnyMembers = patronAndChief.length + managingEditors.length + editorialBoard.length > 0;

  return (
    <>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">SISC — Studies in Indo-Semitic Christianity</div>
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
          <div style={{ maxWidth: '760px' }}>
            {hasAnyMembers ? (
              <>
                <BoardSection title="Patron &amp; Editor-in-Chief" members={patronAndChief} />
                <BoardSection title="Managing Editor" members={managingEditors} />
                <BoardSection title="Editorial Board Members" members={editorialBoard} />
              </>
            ) : (
              <div style={{ padding: '2rem 0', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                <p>Editorial board information will be published upon the formal launch of the journal. Please check back soon.</p>
              </div>
            )}

            {/* Note */}
            <div style={{
              marginTop: '3rem',
              padding: '1.5rem',
              background: 'var(--clr-surface, #F2F1EE)',
              borderLeft: '3px solid var(--accent-primary)',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7
            }}>
              <strong style={{ display: 'block', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                Note on Completeness
              </strong>
              Full institutional profiles and affiliations for editorial board members will be published in accordance with ISSN guidelines upon the formal launch of the journal.
              For editorial inquiries, please contact{' '}
              <a href="mailto:contact@jsisc.in" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                contact@jsisc.in
              </a>.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
