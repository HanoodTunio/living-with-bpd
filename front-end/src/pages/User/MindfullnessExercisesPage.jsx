import React from "react";
import { Box, Typography } from "@mui/material";
import ExerciseCard from "../../components/common/ExerciseCard/ExerciseCard";
import ExHero from "../../components/common/ExHero/ExHero"; // Reusable ExHero Component
import Exhero from "../../assets/images/ExHero.png";
import ParagraphNavLink from "../../components/common/ParagraphNavLink/ParagraphNavLink";
import exImage from "../../assets/images/ex.png"; // Exercise image
import Paragraph from "../../components/common/Paragraph/Paragraph"; // Paragraph component
import UserLayout from "../../components/mainlayout/UserLayout"; // Import UserLayout

const MindfullnessExercisePage = () => {
  const totalCards = 10;

  return (
    <UserLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "16px", md: "32px" },
          padding: { xs: "16px", md: "32px" },
          width: "100%",
          boxSizing: "border-box",
          overflowX: "hidden", // Prevent horizontal overflow
        }}
      >
        {/* Hero Section - Using Reusable ExHero Component */}
        <ExHero
          heroImage={Exhero}
          heading="Mindfulness Techniques"
          subHeading="DBT Mindfulness Exercises"
          description="These mindfulness exercises will help you observe your thoughts non-judgmentally and practice staying grounded in the present moment."
        />

        {/* Exercise Cards Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "24px", md: "40px" },
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Exercise Cards: Render 4 cards per row on large/medium screens, 2 cards per row on mobile */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {Array.from({ length: totalCards }).map((_, index) => (
              <Box
                key={`card-${index}`}
                sx={{
                  flex: "1 0 calc(25% - 24px)", // 4 cards per row on large screens
                  maxWidth: "calc(25% - 24px)", // 4 cards per row
                  minWidth: { xs: "calc(50% - 16px)", md: "calc(25% - 24px)" }, // 2 cards per row on mobile (xs)
                }}
              >
                <ExerciseCard
                  exerciseTitle={`Exercise M${index + 1}`}
                  exerciseImage={exImage}
                  exerciseName={`Exercise M${index + 1}`}
                  exerciseDescription="Develop mindfulness skills to observe your thoughts non-judgmentally."
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
            gap: "32px",
            marginTop: "24px",
            flexWrap: "wrap",
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
            maxWidth: "1350px",
            padding: { xs: "16px", md: "32px" },
            textAlign: "justify",
          }}
        >
          <Box id="what-is-mindfulness">
            <Paragraph
              heading="What is Mindfulness?"
              content="Mindfulness is the practice of being aware of the present moment, noticing thoughts and feelings without judgment. It helps cultivate awareness and reduce stress."
            />
          </Box>
          <Box id="why-practice-mindfulness">
            <Paragraph
              heading="Why Practice Mindfulness?"
              content="Practicing mindfulness improves focus, reduces stress, and promotes emotional well-being by helping you become more present and engaged in your daily life."
            />
          </Box>
          <Box id="how-it-works">
            <Paragraph
              heading="How It Works"
              content="Mindfulness involves paying attention to the present moment, practicing non-judgmental awareness of thoughts and feelings. Techniques like meditation, breathing, and body scan are common."
            />
          </Box>
        </Box>
      </Box>
    </UserLayout>
  );
};

export default MindfullnessExercisePage;
