import React from "react";
import { Box } from "@mui/material";

const Circle = ({
  size = 200,
  color = "#FFF9F9",
  opacity = 0.13,
  top,
  left,
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: "50%",
        opacity: opacity,
        top: top,
        left: left,
      }}
    ></Box>
  );
};

export default Circle;
