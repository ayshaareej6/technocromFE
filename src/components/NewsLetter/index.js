import React from "react";
import { Col, Row } from "react-bootstrap";

const NewsLetter = () => {
  return (
    <>
      <div className="subscribeArea">
        <Row className="align-items-center">
          <Col md={4}>
            <h3>Subscribe Our Newsletter</h3>
          </Col>
          <Col md={8}>
            <form className="subscribeFrom">
              <input type="email" placeholder="Enter Your Email"/>
              <input type="submit" value="Send"/>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NewsLetter;
