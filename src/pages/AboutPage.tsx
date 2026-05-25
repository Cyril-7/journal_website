import React from 'react';

export default function AboutPage() {
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
                    { label: 'Title', value: 'SISC Journal of Indo-Semitic Studies' },
                    { label: 'Frequency', value: 'Quarterly (4 issues per year)' },
                    { label: 'E-ISSN', value: 'Applied / Pending Registration' },
                    { label: 'Publisher Name', value: 'SISC Research Group' },
                    { label: 'Publisher Address', value: '12/452 Academic Plaza, MG Road, Kottayam, Kerala – 686 001, India' },
                    { label: 'Starting Year', value: '2026' },
                    { label: 'Subject', value: 'Theology, Church History, Liturgical Studies, Comparative Religion' },
                    { label: 'Language', value: 'English' },
                    { label: 'Publication Format', value: 'Online' },
                    { label: 'Website', value: 'https://jsisc.in' },
                    { label: 'Email', value: 'editor@siscpress.org' },
                    { label: 'Review Policy', value: 'Double-Blind Peer Review' },
                    { label: 'Access Model', value: 'Platinum Open Access (No APCs)' },
                    { label: 'License', value: 'Creative Commons Attribution 4.0 International (CC BY 4.0)' },
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
                <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Ownership & Management</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  SISC Journal is owned and managed by the <strong>SISC Research Group</strong>, 
                  an independent academic collective affiliated with the Institute of Syriac Studies.
                </p>
              </div>
              <div className="transparency-item">
                <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Publishing Schedule</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  We publish <strong>quarterly</strong> (4 issues per year), with occasional special issues 
                  dedicated to specific themes in Indo-Semitic Christianity.
                </p>
              </div>
              <div className="transparency-item">
                <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Access Model</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  This is a <strong>Platinum Open Access</strong> journal. All content is freely available 
                  to readers without charge. Authors do not pay any APCs.
                </p>
              </div>
              <div className="transparency-item">
                <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Identification</h4>
                <p style={{ fontSize: '0.9rem' }}>
                  <strong>E-ISSN:</strong> Applied / Pending Registration<br />
                  Registration in progress with ISSN National Centre, India (CSIR-NIScPR).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
