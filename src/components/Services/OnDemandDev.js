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
import OurDevelopers from "../Common/OurDevelopers";
import DeveloperWorkProcess from "../Common/DeveloperWorkProcess";

// Home Component
export default function OnDemandDev() {
  return (
    <div>
      <NavBar />
      <Header
        Title="Skilled Developers for your Projects"
        Description="Are you in need of developers for short of long term tasks ? 
        Our all-inclusive approach will allow you to get the best match !"
        btn
        btnText="More information"
        ImgSrc={DemandDevImg}
      />
      <OurDevelopers />
      <DeveloperWorkProcess />
      <ServiceFrame src={DemandDevFrame} />
      <LatestProjects />
      <Footer />
    </div>
  );
}
