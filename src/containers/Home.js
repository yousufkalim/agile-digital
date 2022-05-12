// Init
import React from "react";

// Importing Components
import Header from "../components/Common/Header";
import NavBar from "../components/Common/NavBar";
import ServiceProvided from "../components/Common/ServiceProvided";
import LatestProjects from "../components/Common/LatestProjects";
import AboutSection from "../components/Common/AboutSection";
import ClientSection from "../components/Common/ClientSection";
import ContactUsSection from "../components/Common/ContactUsSection";
import Footer from "../components/Common/Footer";
import BlogSection from "../components/Common/BlogSection";
import ReviewSection from "../components/Common/ReviewsSection";
// Home Component
export default function Home() {
  return (
    <div>
      <NavBar />
      <Header
        Title="WE PROVIDE GREAT SERVICES AT THE BEST PRICE."
        Description="Software house with a team of experienced developers and project
        managers. We provide lump-sum services, or based on hours. In either
        cases, you will receive a qualitative service for the best price!"
        btn
        btnText="GET A FREE QUOTE"
        chatIcons
      />
      <ServiceProvided />
      <LatestProjects ProjectsSummary />
      <AboutSection />
      <ClientSection />
      <ReviewSection />
      <BlogSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}
