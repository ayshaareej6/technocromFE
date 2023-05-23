import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HTMLReactParser from "html-react-parser";
import AxiosInstance from "../../helper/AxiosInstance";

const SingleCaseStudy = () => {
  const [singleCaseStudyData, setSingleCaseStudyData] = useState([]);

  useEffect(() => {
    AxiosInstance.get("public/case-study/list").then(
      (res) => {
        setSingleCaseStudyData(res.data.data ? res.data.data : []);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <>
      {singleCaseStudyData.length
        ? singleCaseStudyData.map((item, index) => (
            <Col lg={4} key={index}>
              <div className="single-blogs-area">
                {item.image ? (
                  <img src={item.image} alt="Case Study" />
                ) : (
                  <img
                    src={require("../../assets/images/keyService/3.jpg")}
                    alt="Case Study"
                  />
                )}

                <div className="blog-detail">
                  <h3>{item.title}</h3>

                  <div className="text-holder">
                    {HTMLReactParser(item.desc)}
                  </div>
                  <Link to={"./" + item.id} postdata={item}>
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            </Col>
          ))
        : null}
    </>
  );
};

export default SingleCaseStudy;
