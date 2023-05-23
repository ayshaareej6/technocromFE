import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InnerBanner from "../../components/InnerBanner";

const TermsCondition = () => {
  return (
    <>
      <InnerBanner title="Terms & Conditions" />
      <section className="section-padding">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={12}>
              <div className="section-heading">
                <p>
                  The following terms and conditions of use apply to the use of
                  this Website (the “Website”). Read these terms and conditions
                  carefully before using the Website with or without logging in
                  or downloading content from the site. By accessing or using
                  the Website, you are accepting and agreeing to the terms
                  below. If a part of this user agreement is or ever becomes
                  illegal, the rest of the agreement will remain enforced.{" "}
                </p>
                <h2>License</h2>
                <p>
                  Subject to the terms and conditions herein, Technocrom hereby
                  grants you a limited, nontransferable and nonexclusive
                  license, subject to the restrictions set forth below, to
                  access and use the Website, solely for informational and
                  non-commercial purposes, for internal use and/or for the
                  purpose of using, managing and supporting Technocrom services
                  and applications owned or controlled by you (the “License”).
                  Technocrom reserves the right to amend the terms of this
                  License from time to time without notice, by posting the
                  revised terms on the Website.
                </p>
                <h2>Copying and Reverse Engineering</h2>
                <p>
                  You agree that you will not: (i) copy, modify, create any
                  derivative work of; or (ii) reverse assemble, decompile,
                  reverse engineer or otherwise attempt to derive source code;
                  or (iii) remove any copyright notices, identification or any
                  other proprietary notices from any of the software,
                  copyrighted content and any proprietary information in this
                  Website.
                </p>
                <h2>Intellectual Property Rights</h2>
                <p>
                  You acknowledge and agree that this License is not intended to
                  convey or transfer to you any intellectual property rights or
                  to grant any licenses in or to any technology or intellectual
                  property or content, other than as expressly provided herein.
                  The content contained in this Website, including, but are not
                  limited to, software, product information, technology
                  information, user guides, white papers, analysis, trade names,
                  graphics, designs, icons, audio or video clips and logos, is
                  Technocrom proprietary information, protected by copyright,
                  trademark, patent and/or other intellectual property rights,
                  under US and international law. Third-party trademarks and
                  information are the property of their respective owners.
                </p>
                <h2>Disclaimer of Warranty</h2>
                <p>
                  Although Technocrom attempts to provide accurate and
                  up-to-date information on this Website, Technocrom makes no
                  warranty with respect to the accuracy or completeness of the
                  information on the Website. Information, software and
                  documentation provided on this Website are provided “as is”
                  and without warranty of any kind either expressed or implied,
                  including, but not limited to, the implied warranties of
                  merchantability and fitness for a particular purpose and
                  non-infringement.
                </p>
                <h2>Links to Third-party Websites</h2>
                <p>
                  This Website may contain links to third-party Websites. Such
                  links are provided for convenience only and Technocrom makes
                  no warranty, nor does it assume any responsibility or
                  liability in connection with the access and use of any other
                  Website.
                </p>
                <h2>Privacy</h2>
                <p>
                  Information submitted by you or collected by us in connection
                  with the use of this Website is subject to our Privacy Policy,
                  the terms of which are incorporated herein by reference.
                </p>
                <h2>Export</h2>
                <p>
                  The information, products or services available on this
                  Website or any part thereof may be subject to export or import
                  controls under the laws and regulations of the United States
                  and/or Israel. You agree to comply with such laws and
                  regulations and agree not to knowingly export, re-export,
                  import or re-import, or transfer products without first
                  obtaining all required government authorizations or licenses.
                </p>
                <p>
                  forward-looking statements include, but are not limited to,
                  general business conditions COPYRIGHT © 2020, Technocrom Ltd.
                  All Rights Reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TermsCondition;
