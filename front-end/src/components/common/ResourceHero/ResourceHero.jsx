import React from "react";
import { Box, Typography } from "@mui/material";
import resourceImage from "../../../assets/images/Resource.png"; // Import the image

const ResourceHero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "1390px", // Original width
        height: "600px", // Original height
        backgroundColor: "#f5f5f5", // Light gray background for contrast
        overflow: "hidden", // Ensure content stays within the box
        "@media (max-width: 1400px)": {
          width: "100%", // Make the width responsive
        },
        "@media (max-width: 768px)": {
          height: "400px", // Adjust height for smaller screens
        },
      }}
    >
      {/* Image Box */}
      <Box
        sx={{
          width: "100%", // Adjust as needed to control image container width
          height: "100%", // Full height of the parent container
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={resourceImage}
          alt="Resource"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the image covers the box proportionally
            borderRadius: "8px", // Optional rounding for the image itself
          }}
        />
      </Box>

      {/* Text Overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px", // Original bottom position
          left: "600px", // Original left position
          color: "#003366",
          fontSize: "36px", // Original font size
          "@media (max-width: 768px)": {
            fontSize: "0.5rem", // Reduce font size for smaller screens
            bottom: "220px", // Adjust bottom for smaller screens
            left: "60%", // Center horizontally
            transform: "translateX(-50%)", // Adjust to align the text to the center
            textAlign: "center", // Center the text alignment
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "4px",
            "@media (max-width: 768px)": {
              fontSize: "1.5rem", // Reduce font size for smaller screens
            },
          }}
        >
          Resources for BPD:
        </Typography>
        <Typography
          variant="body1"
          sx={{
            "@media (max-width: 768px)": {
              fontSize: "0.9rem", // Reduce font size for smaller screens
            },
          }}
        >
          Books and Videos for Understanding and Support
        </Typography>
      </Box>
    </Box>
  );
};

export default ResourceHero;
