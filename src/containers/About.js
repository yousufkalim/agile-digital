// Init
import React from "react";

// Importing Components
import Header from "../components/Common/Header";
import NavBar from "../components/Common/NavBar";
import Footer from "../components/Common/Footer";
import AboutCompany from "../components/About/AboutCompany";
import VisionSection from "../components/About/VisionSection";
import ModernAgencySection from "../components/About/ModernAgencySection";
// Home Component
export default function About() {
  return (
    <div>
      <NavBar />
      <Header
        Title="Our Goal Is To Exceed Your Expectations "
        Description="Healthy, skilled and ambitious team"
      />
      <AboutCompany />
      <ModernAgencySection />
      <VisionSection />
      <Footer />
    </div>
  );
}
