import React from "react";
import { Box, Typography, Link, Grid2, Paper } from "@mui/material";
import UserHeader from "../components/mainlayout/UserHeader/UserHeader";
import effective from "../assets/images/effective.png";
import emotions from "../assets/images/emotions.png";
import mind from "../assets/images/mind.png";
import distress from "../assets/images/distress.png";

const cardsData = [
  {
    title: "Mindfulness",
    description:
      "Learn to become more aware of your thoughts and emotions. Learn to observe yourself without judgment. This skill forms the foundation of DBT.",
    image: mind,
    link: "/mindfulness",
  },
  {
    title: "Distress Tolerance",
    description:
      "Deal with difficult situations. Cope with pain. Become confident and resilient.",
    image: distress,
    link: "/distress-tolerance",
  },
  {
    title: "Emotion Regulation",
    description:
      "Manage emotions. Change unproductive emotions. Change the volume on your emotions. Create positive emotions.",
    image: emotions,
    link: "/emotion-regulation",
  },
  {
    title: "Interpersonal skills",
    description:
      "Learn to manage your relationships. Ask for what you want. Say no. Manage conflict. Create friendships.",
    image: effective,
    link: "/interpersonal-effectiveness",
  },
];

const DialecticalBehaviorTherapyPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh", // Ensure full viewport height
        overflow: "hidden", // Hide overflow at the root level
        display: "flex",
        flexDirection: "column", // Stack items vertically
        justifyContent: "flex-start", // Align top to prevent content from overflowing
        alignItems: "center", // Center horizontally
        background: "none", // Remove background from Box
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
          height: "80px", // Explicit height for fixed header
        }}
      >
        <UserHeader />
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          marginTop: "80px", // Ensure content doesn't overlap with the header
          width: "100%",
          maxWidth: "lg",
          overflowY: "hidden", // Allow vertical scrolling within this area if needed
          padding: "20px",
          boxSizing: "border-box", // Include padding in width/height calculations
        }}
      >
        <Grid2
          container
          spacing={6}
          justifyContent="center"
          marginTop={"25px"}
          sx={{ overflow: "hidden" }}
        >
          {cardsData.map((card, index) => (
            <Grid2 key={index} item xs={12} sm={6} md={6}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  backgroundColor: "transparent", // Keep card background intact
                  width: "100%", // Ensure the card doesn't stretch beyond the container
                  maxWidth: "450px", // Set max width of each card
                  height: "auto", // Remove fixed height to adjust for text overflow
                }}
              >
                {/* Image Column */}
                <Box
                  sx={{
                    width: "40%", // Fix image column width
                    height: "100%",
                    overflow: "hidden", // Ensure image doesn't overflow
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Make sure image covers the area without distortion
                    }}
                  />
                </Box>

                {/* Content Column */}
                <Box
                  sx={{
                    flex: 1,
                    padding: "12px",
                    backgroundColor: "transparent", // Removed background color of content area
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginBottom: "16px" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      marginBottom: "16px",
                      color: "#6F6E6E",
                      textAlign: "justify", // Justify the text
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 3, // Limit description to 3 lines
                    }}
                  >
                    {card.description}
                  </Typography>

                  {/* Read More Link */}
                  <Link
                    href={card.link}
                    sx={{
                      display: "inline-block",
                      padding: "12px",
                      color: "#007BFF", // Link color (adjust as needed)
                      textDecoration: "none", // Remove underline if you don't want it
                      fontWeight: "bold",
                      "&:hover": {
                        textDecoration: "underline", // Underline on hover
                      },
                      textAlign: "center", // Center the link below the description
                    }}
                  >
                    Read More
                  </Link>
                </Box>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default DialecticalBehaviorTherapyPage;
