import React from "react";
import { Box, Typography } from "@mui/material";
import Flower from "./Flower"; // Assuming this Flower component is correctly imported

const AdminCardTwo = ({ heading, onButtonClick }) => {
  return (
    <Box
      sx={{
        width: 300, // Wider rectangular card
        height: 80, // Adjusted height to make the card more spacious
        backgroundColor: "transparent",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)", // Default box shadow
        position: "relative", // Positioned container for overlay effect
        borderRadius: "30px", // Rounded corners for a more modern look
        overflow: "hidden", // Prevent content overflow
        cursor: "pointer", // Make the entire card clickable
        display: "flex", // Flexbox for easier layout
        alignItems: "center", // Vertically center the heading
        paddingLeft: "20px", // Padding to prevent text from touching the edge
        transition: "all 0.3s ease", // Smooth transition for hover effect
        "&:hover": {
          backgroundColor: "#f5f5f5", // Light background on hover
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)", // More intense shadow on hover
          transform: "scale(1.05)", // Slight scale-up on hover
        },
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
            fontWeight: "bold", // Bold heading text
            fontSize: "18px", // Font size for the heading
            display: "inline-block", // Ensure heading behaves as an inline block
            zIndex: 2, // Ensure heading stays on top of the circle
          }}
        >
          {heading}
        </Typography>
      </Box>

      {/* Circle Decoration */}
      <Box
        sx={{
          position: "absolute",
          right: "10px", // Circle on the right side
          top: "70%", // Vertically centered on the card
          transform: "translateY(-50%)", // Adjust positioning of the circle
          zIndex: 1, // Ensure circle stays beneath the heading
          // Responsive adjustments
          "@media (max-width: 600px)": {
            right: "10px", // Slight inward shift on small screens
            top: "70%", // Adjust vertical positioning for small screens
          },
          "@media (max-width: 900px)": {
            right: "10px", // Adjust for medium screens
            top: "65%", // Vertical adjustment for medium screens
          },
        }}
      >
        <Flower size={30} petalCount={5} color="#3CAF99" />
      </Box>
    </Box>
  );
};

export default AdminCardTwo;
