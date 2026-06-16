import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { articles, Article } from '../data';
import { useSEO } from '../useSEO';

// ─── Data Structures ──────────────────────────────────────────────────────────

interface IssueGroup {
  year: number;
  volume: number;
  issueNumber: number;
  month: string;
  articles: Article[];
  pageMin: number;
  pageMax: number;
}

interface YearGroup {
  year: number;
  issues: IssueGroup[];
}

interface DecadeGroup {
  label: string;   // e.g. "2020s"
  start: number;   // e.g. 2020
  years: YearGroup[];
}

function groupByDecade(allArticles: Article[]): DecadeGroup[] {
  const withBib = allArticles.filter(
    (a) => a.volume !== undefined && a.issueNumber !== undefined && a.year !== undefined
  );

  // Build year → issue map
  const yearMap = new Map<number, Map<string, IssueGroup>>();
  withBib.forEach((a) => {
    const yr = a.year!;
    const key = `V${a.volume}-I${a.issueNumber}`;
    if (!yearMap.has(yr)) yearMap.set(yr, new Map());
    const issueMap = yearMap.get(yr)!;
    if (!issueMap.has(key)) {
      issueMap.set(key, {
        year: yr,
        volume: a.volume!,
        issueNumber: a.issueNumber!,
        month: a.month ?? '',
        articles: [],
        pageMin: Infinity,
        pageMax: -Infinity,
      });
    }
    const ig = issueMap.get(key)!;
    ig.articles.push(a);
    if (a.pageStart !== undefined && a.pageStart < ig.pageMin) ig.pageMin = a.pageStart;
    if (a.pageEnd !== undefined && a.pageEnd > ig.pageMax) ig.pageMax = a.pageEnd;
  });

  // Fix Infinity fallbacks
  yearMap.forEach((issueMap) =>
    issueMap.forEach((ig) => {
      if (!isFinite(ig.pageMin)) ig.pageMin = 0;
      if (!isFinite(ig.pageMax)) ig.pageMax = 0;
      ig.articles.sort((x, y) => (x.pageStart ?? 0) - (y.pageStart ?? 0));
    })
  );

  // Build sorted year groups
  const yearGroups: YearGroup[] = Array.from(yearMap.keys())
    .sort((a, b) => b - a)
    .map((yr) => ({
      year: yr,
      issues: Array.from(yearMap.get(yr)!.values()).sort(
        (a, b) => b.issueNumber - a.issueNumber // newest issue first in each year
      ),
    }));

  // Group into decades
  const decadeMap = new Map<number, YearGroup[]>();
  yearGroups.forEach((yg) => {
    const decade = Math.floor(yg.year / 10) * 10;
    if (!decadeMap.has(decade)) decadeMap.set(decade, []);
    decadeMap.get(decade)!.push(yg);
  });

  return Array.from(decadeMap.keys())
    .sort((a, b) => b - a)
    .map((decade) => ({
      label: `${decade}s`,
      start: decade,
      years: decadeMap.get(decade)!,
    }));
}

// ─── Issue Row (a single volume/issue entry) ─────────────────────────────────

function IssueRow({ issue }: { issue: IssueGroup }) {
  const hasPages = issue.pageMin > 0 && issue.pageMax > 0;
  // Find the first article of this issue to deep-link to it
  const firstArticle = issue.articles[0];
  const linkTarget = firstArticle ? `/article/${firstArticle.id}` : '/archive';

  return (
    <Link
      to={linkTarget}
      className="archive-issue-row"
    >
      <span className="archive-issue-row-label">
        Volume {issue.volume}, Number {issue.issueNumber}
        {issue.month && <span className="archive-issue-row-month"> | {issue.month} {issue.year}</span>}
      </span>
      <span className="archive-issue-row-pages">
        {hasPages && `pp. ${issue.pageMin}-${issue.pageMax}`}
        <span className="archive-issue-row-icon" title="Open Access">🔓</span>
      </span>
    </Link>
  );
}

// ─── Year Sub-row (collapsible inside a decade) ───────────────────────────────

function YearAccordion({ yearGroup, defaultOpen }: { yearGroup: YearGroup; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="archive-year-accordion">
      <button
        className="archive-year-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="archive-year-prefix">{open ? '−' : '+'}</span>
        <span className="archive-year-label">{yearGroup.year}</span>
      </button>
      {open && (
        <div className="archive-year-issues">
          {yearGroup.issues.map((issue) => (
            <IssueRow key={`${issue.volume}-${issue.issueNumber}`} issue={issue} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Decade Accordion (top-level collapsible) ─────────────────────────────────

function DecadeAccordion({ decade, defaultOpen }: { decade: DecadeGroup; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const totalIssues = decade.years.reduce((s, y) => s + y.issues.length, 0);

  return (
    <div className={`archive-decade-accordion ${open ? 'open' : ''}`}>
      <button
        className="archive-decade-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="archive-decade-label">{decade.label}</span>
        <span className="archive-decade-right">
          {!open && (
            <span className="archive-decade-count">{totalIssues} {totalIssues === 1 ? 'issue' : 'issues'}</span>
          )}
          <span className="archive-decade-icon">{open ? '−' : '+'}</span>
        </span>
      </button>

      {open && (
        <div className="archive-decade-body">
          {decade.years.map((yg, i) => (
            <YearAccordion
              key={yg.year}
              yearGroup={yg}
              defaultOpen={defaultOpen && i === 0}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Archive Page ────────────────────────────────────────────────────────

export default function ArchivePage() {
  const decades = useMemo(() => groupByDecade(articles), []);
  const totalArticles = articles.filter((a) => a.volume !== undefined).length;
  const totalIssues = decades.reduce((s, d) => s + d.years.reduce((ss, y) => ss + y.issues.length, 0), 0);

  useSEO({
    title: 'All Issues | SISC Archive',
    description: `Browse all ${totalIssues} issues and ${totalArticles} peer-reviewed articles published in the Studies in Indo-Semitic Christianity Journal.`,
    keywords: 'SISC journal archive, Indo-Semitic Christianity issues, past volumes, journal archive India',
    canonical: '/archive',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ArchiveComponent',
      name: 'Journal Archive — Studies in Indo-Semitic Christianity',
      url: 'https://jsisc.in/archive',
    },
  });

  return (
    <>
      {/* Page Banner */}
      <div className="page-banner" style={{ paddingTop: '7rem', paddingBottom: '3rem' }}>
        <div className="container">
          <p className="section-eyebrow" style={{ marginBottom: '0.5rem' }}>SISC Academic Press</p>
          <h1 className="page-banner-title">All Issues</h1>
          <p className="page-banner-sub">
            Complete archive of <em>Indo-Semitic Studies</em>. Browse by decade and year.
          </p>
          <div style={{ display: 'flex', gap: '2.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'E-ISSN', value: '2831-402X' },
              { label: 'Frequency', value: 'Quarterly' },
              { label: 'Issues', value: String(totalIssues) },
              { label: 'Articles', value: String(totalArticles) },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>{s.label}</div>
                <div style={{ fontSize: '1.1rem', color: 'var(--accent-primary)', fontWeight: 800, marginTop: '0.15rem' }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Archive Content */}
      <section style={{ background: '#f5f5f7', minHeight: '60vh', padding: '3rem 0 5rem' }}>
        <div className="container">
          <div className="archive-accordion-list">
            {decades.length === 0 ? (
              <div className="archive-empty">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: 0.25 }}>📂</div>
                <h3>No Published Issues Yet</h3>
                <p>The inaugural issue is in preparation. Check back soon.</p>
                <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                  Submit a Manuscript
                </Link>
              </div>
            ) : (
              decades.map((decade, i) => (
                <DecadeAccordion key={decade.label} decade={decade} defaultOpen={i === 0} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
