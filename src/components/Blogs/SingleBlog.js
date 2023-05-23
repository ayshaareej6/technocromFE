import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AxiosInstance from "../../helper/AxiosInstance";
import HTMLReactParser from "html-react-parser";

const SingleBlog = () => {
  const [BlogData, setBlogData] = useState([]);

  useEffect(() => {
    AxiosInstance.get("public/blog/list").then(
      (res) => {
        setBlogData(res.data.data ? res.data.data : []);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <>
      {BlogData.length
        ? BlogData.map((item) => (
            <Col lg={4} key={item.id}>
              <div className="single-blogs-area">
                <img src={item.image} alt="Blog" />
                <div className="blog-detail">
                  <h3>{item.title}</h3>
                  <div className="text-holder">
                    {HTMLReactParser(item.desc)}
                  </div>
                  <Link to={"./" + item.slug} postdata={item}>
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

export default SingleBlog;
