import React from 'react';

export default function EthicsPage() {
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
                All research articles published in SISC Journal undergo a rigorous double-blind peer review process. 
                Manuscripts are first screened by the editorial office for aims, scope, and basic technical requirements. 
                Suitable papers are then sent to at least two independent expert reviewers.
              </p>
              <p>
                The editors make decisions based on the reviewers' recommendations. The identity of both authors and 
                reviewers remains anonymous throughout the process to ensure objective evaluation.
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
              <h3 className="about-block-title">3. Copyright & Licensing</h3>
              <p>
                SISC Journal is an Open Access journal. Articles are published under the 
                <strong> Creative Commons Attribution 4.0 International (CC BY 4.0)</strong> license.
              </p>
              <p>
                Authors retain copyright of their work while granting the journal the right of first publication. 
                This allows others to distribute, remix, and build upon the work, even commercially, as long as 
                the original authors are credited.
              </p>
            </div>

            <div className="about-text-block">
              <h3 className="about-block-title">4. Archiving & Preservation</h3>
              <p>
                To ensure long-term digital preservation, SISC Journal archives all content in the 
                <strong> Keepers Registry</strong> and <strong>PMC (PubMed Central)</strong> where applicable. 
                We are committed to the permanent availability and accessibility of scholarly research.
              </p>
            </div>

            <div className="about-text-block">
              <h3 className="about-block-title">5. Author Fees & Waivers</h3>
              <p>
                SISC Journal currently <strong>does not charge any Article Processing Charges (APCs)</strong> 
                or submission fees. We are supported by institutional grants and the SISC Research Group 
                to ensure that high-quality research is accessible without financial barriers to authors.
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
