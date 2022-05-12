// Init
import React from "react";

// Importing Components
import NavBar from "../components/Common/NavBar";
import { Grid, Typography } from "@mui/material";

import ContactUsSection from "../components/Common/ContactUsSection";
import SectionHeader from "../components/Common/SectionHeader";
import Footer from "../components/Common/Footer";
import WhatsappIcon from "../assets/images/whatsapp.svg";
import EmailIcon from "../assets/images/emailIcon.svg";
import CallIcon from "../assets/images/callIcon.svg";
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
