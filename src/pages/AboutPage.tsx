import React from 'react';
import { useSEO } from '../useSEO';

export default function AboutPage() {
  useSEO({
    title: 'About the Journal',
    description:
      'Learn about the Studies in Indo-Semitic Christianity Journal — its mission, origins, editorial policy, and commitment to interdisciplinary open-access scholarship on the Malankara Church.',
    keywords:
      'about SISC journal, Indo-Semitic Christianity mission, Malankara Church research, open access theology journal, Kerala Christian studies',
    canonical: '/about',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About — Studies in Indo-Semitic Christianity Journal',
      url: 'https://jsisc.in/about',
      description:
        'The SISC Journal is dedicated to interdisciplinary academic inquiry into Indo-Semitic Christianity, its identity, genealogy, and contemporary challenges.',
      publisher: {
        '@type': 'Organization',
        name: 'SISC Research Group',
        url: 'https://jsisc.in',
      },
    },
  });

  return (
    <>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">About the Journal</div>
          <h1 className="page-banner-title">About Us</h1>
          <p className="page-banner-sub">
            An interdisciplinary academic inquiry into the identity, genealogy, and contemporary
            challenges of one of humanity's most ancient Christian traditions.
          </p>
        </div>
      </div>

      <section className="about-section" style={{ borderTop: 'none' }}>
        <div className="about-inner">
          <div className="about-body">

            {/* ── Journal Introduction ── */}
            <div className="about-mission-block" style={{ marginBottom: '2.5rem' }}>
              <h3>About the Journal</h3>
              <p>
                <em>Studies in Indo-Semitic Christianity</em> (SISC) is a multidisciplinary journal focused
                on the history, culture, theology and philosophical foundations of Indo-Semitic Christianity.
                'Indo-Semitic Christianity,' a term coined by <strong>Ponnodoth Jossi Jacob Kathanar</strong> in
                2014, refers to the branch of Christianity that exists in India, presumably from the first
                century CE to date.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Never being directly associated with the old Roman Empire, and later being an Asian Church
                in a colonised society, Indo-Semitic Christianity remained more or less completely outside
                scholarly interest. This Journal is an attempt to overcome this limitation. While doing so,
                it will engage not only with culture and history but also the theology of Indo-Semitic
                Christianity, as it believes theology forms an integral part of its identity.
              </p>
            </div>

            <div className="about-text-block">
              <h3 className="about-block-title">Origins &amp; Identity</h3>
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

            <div className="about-text-block">
              <h3 className="about-block-title">Reclamation &amp; Paradox</h3>
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

            <div className="about-mission-block">
              <h3>Our Mission</h3>
              <p>
                This journal attempts to bring to academic focus the identity of the Malankara Church and
                the genealogy of that identity. Following an <strong>interdisciplinary approach</strong>,
                it interweaves predominantly historical and theological methodologies — but is not limited
                to them alone. It will closely examine the Indian, Asian, and Semitic foundations upon which
                this identity is constructed, as well as the contemporary manifestations and challenges of
                its Christian being.
              </p>
              <p style={{ marginTop: '1rem' }}>
                The very cultural and theological foundation of this identity liberates this project from
                being narrowly confined to the ecclesial limits of the Malankara Church. Its enquiry
                includes the rich and varied Christian life in the Semitic world — a geography spanning
                ancient churches across Asia and North-eastern Africa — as well as the interaction of
                these churches with global currents and historical forces.
              </p>
            </div>

            <div className="about-text-block">
              <h3 className="about-block-title">Aims &amp; Scope</h3>
              <p>
                The objective of the journal is to highlight the nuances of Indo-Semitic Christianity and
                its differences and similarities with other Christian communities elsewhere and in India.
                The Journal will try to present studies from various fields thematically that will contribute
                to this end. Any study that can make a visible contribution to this end will fall within the
                scope of this journal.
              </p>
              <p style={{ marginTop: '0.85rem' }}>
                For example, a study on 16th-century 'Hindu' thought on the Malabar Coast, if it can show
                that it had substantial influence on the general public — who included Nazranis — can be
                published by the journal. The Journal engages not only with culture and history but also the
                theology of Indo-Semitic Christianity, as it believes theology forms an integral part of its identity.
              </p>
            </div>

            <div className="about-text-block">
              <h3 className="about-block-title">Review Process</h3>
              <p>
                The Journal is committed to maintaining the highest standards of academic integrity and
                publication ethics. All submissions will undergo an <strong>initial editorial assessment</strong>,
                which may take up to 4 weeks. If found to be within the journal's scope and adhering to a
                certain standard, it will then undergo a rigorous <strong>double-blind peer-review process</strong>,
                which may take up to 3 months.
              </p>
              <p style={{ marginTop: '0.85rem' }}>
                If a revision is requested, the second review process will take up to a month from the date
                of resubmission. Authors are expected to submit original work, acknowledge all sources
                appropriately, disclose any conflicts of interest, and adhere to accepted ethical standards
                in research and scholarly publishing.
              </p>
              <p style={{ marginTop: '0.85rem' }}>
                Authors who believe a significant procedural error occurred during peer review may submit a
                written appeal to the Editor-in-Chief. Appeals should clearly explain the grounds for
                reconsideration. Editorial decisions based solely on scholarly judgment are generally not
                subject to appeal.
              </p>
            </div>

            {/* ── Journal Particulars Table (ISSN India guideline requirement) ── */}
            <div style={{ marginTop: '4rem', marginBottom: '3rem' }}>
              <h3 className="about-block-title" style={{ marginBottom: '1.25rem' }}>Journal Particulars</h3>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                border: '1.5px solid var(--border-subtle)',
                borderRadius: 'var(--border-radius)',
                overflow: 'hidden'
              }}>
                <tbody>
                  {[
                    { label: 'Title', value: 'Studies in Indo-Semitic Christianity (SISC)' },
                    { label: 'Frequency', value: '2 Issues per Year' },
                    { label: 'ISSN (Print)', value: 'XXXX-XXXX' },
                    { label: 'E-ISSN (Online)', value: 'XXXX-XXXX' },
                    { label: 'Publisher Name', value: 'SISC Research Group' },
                    { label: 'Starting Year', value: '2026' },
                    { label: 'Subject', value: 'History, Culture, Theology & Philosophical Foundations of Indo-Semitic Christianity' },
                    { label: 'Language', value: 'English' },
                    { label: 'Publication Format', value: 'Print & Online' },
                    { label: 'Website', value: 'https://jsisc.in' },
                    { label: 'Email', value: 'editor@jsisc.in' },
                    { label: 'Review Policy', value: 'Double-Blind Peer Review' },
                    { label: 'Access Model', value: 'Open Access (No Submission or Publication Charges)' },
                    { label: 'Copyright', value: 'Details communicated upon acceptance' },
                  ].map(({ label, value }, i) => (
                    <tr key={label} style={{ background: i % 2 === 0 ? '#ffffff' : 'var(--bg-surface)' }}>
                      <td style={{
                        padding: '0.7rem 1.25rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        width: '35%',
                        borderBottom: '1px solid var(--border-subtle)',
                        verticalAlign: 'top'
                      }}>{label}</td>
                      <td style={{
                        padding: '0.7rem 1.25rem',
                        borderBottom: '1px solid var(--border-subtle)'
                      }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="transparency-grid" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div className="transparency-item">
                <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Ownership &amp; Management</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  SISC Journal is owned and managed by the <strong>SISC Research Group</strong>, 
                  an independent academic collective dedicated to advancing scholarship on Indo-Semitic Christianity.
                </p>
              </div>
              <div className="transparency-item">
                <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Publishing Schedule</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  We publish <strong>2 issues per year</strong>, with occasional special issues 
                  dedicated to specific themes in Indo-Semitic Christianity.
                </p>
              </div>
              <div className="transparency-item">
                <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>No Publication Charges</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  There are <strong>no submission or publication charges</strong> associated with this journal.
                  All content is freely available to readers without charge.
                </p>
              </div>
              <div className="transparency-item">
                <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Identification</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  <strong>ISSN (Print):</strong> XXXX-XXXX<br />
                  <strong>E-ISSN (Online):</strong> XXXX-XXXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
