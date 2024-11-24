import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import bookStyles from "./BookStyles";
import CustomDivider from "../CustomDivider/CustomDivider";
import bookImage from "../../../assets/images/book.png";

// Reusable Book Component
const Book = ({ image, title, description }) => {
  return (
    <Card sx={bookStyles.card}>
      {/* Book Image */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={bookStyles.media}
      />
      {/* Content Section */}
      <CardContent sx={bookStyles.content}>
        {/* Title */}
        <Typography variant="h6" sx={bookStyles.title}>
          {title}
        </Typography>

        {/* Description */}
        <Typography variant="body2" sx={bookStyles.description}>
          {description}
        </Typography>

        {/* Button */}
        <Box sx={bookStyles.buttonContainer}>
          <Button variant="contained" sx={bookStyles.button}>
            Download
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Book;
