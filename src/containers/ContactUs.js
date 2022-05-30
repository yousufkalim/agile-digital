// Init
import React from "react";

// Importing Components
import NavBar from "../components/Common/NavBar";

import ContactUsSection from "../components/Common/ContactUsSection";
import LocationSection from "../components/Common/LocationSection";
import Footer from "../components/Common/Footer";
// Home Component
export default function ContactUs() {
  return (
    <div className="ContactContainer">

      <NavBar ContactUs />
      <ContactUsSection ContactUs />
      <LocationSection />
      <Footer />
    </div>
  );
}
