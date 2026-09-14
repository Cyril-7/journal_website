import { Link } from 'react-router-dom';
import { useSEO } from '../useSEO';


// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="hero" id="home" aria-label="Journal introduction">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text fade-in">
            <span className="hero-label">A Multidisciplinary Journal</span>
            <h1>Studies in Indo-Semitic Christianity</h1>
            <p className="hero-description">
              An interdisciplinary journal on the Malankara Church, St Thomas Traditions,
              Syrian Liturgies, and Indian and Semitic Christian heritage.
            </p>
            <div className="hero-actions">
              <Link to="/browse" className="btn btn-primary" id="hero-browse-btn">Browse Articles</Link>
              <Link to="/about" className="btn btn-outline" id="hero-about-btn">About the Journal</Link>
            </div>
          </div>

          <div className="hero-image-col" aria-hidden="true">
            <img
              src="/hero-cross.jpg"
              alt="Ancient stone cross — archival documentation of Indian Christian heritage"
            />
            <div className="hero-image-overlay" />
            <div className="hero-tags">
              <span>History</span>
              <span>Culture</span>
              <span>Theology</span>
              <span>Identity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// (Search bar removed)

// ─── About the Journal ────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section className="home-about-section" aria-labelledby="about-heading">
      <div className="container">
        <div style={{ maxWidth: '720px' }}>
          <span className="section-eyebrow">About the Journal</span>
          <h2 id="about-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.95rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0.6rem 0 1.5rem', letterSpacing: '-0.02em' }}>
            Studies in Indo-Semitic Christianity (SISC)
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.85', marginBottom: '1.1rem' }}>
            <em>Studies in Indo-Semitic Christianity</em> is an interdisciplinary academic journal dedicated
            to the study of Christianity in India, Asia, and the wider Semitic world. It explores the
            historical, theological, cultural, and ecclesial traditions that have shaped Christian identity
            across these regions, with particular attention to the Indian and Syriac Christian traditions.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
            The journal seeks to examine the genealogy and contemporary expressions of Indo-Semitic
            Christianity, its relationship with West Syriac and other Asian Christian traditions, and the
            ways in which indigenous Christian identities have encountered, absorbed, resisted, and
            negotiated Western and Byzantine influences.
          </p>
          <Link to="/about" className="read-more-link" id="about-read-more">
            Read More →
          </Link>
        </div>
      </div>
    </section>
  );
}




// ─── Origins & Identity ───────────────────────────────────────────────────────

function OriginsSection() {
  return (
    <section className="home-editorial-section plain" aria-labelledby="origins-heading">
      <div className="container">
        <div className="editorial-two-col">
          <div className="editorial-col-left">
            <span className="section-eyebrow">Background</span>
            <h2 id="origins-heading">Origins &amp; Identity</h2>
            <span className="section-rule" aria-hidden="true" />
            <Link to="/about#origins" className="read-more-link" id="origins-read-more">Read More →</Link>
          </div>
          <div className="editorial-col-right">
            <p>
              Indo-Semitic Christianity is a religious identity that is an entanglement of Indian cultural
              ethos and Semitic spiritual traditions. An authentic Asian tradition, it originated with the
              arrival of Christianity in India and its subsequent absorption by the native populace. It
              claims its legitimacy through the patrimony of St. Thomas. The Church's relationship with
              the early Jewish and other West Asian migrants in the Indian subcontinent bolstered this identity.
            </p>
            <p>
              Until Portuguese colonialism, this identity manifested itself in the form of St. Thomas
              traditions — a set of cultural practices that characterised the Malankara Pally or Indian
              Christianity. These traditions distinguished it from Greco-Alexandrian theological approaches
              and Greco-Roman cultural practices of the Christian religion. The attempts by the Roman and
              later Anglican churches to fundamentally alter these traditions resulted in a near-complete
              collapse of this identity. However, the resistance by the Malankara Church prevented its
              complete eradication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reclamation & Paradox ────────────────────────────────────────────────────

function ReclamationSection() {
  return (
    <section className="home-editorial-section alt" aria-labelledby="reclamation-heading">
      <div className="container">
        <div className="editorial-two-col">
          <div className="editorial-col-left">
            <span className="section-eyebrow">Context</span>
            <h2 id="reclamation-heading">Reclamation &amp; Paradox</h2>
            <span className="section-rule" aria-hidden="true" />
            <Link to="/about#reclamation" className="read-more-link" id="reclamation-read-more">Read More →</Link>
          </div>
          <div className="editorial-col-right">
            <p>
              What followed was an attempt by the Malankara Church to reestablish its indigenous spiritual
              traditions with the help of the West Syriac ecclesial institutions. While this did not
              completely liberate it from the influence of Western forms of spirituality, it equipped the
              Church to at least partially reclaim its traditions and face contemporary religious and
              spiritual challenges. During this period, Indo-Semitic Christianity got intertwined with a
              Greco-Alexandrian theological outlook, which created the fundamental premise upon which
              West Syriac ecclesiology was founded.
            </p>
            <p>
              While there were several points of congruence between Indo-Semitic Christianity and West
              Syriac ecclesiology, the paradoxes between their worldviews are equally stark. With West
              Syriac Ecclesiology and orthodox theology becoming more Hellenic with time, these paradoxes
              are creating severe ambiguities and conflicts in the identity of the Malankara Church.
              Globalisation is accentuating this tension. Today, the Indo-Semitic identity has reached a
              juncture where a recalibration is necessary for Christianity in general and the Malankara
              Church in particular to navigate the murky social currents of our times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Our Mission ──────────────────────────────────────────────────────────────

function MissionSection() {
  return (
    <section className="home-editorial-section plain" aria-labelledby="mission-heading">
      <div className="container">
        <div className="editorial-two-col">
          <div className="editorial-col-left">
            <span className="section-eyebrow">Scholarly Purpose</span>
            <h2 id="mission-heading">Our Mission</h2>
            <span className="section-rule" aria-hidden="true" />
            <Link to="/about" className="read-more-link" id="mission-read-more">Learn More →</Link>
          </div>
          <div className="editorial-col-right">
            <p>
              This journal attempts to bring to academic focus the identity of the Malankara Church and
              the genealogy of that identity. Following an <strong>interdisciplinary approach</strong>,
              it interweaves predominantly historical and theological methodologies — but is not limited
              to them alone. It will closely examine the Indian, Asian, and Semitic foundations upon which
              this identity is constructed, as well as the contemporary manifestations and challenges of
              its Christian being.
            </p>
            <p>
              The very cultural and theological foundation of this identity liberates this project from
              being narrowly confined to the ecclesial limits of the Malankara Church. Its enquiry
              includes the rich and varied Christian life in the Semitic world — a geography spanning
              ancient churches across Asia and North-eastern Africa — as well as the interaction of
              these churches with global currents and historical forces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  useSEO({
    title: 'Home',
    description:
      'Studies in Indo-Semitic Christianity (SISC) — an interdisciplinary peer-reviewed journal on the Malankara Church, St Thomas Traditions, Syriac Liturgies, and Indian and Semitic Christian heritage.',
    keywords:
      'Indo-Semitic Christianity, Malankara Church, St. Thomas, Syriac liturgy, SISC Journal, open access, Kerala Christianity, church history, theology',
    canonical: '/',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Periodical',
      name: 'Studies in Indo-Semitic Christianity',
      description:
        'An interdisciplinary academic journal dedicated to the study of Christianity in India, Asia, and the wider Semitic world.',
      url: 'https://jsisc.in',
      publisher: {
        '@type': 'Organization',
        name: 'SISC Research Group',
        url: 'https://jsisc.in',
      },
      inLanguage: 'en',
      isAccessibleForFree: true,
    },
  });

  return (
    <>
      <Hero />
      <AboutSection />
      <OriginsSection />
      <ReclamationSection />
      <MissionSection />
    </>
  );
}
