// src/components/EventCard/EventCard.jsx
import React from "react";
import { CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  StyledCard,
  StyledCardMedia,
  StyledChip,
  StyledLink,
  StyledDescription,
} from "./EventCardStyles";

const EventCard = ({ image, title, description, date, location, category }) => {
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate("/events");
  };

  return (
    <StyledCard>
      <StyledCardMedia component="img" image={image} alt={title} />
      <StyledChip label={category} />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight="bold"
            mb={1}
          >
            {date}
          </Typography>

          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {title}
          </Typography>

          {/* Description limited to 3 lines */}
          <StyledDescription>{description}</StyledDescription>

          <Typography variant="caption" color="text.secondary">
            {location}
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default EventCard;
