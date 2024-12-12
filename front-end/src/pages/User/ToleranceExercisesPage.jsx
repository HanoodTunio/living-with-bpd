import React from "react";
import { Box } from "@mui/material";
import ExerciseCard from "../../components/common/ExerciseCard/ExerciseCard";
import ExHero from "../../components/common/ExHero/ExHero";
import Exhero from "../../assets/images/distressEx.png";
import ParagraphNavLink from "../../components/common/ParagraphNavLink/ParagraphNavLink";
import exImage from "../../assets/images/ex.png";
import Paragraph from "../../components/common/Paragraph/Paragraph";
import UserLayout from "../../components/mainlayout/UserLayout";

const ToleranceExercisesPage = () => {
  const exercises = [
    {
      name: "Cost Benefit Analysis",
      description:
        "Helps you assess the costs and benefits of making changes in behaviors. Helps you evaluate what's worth changing.",
    },
    {
      name: "Recognize Emotional Crisis",
      description:
        "Learn to detect emotional crises early, and how to respond effectively before the situation escalates.",
    },
    {
      name: "Distracting Activities",
      description:
        "Create a list of activities to distract yourself during emotional crises. Use them to regain control over emotions.",
    },
    {
      name: "RESISTT Technique",
      description:
        "Use the RESISTT technique to manage unhealthy emotional urges. This will help you cope with distressing emotions effectively.",
    },
    {
      name: "Grounding",
      description:
        "Use grounding techniques to stay focused on the present moment when your thoughts are scattered or unproductive.",
    },
    {
      name: "Willingness vs. Willfulness",
      description:
        "Learn to approach situations flexibly (willingness) instead of rigidly (willfulness) to become more effective in decision-making.",
    },
    {
      name: "Radical Acceptance",
      description:
        "Radical acceptance helps you acknowledge and accept the reality of situations without frustration or resistance to what is.",
    },
    {
      name: "Self Soothing",
      description:
        "Engage your five senses to self-soothe during overwhelming emotions. This can help restore calmness in moments of distress.",
    },
    {
      name: "Actions Based on Values",
      description:
        "Aligning actions with your personal values enables you to make decisions in difficult situations, improving emotional well-being.",
    },
    {
      name: "TIPP",
      description:
        "Use the TIPP method (Temperature, Intense Exercise, Paced Breathing, Progressive Muscle Relaxation) to regulate emotional responses.",
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
          heading="Distress Tolerance Techniques"
          subHeading="DBT Distress Tolerance Exercises"
          description="These distress tolerance exercises will help you manage emotional crises and distressing situations effectively."
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
                  height: "350px",
                  //maxWidth: "300px", // Restrict card width to make it more consistent
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
                label="What is Distress Tolerance?"
                href="#what-is-distress-tolerance"
              />
              <ParagraphNavLink
                label="How Does It Help"
                href="#how-does-it-help"
              />
              <ParagraphNavLink
                label="Practicing Distress Tolerance"
                href="#practicing-distress-tolerance"
              />
              <ParagraphNavLink label="FAQs" href="#faqs" />
            </Box>

            {/* Paragraph Section */}
            <Box
              sx={{
                padding: { xs: "16px", md: "32px" },
                textAlign: "justify",
                marginTop: "40px", // Create space between the nav links and paragraph
              }}
            >
              <Box id="what-is-distress-tolerance">
                <Paragraph
                  heading="What is Distress Tolerance?"
                  content={
                    <>
                      <p>
                        Imagine this scenario. You wake up feeling very well
                        rested, enjoy the most delicious breakfast you’ve had,
                        and find the train ride to work a breeze. But when you
                        arrive at work, you are called by your manager and are
                        informed that you are being laid off.
                      </p>
                      <p>
                        Even if you are in full control of yourself, there are
                        things that are beyond your control. These painful
                        events, which will be called “crises,” are a normal part
                        of life. Everyone will experience extreme emotional
                        distress like depression, anger, or fear.
                      </p>
                      <p>
                        This is where distress tolerance skills come into play.
                        Distress tolerance is your ability to manage actual or
                        perceived emotional distress. Whether the crisis is big
                        or small, your tolerance determines how you decide to
                        manage the situation.
                      </p>
                    </>
                  }
                />
              </Box>

              <Box id="how-does-it-help">
                <Paragraph
                  heading="How Do These Distress Tolerance Skills Help?"
                  content={
                    <>
                      <p>
                        Practicing the distress tolerance skills found on this
                        page provides tools to calm yourself in challenging
                        situations. This reduces the likelihood of impulsive
                        actions driven by intense feelings.
                      </p>
                      <p>
                        These exercises include techniques like distraction
                        (focusing your mind on something other than the
                        distress), self-soothing (engaging in comforting
                        activities), and radical acceptance (accepting the
                        reality).
                      </p>
                    </>
                  }
                />
              </Box>

              <Box id="practicing-distress-tolerance">
                <Paragraph
                  heading="Practicing Distress Tolerance in Real-Life"
                  content={
                    <>
                      <p>
                        DBT emphasizes a variety of practical and effective
                        strategies for diverting your attention away from
                        intense emotions, such as engaging in regular physical
                        activity or volunteering.
                      </p>
                      <p>
                        Engaging in regular physical activity helps you apply
                        the skills found in Distracting Activities and TIPP. You
                        do not have to enroll in a gym – walking or running
                        daily around the neighborhood or just doing some jumping
                        jacks at home will do.
                      </p>
                      <p>
                        Volunteering at a shelter or participating in a drive is
                        a beneficial way to engage in Distracting Activities, a
                        key concept in managing intense emotions. By focusing
                        your efforts on helping others, you shift your attention
                        away from distressing thoughts and feelings.
                      </p>
                      <p>
                        Implementing self-soothing techniques that you have
                        learned is a vital step in calming yourself during times
                        of stress or emotional upheaval. These techniques,
                        including deep breathing, mindfulness meditation, or
                        engaging in a comforting activity, are designed to
                        reduce anxiety and promote relaxation.
                      </p>
                      <p>
                        Make it a point to affirm what you most need to hear
                        each day. Choose affirmations that resonate with you and
                        feel authentic. Examples include, “I possess more
                        bravery than I realize” and “I am capable of tackling
                        difficult challenges.”
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
                          Q: What is the first step in practicing distress
                          tolerance?
                        </strong>
                      </p>
                      <p>
                        A: Begin by identifying and labeling your emotional
                        distress to understand the intensity of your feelings.
                      </p>

                      <p>
                        <strong>
                          Q: How do I deal with a panic attack using distress
                          tolerance skills?
                        </strong>
                      </p>
                      <p>
                        A: Use grounding exercises and breathe deeply to calm
                        the nervous system. Engage in distraction techniques to
                        shift your focus from the panic.
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

export default ToleranceExercisesPage;
