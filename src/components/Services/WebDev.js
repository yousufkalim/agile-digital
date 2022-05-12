// Init
import React from "react";

// Importing Components
import NavBar from "../Common/NavBar";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import ServiceFrame from "../Common/ServiceFrame";
import LatestProjects from "../Common/LatestProjects";
import WebDevImg from "../../assets/images/webdevImg.svg";
import WorkProcessSection from "../Common/WorkProcessSection";
import KeyFeatureSection from "../Common/KeyFeatureSection";
// Home Component
export default function WebDev() {
  return (
    <div>
      <NavBar />
      <Header
        Title="WEB DEVELOPMENT "
        Description="We are ready to handle your ambitious projects!"
        btn
        btnText="Get This Service"
        ImgSrc={WebDevImg}
      />
      <KeyFeatureSection />
      <WorkProcessSection />
      <ServiceFrame />
      <LatestProjects />

      <Footer />
    </div>
  );
}
