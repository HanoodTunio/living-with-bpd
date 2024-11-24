// src/components/AboutSection.jsx

import React from "react";
import { Box, Typography } from "@mui/material";
import underlineImage from "../../../assets/images/Vector.png";

const AboutSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        marginBottom: "20px",
        paddingTop: "60px", // Added padding at the top
        paddingBottom: "60px", // Added padding at the bottom
      }}
    >
      {/* Centered Heading with Decorative Underline */}
      <Box sx={{ display: "inline-block", position: "relative" }}>
        <Typography
          variant="h5" // Consistent with "Event" and "Blog" sections
          sx={{
            fontWeight: "bold",
            color: "#333",
            display: "inline-block",
          }}
        >
          About <span style={{ color: "#0057B7" }}>US</span>
        </Typography>

        {/* Decorative Underline Image */}
        <img
          src={underlineImage}
          alt="Underline Decoration"
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
          }}
        />
      </Box>

      {/* Centered Text Content */}
      <Typography
        variant="body2" // Consistent with "Event" and "Blog" sections
        sx={{
          color: "#333",
          maxWidth: "800px",
          margin: "20px auto 0",
          lineHeight: "1.6",
        }}
      >
        Assigning blame doesn’t resolve our struggles, yet the need for
        accountability remains. This platform addresses this dilemma directly.
        While spreading awareness is crucial, it often isn’t sufficient. That’s
        why this platform is made for individuals with Borderline Personality
        Disorder.
      </Typography>
    </Box>
  );
};

export default AboutSection;
