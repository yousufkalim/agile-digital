// Init
import React from "react";

// Importing Components
import NavBar from "../components/Common/NavBar";
import Header from "../components/Common/Header";
import HeaderImg from "../assets/images/ProjectHeaderImg.svg";
import LabTabs from "../components/Common/OurProjectTabs";
import Footer from "../components/Common/Footer";

// Home Component
export default function OurProjects() {
  return (
    <div className="ProjectsContainer">

      <NavBar />
      <Header
        Title="ALL PROJECTS START BY A SIMPLE IDEA LET US TAKE CARE OF THE REST!"
        Description="Software house with a team of experienced developers and project managers"
        ImgSrc={HeaderImg}
      />
      <LabTabs />
      <Footer />
    </div>
  );
}
