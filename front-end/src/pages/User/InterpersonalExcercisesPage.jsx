import React from "react";
import { Box } from "@mui/material";
import ExerciseCard from "../../components/common/ExerciseCard/ExerciseCard";
import ExHero from "../../components/common/ExHero/ExHero";
import Exhero from "../../assets/images/skills.png";
import exImage from "../../assets/images/ex.png";
import ParagraphNavLink from "../../components/common/ParagraphNavLink/ParagraphNavLink";
import Paragraph from "../../components/common/Paragraph/Paragraph";
import UserLayout from "../../components/mainlayout/UserLayout";

const InterpersonalExercisesPage = () => {
  const exercises = [
    {
      name: "Communication Styles",
      description:
        "Identify your communication style to be more mindful of how you usually communicate.",
    },
    {
      name: "Skills of Assertiveness, Part 1",
      description:
        "Express your opinions, emotions, and needs clearly, honestly, and respectfully.",
    },
    {
      name: "Skills of Assertiveness, Part 2",
      description:
        "Learn essential assertive skills to help you effectively communicate your needs.",
    },
    {
      name: "Assertiveness Scripts and Interpersonal Rights",
      description:
        "Use templates to think clearly when communicating something important.",
    },
    {
      name: "Listing and Validation",
      description:
        "Discover several aspects of attitude and mindful listening.",
    },
    {
      name: "Barriers to Interpersonal Effectiveness",
      description:
        "Overcome barriers to adopt a healthier way of communicating.",
    },
    {
      name: "Trust in Relationships",
      description: "Learn to build trustworthy and honest relationships.",
    },
    {
      name: "Interpersonal Boundaries",
      description:
        "Become aware of interpersonal boundaries for productive outcomes.",
    },
    {
      name: "Modulating Intensity",
      description: "Learn to navigate making a request in an assertive way.",
    },
    {
      name: "Resistance and Conflict",
      description:
        "Master the art of communicating effectively in the face of resistance and conflict.",
    },
  ];

  return (
    <UserLayout>
      <Box
        sx={{
          padding: { xs: "16px", md: "32px" },
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <ExHero
          heroImage={Exhero}
          heading="Interpersonal Communication Skills"
          subHeading="DBT Communication Exercises"
          description="These exercises will help you develop essential interpersonal skills like assertiveness, active listening, and emotional validation."
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "24px", md: "40px" },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "24px",
              justifyItems: "center",
              width: "100%",
              maxWidth: "1300px",
              margin: "0 auto",
              "@media (min-width: 600px)": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
              "@media (min-width: 900px)": {
                gridTemplateColumns: "repeat(3, 1fr)",
              },
              "@media (min-width: 1200px)": {
                gridTemplateColumns: "repeat(4, 1fr)",
              },
            }}
          >
            {exercises.map((exercise, index) => (
              <Box
                key={`card-${index}`}
                sx={{
                  width: "100%",
                  maxWidth: "400px", // Ensure a fixed width for cards
                  height: "auto", // Maintain height relative to content
                  paddingY: { xs: "16px", sm: "24px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ExerciseCard
                  exerciseTitle={`Exercise ${index + 1}`}
                  exerciseImage={exImage}
                  exerciseName={exercise.name}
                  exerciseDescription={exercise.description}
                />
              </Box>
            ))}
          </Box>

          <Box sx={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "32px",
                marginTop: "24px",
                flexWrap: "wrap",
                paddingY: { xs: "16px", sm: "32px" },
              }}
            >
              <ParagraphNavLink
                label="What is Interpersonal Effectiveness?"
                href="#what-is-interpersonal-effectiveness"
              />
              <ParagraphNavLink
                label="Key Aspects of Interpersonal Effectiveness"
                href="#key-aspects"
              />
              <ParagraphNavLink
                label="DBT and Interpersonal Effectiveness"
                href="#dbt-interpersonal-effectiveness"
              />
              <ParagraphNavLink
                label="Benefits of Interpersonal Effectiveness"
                href="#benefits"
              />
              <ParagraphNavLink
                label="Consequences of Poor Interpersonal Skills"
                href="#consequences"
              />
            </Box>

            <Box
              sx={{
                padding: { xs: "16px", md: "32px" },
                textAlign: "justify",
                marginTop: "40px",
              }}
            >
              <Box id="what-is-interpersonal-effectiveness">
                <Paragraph
                  heading="What is Interpersonal Effectiveness?"
                  content={
                    <>
                      <p>
                        Imagine you’re at work and a colleague has
                        unintentionally taken credit for your idea in a team
                        meeting. Instead of reacting impulsively or harboring
                        resentment, you decide to use interpersonal
                        effectiveness skills.
                      </p>
                      <p>
                        You request a private conversation with your colleague,
                        where you calmly and assertively express how you feel
                        about the situation. You listen to their perspective,
                        empathize with their oversight, and collaboratively find
                        a solution to ensure proper recognition and prevent
                        future misunderstandings.
                      </p>
                      <p>
                        This approach not only resolves the immediate issue but
                        also strengthens your professional relationship and
                        mutual respect.
                      </p>
                    </>
                  }
                />
              </Box>

              <Box id="key-aspects">
                <Paragraph
                  heading="Key Aspects of Interpersonal Effectiveness"
                  content={
                    <>
                      <ul>
                        <li>
                          <strong>Communication Skills:</strong> The ability to
                          clearly and assertively communicate your thoughts,
                          feelings, and needs.
                        </li>
                        <li>
                          <strong>Emotional Intelligence:</strong> Understanding
                          and managing your own emotions, as well as other
                          people’s.
                        </li>
                        <li>
                          <strong>Conflict Resolution:</strong> Skills for
                          resolving disagreements.
                        </li>
                        <li>
                          <strong>Assertiveness:</strong> Expressing yourself in
                          a confident and self-assured way without being
                          aggressive.
                        </li>
                        <li>
                          <strong>Empathy and Understanding:</strong> The
                          ability to put yourself in another’s shoes.
                        </li>
                        <li>
                          <strong>Boundary Setting:</strong> Knowing and
                          communicating your personal limits and expectations in
                          relationships.
                        </li>
                        <li>
                          <strong>Relationship Building:</strong> Skills in
                          forming and maintaining healthy, supportive
                          relationships.
                        </li>
                        <li>
                          <strong>Problem-Solving:</strong> Effectively
                          addressing and resolving issues that arise in your
                          relationships.
                        </li>
                      </ul>
                    </>
                  }
                />
              </Box>

              <Box id="dbt-interpersonal-effectiveness">
                <Paragraph
                  heading="Interpersonal Effectiveness as a Module in DBT"
                  content={
                    <>
                      <p>
                        Interpersonal Effectiveness in Dialectical Behavior
                        Therapy (DBT) equips you with a set of skills designed
                        to help you interact with others in a way that is
                        assertive, maintains self-respect, and strengthens
                        relationships.
                      </p>
                      <p>
                        In DBT, this module is usually taught last, as the first
                        three (Mindfulness, Distress Tolerance, Emotional
                        Regulation) lay down the foundation for Interpersonal
                        Effectiveness skills.
                      </p>
                    </>
                  }
                />
              </Box>

              <Box id="benefits">
                <Paragraph
                  heading="Benefits of Interpersonal Effectiveness Skills"
                  content={
                    <>
                      <p>
                        Aside from the obvious benefit of improving your
                        communication skills, reducing conflicts in personal and
                        work life, and being able to immediately solve problems,
                        there are a lot of additional long-term benefits.
                      </p>
                      <p>
                        In the long term, healthy interpersonal skills lead to
                        stronger, more fulfilling relationships, enhanced
                        self-confidence, better emotional regulation, and
                        overall improved mental well-being. These skills foster
                        a healthier social environment and personal growth over
                        time.
                      </p>
                    </>
                  }
                />
              </Box>

              <Box id="consequences">
                <Paragraph
                  heading="Consequences of Poor Interpersonal Skills"
                  content={
                    <>
                      <p>
                        Like good interpersonal skills, poor interpersonal
                        skills can lead to immediate and long-term consequences.
                      </p>
                      <p>
                        In the short term, they often result in
                        misunderstandings, conflicts, and stress in your
                        relationships. If these happen repeatedly, this can lead
                        to long-term problems like chronic relationship issues,
                        social isolation, and depression. These can negatively
                        affect both professional and personal life.
                      </p>
                    </>
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </UserLayout>
  );
};

export default InterpersonalExercisesPage;
