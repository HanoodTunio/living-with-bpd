import React from "react";
import { Box, Typography } from "@mui/material";

const ProgressBar = ({ steps, activeStep }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        margin: "32px 0",
        position: "relative",
      }}
    >
      {steps.map((label, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            position: "relative",
          }}
        >
          {/* Connecting Line */}
          {index > 0 && (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "-50%",
                width: "100%",
                height: "2px",
                display: "flex",
              }}
            >
              {/* Left Half of the Line */}
              <Box
                sx={{
                  flex: 1,
                  backgroundColor:
                    index - 1 < activeStep
                      ? "#1D3557" // Fully dark for completed steps
                      : index - 1 === activeStep
                      ? "#1D3557" // Left half dark for active step
                      : "rgba(0, 0, 0, 0.3)", // Light gray for future steps
                }}
              />
              {/* Right Half of the Line */}
              <Box
                sx={{
                  flex: 1,
                  backgroundColor:
                    index - 1 < activeStep
                      ? "#1D3557" // Fully dark for completed steps
                      : index - 1 === activeStep
                      ? "rgba(0, 0, 0, 0.3)" // Right half light gray for active step
                      : "rgba(0, 0, 0, 0.3)", // Light gray for future steps
                }}
              />
            </Box>
          )}

          {/* Step Label */}
          <Typography
            sx={{
              marginTop: "24px", // Space below the circle for the label
              fontSize: "14px",
              fontWeight: index === activeStep ? "bold" : "normal",
              color: index <= activeStep ? "#1D3557" : "rgba(0, 0, 0, 0.5)", // Dark for active/completed
            }}
          >
            {label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ProgressBar;
