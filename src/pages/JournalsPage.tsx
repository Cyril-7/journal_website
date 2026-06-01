import { Link } from 'react-router-dom';
import { journals } from '../data';
import { useSEO } from '../useSEO';

export default function JournalsPage() {
  useSEO({
    title: 'Our Journals',
    description:
      'Explore peer-reviewed academic journals published by SISC Academic Press on Indo-Semitic Christianity, Syriac studies, church history, and theology. Gold open-access, double-blind review.',
    keywords:
      'SISC journals, academic journals, Indo-Semitic Christianity, Syriac studies, church history, open access journal India, theology journal',
    canonical: '/journals',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Our Journals — SISC Academic Press',
      url: 'https://jsisc.in/journals',
      description: 'Gold open-access peer-reviewed journals on Indo-Semitic Christianity and related theological and historical disciplines.',
      publisher: { '@type': 'Organization', name: 'SISC Research Group', url: 'https://jsisc.in' },
    },
  });

  return (
    <>
      <div className="page-banner" style={{ background: 'linear-gradient(135deg, #ffffff 40%, #fdf8f2 100%)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-eyebrow" style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Academic Publications
          </div>
          <h1 className="page-banner-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-primary)', marginTop: '0.5rem' }}>
            Our Peer-Reviewed Journals
          </h1>
          <p className="page-banner-sub" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '750px', lineHeight: '1.8' }}>
            Delivering gold open-access research across theology, history, liturgical evolution, and cultural studies of Indo-Semitic Christianity.
          </p>
        </div>
      </div>

      {/* Metrics Section */}
      <section style={{ padding: '3rem 0', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { label: 'Review Process', value: 'Double-Blind Peer Review', desc: 'Rigorous scholarly verification' },
              { label: 'Access Policy', value: 'Gold Open Access', desc: 'Fully CC-BY compliant' },
              { label: 'Average Review Time', value: '45-60 Days', desc: 'Efficient submission turnaround' },
              { label: 'Archiving & Indexing', value: 'CrossRef, DOAJ, Scholar', desc: 'Persistent DOIs on all articles' }
            ].map((m, idx) => (
              <div key={idx} style={{ 
                background: '#ffffff', 
                padding: '1.5rem', 
                borderRadius: 'var(--border-radius)', 
                border: '1.5px solid var(--border-subtle)',
                boxShadow: '0 4px 12px rgba(13,27,42,0.01)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem'
              }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)' }}>{m.label}</span>
                <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>{m.value}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{m.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="page-section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Directory</span>
            <h2 className="section-h2" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginTop: '0.5rem' }}>Active Publications Catalog</h2>
            <p className="section-desc" style={{ maxWidth: '600px', margin: '0.5rem auto 0' }}>
              Explore individual scopes, metrics, and editorial frameworks for our high-impact quarterly and annual journals.
            </p>
          </div>

          <div className="journals-catalog-grid">
            {journals.map((j, i) => (
              <div key={i} style={{
                background: '#ffffff',
                border: '1.5px solid var(--border-subtle)',
                borderRadius: 'var(--border-radius)',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(13,27,42,0.02)',
                transition: 'var(--transition-smooth)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(176,58,46,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(13,27,42,0.02)';
              }}
              >
                {/* Journal Cover Section */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img src={j.image} alt={j.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.8) 100%)'
                  }} />
                  <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem', right: '1.5rem' }}>
                    <span style={{ 
                      background: 'rgba(255, 255, 255, 0.15)', 
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--border-radius)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {j.frequency}
                    </span>
                    <h3 style={{ color: '#ffffff', fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginTop: '0.5rem', lineHeight: '1.25' }}>
                      {j.title}
                    </h3>
                  </div>
                
                </div>

                {/* Journal Info Body */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '1.25rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Scope & Focus</span>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '0.3rem', lineHeight: '1.6' }}>
                      {j.focus}. Dedicated to advancing cutting-edge methodologies and rigorous peer-reviewed criticism.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: 'var(--bg-surface)', padding: '1rem', borderRadius: 'var(--border-radius)', border: '1.5px solid var(--border-subtle)' }}>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Editor-in-Chief</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{j.editor}</span>
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>ISSN (Online)</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-secondary)', letterSpacing: '0.5px' }}>{j.issn}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      {j.issues} Volumes Published
                    </span>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <Link to="/browse" style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        Explore Articles &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scope and Policies */}
          <div className="journals-policy-callout">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Academic Rigor & Ethical Standards
            </h3>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '900px' }}>
              All SISC journals operate under strict adherence to the Committee on Publication Ethics (COPE) guidelines. Our universal double-blind peer-review system ensures complete anonymity between authors and reviewers, maintaining the highest levels of scholastic objectivity and intellectual integrity. 
            </p>
            <div className="journals-cta-row">
              <Link to="/ethics" className="btn btn-outline" style={{ background: '#ffffff', borderColor: 'var(--border-mid)', color: 'var(--text-primary)', padding: '0.6rem 1.5rem', borderRadius: 'var(--border-radius)' }}>
                Review Ethics Statement
              </Link>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', borderRadius: 'var(--border-radius)' }}>
                Contact Editorial Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
