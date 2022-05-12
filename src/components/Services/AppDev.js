// Init
import React from "react";

// Importing Components
import NavBar from "../Common/NavBar";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import AppDevImg from "../../assets/images/appdevImg.svg";
import AppDevFrame from "../../assets/images/appdevframe.svg";
import ServiceFrame from "../Common/ServiceFrame";
import LatestProjects from "../Common/LatestProjects";
import WorkProcessSection from "../Common/WorkProcessSection";
import KeyFeatureSection from "../Common/KeyFeatureSection";

// Home Component
export default function AppDev() {
  return (
    <div>
      <NavBar />
      <Header
        Title="APP DEVELOPMENT "
        Description="We are ready to handle your ambitious projects!"
        btn
        btnText="Get This Service"
        ImgSrc={AppDevImg}
        ImgWidth="75%"
      />
      <KeyFeatureSection />
      <WorkProcessSection />
      <ServiceFrame src={AppDevFrame} />
      <LatestProjects />
      <Footer />
    </div>
  );
}
