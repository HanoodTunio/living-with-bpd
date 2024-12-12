import React from "react";
import { Box } from "@mui/material";
import ExerciseCard from "../../components/common/ExerciseCard/ExerciseCard";
import ExHero from "../../components/common/ExHero/ExHero";
import Exhero from "../../assets/images/ExHero.png";
import ParagraphNavLink from "../../components/common/ParagraphNavLink/ParagraphNavLink";
import exImage from "../../assets/images/ex.png";
import Paragraph from "../../components/common/Paragraph/Paragraph";
import UserLayout from "../../components/mainlayout/UserLayout";

const MindfullnessExercisePage = () => {
  const exercises = [
    {
      name: "Observing",
      description:
        "Start developing your mindfulness skills by observing a single object.",
    },
    {
      name: "Mental Body Scan",
      description:
        "Learn to relax your body and strengthen your mind-body connection.",
    },
    {
      name: "Internal vs. External",
      description:
        "Is your orientation toward internal or external events? Create balance.",
    },
    {
      name: "Describe Your Emotions",
      description:
        "Delve into the emotions you experience and the associated actions and thoughts.",
    },
    {
      name: "Mental Noting",
      description:
        "Mental noting helps you become more aware of your thoughts and emotions.",
    },
    {
      name: "Thought Defusion",
      description:
        "Create space between you and unproductive thoughts and emotions.",
    },
    {
      name: "Mindful Breathing",
      description:
        "Calm your mind when you are feeling anxious or uncomfortable.",
    },
    {
      name: "Wise Mind",
      description:
        "Make decisions that balance your rational and emotional mind.",
    },
    {
      name: "Negative Judgments",
      description:
        "Become aware of automatic and unproductive negative judgments.",
    },
    {
      name: "Letting Go of Judgments",
      description: "Reduce the impact of unwanted judgments on your thoughts.",
    },
  ];

  return (
    <UserLayout>
      {/* Main Container */}
      <Box
        sx={{
          padding: { xs: "16px", md: "32px" },
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Hero Section */}
        <ExHero
          heroImage={Exhero}
          heading="Mindfulness Techniques"
          subHeading="DBT Mindfulness Exercises"
          description="These mindfulness exercises will help you observe your thoughts non-judgmentally and practice staying grounded in the present moment."
        />

        {/* Sub-container to manage cards and paragraphs */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "24px", md: "40px" },
          }}
        >
          {/* Cards Container */}
          <Box
            sx={{
              display: "grid", // Use grid for responsiveness
              gridTemplateColumns: "repeat(1, 1fr)", // Default to 1 card on extra small
              gap: "24px",
              justifyItems: "center",
              width: "100%",
              maxWidth: "1300px",
              margin: "0 auto",
              // Responsiveness based on screen size
              "@media (min-width: 600px)": {
                gridTemplateColumns: "repeat(2, 1fr)", // 2 cards on small devices
              },
              "@media (min-width: 900px)": {
                gridTemplateColumns: "repeat(3, 1fr)", // 3 cards on medium devices
              },
              "@media (min-width: 1200px)": {
                gridTemplateColumns: "repeat(4, 1fr)", // 4 cards on large devices
              },
            }}
          >
            {exercises.map((exercise, index) => (
              <Box
                key={`card-${index}`}
                sx={{
                  paddingY: { xs: "16px", sm: "24px" },
                  width: "100%",
                  //maxWidth: "300px", // Restrict card width to make it more consistent
                }}
              >
                <ExerciseCard
                  exerciseTitle={`Exercise M${index + 1}`}
                  exerciseImage={exImage}
                  exerciseName={exercise.name}
                  exerciseDescription={exercise.description}
                />
              </Box>
            ))}
          </Box>

          {/* Paragraphs and Navigation Links Container */}
          <Box sx={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
            {/* Navigation Links Section */}
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
                padding: { xs: "16px", md: "32px" },
                textAlign: "justify",
                marginTop: "40px", // Create space between the nav links and paragraph
              }}
            >
              <Box id="what-is-mindfulness">
                <Paragraph
                  heading="What is Mindfulness?"
                  content={
                    <>
                      <p>
                        We live busy lives – from the time we wake up, we are
                        bombarded with tasks that need to be finished. We make
                        breakfast, go to work or school, commute while listening
                        to music or talking on the phone, or playing video
                        games. This takes a lot of brainpower so our amazing
                        minds learn to autopilot.
                      </p>
                      <p>
                        This autopiloting behavior is efficient, but it comes
                        with a downside – have you noticed how well-rested you
                        are, how delicious your breakfast is, or how pretty the
                        flowers are on your way to work? Autopiloting lets your
                        mind wander, often leading to thoughts of fear, worry,
                        anxiety, or dread.
                      </p>
                      <p>This is where the skill of mindfulness comes in.</p>
                      <p>
                        Mindfulness is about taking control back and focusing on
                        what is happening now - without judgment. Focusing on
                        the present helps you shift attention away from
                        anxiety-inducing thoughts, which are usually rooted in
                        the past or future.
                      </p>
                    </>
                  }
                />
              </Box>

              <Box id="why-practice-mindfulness">
                <Paragraph
                  heading="Why Practice Mindfulness?"
                  content={
                    <>
                      <p>
                        Practicing mindfulness is essential for personal growth
                        and mental well-being. It helps you manage emotions,
                        reduce stress, and improve focus. Regular practice can
                        lead to greater self-awareness and can create a sense of
                        calm and peace in the midst of chaos.
                      </p>
                      <p>
                        In DBT, mindfulness is taught as a foundational skill
                        because it helps individuals tune into their experiences
                        without judgment and respond to difficult situations
                        more skillfully.
                      </p>
                    </>
                  }
                />
              </Box>

              <Box id="how-it-works">
                <Paragraph
                  heading="How Mindfulness Works"
                  content={
                    <>
                      <p>
                        Mindfulness works by bringing your attention back to the
                        present moment. It trains your mind to stay focused on
                        what's happening now, rather than letting your thoughts
                        drift to past mistakes or future worries. This helps to
                        break the cycle of automatic thinking and emotional
                        reactivity that can lead to distress.
                      </p>
                      <p>
                        In DBT, mindfulness exercises are key to developing
                        greater emotional regulation. It helps individuals
                        become aware of their thoughts, emotions, and behaviors
                        in a non-judgmental way, which can lead to better
                        decision-making and emotional stability.
                      </p>
                    </>
                  }
                />
              </Box>

              <Box id="mindfulness-skills">
                <Paragraph
                  heading="Mindfulness Skills as a DBT Module"
                  content={
                    <>
                      <p>
                        Dialectical Behavior Therapy (DBT) incorporates four key
                        modules, with mindfulness as the foundational element.
                        This crucial component is often the starting point in
                        therapy, providing essential groundwork for the other
                        three modules: distress tolerance, emotion regulation,
                        and interpersonal effectiveness.
                      </p>
                      <p>
                        By first establishing mindfulness skills, psychologists
                        set the stage for more effective learning and
                        application of the remaining DBT concepts.
                      </p>
                    </>
                  }
                />
              </Box>

              <Box id="dbt-skills">
                <Paragraph
                  heading="What Mindfulness Skills are taught in DBT?"
                  content={
                    <>
                      <h4>"WHAT" SKILLS:</h4>
                      <p>
                        These skills help you understand the present moment as
                        it is without judging it.
                      </p>

                      <h4>"HOW" SKILLS:</h4>
                      <p>
                        These skills help you maintain awareness and control in
                        any situation.
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

export default MindfullnessExercisePage;
