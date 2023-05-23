import React from "react";
import CompanyProfileTwin from "../../components/CompanyProfileTwin";
import InnerBanner from "../../components/InnerBanner";
import LifeAtTechnocrom from "../../components/LifeAtTechnocrom";
import MissionVision from "../../components/MissionVision";
import OurJourney from "../../components/OurJourney";
import WhyTechnocrom from "../../components/WhyTechnocrom";

const Company = () => {
  return (
    <>
      <InnerBanner title="Company"/>
      <CompanyProfileTwin/>
      <OurJourney/>
      <MissionVision/>
      <WhyTechnocrom/>
      <LifeAtTechnocrom/>
    </>
  )
}

export default Company;