import React from "react";
import { Box, Typography } from "@mui/material";
import ExerciseCard from "../../components/common/ExerciseCard/ExerciseCard";
import ExHero from "../../components/common/ExHero/ExHero"; // Reusable ExHero Component
import ParagraphNavLink from "../../components/common/ParagraphNavLink/ParagraphNavLink";
import exImage from "../../assets/images/ex.png"; // Exercise image
import startImage from "../../assets/images/start.png"; // Start Here image
import Exhero from "../../assets/images/ExHero.png";
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
          {/* First Row: 3 Cards with Start Here Image */}
          <Box
            sx={{
              display: "flex",
              flexWrap: { xs: "wrap", md: "nowrap" },
              justifyContent: { xs: "flex-start", md: "center" },
              alignItems: "center",
              gap: "24px",
              width: "100%",
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
                flexShrink: 0,
                marginRight: { xs: "8px", md: "16px" },
              }}
            />

            {/* Render 3 Cards in the First Row */}
            {Array.from({ length: 3 }).map((_, index) => (
              <ExerciseCard
                key={`first-row-card-${index}`}
                exerciseTitle={`Exercise M${index + 1}`} // Change to "M" for Mindfulness exercises
                exerciseImage={exImage}
                exerciseName={`Exercise M${index + 1}`}
                exerciseDescription="Develop mindfulness skills to observe your thoughts non-judgmentally."
              />
            ))}
          </Box>

          {/* Remaining Rows: Render 4 Cards Per Row */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              justifyContent: { xs: "flex-start", md: "center" },
              width: "100%",
            }}
          >
            {Array.from({ length: totalCards - 3 }).map((_, index) => (
              <Box
                key={`row-card-${index}`}
                sx={{
                  flex: "1 0 calc(25% - 24px)",
                  maxWidth: "calc(25% - 24px)",
                  minWidth: { xs: "calc(50% - 16px)", md: "calc(25% - 24px)" },
                }}
              >
                <ExerciseCard
                  exerciseTitle={`Exercise M${index + 4}`}
                  exerciseImage={exImage}
                  exerciseName={`Exercise M${index + 4}`}
                  exerciseDescription="Practice mindfulness techniques to enhance your emotional awareness."
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
