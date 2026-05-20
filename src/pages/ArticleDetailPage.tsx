import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data';

export default function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === Number(id));

  // Local state for registered academic comments/correspondence
  const [comments, setComments] = useState([
    {
      author: "Prof. Dr. Mathew Philip",
      affiliation: "Department of Syriac Studies, SEERI",
      date: "2 weeks ago",
      text: "This critique provides outstanding historical clarity on the post-colonial transition of liturgical frameworks in Kerala. The analysis on St. Thomas cultural hermeneutics aligns perfectly with modern peer assessments. An exceptional scholarly contribution."
    }
  ]);

  const [newAuthor, setNewAuthor] = useState('');
  const [newAffiliation, setNewAffiliation] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newText, setNewText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!article) {
    return (
      <div className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Article Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>The requested publication may have been moved or archived.</p>
        <Link to="/browse" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Back to Research Library</Link>
      </div>
    );
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAuthor && newText && newEmail) {
      setComments([
        ...comments,
        {
          author: newAuthor,
          affiliation: newAffiliation || "Independent Scholar",
          date: "Just now (Pending Peer Review)",
          text: newText
        }
      ]);
      setSubmitted(true);
      setNewAuthor('');
      setNewAffiliation('');
      setNewEmail('');
      setNewText('');
    }
  };

  return (
    <>
      {/* Formal Top Navigation bar */}
      <div className="no-print" style={{ background: '#ffffff', borderBottom: '1px solid var(--border-mid)', padding: '2rem 0' }}>
        <div className="container">
          <Link to="/browse" style={{ 
            fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500,
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            &larr; Return to SISC Research Library
          </Link>
        </div>
      </div>

      {/* Main Page Layout */}
      <section style={{ padding: '4rem 0', background: '#ffffff', fontFamily: 'var(--font-serif)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 280px', gap: '5rem', alignItems: 'start' }}>
            
            {/* Main Manuscript (Left) */}
            <div style={{ maxWidth: '800px' }}>
              
              {/* Journal Meta Header */}
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '1rem' }}>
                SISC Journal of Indo-Semitic Studies
              </div>

              {/* Manuscript Title */}
              <h1 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '2.5rem', 
                fontWeight: 700, 
                lineHeight: '1.25', 
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.01em'
              }}>
                {article.title}
              </h1>

              {/* Authors and Affiliation Block */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {article.author}
                </div>
                {article.affiliation && (
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginTop: '0.25rem' }}>
                    {article.affiliation}
                  </div>
                )}
              </div>

              {/* Classical Abstract Block */}
              {article.abstract && (
                <div style={{ 
                  margin: '0 2.5rem 3.5rem 2.5rem', 
                  padding: '1.5rem 0', 
                  borderTop: '1px solid var(--border-mid)',
                  borderBottom: '1px solid var(--border-mid)'
                }}>
                  <h3 style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '0.9rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '2px', 
                    color: 'var(--text-primary)', 
                    marginBottom: '0.75rem', 
                    fontWeight: 700,
                    textAlign: 'center'
                  }}>
                    Abstract
                  </h3>
                  <p style={{ 
                    fontSize: '0.96rem', 
                    lineHeight: '1.75', 
                    color: 'var(--text-primary)', 
                    fontStyle: 'italic',
                    textAlign: 'justify'
                  }}>
                    {article.abstract}
                  </p>
                </div>
              )}

              {/* Captioned Scholarly Figure (The image) */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem', marginBottom: '4.5rem' }}>
                <img src={article.image} alt={article.title} style={{ 
                  width: '100%', 
                  maxHeight: '380px', 
                  objectFit: 'cover', 
                  border: '1px solid var(--border-mid)',
                  padding: '4px',
                  background: '#ffffff'
                }} />
                <span style={{ 
                  fontSize: '0.82rem', 
                  color: 'var(--text-secondary)', 
                  fontStyle: 'italic',
                  textAlign: 'center',
                  maxWidth: '90%'
                }}>
                  Figure 1: Associated contextual archives and material documentation related to {article.category} studies.
                </span>
              </div>

              {/* Formal Manuscript Content */}
              <div style={{ 
                fontSize: '1.08rem', 
                lineHeight: '1.9', 
                color: 'var(--text-primary)', 
                textAlign: 'justify',
                display: 'flex', 
                flexDirection: 'column', 
                gap: '2.5rem'
              }}>
                {article.sections && article.sections.length > 0 ? (
                  article.sections.map((sec, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <h3 style={{ 
                        fontFamily: 'var(--font-serif)', 
                        fontSize: '1.4rem', 
                        fontWeight: 700,
                        color: 'var(--text-primary)', 
                        borderBottom: '1px solid var(--border-mid)', 
                        paddingBottom: '0.4rem',
                        marginTop: '1.5rem'
                      }}>
                        {sec.title}
                      </h3>
                      {sec.body.split('\n\n').map((para, pIdx) => (
                        <p key={pIdx} style={{ margin: 0, textIndent: pIdx > 0 ? '2em' : '0' }}>{para}</p>
                      ))}
                    </div>
                  ))
                ) : (
                  <>
                    <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>{article.excerpt}</p>
                    <p>No full sections are declared for this article yet. Full article text will be rendered dynamically as separate segments.</p>
                  </>
                )}
              </div>

              {/* Bibliography References */}
              {article.references && article.references.length > 0 && (
                <div style={{ marginTop: '5rem', paddingTop: '2.5rem', borderTop: '2px solid var(--border-mid)' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                    References &amp; Bibliography
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-primary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                    {article.references.map((ref, idx) => (
                      <div key={idx} style={{ paddingLeft: '1.5rem', textIndent: '-1.5rem' }}>
                        {ref}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scholarly Correspondence & Discussion (Comment Section) */}
              <div className="no-print" style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '2px solid var(--border-mid)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Scholarly Correspondence &amp; Responses
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '2rem' }}>
                  SISC Journal welcomes formal academic reviews, constructive critiques, or responses regarding this manuscript. All submitted commentaries undergo internal editorial evaluation to ensure professional and scholastic peer ethics.
                </p>

                {/* Correspondence Feed */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                  {comments.map((c, i) => (
                    <div key={i} style={{ 
                      background: 'var(--bg-surface)', 
                      border: '1.5px solid var(--border-subtle)', 
                      borderRadius: 'var(--border-radius)', 
                      padding: '1.5rem' 
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <div>
                          <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)', display: 'block' }}>{c.author}</strong>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>{c.affiliation}</span>
                        </div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{c.date}</span>
                      </div>
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0, fontFamily: 'var(--font-body)', textAlign: 'justify' }}>
                        {c.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Submissions Form */}
                <div style={{ background: '#ffffff', border: '1.5px solid var(--border-mid)', borderRadius: 'var(--border-radius)', padding: '2rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 600 }}>
                    Submit Academic Response
                  </h4>

                  {submitted ? (
                    <div style={{ padding: '1rem 0', color: 'var(--accent-primary)', fontSize: '0.92rem', fontWeight: 600 }}>
                      ✓ Your scholarly correspondence has been recorded and queued for editorial peer review.
                    </div>
                  ) : (
                    <form onSubmit={handleCommentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <input 
                          type="text" 
                          placeholder="Your Full Name *" 
                          className="search-box" 
                          value={newAuthor} 
                          onChange={e => setNewAuthor(e.target.value)} 
                          required 
                        />
                        <input 
                          type="text" 
                          placeholder="Academic Affiliation / University *" 
                          className="search-box" 
                          value={newAffiliation} 
                          onChange={e => setNewAffiliation(e.target.value)} 
                          required 
                        />
                      </div>
                      <input 
                        type="email" 
                        placeholder="Academic Email Address (.edu / .org) *" 
                        className="search-box" 
                        value={newEmail} 
                        onChange={e => setNewEmail(e.target.value)} 
                        required 
                      />
                      <textarea 
                        placeholder="Provide your scholarly analysis, response, or critique... *" 
                        className="search-box" 
                        rows={4} 
                        value={newText} 
                        onChange={e => setNewText(e.target.value)} 
                        style={{ resize: 'vertical' }} 
                        required 
                      />
                      <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '0.6rem 1.5rem' }}>
                        Submit for Peer Review
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>

            {/* Sidebar metadata & actions (Right) */}
            <aside className="no-print" style={{ borderLeft: '1px solid var(--border-mid)', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Minimalist Plain Text Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.print();
                  }}
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--text-primary)',
                    color: 'var(--text-primary)',
                    padding: '0.6rem',
                    borderRadius: 'var(--border-radius)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'block',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--text-primary)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  Download PDF Manuscript
                </a>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        text: article.excerpt,
                        url: window.location.href
                      }).catch(() => {});
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Article link copied to clipboard!');
                    }
                  }}
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--border-mid)',
                    color: 'var(--text-secondary)',
                    padding: '0.6rem',
                    borderRadius: 'var(--border-radius)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'block',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--text-primary)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-mid)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  Share Article
                </button>
              </div>

            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
