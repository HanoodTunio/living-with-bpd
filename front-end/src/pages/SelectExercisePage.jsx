import React from "react";
import { Box } from "@mui/material";
import ExerciseCard from "../components/common/ExerciseCard/ExerciseCard";
import ExHero from "../components/common/ExHero/ExHero";
import ParagraphNavLink from "../components/common/ParagraphNavLink/ParagraphNavLink";
import exImage from "../assets/images/ex.png";
import startImage from "../assets/images/start.png"; // Import the Start Here image
import Paragraph from "../components/common/Paragraph/Paragraph";

const SelectExercisePage = () => {
  const totalCards = 10;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "16px", md: "32px" },
        padding: { xs: "16px", md: "32px" },
        width: "100%",
        boxSizing: "border-box", // Ensure padding is included in width calculations
        overflowX: "hidden", // Prevent horizontal overflow
      }}
    >
      {/* Hero Section */}
      <ExHero />

      {/* Exercise Cards Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "24px", md: "40px" },
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          boxSizing: "border-box", // Ensure padding is included in width calculations
        }}
      >
        {/* First Row: 3 Cards with Start Here Image */}
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" }, // Allow wrapping on smaller screens
            justifyContent: { xs: "flex-start", md: "center" },
            alignItems: "center",
            gap: "24px",
            width: "100%",
            boxSizing: "border-box", // Ensure padding is included in width calculations
          }}
        >
          {/* Start Here Image */}
          <Box
            component="img"
            src={startImage}
            alt="Start Here"
            sx={{
              width: { xs: "150px", md: "230px" },
              height: "auto",
              flexShrink: 0, // Prevent shrinking of the image
              marginRight: { xs: "8px", md: "16px" },
            }}
          />

          {/* Render 3 Cards in the First Row */}
          {Array.from({ length: 3 }).map((_, index) => (
            <ExerciseCard
              key={`first-row-card-${index}`}
              exerciseTitle={`Exercise M${index + 1}`}
              exerciseImage={exImage}
              exerciseName={`Exercise M${index + 1}`}
              exerciseDescription="Start developing your mindfulness skills by observing a single object."
            />
          ))}
        </Box>

        {/* Remaining Rows: Render 4 Cards Per Row */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Wrap cards for multiple rows
            gap: "24px", // Space between cards
            justifyContent: { xs: "flex-start", md: "center" },
            width: "100%",
            boxSizing: "border-box", // Ensure padding is included in width calculations
          }}
        >
          {Array.from({ length: totalCards - 3 }).map((_, index) => (
            <Box
              key={`row-card-${index}`}
              sx={{
                flex: "1 0 calc(25% - 24px)",
                maxWidth: "calc(25% - 24px)",
                minWidth: { xs: "calc(50% - 16px)", md: "calc(25% - 24px)" },
                boxSizing: "border-box", // Include padding and borders in the width calculation
              }}
            >
              <ExerciseCard
                exerciseTitle={`Exercise M${index + 4}`}
                exerciseImage={exImage}
                exerciseName={`Exercise M${index + 4}`}
                exerciseDescription="Start developing your mindfulness skills by observing a single object."
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Navigation Links Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "32px", // Space between links
          marginTop: "24px", // Add spacing above the navigation links
          flexWrap: "wrap", // Wrap links on smaller screens
        }}
      >
        <ParagraphNavLink
          label="What is Mindfulness?"
          href="#what-is-mindfulness"
        />
        <ParagraphNavLink
          label="Why Practice Mindfulness?"
          href="#why-practice-mindfulness"
        />
        <ParagraphNavLink label="How It Works" href="#how-it-works" />
      </Box>

      {/* Paragraph Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1350px", // Keep the paragraph section within the container width
          padding: { xs: "16px", md: "32px" },
          textAlign: "justify",
          boxSizing: "border-box", // Include padding in the width calculation
        }}
      >
        <Box id="what-is-mindfulness">
          <Paragraph
            heading="What is Mindfulness?"
            content="Mindfulness is the foundation skill for DBT. These exercises teach you to observe your thoughts and feelings non-judgmentally, 
            setting the stage for emotion regulation, distress tolerance, and interpersonal effectiveness.
            Mindfulness is a mental state achieved by focusing your awareness on the present moment while calmly 
            acknowledging and accepting your feelings, thoughts, and bodily sensations. Mindfulness is a mental 
            state achieved by focusing your awareness on the present moment Mindfulness is a mental state achieved
            by focusing your awareness on the present moment Mindfulness is a mental state achieved by focusing your "
          />
        </Box>
        <Box id="why-practice-mindfulness">
          <Paragraph
            heading="Why Practice Mindfulness?"
            content="Practicing mindfulness helps you build awareness and focus, promoting mental clarity and 
            emotional stability in everyday life. Mindfulness is a mental state achieved by focusing your awareness on the present moment while calmly 
            acknowledging and accepting your feelings, thoughts, and bodily sensations. Mindfulness is a mental 
            state achieved by focusing your awareness on the present moment Mindfulness is a mental state achieved
            by focusing your awareness on the present moment Mindfulness is a mental state achieved by focusing your "
          />
        </Box>
        <Box id="how-it-works">
          <Paragraph
            heading="How It Works"
            content="Mindfulness is a mental state achieved by focusing your awareness on the present moment, 
            Mindfulness is a mental state achieved by focusing your awareness on the present moment while calmly 
            acknowledging and accepting your feelings, thoughts, and bodily sensations. Mindfulness is a mental 
            state achieved by focusing your awareness on the present moment Mindfulness is a mental state achieved
            by focusing your awareness on the present moment Mindfulness is a mental state achieved by focusing your 
            awareness on the present moment"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SelectExercisePage;
