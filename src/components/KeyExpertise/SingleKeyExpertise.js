import React from "react";
import { Link } from "react-router-dom";

const SingleKeyExpertise = ({items}) => {
  return (
    <>
      <div className="single-service">
        <img src={items.image} alt=""/>
        
        <div className="single-service-detail">
          <Link to={items.link} className="single-service-link">
            Explore More
          </Link>
          <h3>{items.title}</h3>
          <p>{items.desc}</p>
        </div>
      </div>
    </>
  )
}

export default SingleKeyExpertise;