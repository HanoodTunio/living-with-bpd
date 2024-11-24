import React from "react";
import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Example icon
import {
  cardStyles,
  iconContainerStyles,
  titleStyles,
  subtitleStyles,
  descriptionStyles,
} from "./ExerciseCardStyles";

const ExerciseCard = () => {
  return (
    <Box sx={cardStyles}>
      {/* Title */}
      <Typography variant="h6" sx={titleStyles}>
        Exercise M1
      </Typography>

      {/* Icon Container */}
      <Box sx={iconContainerStyles}>
        <AccountCircleIcon sx={{ fontSize: "64px", color: "#1d3557" }} />
      </Box>

      {/* Subtitle */}
      <Typography variant="h6" sx={subtitleStyles}>
        Observing
      </Typography>

      {/* Description */}
      <Typography variant="body2" sx={descriptionStyles}>
        Start developing your mindfulness skills by observing a single object.
      </Typography>
    </Box>
  );
};

export default ExerciseCard;
