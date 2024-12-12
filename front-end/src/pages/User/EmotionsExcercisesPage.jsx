import React from "react";
import { Box } from "@mui/material";
import ExerciseCard from "../../components/common/ExerciseCard/ExerciseCard";
import ExHero from "../../components/common/ExHero/ExHero";
import Exhero from "../../assets/images/emotionEx.png";
import ParagraphNavLink from "../../components/common/ParagraphNavLink/ParagraphNavLink";
import exImage from "../../assets/images/ex.png";
import Paragraph from "../../components/common/Paragraph/Paragraph";
import UserLayout from "../../components/mainlayout/UserLayout";

const EmotionsExercisesPage = () => {
  const exercises = [
    {
      name: "Recognizing Your Emotions",
      description:
        "Recognize primary emotions and secondary emotions that follow to understand emotional patterns.",
    },
    {
      name: "Being Effective",
      description:
        "Set goals and create actionable steps to help you reach those goals, improving effectiveness in daily life.",
    },
    {
      name: "Emotions & Physical Vulnerability",
      description:
        "Understand how your habits influence your well-being and identify what needs to change for a healthier emotional state.",
    },
    {
      name: "Emotions & Cognitive Vulnerability",
      description:
        "Examine cognitive distortions in your thinking patterns and make adjustments to improve emotional regulation.",
    },
    {
      name: "Self Validation",
      description:
        "Accept your emotions as they are. Acknowledge, allow, and accept how you feel without judgment.",
    },
    {
      name: "Myths About Emotions",
      description:
        "Examine common misconceptions about emotions and how they influence your behavior and emotional well-being.",
    },
    {
      name: "Emotions Exposure",
      description:
        "Learn to avoid blocking negative emotions and become comfortable with experiencing and expressing them.",
    },
    {
      name: "Balancing Emotional Urges",
      description:
        "Reduce ineffective emotional urges by balancing them with their opposites, bringing emotional stability.",
    },
    {
      name: "Problem Solving",
      description:
        "Proactively prepare for difficult situations by creating a problem-solving strategy to navigate challenges.",
    },
    {
      name: "Mastery & Coping Ahead",
      description:
        "Master essential life-building tasks and prepare yourself for future challenges instead of avoiding them.",
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
          heading="Emotion Regulation Techniques"
          subHeading="Master Emotion Regulation to Navigate Life's Challenges"
          description="These exercises help you manage your emotions, improve resilience, and foster healthy emotional responses."
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
                  paddingY: { xs: "16px", sm: "24px" },
                  width: "100%",
                  height: "350px",
                }}
              >
                <ExerciseCard
                  exerciseTitle={`Exercise T${index + 1}`}
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
                label="What is Emotion Regulation?"
                href="#what-is-emotion-regulation"
              />
              <ParagraphNavLink
                label="How Does It Help?"
                href="#how-does-it-help"
              />
              <ParagraphNavLink
                label="Importance of Emotion Regulation"
                href="#importance-of-emotion-regulation"
              />
              <ParagraphNavLink label="FAQs" href="#faqs" />
            </Box>

            <Box
              sx={{
                padding: { xs: "16px", md: "32px" },
                textAlign: "justify",
                marginTop: "40px",
              }}
            >
              <Box id="what-is-emotion-regulation">
                <Paragraph
                  heading="What is Emotion Regulation?"
                  content={
                    <>
                      <p>
                        Emotion regulation is the process of managing and
                        responding to your emotional storms in healthy and
                        constructive ways. It involves recognizing and
                        understanding your emotions, and choosing how to express
                        and act on them.
                      </p>
                      <p>
                        Imagine your emotions as a series of unpredictable
                        weather patterns. Learning emotion regulation helps you
                        navigate these storms and take control of your emotional
                        landscape.
                      </p>
                    </>
                  }
                />
              </Box>

              <Box id="how-does-it-help">
                <Paragraph
                  heading="How Does Emotion Regulation Help?"
                  content={
                    <>
                      <p>
                        Emotion regulation skills help you manage your emotions
                        more effectively, improving your emotional resilience
                        and mental health. These techniques help reduce
                        emotional suffering, boost mindfulness, and provide
                        strategies for changing unwanted emotions.
                      </p>
                    </>
                  }
                />
              </Box>

              <Box id="importance-of-emotion-regulation">
                <Paragraph
                  heading="Why is Emotion Regulation Important?"
                  content={
                    <>
                      <p>
                        Emotion regulation skills are critical for emotional
                        well-being. They help you navigate life's challenges,
                        maintain healthy relationships, and improve overall
                        mental health. Proper emotional regulation can lead to
                        better job performance, improved social interactions,
                        and a more positive outlook on life.
                      </p>
                      <p>
                        Without emotion regulation, you may experience mood
                        swings, impulsive behaviors, and heightened stress
                        levels that can affect your personal and professional
                        life.
                      </p>
                    </>
                  }
                />
              </Box>

              {/* New Consequences of Poor Emotion Regulation Section */}
              <Box id="consequences-of-poor-regulation">
                <Paragraph
                  heading="Consequences of Poor Emotion Regulation"
                  content={
                    <>
                      <p>
                        <strong>Problems in Relationships:</strong> Poor emotion
                        regulation skills often lead to overreactions or
                        inappropriate responses in social interactions, causing
                        strain in relationships with family, friends, and at
                        work.
                      </p>
                      <p>
                        <strong>Poor Physical and Mental Health:</strong>{" "}
                        Ineffective management of emotions can contribute to
                        stress, anxiety, and depression, adversely affecting
                        overall physical health, including increased risk of
                        heart disease and weakened immune response.
                      </p>
                      <p>
                        <strong>Impulsive Behavior:</strong> Difficulty in
                        controlling emotions often results in impulsive
                        decisions and actions, leading to risky behavior and
                        potential negative consequences in various aspects of
                        life.
                      </p>
                      <p>
                        <strong>Reduced Quality of Life:</strong> Chronic
                        struggles with emotion regulation can diminish life
                        satisfaction, leading to a pervasive sense of
                        unhappiness and a decreased ability to enjoy daily
                        activities and achievements.
                      </p>
                    </>
                  }
                />
              </Box>

              <Box id="faqs">
                <Paragraph
                  heading="FAQs"
                  content={
                    <>
                      <p>
                        <strong>
                          Q: What is the first step in practicing emotion
                          regulation?
                        </strong>
                      </p>
                      <p>
                        A: The first step is recognizing and labeling your
                        emotions to understand the intensity of your feelings.
                      </p>

                      <p>
                        <strong>
                          Q: How do I deal with overwhelming emotions?
                        </strong>
                      </p>
                      <p>
                        A: Practice grounding techniques, engage in mindfulness
                        exercises, and implement self-soothing activities to
                        reduce emotional intensity.
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

export default EmotionsExercisesPage;
