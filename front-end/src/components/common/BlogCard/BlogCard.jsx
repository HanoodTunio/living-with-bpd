import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import blogStyles from "./BlogStyles";

const BlogCard = ({ blogId, image, title, author, date, description }) => {
  const navigate = useNavigate(); // React Router hook for navigation

  const handleReadMoreClick = () => {
    navigate(`/blogs/${blogId}`); // Navigate to the detailed blog page with blogId
  };

  return (
    <Card sx={blogStyles.card}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={blogStyles.media}
      />

      <CardContent sx={blogStyles.content}>
        <Typography variant="h6" sx={blogStyles.title}>
          {title}
        </Typography>

        <Box sx={blogStyles.infoContainer}>
          <Typography variant="body2" sx={blogStyles.author}>
            By {author}
          </Typography>
          <Typography variant="body2" sx={blogStyles.date}>
            {date}
          </Typography>
        </Box>

        <Typography variant="body2" sx={blogStyles.description}>
          {description}
        </Typography>

        {/* "See Full" Text Link */}
        <Typography
          onClick={handleReadMoreClick}
          variant="body2"
          sx={{
            color: "primary.main", // Use theme primary color
            textDecoration: "underline", // Underline for link-like appearance
            cursor: "pointer", // Pointer cursor to indicate it's clickable
            marginTop: "10px", // Spacing from content
            display: "inline-block", // Inline styling for text
          }}
        >
          See full
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
