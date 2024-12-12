import React from "react";
import { Box, Typography } from "@mui/material";
import ExerciseCard from "../../components/common/ExerciseCard/ExerciseCard";
import ExHero from "../../components/common/ExHero/ExHero"; // Reusable ExHero Component
import Exhero from "../../assets/images/distressEx.png"; // Hero Image
import ParagraphNavLink from "../../components/common/ParagraphNavLink/ParagraphNavLink";
import exImage from "../../assets/images/ex.png"; // Exercise image
import Paragraph from "../../components/common/Paragraph/Paragraph"; // Paragraph component
import UserLayout from "../../components/mainlayout/UserLayout"; // Import UserLayout

const ToleranceExercisesPage = () => {
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
          heading="Distress Tolerance Techniques"
          subHeading="DBT Skills for Managing Difficult Emotions"
          description="These exercises are designed to help you manage overwhelming emotions and find calm in moments of distress. Learn skills to survive the storm of intense emotions without making things worse."
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
                  exerciseTitle={`Distress Tolerance ${index + 1}`}
                  exerciseImage={exImage}
                  exerciseName={`Skill ${index + 1}`} // Update names for distress tolerance skills
                  exerciseDescription="Learn to use effective skills that help you survive difficult situations without making them worse."
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
            label="What is Distress Tolerance?"
            href="#what-is-distress-tolerance"
          />
          <ParagraphNavLink
            label="Why Practice Distress Tolerance?"
            href="#why-practice-distress-tolerance"
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
          <Box id="what-is-distress-tolerance">
            <Paragraph
              heading="What is Distress Tolerance?"
              content="Distress Tolerance refers to the ability to manage overwhelming emotions in healthy ways. It involves using skills that help you survive in the moment without resorting to harmful behaviors. These skills are crucial for handling emotional crises and reducing emotional reactivity."
            />
          </Box>
          <Box id="why-practice-distress-tolerance">
            <Paragraph
              heading="Why Practice Distress Tolerance?"
              content="Practicing distress tolerance is essential for emotional regulation. It allows you to endure difficult emotions without acting impulsively or destructively. DBT teaches these skills to reduce self-harm, improve interpersonal relationships, and build resilience to stress."
            />
          </Box>
          <Box id="how-it-works">
            <Paragraph
              heading="How It Works"
              content="Distress tolerance skills work by helping you stay grounded in the present moment. Techniques like 'TIPP' (Temperature, Intense Exercise, Paced Breathing, Progressive Relaxation), Self-Soothing, and Distraction teach you how to cope without making the situation worse."
            />
          </Box>
        </Box>
      </Box>
    </UserLayout>
  );
};

export default ToleranceExercisesPage;
