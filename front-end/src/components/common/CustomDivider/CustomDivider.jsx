// src/components/CustomDivider.jsx

import React from "react";
import { Divider, Box } from "@mui/material";

const CustomDivider = () => {
  return (
    <Box sx={{ marginY: "20px" }}>
      <Divider
        sx={{
          borderColor: "rgba(0, 0, 0, 0.4)", // Light gray color
          borderWidth: "1px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow effect
          width: "0%", // Start with 0% width
          margin: "0 auto",
          animation: "expandDivider 5s ease infinite", // Repeats every 5 seconds
          animationDelay: "3s", // 2-second delay before each repeat
          "@keyframes expandDivider": {
            "0%": {
              width: "0%",
            },
            "50%": {
              width: "50%",
            },
            "100%": {
              width: "0%",
            },
          },
        }}
      />
    </Box>
  );
};

export default CustomDivider;
