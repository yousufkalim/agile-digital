// Init
import React from "react";

// Importing Components
import Header from "../components/Common/Header";
import NavBar from "../components/Common/NavBar";
import Footer from "../components/Common/Footer";
import AboutCompany from "../components/About/AboutCompany";
import VisionSection from "../components/About/VisionSection";
import ModernAgencySection from "../components/About/ModernAgencySection";
import Header_Img from "../assets/images/HeaderImg.svg";
// Home Component
export default function About() {
  return (
    <div className="AboutContainer">

      <NavBar />
      <Header
        Title="Our Goal Is To Exceed Your Expectations "
        Description="Healthy, skilled and ambitious team"
        ImgSrc={Header_Img}
      />
      <AboutCompany />
      <ModernAgencySection />
      <VisionSection />
      <Footer />
    </div>
  );
}
