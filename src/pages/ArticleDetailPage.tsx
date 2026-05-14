import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data';

export default function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
        <h2>Article not found</h2>
        <Link to="/browse" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Browse</Link>
      </div>
    );
  }

  return (
    <>
      <div className="page-banner" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <Link to="/browse" style={{ 
            fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem'
          }}>
            ← Back to Browse
          </Link>
          <div className="card-meta">{article.category}</div>
          <h1 className="page-banner-title" style={{ maxWidth: '900px' }}>{article.title}</h1>
          <div className="card-footer" style={{ marginTop: '1.5rem', color: 'var(--text-secondary)' }}>
            <span style={{ fontWeight: 600 }}>{article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
          </div>
        </div>
      </div>

      <section className="article-content-section" style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <img src={article.image} alt={article.title} style={{ 
            width: '100%', height: '450px', objectFit: 'cover', borderRadius: '16px',
            marginBottom: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }} />
          
          <div className="article-body-text" style={{ 
            fontSize: '1.15rem', lineHeight: '1.9', color: 'var(--text-primary)',
            fontFamily: "'Inter', sans-serif"
          }}>
            <p style={{ marginBottom: '2rem', fontWeight: 500, fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
              {article.excerpt}
            </p>
            <p>{article.content}</p>
            <p style={{ marginTop: '2rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p style={{ marginTop: '2rem' }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>

          <div className="article-tags" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-mid)', display: 'flex', gap: '0.75rem' }}>
            {['Theology', 'History', 'Asia', 'Tradition'].map(tag => (
              <span key={tag} style={{ 
                padding: '0.4rem 1rem', background: 'var(--bg-elevated)', borderRadius: '100px',
                fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500
              }}>#{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
