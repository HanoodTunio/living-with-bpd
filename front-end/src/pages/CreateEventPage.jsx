import React from "react";
import { Box, Typography } from "@mui/material";
import {
  cardStyles,
  iconContainerStyles,
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

      {/* Image Container */}
      <Box sx={iconContainerStyles}>
        <img
          src={exerciseImage}
          alt={exerciseName}
          style={{
            width: "64px",
            height: "64px",
            objectFit: "contain", // Ensures the image is scaled properly
          }}
        />
      </Box>

      {/* Exercise Name */}
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
