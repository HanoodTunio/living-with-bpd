import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

// Loader component
const Loader = () => {
  return (
    <Box
      sx={{
        position: "fixed", // Fixed positioning to keep it in the same position
        top: "50%", // Position vertically at the center of the screen
        left: "50%", // Position horizontally at the center of the screen
        transform: "translate(-50%, -50%)", // Adjust by 50% of the width and height to center
        width: "50%", // Adjust width to be less (e.g., 50% of the screen width)
        zIndex: 9999, // Ensure it appears above other content
        textAlign: "center", // Center the text and progress bar
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
          marginBottom: "60px", // Space added between the logo and the progress bar
        }}
      >
        <Box
          component="img"
          src="src/assets/images/logo.webp" // Replace with your actual logo
          alt="Logo"
          sx={{
            width: "120px", // Adjust width as needed
            height: "auto",
          }}
        />
      </Box>

      {/* Progress Bar Container */}
      <Box
        sx={{
          width: "50%", // Set the width of the progress bar container
          margin: "0 auto", // Horizontally center the progress bar container
          marginBottom: "10px", // Add some space below the progress bar
        }}
      >
        <LinearProgress
          variant="indeterminate"
          sx={{
            height: 8, // Reduced height for a more subtle look
            borderRadius: 5,
            backgroundColor: "rgba(0, 0, 0, 0.1)", // Light background
            "& .MuiLinearProgress-bar": {
              background: "linear-gradient(90deg, #2C56AA 0%, #3BB08B 100%)", // Gradient color
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Loader;
