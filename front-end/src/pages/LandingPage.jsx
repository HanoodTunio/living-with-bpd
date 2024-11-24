// src/pages/Home.jsx
import React from "react";
import Header from "../components/mainlayout/Header/Header";
import Hero from "../components/common/Hero/Hero";
import BlogSection from "../components/Specific/BlogSection/BlogSection.jsx";
import EventSection from "../components/Specific/EventSection/EventsSection.jsx";
import Divider from "../components/common/CustomDivider/CustomDivider";
import AboutSection from "../components/common/About/AboutSection";
import SupportProjectSection from "../components/common/SupportProjectsSection/SupportProjectsSection";
import TeamSection from "../components/common/TeamSection/TeamSection";
import Footer from "../components/mainlayout/Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Divider />
      <BlogSection />
      <Divider />
      <EventSection />
      <Divider />
      <AboutSection />
      <Divider />
      <SupportProjectSection />
      <Divider />
      <TeamSection />
      <Divider />
      <Footer />
    </>
  );
};

export default LandingPage;
