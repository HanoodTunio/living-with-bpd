import React from "react";
import { Box, Typography } from "@mui/material";
import {
  cardStyles,
  titleStyles,
  subtitleStyles,
  descriptionStyles,
} from "./ExerciseCardStyles";

const ExerciseCard = ({
  exerciseTitle,
  exerciseImage,
  exerciseName,
  exerciseDescription,
}) => {
  return (
    <Box sx={cardStyles}>
      {/* Title */}
      <Typography variant="h6" sx={titleStyles}>
        {exerciseTitle}
      </Typography>

      {/* Image */}
      {exerciseImage && (
        <img
          src={exerciseImage}
          alt={`${exerciseName} illustration`}
          style={{
            width: "100%", // Full width of the card
            height: "auto", // Maintain aspect ratio
            borderRadius: "8px", // Slightly rounded corners
            objectFit: "cover", // Ensure proper scaling
          }}
        />
      )}

      {/* Subtitle */}
      <Typography variant="h6" sx={subtitleStyles}>
        {exerciseName}
      </Typography>

      {/* Description */}
      <Typography variant="body2" sx={descriptionStyles}>
        {exerciseDescription}
      </Typography>
    </Box>
  );
};

export default ExerciseCard;
