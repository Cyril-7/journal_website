import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { articles, Article } from '../data';
import { useSEO } from '../useSEO';


// ─── Grouping Logic ──────────────────────────────────────────────────────────

interface IssueGroup {
  year: number;
  volume: number;
  issueNumber: number;
  month: string;
  articles: Article[];
}

interface YearGroup {
  year: number;
  issues: IssueGroup[];
}

function groupArticles(allArticles: Article[]): YearGroup[] {
  // Only articles that have bibliographic volume/issue data
  const withBib = allArticles.filter(
    (a) => a.volume !== undefined && a.issueNumber !== undefined && a.year !== undefined
  );

  // Build a map: year → (volume+issueNumber) → IssueGroup
  const map = new Map<number, Map<string, IssueGroup>>();

  withBib.forEach((a) => {
    const yr = a.year!;
    const key = `V${a.volume}-I${a.issueNumber}`;
    if (!map.has(yr)) map.set(yr, new Map());
    const issueMap = map.get(yr)!;
    if (!issueMap.has(key)) {
      issueMap.set(key, {
        year: yr,
        volume: a.volume!,
        issueNumber: a.issueNumber!,
        month: a.month ?? '',
        articles: [],
      });
    }
    issueMap.get(key)!.articles.push(a);
  });

  // Sort within each issue by pageStart ascending
  map.forEach((issueMap) => {
    issueMap.forEach((issue) => {
      issue.articles.sort((x, y) => (x.pageStart ?? 0) - (y.pageStart ?? 0));
    });
  });

  // Build sorted year groups
  const years: YearGroup[] = [];
  Array.from(map.keys())
    .sort((a, b) => b - a) // newest year first
    .forEach((yr) => {
      const issueMap = map.get(yr)!;
      const issues = Array.from(issueMap.values()).sort((a, b) =>
        a.volume !== b.volume ? a.volume - b.volume : a.issueNumber - b.issueNumber
      );
      years.push({ year: yr, issues });
    });

  return years;
}

// ─── Article Row in TOC ──────────────────────────────────────────────────────

function TocRow({ article }: { article: Article }) {
  const pages =
    article.pageStart !== undefined && article.pageEnd !== undefined
      ? `pp. ${article.pageStart}–${article.pageEnd}`
      : null;

  return (
    <div className="archive-toc-row">
      {/* Left: metadata + title */}
      <div>
        {/* Category + Pages */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.4rem' }}>
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              color: 'var(--accent-secondary)',
            }}
          >
            {article.category}
          </span>
          {pages && (
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
              {pages}
            </span>
          )}
          {article.doi && (
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
              DOI: {article.doi}
            </span>
          )}
        </div>

        {/* Title — individually hyperlinked per ISSN requirement */}
        <Link
          to={`/article/${article.id}`}
          style={{
            display: 'block',
            fontFamily: 'var(--font-serif)',
            fontSize: '1.05rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            textDecoration: 'none',
            lineHeight: 1.4,
            marginBottom: '0.35rem',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-primary)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)';
          }}
        >
          {article.title}
        </Link>

        {/* Author & affiliation */}
        <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: 0 }}>
          <strong style={{ color: 'var(--text-primary)' }}>{article.author}</strong>
          {article.affiliation && (
            <span style={{ color: 'var(--text-muted)' }}>&ensp;·&ensp;{article.affiliation}</span>
          )}
        </p>
      </div>

      {/* Right: action buttons */}
      <div className="archive-toc-actions">
        {/* View Article */}
        <Link
          to={`/article/${article.id}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#ffffff',
            background: 'var(--accent-primary)',
            padding: '0.4rem 0.9rem',
            borderRadius: '6px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.background = '#8e2e24')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent-primary)')
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
          </svg>
          Full Text
        </Link>

        {/* PDF link — individually linked per ISSN requirement */}
        {article.pdfUrl && (
          <Link
            to={article.pdfUrl}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--accent-secondary)',
              background: 'transparent',
              border: '1.5px solid var(--accent-secondary)',
              padding: '0.35rem 0.9rem',
              borderRadius: '6px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent-secondary)';
              (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-secondary)';
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" />
            </svg>
            PDF
          </Link>
        )}
      </div>
    </div>
  );
}

// ─── Issue Block ──────────────────────────────────────────────────────────────

function IssueBlock({ issue, defaultOpen }: { issue: IssueGroup; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const totalPages =
    issue.articles.length > 0
      ? Math.max(...issue.articles.map((a) => a.pageEnd ?? 0))
      : 0;

  return (
    <div
      style={{
        border: '1.5px solid var(--border-subtle)',
        borderRadius: 'var(--border-radius)',
        overflow: 'hidden',
        marginBottom: '1.5rem',
        background: '#ffffff',
        boxShadow: '0 2px 10px rgba(13,27,42,0.02)',
      }}
    >
      {/* Issue Header — clickable to expand/collapse */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 2rem',
          background: open ? 'linear-gradient(135deg, #fdf8f2, #fff9f6)' : '#fafafa',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          borderBottom: open ? '1px solid var(--border-subtle)' : 'none',
          transition: 'background 0.25s',
        }}
      >
        <div className="archive-issue-header-inner">
          {/* Volume / Issue badge */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span
              style={{
                background: 'var(--accent-primary)',
                color: '#ffffff',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.28rem 0.75rem',
                borderRadius: '100px',
                letterSpacing: '0.4px',
                textTransform: 'uppercase',
              }}
            >
              Vol. {issue.volume}
            </span>
            <span
              style={{
                background: 'var(--accent-secondary)',
                color: '#ffffff',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.28rem 0.75rem',
                borderRadius: '100px',
                letterSpacing: '0.4px',
                textTransform: 'uppercase',
              }}
            >
              No. {issue.issueNumber}
            </span>
          </div>

          {/* Month · Year */}
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
            }}
          >
            {issue.month} {issue.year}
          </span>

          {/* Article count */}
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {issue.articles.length} {issue.articles.length === 1 ? 'article' : 'articles'}
            {totalPages > 0 && ` · pp. 1–${totalPages}`}
          </span>
        </div>


        {/* Chevron */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--text-muted)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Table of Contents */}
      {open && (
        <div style={{ padding: '0 2rem' }}>
          {/* TOC header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem 0 0.5rem',
            }}
          >
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
                color: 'var(--text-muted)',
              }}
            >
              Table of Contents
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
                color: 'var(--text-muted)',
              }}
            >
              E-ISSN: 2831-402X &nbsp;|&nbsp; Indo-Semitic Studies
            </span>
          </div>

          {/* Article rows */}
          <div style={{ paddingBottom: '1rem' }}>
            {issue.articles.map((a) => (
              <TocRow key={a.id} article={a} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Year Section ─────────────────────────────────────────────────────────────

function YearSection({ group, defaultOpen }: { group: YearGroup; defaultOpen: boolean }) {
  return (
    <div style={{ marginBottom: '3.5rem' }}>
      {/* Year heading */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
          paddingBottom: '0.75rem',
          borderBottom: '2px solid var(--border-mid)',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            margin: 0,
          }}
        >
          {group.year}
        </h2>
        <span
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            fontWeight: 500,
          }}
        >
          {group.issues.length} {group.issues.length === 1 ? 'issue' : 'issues'} ·{' '}
          {group.issues.reduce((s, i) => s + i.articles.length, 0)} articles
        </span>
      </div>

      {/* Issues */}
      {group.issues.map((issue, idx) => (
        <IssueBlock
          key={`${issue.volume}-${issue.issueNumber}`}
          issue={issue}
          defaultOpen={defaultOpen && idx === 0}
        />
      ))}
    </div>
  );
}

// ─── Main Archive Page ────────────────────────────────────────────────────────

export default function ArchivePage() {
  const yearGroups = useMemo(() => groupArticles(articles), []);
  const totalArticles = articles.filter((a) => a.volume !== undefined).length;
  const totalIssues = yearGroups.reduce((s, y) => s + y.issues.length, 0);

  useSEO({
    title: 'Issues & Archives',
    description:
      `Browse the full archive of ${totalIssues} issues and ${totalArticles} peer-reviewed articles published in the Studies in Indo-Semitic Christianity Journal. Organised by year, volume, and issue.`,
    keywords:
      'SISC journal archive, Indo-Semitic Christianity issues, past volumes, journal archive India, theology history journal archive',
    canonical: '/archive',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ArchiveComponent',
      name: 'Journal Archive — Studies in Indo-Semitic Christianity',
      url: 'https://jsisc.in/archive',
      description: `Complete archive of all published issues and articles in the Studies in Indo-Semitic Christianity Journal.`,
    },
  });


  return (
    <>
      {/* Page Banner */}
      <div className="archive-banner">
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(176,58,46,0.18) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-30px', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(154,122,46,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem' }}>
            SISC Academic Press
          </div>
          <h1 className="archive-banner-title">
            Issues &amp; Archives
          </h1>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '560px',
              margin: '1rem 0 0',
              lineHeight: 1.75,
            }}
          >
            Year-wise archive of all published issues of <em>Indo-Semitic Studies</em>. Each issue
            lists individual articles with separate hyperlinks as required by ISSN India guidelines.
          </p>

          {/* Quick Stats */}
          <div className="archive-stats-row">
            {[
              { label: 'Journal Title', value: 'Indo-Semitic Studies' },
              { label: 'E-ISSN', value: '2831-402X' },
              { label: 'Frequency', value: 'Quarterly' },
              { label: 'Total Issues', value: String(totalIssues) },
              { label: 'Total Articles', value: String(totalArticles) },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>
                  {s.label}
                </div>
                <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 700, marginTop: '0.2rem' }}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ISSN Compliance Notice */}
      <div className="archive-compliance-bar">
        <div className="container archive-compliance-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          Each article is listed individually with a separate hyperlink in compliance with ISSN India
          (CSIR-NIScPR) guidelines. Volume, Issue number, Month, Year, and Page numbers are
          displayed for every article.
        </div>
      </div>

      {/* Main Content */}
      <section style={{ background: '#f9f9fb', minHeight: '60vh', padding: '4rem 0' }}>
        <div className="container">
          {yearGroups.length === 0 ? (
            /* Empty state */
            <div
              style={{
                textAlign: 'center',
                padding: '6rem 2rem',
                background: '#ffffff',
                borderRadius: 'var(--border-radius)',
                border: '1.5px dashed var(--border-mid)',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1.25rem', opacity: 0.25 }}>📂</div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}
              >
                No Published Issues Yet
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                The inaugural issue is currently in preparation. Check back soon or submit your
                manuscript to contribute.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.65rem 1.75rem', borderRadius: '8px' }}>
                Submit a Manuscript
              </Link>
            </div>
          ) : (
            yearGroups.map((group, idx) => (
              <YearSection key={group.year} group={group} defaultOpen={idx === 0} />
            ))
          )}
        </div>
      </section>
    </>
  );
}
