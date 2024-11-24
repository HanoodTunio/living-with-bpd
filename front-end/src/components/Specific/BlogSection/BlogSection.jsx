// src/pages/BlogSection.jsx

import React from "react";
import { Box, Typography, Link, Grid2 } from "@mui/material";
import BlogCard from "../../common/BlogCard/BlogCard.jsx";
import blog1 from "../../../assets/images/blog1.png";
import blog2 from "../../../assets/images/blog2.png";
import blog3 from "../../../assets/images/blog3.png";
import underlineImage from "../../../assets/images/vector.png";

const BlogSection = () => {
  const blogData = [
    {
      image: blog1,
      title: "Sample Blog Post 1",
      author: "John Doe",
      date: "23 Dec.",
      description:
        "This is a short description of the blog post. It gives a brief overview of the content.",
    },
    {
      image: blog2,
      title: "Sample Blog Post 2",
      author: "Jane Doe",
      date: "24 Dec.",
      description:
        "This is another short description of the blog post, providing a glimpse into the topic covered.",
    },
    {
      image: blog3,
      title: "Sample Blog Post 3",
      author: "Sam Smith",
      date: "25 Dec.",
      description:
        "Here is a brief description for the third blog post. It captures the reader’s interest quickly.",
    },
  ];

  return (
    <Box sx={{ padding: { xs: "0 16px", md: "0 40px" }, marginBottom: "40px" }}>
      {/* Title and See More Link in the Same Row */}
      <Box
        display="flex"
        alignItems="center"
        sx={{ marginBottom: "16px", position: "relative" }}
      >
        {/* Centered Title */}
        <Typography
          sx={{
            color: "#00A86B",
            fontWeight: "bold",
            fontSize: "1.5rem",
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          Blogs
          <img
            src={underlineImage}
            alt="Underline Decoration"
            style={{
              position: "absolute",
              bottom: "-5px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "50px",
            }}
          />
        </Typography>

        {/* Clickable "See More" aligned to the right */}
        <Link
          href="/App"
          underline="hover"
          sx={{
            fontSize: "0.9rem",
            cursor: "pointer",
            position: "absolute",
            right: 0,
          }}
        >
          See More
        </Link>
      </Box>

      {/* Grid Container for Blog Cards */}
      <Grid2 container spacing={3} alignItems="center">
        {blogData.map((blog, index) => (
          <Grid2 item xs={12} sm={6} md={3} key={index}>
            <BlogCard {...blog} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default BlogSection;
