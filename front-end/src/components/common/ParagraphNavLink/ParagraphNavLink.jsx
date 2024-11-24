import React from "react";
import { Box } from "@mui/material";

const ParagraphNavLink = ({ label, href }) => {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        textDecoration: "none", // Remove default link underline
        color: "#3C8F7C", // Default text color
        fontWeight: "bold",
        fontSize: "18px",
        display: "inline-block",
        position: "relative",
        "&:hover": {
          color: "#00796b", // Hover color
          fontSize: "19px",
        },
        "&:hover::after": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "2px",
          backgroundColor: "#00796b", // Underline color
          left: 0,
          bottom: "-2px",
        },
      }}
    >
      {label}
    </Box>
  );
};

export default ParagraphNavLink;
