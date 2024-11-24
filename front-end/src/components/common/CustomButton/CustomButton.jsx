import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({
  text,
  size = "medium",
  onClick,
  variant = "contained",
  sx,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      sx={{
        background:
          variant === "contained"
            ? "linear-gradient(90deg, #004494, #008456)"
            : "none",
        color: variant === "contained" ? "#fff" : "#004494", // Adjust color for outlined buttons
        padding:
          size === "small"
            ? "8px 12px"
            : size === "large"
            ? "12px 24px"
            : "10px 16px",
        borderRadius: "8px",
        fontWeight: "bold",
        textTransform: "none",
        ...(variant === "outlined" && {
          border: "2px solid #004494",
          backgroundColor: "transparent",
        }),
        "&:hover": {
          background:
            variant === "contained"
              ? "linear-gradient(90deg, #0057B7, #00A86B)"
              : "rgba(0, 68, 148, 0.1)",
          color: variant === "outlined" ? "#0057B7" : "#fff",
        },
        ...sx, // Custom styles passed as props
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
