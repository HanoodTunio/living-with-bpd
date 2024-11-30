import React from "react";
import { Box, Typography } from "@mui/material";

const ExHero = ({ heroImage, heading, subHeading, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stacks on small screens, side-by-side on medium+
        alignItems: "center",
        justifyContent: "center",
        padding: "32px",
      }}
    >
      {/* Left Column: Image */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: "24px", md: "5px" }, // Space between columns for small screens
        }}
      >
        <img
          src={heroImage}
          alt={heading}
          style={{
            maxWidth: "90%",
            height: "auto",
            borderRadius: "8px", // Slightly rounded corners
          }}
        />
      </Box>

      {/* Right Column: Text */}
      <Box
        sx={{
          flex: 1,
          paddingLeft: { md: "200px" }, // Add space on medium+ screens
          textAlign: { xs: "center", md: "left" }, // Centered on small screens
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: "bold",
            color: "#00796b", // Text color for the heading
            marginBottom: "16px",
          }}
        >
          {heading}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: "medium",
            color: "#464343", // Text color for subheading
            marginBottom: "16px",
          }}
        >
          {subHeading}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#464343",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ExHero;
