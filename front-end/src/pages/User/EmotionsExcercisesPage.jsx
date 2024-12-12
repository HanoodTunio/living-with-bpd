import React from "react";
import { Box, Typography } from "@mui/material";
import ExerciseCard from "../../components/common/ExerciseCard/ExerciseCard";
import ExHero from "../../components/common/ExHero/ExHero"; // Reusable ExHero Component
import Exhero from "../../assets/images/emotionEx.png"; // Updated Hero Image
import ParagraphNavLink from "../../components/common/ParagraphNavLink/ParagraphNavLink";
import exImage from "../../assets/images/ex.png"; // Exercise image
import Paragraph from "../../components/common/Paragraph/Paragraph"; // Paragraph component
import UserLayout from "../../components/mainlayout/UserLayout"; // Import UserLayout

const EmotionsExercisesPage = () => {
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
          heading="Emotions Regulation Techniques"
          subHeading="DBT Skills for Managing Intense Emotions"
          description="These exercises are designed to help you regulate overwhelming emotions and find balance. Learn skills to navigate emotional intensity without reacting impulsively."
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
          {/* Exercise Cards: Render 4 cards per row on large screens, 3 cards per row on medium, and 2 cards per row on mobile */}
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
                  minWidth: {
                    xs: "calc(50% - 16px)", // 2 cards per row on mobile (xs)
                    sm: "calc(33.33% - 16px)", // 3 cards per row on medium (sm)
                    lg: "calc(25% - 24px)", // 4 cards per row on large (lg)
                  },
                }}
              >
                <ExerciseCard
                  exerciseTitle={`Emotions Regulation ${index + 1}`}
                  exerciseImage={exImage}
                  exerciseName={`Skill ${index + 1}`} // Update names for emotions regulation skills
                  exerciseDescription="Learn effective skills to manage your emotions and create a sense of balance in difficult moments."
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
            label="What is Emotions Regulation?"
            href="#what-is-emotions-regulation"
          />
          <ParagraphNavLink
            label="Why Practice Emotions Regulation?"
            href="#why-practice-emotions-regulation"
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
          <Box id="what-is-emotions-regulation">
            <Paragraph
              heading="What is Emotions Regulation?"
              content="Emotions Regulation refers to the ability to manage and modify intense emotions in a healthy way. It involves using techniques to help you respond to emotional experiences without being overwhelmed or acting impulsively."
            />
          </Box>
          <Box id="why-practice-emotions-regulation">
            <Paragraph
              heading="Why Practice Emotions Regulation?"
              content="Practicing emotions regulation helps in reducing emotional reactivity, preventing impulsive behaviors, and building resilience. It enhances emotional intelligence and fosters better interpersonal relationships."
            />
          </Box>
          <Box id="how-it-works">
            <Paragraph
              heading="How It Works"
              content="Emotions regulation skills help you stay grounded in emotional situations. Techniques like 'Mindfulness', 'Self-Soothing', and 'Cognitive Restructuring' teach you how to respond thoughtfully, rather than react impulsively."
            />
          </Box>
        </Box>
      </Box>
    </UserLayout>
  );
};

export default EmotionsExercisesPage;
