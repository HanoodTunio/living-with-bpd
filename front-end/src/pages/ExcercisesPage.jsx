import React from "react";
import { Box, Typography } from "@mui/material";
import ExerciseSectionLinks from "../components/common/ExerciseSectionLinks/ExerciseSectionLinks";
import Paragraph from "../components/common/Paragraph/Paragraph"; // Import the reusable Paragraph component

// Image paths (if required for section links)
import instructionImage from "../assets/images/Instruction.png";
import faqImage from "../assets/images/FAQ.png";
import disclaimerImage from "../assets/images/Disclaimer.png";
import worksheetImage from "../assets/images/Worksheet.png";
import introductionImage from "../assets/images/Introduction.png"; // Added Introduction image

const ExercisesPage = () => {
  // Define the sections (Instruction, Introduction, etc.)
  const sections = [
    { label: "Instruction", icon: instructionImage },
    { label: "Introduction", icon: introductionImage },
    { label: "Worksheet", icon: worksheetImage },
    { label: "FAQ", icon: faqImage },
    { label: "Disclaimer", icon: disclaimerImage },
  ];

  // Define the dynamic paragraphs for each section
  const paragraphs = {
    instruction:
      "Instructions for M1 Observing exercise. Here you can add instructions that guide the user through the exercise.",
    introduction:
      "Introduction content for M1 Observing. This can be an overview of what the exercise aims to achieve.",
    worksheet:
      "Worksheet content for M1 Observing exercise. Here you can include a list of questions or tasks for the user to complete.",
    faq: "Frequently Asked Questions about M1 Observing. Answers to common questions can be listed here.",
    disclaimer:
      "Disclaimer for M1 Observing. Any legal or safety information can go here.",
  };

  return (
    <Box
      sx={{
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // Align content to the start
      }}
    >
      {/* Static Heading for the Exercise */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#00796b",
          marginBottom: "40px",
          textAlign: "left", // Align the heading to the left
        }}
      >
        M1 Observing
      </Typography>
      {/* Section Links for Navigation */}
      <ExerciseSectionLinks sections={sections} />
      {/* Add space below the section links */}
      <Box sx={{ marginBottom: "80px" }} />{" "}
      {/* Space between the links and paragraphs */}
      {/* Exercise Content Sections */}
      <Box sx={{ width: "100%", maxWidth: "1350px", paddingTop: "16px" }}>
        <Box id="instruction">
          <Paragraph heading="Instruction" content={paragraphs.instruction} />
        </Box>

        <Box id="introduction">
          <Paragraph heading="Introduction" content={paragraphs.introduction} />
        </Box>

        <Box id="worksheet">
          <Paragraph heading="Worksheet" content={paragraphs.worksheet} />
        </Box>

        <Box id="faq">
          <Paragraph heading="FAQ" content={paragraphs.faq} />
        </Box>

        <Box id="disclaimer">
          <Paragraph heading="Disclaimer" content={paragraphs.disclaimer} />
        </Box>
      </Box>
    </Box>
  );
};

export default ExercisesPage;
