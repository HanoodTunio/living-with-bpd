import React from "react";
import { Box, Typography } from "@mui/material";
import ExerciseCard from "../../components/common/ExerciseCard/ExerciseCard";
import ExHero from "../../components/common/ExHero/ExHero"; // Reusable ExHero Component
import Exhero from "../../assets/images/skills.png"; // Updated Hero Image (skills.png)
import ParagraphNavLink from "../../components/common/ParagraphNavLink/ParagraphNavLink";
import exImage from "../../assets/images/ex.png"; // Exercise image
import Paragraph from "../../components/common/Paragraph/Paragraph"; // Paragraph component
import UserLayout from "../../components/mainlayout/UserLayout"; // Import UserLayout

const InterpersonalExercisesPage = () => {
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
          heading="Interpersonal Effectiveness Techniques"
          subHeading="DBT Skills for Building Healthy Relationships"
          description="These exercises are designed to help you improve your relationships, assert your needs, and maintain self-respect in difficult situations. Learn key interpersonal skills to build stronger connections."
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
                  exerciseTitle={`Interpersonal Effectiveness ${index + 1}`}
                  exerciseImage={exImage}
                  exerciseName={`Skill ${index + 1}`} // Update names for interpersonal effectiveness skills
                  exerciseDescription="Learn valuable skills to assert your needs, maintain self-respect, and manage interpersonal conflict in a healthy way."
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
            label="What is Interpersonal Effectiveness?"
            href="#what-is-interpersonal-effectiveness"
          />
          <ParagraphNavLink
            label="Why Practice Interpersonal Effectiveness?"
            href="#why-practice-interpersonal-effectiveness"
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
          <Box id="what-is-interpersonal-effectiveness">
            <Paragraph
              heading="What is Interpersonal Effectiveness?"
              content="Interpersonal Effectiveness refers to the ability to communicate assertively, build healthy relationships, and handle conflict in a constructive manner. It involves maintaining self-respect while also respecting others' needs."
            />
          </Box>
          <Box id="why-practice-interpersonal-effectiveness">
            <Paragraph
              heading="Why Practice Interpersonal Effectiveness?"
              content="Interpersonal effectiveness skills are essential for building trust, creating strong connections, and resolving conflicts in healthy ways. They help you navigate social dynamics without compromising your values or needs."
            />
          </Box>
          <Box id="how-it-works">
            <Paragraph
              heading="How It Works"
              content="Interpersonal effectiveness techniques, like the 'DEAR MAN' (Describe, Express, Assert, Reinforce, Mindful, Appear Confident, Negotiate) and 'FAST' (Fair, Apologies, Stick to values, Truthful) skills, help you handle difficult conversations and strengthen relationships."
            />
          </Box>
        </Box>
      </Box>
    </UserLayout>
  );
};

export default InterpersonalExercisesPage;
