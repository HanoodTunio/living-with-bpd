import React from "react";
import { Box, Typography } from "@mui/material";
import MainLayout from "../components/mainlayout/MainLayout"; // Import MainLayout
import BlogHero from "../components/common/BlogHero/BlogHero.jsx";
import BlogCard from "../components/common/BlogCard/BlogCard"; // Import BlogCard
import blogContent from "../data/blogContent.js"; // Blog content data
import BlogImageSrc from "../assets/images/blog.png";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";

const BlogDetailPage = () => {
  const relatedBlogs = [
    {
      blogId: 1,
      image: blog1,
      title: "Related Blog Post 1",
      author: "John Doe",
      date: "23 Dec.",
      description:
        "This is a short description of the related blog post. It gives a brief overview of the content.",
    },
    {
      blogId: 2,
      image: blog2,
      title: "Related Blog Post 2",
      author: "Jane Doe",
      date: "24 Dec.",
      description:
        "This is another short description of the related blog post, providing a glimpse into the topic covered.",
    },
    {
      blogId: 3,
      image: blog3,
      title: "Related Blog Post 3",
      author: "Sam Smith",
      date: "25 Dec.",
      description:
        "Here is a brief description for the third related blog post. It captures the reader’s interest quickly.",
    },
  ];

  return (
    <MainLayout>
      {/* Blog Hero */}
      <BlogHero
        title="Understanding BPD and its Impact at Work"
        subtitle=""
        textColor="#2F86C5"
        textPosition={{ left: "10px", top: "140px" }}
        imageSrc={BlogImageSrc}
      />

      {/* Blog Content Section */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        {blogContent.map((section, index) => (
          <Box key={index} sx={{ marginBottom: "40px" }}>
            {/* Heading */}
            {index === 0 && (
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "20px",
                  color: "#2F86C5",
                }}
              >
                {section.heading}
              </Typography>
            )}

            {/* Content with Floating Image */}
            <Box
              sx={{
                position: "relative",
                lineHeight: "1.8",
                color: "#333",
                textAlign: "justify",
              }}
            >
              {/* Float Image */}
              {section.image && (
                <Box
                  component="img"
                  src={section.image}
                  alt="Illustration"
                  sx={{
                    float: "right", // Image floats to the right
                    margin: "0 0 20px 20px", // Add spacing between text and image
                    maxWidth: "600px", // Adjust image size
                    borderRadius: "10px",
                    height: "auto",
                  }}
                />
              )}

              {/* Text */}
              <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                {Array.isArray(section.text)
                  ? section.text.join(" ") // Join array into a single paragraph
                  : section.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Related Blogs Section */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "5 20px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#2F86C5",
            textAlign: "center",
          }}
        >
          Related Blogs
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Wrap items to the next line
            gap: 6, // Space between cards
            justifyContent: "center", // Center the cards
          }}
        >
          {relatedBlogs.map((blog) => (
            <Box
              key={blog.blogId}
              sx={{
                flex: {
                  xs: "1 1 100%", // 1 card per row on extra-small screens
                  sm: "1 1 calc(50% - 24px)", // 2 cards per row on small screens
                  md: "1 1 calc(33.333% - 32px)", // 3 cards per row on medium screens and up
                },
                maxWidth: {
                  xs: "100%", // Full width for extra-small screens
                  sm: "calc(50% - 24px)", // Half-width for small screens
                  md: "calc(33.333% - 32px)", // Third-width for medium screens and up
                },
              }}
            >
              <BlogCard
                blogId={blog.blogId}
                image={blog.image}
                title={blog.title}
                author={blog.author}
                date={blog.date}
                description={blog.description}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </MainLayout>
  );
};

export default BlogDetailPage;
