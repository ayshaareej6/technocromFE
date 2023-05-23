import React from "react";
import InnerBanner from "../../components/InnerBanner";
import ProjectBased from "../../components/ProjectBased";
import Staffing from "../../components/Staffing";
import TwinSection from "../../components/TwinSection";

const Engagement = () => {
  return (
    <>
      <InnerBanner title="How We Work"/>
      <ProjectBased/>
      <TwinSection/>
      <Staffing/>
    </>
  );
};

export default Engagement;
