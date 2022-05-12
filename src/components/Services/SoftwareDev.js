// Init
import React from "react";

// Importing Components
import NavBar from "../Common/NavBar";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import SoftwareDevImg from "../../assets/images/softwaredevImg.svg";
import SoftDevFrame from "../../assets/images/softdevframe.svg";
import ServiceFrame from "../Common/ServiceFrame";
import LatestProjects from "../Common/LatestProjects";
import WorkProcessSection from "../Common/WorkProcessSection";
import KeyFeatureSection from "../Common/KeyFeatureSection";

// Home Component
export default function SoftwareDev() {
  return (
    <div>
      <NavBar />
      <Header
        Title="SoftWare DEVELOPMENT "
        Description="We are ready to handle your ambitious projects!"
        btn
        btnText="Get This Service"
        ImgSrc={SoftwareDevImg}
      />
      <KeyFeatureSection />
      <WorkProcessSection />
      <ServiceFrame src={SoftDevFrame} />
      <LatestProjects />
      <Footer />
    </div>
  );
}
