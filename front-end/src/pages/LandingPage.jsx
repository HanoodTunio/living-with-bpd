import React from "react";
import MainLayout from "../components/mainlayout/MainLayout"; // Path to your MainLayout component
import Hero from "../components/common/Hero/Hero";
import BlogSection from "../components/Specific/BlogSection/BlogSection";
import EventSection from "../components/Specific/EventSection/EventsSection";
import Divider from "../components/common/CustomDivider/CustomDivider";
import AboutSection from "../components/common/About/AboutSection";
import SupportProjectSection from "../components/common/SupportProjectsSection/SupportProjectsSection";
import TeamSection from "../components/common/TeamSection/TeamSection";
import { Box } from "@mui/material";

const LandingPage = () => {
  return (
    <MainLayout>
      {/* Hero Section (Not Centered) */}
      <Hero />
      <Divider />

      {/* Centered Blog Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <BlogSection />
      </Box>
      <Divider />

      {/* Centered Event Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <EventSection />
      </Box>
      <Divider />
      {/* AboutSection */}
      <Box
        id="about"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <AboutSection />
      </Box>

      <Divider />

      {/* Centered Support Project Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <SupportProjectSection />
      </Box>
      <Divider />

      {/* Team Section (Not Centered) */}
      <Box id="team">
        <TeamSection />
      </Box>
    </MainLayout>
  );
};

export default LandingPage;
