import React from 'react';
import { useSEO } from '../useSEO';

export default function EthicsPage() {
  useSEO({
    title: 'Publication Ethics & Policies',
    description:
      'SISC Journal publication ethics, peer-review standards, COPE compliance, open-access licensing, archiving policy, and authorship guidelines. No APCs charged.',
    keywords:
      'publication ethics, COPE guidelines, open access license, double blind peer review, SISC journal policy, no APC, CC BY 4.0',
    canonical: '/ethics',
  });

  return (
    <>
      <div className="page-banner">
        <div className="container">
          <div className="section-eyebrow">Governance & Standards</div>
          <h1 className="page-banner-title">Publication Ethics & Policies</h1>
          <p className="page-banner-sub">
            SISC Journal adheres to the highest standards of transparency and best practices 
            in scholarly publishing as defined by COPE, DOAJ, and OASPA.
          </p>
        </div>
      </div>

      <section className="about-section" style={{ borderTop: 'none' }}>
        <div className="about-inner">
          <div className="about-body">
            <div className="about-text-block">
              <h3 className="about-block-title">1. Peer Review Process</h3>
              <p>
                All research articles published in SISC Journal undergo a rigorous <strong>double-blind peer review</strong> process.
                Manuscripts are first screened by the editorial office for scope fit and a minimum quality
                threshold — this initial editorial assessment may take up to 4 weeks.
              </p>
              <p>
                Papers that pass the initial assessment are then sent to independent expert reviewers. The
                full peer review process may take up to 3 months. If a revision is requested, the second
                review will take up to one month from the date of resubmission. The identities of both
                authors and reviewers remain anonymous throughout the process.
              </p>
              <p>
                Authors who believe a significant procedural error occurred during peer review may submit
                a written appeal to the Editor-in-Chief. Appeals should clearly explain the grounds for
                reconsideration. Editorial decisions based solely on scholarly judgment are generally not
                subject to appeal.
              </p>
            </div>

            <div className="about-text-block">
              <h3 className="about-block-title">2. Publication Ethics</h3>
              <p>
                SISC Journal is committed to ensuring the integrity of the scholarly record. We follow the 
                COPE (Committee on Publication Ethics) guidelines on how to handle potential acts of misconduct.
              </p>
              <ul className="policy-list">
                <li><strong>Authorship:</strong> Authors must have made substantial contributions to the work.</li>
                <li><strong>Conflicts of Interest:</strong> All authors must disclose any financial or personal relationships that might bias their work.</li>
                <li><strong>Misconduct:</strong> Plagiarism, data fabrication, and redundant publication are strictly prohibited.</li>
                <li><strong>Corrections & Retractions:</strong> We publish corrections, clarifications, and retractions when necessary, following COPE standards.</li>
              </ul>
            </div>

            <div className="about-text-block">
              <h3 className="about-block-title">3. Copyright &amp; Licensing</h3>
              <p>
                If a paper is selected for publication, the journal will contact the author with copyright
                and licensing details <strong>before proceeding further</strong>. Authors are encouraged
                to disclose any prior copyright obligations when submitting their manuscript.
              </p>
              <p>
                Authors must ensure that their submitted work is original, that all sources are
                appropriately acknowledged, and that all applicable copyright permissions have been
                obtained and documented.
              </p>
            </div>

            <div className="about-text-block">
              <h3 className="about-block-title">4. Archiving & Preservation</h3>
              <p>
                SISC Journal is committed to ensuring the long-term digital preservation and accessibility
                of all published scholarship. We intend to apply for archiving in recognised preservation
                programmes — including the <strong>Keepers Registry</strong> and other ISSN-recognised digital
                preservation schemes — following the confirmation of our ISSN registration and the publication
                of our inaugural issue.
              </p>
            </div>

            <div className="about-text-block">
              <h3 className="about-block-title">5. Processing &amp; Publication Charges</h3>
              <p>
                There are <strong>no submission or publication charges</strong> associated with this journal.
                Authors are not required to pay any fees at any stage of the submission or publication
                process. The journal is committed to ensuring that quality research can be published
                without financial barriers.
              </p>
            </div>

            <div className="about-text-block">
              <h3 className="about-block-title">6. Advertising & Revenue</h3>
              <p>
                Our editorial decisions are not influenced by revenue sources or advertising. 
                SISC Journal does not accept commercial advertising on its platform. 
                Funding is derived solely from institutional support and voluntary donations 
                from the academic community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
