import React from 'react';

const news = [
  { date: "May 10, 2024", tag: "Announcement", title: "Call for Papers: Special Issue on Malankara Church and Modernity", excerpt: "We invite submissions for a special themed issue exploring how the Malankara Church is navigating contemporary social, cultural, and theological challenges." },
  { date: "April 28, 2024", tag: "Event", title: "International Symposium on Indo-Semitic Christian Heritage – November 2024", excerpt: "Registration is now open for our annual international symposium bringing together scholars from across Asia, Europe, and North America." },
  { date: "April 15, 2024", tag: "Publication", title: "Volume 3, Issue 2 of Indo-Semitic Studies Now Available Online", excerpt: "The latest issue features eight peer-reviewed articles on St. Thomas traditions, Syriac liturgy, and Malankara Church identity." },
  { date: "March 30, 2024", tag: "Announcement", title: "New Editorial Board Members Appointed for 2024–2026 Term", excerpt: "We are pleased to welcome four distinguished scholars to our editorial board, strengthening our coverage of Asian and Semitic theological studies." },
  { date: "March 12, 2024", tag: "Award", title: "Best Article Prize 2023 Awarded to Dr. M. Joseph", excerpt: "Dr. Joseph's article on the Diamper Synod and its legacy receives this year's award for outstanding contribution to Indo-Semitic scholarship." },
  { date: "February 20, 2024", tag: "Event", title: "Workshop on Syriac Manuscript Studies – Kerala, India", excerpt: "A two-day workshop on reading and interpreting Syriac manuscripts held in partnership with the Oriental Institute, Kottayam." },
];

export default function NewsPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">Latest Updates</div>
          <h1 className="page-banner-title">News</h1>
          <p className="page-banner-sub">
            Announcements, events, new publications, and updates from the SISC Journal editorial team.
          </p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {news.map((n, i) => (
              <a href="#" key={i} className="news-card" style={{ textDecoration: 'none' }}>
                <div className="news-card-top">
                  <span className="card-meta">{n.tag}</span>
                  <span className="news-date">{n.date}</span>
                </div>
                <h4 className="news-title">{n.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.7', flex: 1 }}>{n.excerpt}</p>
                <span className="news-read">Read more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
