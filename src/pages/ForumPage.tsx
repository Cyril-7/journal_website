import React from 'react';

const threads = [
  { title: "The authenticity of St. Thomas traditions in the 21st century", replies: 24, author: "Dr. M. Thomas", tag: "Historical Theology", time: "2 hours ago" },
  { title: "West Syriac liturgy vs. indigenous Malankara worship forms", replies: 17, author: "Rev. J. Abraham", tag: "Ecclesiology", time: "5 hours ago" },
  { title: "Portuguese colonialism and the rupture of Indo-Semitic identity", replies: 31, author: "Prof. A. George", tag: "Church History", time: "1 day ago" },
  { title: "Globalisation and the future of Nazrani cultural practices", replies: 9, author: "Dr. S. Varghese", tag: "Cultural Studies", time: "2 days ago" },
  { title: "Can the Malankara Church reclaim its pre-colonial identity?", replies: 44, author: "Fr. B. Mathai", tag: "Ecclesiology", time: "3 days ago" },
  { title: "Syriac as a liturgical language: relevance in contemporary worship", replies: 12, author: "Dr. T. Philip", tag: "Liturgical Studies", time: "4 days ago" },
];

export default function ForumPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">Community</div>
          <h1 className="page-banner-title">Forum</h1>
          <p className="page-banner-sub">
            Join the scholarly conversation. Discuss, debate, and engage with peers on key topics in
            Indo-Semitic Christian studies.
          </p>
        </div>
      </div>

      <section className="page-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{threads.length} active discussions</span>
            </div>
            <button className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.4rem' }}>
              + Start Discussion
            </button>
          </div>

          <div className="forum-list">
            {threads.map((t, i) => (
              <a href="#" key={i} className="forum-thread">
                <div className="forum-thread-left">
                  <span className="forum-index">#{i + 1}</span>
                  <div>
                    <h4 className="forum-thread-title">{t.title}</h4>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.25rem' }}>
                      <span className="forum-thread-author">Started by {t.author}</span>
                      <span className="card-meta" style={{ fontSize: '0.65rem' }}>{t.tag}</span>
                      <span style={{ fontSize: '0.73rem', color: 'var(--text-muted)' }}>{t.time}</span>
                    </div>
                  </div>
                </div>
                <span className="forum-replies">{t.replies} replies</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
