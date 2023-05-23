import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ProjectBased = () => {
  return (
    <>
      <section className="section-padding" id="project-based">
        <Container>
          <Row>
            <Col md={12}>
              <div className="section-heading text-center">
                <h2>Project Based</h2>
                <p className="full-width text-left">
                  Project-based working is a popular model for many companies
                  and organizations, as it allows them to bring in specialized
                  talent for specific projects or assignments, rather than
                  hiring full-time employees. This can be an efficient and
                  cost-effective way to manage resources and achieve specific
                  goals.
                </p>
                <p className="full-width text-left">
                  One of the biggest advantages of project-based working is the
                  flexibility it provides. Companies can hire employees on a
                  project-by-project basis, which means they only pay for the
                  resources they need when they need them. This can be
                  especially useful for companies that experience fluctuations
                  in workload, as they can easily scale up or down their
                  workforce as needed.
                </p>
                <p className="full-width text-left">
                  Another advantage of project-based working is the ability to
                  bring in specialized talent. Often, companies will need
                  employees with specific skills or experience for a particular
                  project. By hiring employees on a project-by-project basis,
                  companies can find the right people with the right skills,
                  rather than having to rely on full-time employees who may not
                  have the necessary expertise.
                </p>
                <p className="full-width text-left">
                  Project-based working can also be beneficial for employees, as
                  it allows them to gain a diverse range of experience and work
                  on a variety of projects. This can be particularly attractive
                  for individuals who enjoy working on different types of
                  projects and don’t want to be tied down to one company or
                  role.
                </p>
                <p className="full-width text-left">
                  However, project-based working can also have its downsides.
                  One of the biggest challenges is the lack of job security that
                  it can provide, as employees are not guaranteed ongoing work.
                  Project-based workers may also lack access to the same
                  benefits and perks that full-time employees receive, such as
                  health insurance and retirement plans.
                </p>
                <p className="full-width text-left">
                  Overall, project-based working can be a great model for
                  companies and employees alike. It allows for flexibility,
                  access to specialized talent, and the opportunity to gain a
                  diverse range of experience. However, it's important for both
                  companies and employees to be aware of the potential downsides
                  and plan accordingly.
                </p>
              </div>
            </Col>
            <Col lg={12}>
              <img
                src={require("../../assets/images/engagement/project-based.jpg")}
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProjectBased;
