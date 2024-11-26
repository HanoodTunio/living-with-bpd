import React from "react";
import { Box, Typography } from "@mui/material";

const ExerciseSectionLinks = ({ sections }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // Single column on small screens, two columns on larger screens
        gap: "26px", // Space between items
        justifyItems: "flex-start", // Align items to the left
        padding: "16px",
      }}
    >
      {sections.map((section, index) => (
        <Box
          key={index}
          component="a" // Makes the entire section a clickable anchor
          href={`#${section.label.toLowerCase()}`} // Generates href dynamically based on the label
          sx={{
            display: "flex",
            flexDirection: "row", // Place the icon and text side by side
            alignItems: "center",
            gap: "12px", // Space between the icon and text
            textDecoration: "none", // Remove default link styling
          }}
        >
          <Box
            component="img"
            src={section.icon}
            alt={section.label}
            sx={{
              width: "100px", // Set consistent size for icons
              height: "auto",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "26px",
              color: "#373737", // Label color updated
            }}
          >
            {`${index + 1}. ${section.label}`}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ExerciseSectionLinks;
