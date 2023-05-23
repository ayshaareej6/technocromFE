import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MainContext } from "../../context";
import PostJobApp from "../PostJobApp";
import SingleJob from "./SingleJob";

const JobList = () => {
  const context = useContext(MainContext);

  const [viewPopup, setViewPopup] = useState(false);
  const [jobData, setJobData] = useState();

  const applyPopupHandeler = (e, item) => {
    e.preventDefault();
    if (context.state.LoginedIn) {
      setJobData(item);
      setViewPopup(true);
    } else {
      context.setLoginPopup(true);
    }
  };

  return (
    <>
      <PostJobApp visibility={viewPopup} setVisiblity={setViewPopup} data={jobData}/>
      <section className="section-padding grey-section">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-heading text-center">
                <h2>Current Opening</h2>
                <p>
                  We are always in seek of qualified and experienced resources,
                  in case there is no relevant vacancy listed for you. Feel free
                  to send us your resume at hr@technorcrom.com for future
                  recruitment.
                </p>
                <p>
                  <i>
                    TIP: Always mention the job title in the subject to appear
                    in the quick search/screening process.
                  </i>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <SingleJob applyPopupHandeler={applyPopupHandeler} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default JobList;
