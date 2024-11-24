import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/mainlayout/Header/Header.jsx";
import Footer from "../components/mainlayout/Footer/Footer.jsx";
import BlogHero from "../components/common/BlogHero/BlogHero.jsx";
import blogContent from "../data/blogContent.js"; // Blog content data
import BlogImageSrc from "../assets/images/blog.png";
import BlogPage from "../components/Specific/BlogSection/BlogSection.jsx";

const BlogDetailPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

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

      <BlogPage />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default BlogDetailPage;
