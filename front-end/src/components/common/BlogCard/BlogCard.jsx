// src/components/BlogCard/BlogCard.jsx

import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Link,
} from "@mui/material";
import blogStyles from "./BlogStyles";

const BlogCard = ({ image, title, author, date, description }) => {
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

        <Link href="#" sx={blogStyles.link}>
          See full
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
