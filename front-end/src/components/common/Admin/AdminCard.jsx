import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Circle from "../Circle/Circle";

const CustomCard = ({ heading, onButtonClick }) => {
  return (
    <Box
      sx={{
        width: 200,
        height: 400,
        backgroundColor: "transparent",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
        position: "relative",
        borderTopLeftRadius: "150px", // Fully rounded top-left
        borderTopRightRadius: "150px", // Fully rounded top-right
        borderBottomLeftRadius: "20px", // Slightly rounded bottom-left
        borderBottomRightRadius: "20px", // Slightly rounded bottom-right
        overflow: "hidden", // Prevent content overflow
      }}
    >
      {/* Heading Section */}
      <Box
        sx={{
          position: "absolute",
          top: "22%", // Move heading up, so it is above the circles
          left: "50%", // Align horizontally
          transform: "translateX(-50%)", // Perfect horizontal center
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          color="textPrimary"
          sx={{
            fontWeight: "bold", // Apply bold styling
          }}
        >
          {heading}
        </Typography>
      </Box>

      {/* Circles */}
      <Circle
        size={200}
        color="#3CAF99"
        opacity={0.1}
        top="-50px"
        left="-50px"
      />
      <Circle
        size={150}
        color="#3CAF99"
        opacity={0.13}
        top="100px"
        left="80px"
      />
      <Circle
        size={100}
        color="#3CAF99"
        opacity={0.14}
        top="260px"
        left="-10px"
      />

      {/* Circle Button */}
      <Box
        sx={{
          position: "absolute",
          bottom: "60px", // Position the button near the bottom
          left: "50%", // Center horizontally
          transform: "translateX(-50%)", // Center the button
        }}
      >
        <Button
          onClick={onButtonClick} // Execute the provided function when clicked
          sx={{
            width: 85, // Slightly larger size for better touchability
            height: 85,
            borderRadius: "55%", // Circle shape
            backgroundColor: "#3CAF99", // Green color
            color: "white",
            fontSize: "50px", // Bigger text size for better readability
            display: "flex", // Flex to center the text inside the circle
            justifyContent: "center", // Center text horizontally
            alignItems: "center", // Center text vertically
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for depth
            transition: "all 0.3s ease", // Smooth transition for hover effect
            "&:hover": {
              backgroundColor: "#2c8f6c", // Darker green on hover
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Increase shadow on hover for effect
            },
            "&:focus": {
              outline: "none", // Remove focus outline for a cleaner look
            },
            cursor: "pointer", // Change cursor on hover to indicate interactivity
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            +
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default CustomCard;
