import React from "react";
import { Box, Typography } from "@mui/material";
import Circle from "../Circle/Circle"; // Assuming this Circle component is already working

const AdminCardTwo = ({ heading, onButtonClick }) => {
  return (
    <Box
      sx={{
        width: 300, // Wider rectangular card
        height: 80, // Adjusted height to make the card more spacious
        backgroundColor: "transparent",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
        position: "relative", // Make sure it's a positioned container
        borderRadius: "30px", // Less rounded corners for a rectangle
        overflow: "hidden", // Prevent content overflow
        cursor: "pointer", // Make the entire card clickable
        display: "flex", // Flexbox for easier layout
        alignItems: "center", // Vertically center the heading
        paddingLeft: "20px", // Padding to the left to prevent text from touching the edge
      }}
      onClick={onButtonClick} // Make the entire card clickable
    >
      {/* Heading Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start", // Align the heading to the left
          flex: 1, // Allow heading to take available space
        }}
      >
        <Typography
          variant="h6"
          color="textPrimary"
          sx={{
            fontWeight: "bold", // Apply bold styling
            fontSize: "18px", // Adjust font size
            display: "inline-block", // Ensure heading behaves as an inline block
            zIndex: 2, // Make sure heading stays on top of the circle
          }}
        >
          {heading}
        </Typography>
      </Box>

      {/* Circle */}
      <Box
        sx={{
          position: "absolute",
          right: "40px", // Keep the circle within the card on the right
          top: "50%", // Vertically center the circle
          transform: "translateY(-50%)", // Correct vertical alignment
          zIndex: 1, // Ensure circle stays below the heading text
          // Responsive adjustments
          "@media (max-width: 600px)": {
            right: "10px", // For small screens, move the circle slightly inward
            top: "45%", // Adjust vertical positioning for small screens
          },
          "@media (max-width: 900px)": {
            right: "30px", // Adjust for medium screens
            top: "50%", // Ensure the circle is still centered on medium screens
          },
        }}
      >
        <Circle size={50} color="#3CAF99" opacity={0.5} />
      </Box>
    </Box>
  );
};

export default AdminCardTwo;
