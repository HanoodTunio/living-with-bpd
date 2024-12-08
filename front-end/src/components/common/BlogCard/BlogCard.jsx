import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import blogStyles from "./BlogStyles";

const BlogCard = ({ blogId, image, title, author, date, description }) => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    // Use encodeURIComponent to safely include the title in the URL
    const encodedTitle = encodeURIComponent(
      title.toLowerCase().replace(/\s+/g, "-")
    ); // e.g., "Blog Title" -> "blog-title"
    navigate(`/blogs/${encodedTitle}`); // Navigate to the blog's detailed page using title
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
        <Typography
          onClick={handleReadMoreClick}
          variant="body2"
          sx={{
            color: "primary.main",
            textDecoration: "underline",
            cursor: "pointer",
            marginTop: "10px",
            display: "inline-block",
          }}
        >
          See full
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
