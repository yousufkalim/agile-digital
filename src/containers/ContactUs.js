// Init
import React from "react";

// Importing Components
import NavBar from "../components/Common/NavBar";

import ContactUsSection from "../components/Common/ContactUsSection";
import Footer from "../components/Common/Footer";
// Home Component
export default function ContactUs() {
  return (
    <>
      <NavBar ContactUs />
      <ContactUsSection ContactUs />
      <Footer />
    </>
  );
}
