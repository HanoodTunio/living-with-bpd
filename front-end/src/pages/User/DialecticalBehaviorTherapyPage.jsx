import React from "react";
import { Box, Grid2 } from "@mui/material";
import UserHeader from "../../components/mainlayout/UserHeader/UserHeader";
import CardComponent from "../../components/common/DialecticalCard/DialecticalCard"; // Import the CardComponent
import UserLayout from "../../components/mainlayout/UserLayout"; // Correct relative path

import effective from "../../assets/images/effective.png";
import emotions from "../../assets/images/emotions.png";
import mind from "../../assets/images/mind.png";
import distress from "../../assets/images/distress.png";

const cardsData = [
  {
    title: "Mindfulness",
    description:
      "Mindfulness helps you become aware of your thoughts, emotions, and sensations without judgment. This skill forms the foundation of DBT, enhancing self-awareness and emotional regulation.",
    image: mind,
    link: "/user-dashboard/start-exercises/mindfulness",
  },
  {
    title: "Distress Tolerance",
    description:
      "Distress tolerance teaches you to manage difficult emotions and crises without resorting to harmful behaviors, helping you build resilience and cope effectively with life's challenges.",
    image: distress,
    link: "/user-dashboard/start-exercises/distress-tolerance",
  },
  {
    title: "Emotion Regulation",
    description:
      "Emotion regulation helps you understand and manage your emotions, reducing negative feelings and promoting positive ones to respond to emotions in healthy ways.",
    image: emotions,
    link: "/user-dashboard/start-exercises/emotion-regulation",
  },
  {
    title: "Interpersonal Skills",
    description:
      "Interpersonal skills focus on managing relationships by developing assertiveness, setting boundaries, and resolving conflicts, fostering healthy and meaningful connections.",
    image: effective,
    link: "/user-dashboard/start-exercises/interpersonal-effectiveness",
  },
];

const DialecticalBehaviorTherapyPage = () => {
  return (
    <UserLayout>
      {/* Main Content Section */}
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "none",
          overflowY: "auto",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "hidden", // Prevent horizontal overflow
        }}
      >
        {/* Content Section */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "lg", // Ensure content doesn't stretch too wide
            marginTop: "80px",
            boxSizing: "border-box",
            flex: 1,
            overflowY: "auto",
          }}
        >
          <Grid2
            container
            spacing={5} // Adjusts space between cards
            justifyContent="center" // Centers the cards horizontally
            alignItems="center" // Centers the cards vertically
            sx={{
              padding: "0", // Removes padding from the grid container
              overflowX: "hidden", // Prevent horizontal overflow
            }}
          >
            {cardsData.map((card, index) => (
              <Grid2
                key={index}
                item
                xs={12}
                sm={6}
                md={6}
                sx={{
                  // Removed marginRight to prevent uneven spacing
                  marginRight: "55px",
                  marginLeft: "55px", // Add horizontal spacing between cards
                }}
              >
                <CardComponent
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  link={card.link}
                  sx={{
                    width: "350px", // Increased width
                    height: "300px", // Reduced height
                  }}
                />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
    </UserLayout>
  );
};

export default DialecticalBehaviorTherapyPage;
