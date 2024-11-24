import React from "react";
import { Box, Typography } from "@mui/material";

const Paragraph = ({ heading, content }) => {
  return (
    <Box>
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "30px",
          fontWeight: "bold",
          color: "#3CAF99", // Paragraph color
        }}
      >
        {heading}
      </Typography>

      {/* Content */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "16px", // Smaller font size for paragraph
          color: "#464343", // Same color as the heading
          lineHeight: "1.6",
          marginTop: "20px", // Add spacing between heading and paragraph
          marginBottom: "40px",
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default Paragraph;
