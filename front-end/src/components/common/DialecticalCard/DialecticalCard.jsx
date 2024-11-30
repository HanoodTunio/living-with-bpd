import React from "react";
import { Box, Typography, Link, Paper } from "@mui/material";

const DialecticalCard = ({ title, description, image, link }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "row",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "transparent",
        width: "100%", // Full width inside the grid item
        maxWidth: "470px", // Card width, reduced for compactness
        height: "auto", // Auto height for flexible card sizing
        margin: "0 auto", // Center the card inside the grid item
        cursor: "pointer", // Indicating card is clickable
        boxShadow: "none", // No box shadow
      }}
      onClick={() => (window.location.href = link)} // Navigate to the desired page
    >
      {/* Image Column */}
      <Box
        sx={{
          width: "30%", // Image column takes 40% width
          height: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensure the image fits the space
          }}
        />
      </Box>

      {/* Content Column */}
      <Box
        sx={{
          flex: 1,
          padding: "8px", // Reduced padding inside the content
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Ensure the "Read More" is at the bottom
          height: "100%", // Make sure the content takes full height of the card
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: "8px", // Reduced space below title
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#6F6E6E",
            textAlign: "justify",
            marginBottom: "5px", // Space before the link
            flex: 1, // Let the description take available space
          }}
        >
          {description}
        </Typography>

        {/* Read More Link */}
        <Link
          href={link}
          sx={{
            display: "inline-block",
            padding: "0px", // Reduced padding
            color: "#007BFF",
            textDecoration: "none",
            fontSize: 15,
            fontWeight: "bold",
            "&:hover": {
              textDecoration: "underline", // Underline on hover
            },
            textAlign: "center",
            alignSelf: "flex-start", // Ensure link is aligned to the left of the content
          }}
        >
          Read More
        </Link>
      </Box>
    </Paper>
  );
};

export default DialecticalCard;
