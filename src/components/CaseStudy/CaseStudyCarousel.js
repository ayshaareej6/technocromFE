import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import CaseStudyData from "./CaseStudyData";

const CaseStudyCarousel = ({handleSelected}) => {
  const navText = ['<div class="scrollDownBtn"></div>','<div class="scrollDownBtn"></div>'];
  return (
    <>
      <OwlCarousel items={1} loop margin={50} navText={navText} nav onChanged={(e) => handleSelected(e)}>
        {CaseStudyData.map((item) => (
          <div className="item" key={item.key}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </OwlCarousel>
    </>
  );
};

export default CaseStudyCarousel;
