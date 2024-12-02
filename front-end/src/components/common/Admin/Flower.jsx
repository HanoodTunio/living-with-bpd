import React from "react";
import { Box } from "@mui/material";
import Circle from "../Circle/Circle"; // Assuming Circle component is already defined

const Flower = ({ size = 50, petalCount = 6, color = "#3CAF99" }) => {
  const petalStyle = {
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    backgroundColor: color,
    opacity: 0.8,
    transformOrigin: "center center", // Rotate from the center
  };

  // Generate petals based on petalCount
  const petals = Array.from({ length: petalCount }).map((_, index) => {
    const angle = (360 / petalCount) * index; // Calculate the angle for each petal
    return (
      <Box
        key={index}
        sx={{
          ...petalStyle,
          transform: `rotate(${angle}deg) translateY(-50%)`, // Position petal in a circle
        }}
      />
    );
  });

  return (
    <Box
      sx={{
        position: "relative",
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {petals}
      <Circle size={size / 3} color="#FFD700" opacity={1} />{" "}
      {/* Center of the flower */}
    </Box>
  );
};

export default Flower;
