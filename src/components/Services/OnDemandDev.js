// Init
import React from "react";

// Importing Components
import NavBar from "../Common/NavBar";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import DemandDevImg from "../../assets/images/demanddevImg.svg";
import DemandDevFrame from "../../assets/images/demanddevframe.svg";
import ServiceFrame from "../Common/ServiceFrame";
import LatestProjects from "../Common/LatestProjects";
import WorkProcessSection from "../Common/WorkProcessSection";
import KeyFeatureSection from "../Common/KeyFeatureSection";

// Home Component
export default function OnDemandDev() {
  return (
    <div>
      <NavBar />
      <Header
        Title="On Demand Developers"
        Description="We are ready to handle your ambitious projects!"
        btn
        btnText="Get This Service"
        ImgSrc={DemandDevImg}
      />
      <KeyFeatureSection />
      <WorkProcessSection />
      <ServiceFrame src={DemandDevFrame} />
      <LatestProjects />
      <Footer />
    </div>
  );
}
