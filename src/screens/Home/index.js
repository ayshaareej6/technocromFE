import React from "react";
import SimpleAbout from "../../components/AboutScroller/SimpleAbout";
// import AboutScroller from "../../components/AboutScroller";
import CaseStudy from "../../components/CaseStudy";
import HomeBanner from "../../components/Home/HomeBanner";
// import LetsWorkTogether from "../../components/Home/LetsWorkTogether";
// import OurGoal from "../../components/Home/OurGoal";
import SimpleGoal from "../../components/Home/SimpleGoal";
import KeyServices from "../../components/KeyServices";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <CaseStudy />
      {/* <AboutScroller /> */}
      <SimpleAbout />
      <KeyServices />
      <SimpleGoal />
      {/* <OurGoal /> */}
      {/* <LetsWorkTogether/> */}
    </>
  );
};

export default Home;
