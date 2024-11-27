import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import userCardStyles from "./UserCardStyle"; // Import styles

const UserCard = ({ title, description, image, link, buttonText }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link); // Navigate to the specified link
  };

  return (
    <Card sx={userCardStyles.card} onClick={handleClick}>
      {/* Image Container */}
      <Box sx={userCardStyles.imageContainer}>
        <img src={image} alt={title} style={userCardStyles.image} />
      </Box>

      {/* Card Content */}
      <CardContent sx={userCardStyles.content}>
        <Typography variant="h6" sx={userCardStyles.title}>
          {title}
        </Typography>
        <Typography variant="body2" sx={userCardStyles.description}>
          {description}
        </Typography>
        <Button variant="contained" sx={userCardStyles.button}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;
