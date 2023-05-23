import HTMLReactParser from "html-react-parser";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import AxiosInstance from "../../helper/AxiosInstance";

const BlogsInner = () => {
  let { postdata } = useParams();

  const [Blog, setBlog] = useState("");
  const [BlogData, setBlogData] = useState([]);

  useEffect(() => {
    AxiosInstance.get("public/blog/" + postdata).then(
      (res) => {
        setBlog(res.data.data);
      },
      (err) => {
        console.log(err);
      }
    );

    AxiosInstance.get("public/blog/list").then(
      (res) => {
        setBlogData(res.data.data ? res.data.data : []);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [postdata]);

  return (
    <>
      <section className="section-padding">
        <Container>
          <Row>
            <Col md={8}>
              <div className="white-area-holder">
                {/* <img src={Blog.image} alt="" className="blog-innerImage" /> */}
                <div className="section-heading">
                  <h2>{Blog.title}</h2>
                  {Blog ? HTMLReactParser(Blog.desc) : null}
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="white-area-holder recent-blog">
                <h3>Recent</h3>
                <ul>
                  {BlogData.length
                    ? BlogData.slice(0, 3).map((item) => {
                        return (
                          <li key={item.id}>
                            <Link to={"/blogs/" + item.slug} postdata={item}>
                              <img src={item.image} alt="Blog" />
                              <div className="blog-list-detail">
                                <h3 title={item.title}>{item.title}</h3>
                                <div className="text-holder">
                                  {HTMLReactParser(item.desc)}
                                </div>
                              </div>
                            </Link>
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogsInner;
