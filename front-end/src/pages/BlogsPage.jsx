import React from "react";
import MainLayout from "../components/mainlayout/MainLayout"; // Import MainLayout
import Divider from "../components/common/CustomDivider/CustomDivider";
import BlogHero from "../components/common/BlogHero/BlogHero";
import BlogCard from "../components/common/BlogCard/BlogCard";
import PostCard from "../components/common/PostCard/PostCard";
import BlogImageSrc from "../assets/images/blog.png";
import { Box } from "@mui/material"; // Import Box for layout control
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";

const BlogsPage = () => {
  const blogData = [
    {
      blogId: 1,
      image: blog1,
      title: "Sample Blog Post 1",
      author: "John Doe",
      date: "23 Dec.",
      description:
        "This is a short description of the blog post. It gives a brief overview of the content.  short description of the blog post. It gives a brief overview of the content  short description of the blog post. It gives a brief overview of the content  short description of the blog post. It gives a brief overview of the content  short description of the blog post. It gives a brief overview of the content  short description of the blog post. It gives a brief overview of the content  short description of the blog post. It gives a brief overview of the content short description of the blog post. It gives a brief overview of the content  short description of the blog post. It gives a brief overview of the content  short description of the blog post. It gives a brief overview of the content  short description of the blog post. It gives a brief overview of the content  short description of the blog post. It gives a brief overview of the content",
    },
    {
      blogId: 2,
      image: blog2,
      title: "Sample Blog Post 2",
      author: "Jane Doe",
      date: "24 Dec.",
      description:
        "This is another short description of the blog post, providing a glimpse into the topic covered.",
    },
    {
      blogId: 3,
      image: blog3,
      title: "Sample Blog Post 3",
      author: "Sam Smith",
      date: "25 Dec.",
      description:
        "Here is a brief description for the third blog post. It captures the reader’s interest quickly.",
    },
    {
      blogId: 4,
      image: blog1,
      title: "Sample Blog Post 4",
      author: "John Smith",
      date: "26 Dec.",
      description:
        "Another description here for the fourth blog post. It focuses on recent trends.",
    },
  ];

  return (
    <MainLayout>
      {/* Blog Hero Section */}
      <BlogHero
        title="Understanding BPD and its Impact at Work"
        subtitle=""
        textColor="#2F86C5"
        textPosition={{ left: "10px", top: "140px" }}
        imageSrc={BlogImageSrc}
      />

      <Divider />

      {/* First PostCard Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: { xs: "0 16px", md: "0 40px" },
        }}
      >
        {/* Render the first blog in a larger PostCard */}
        <PostCard
          blogId={blogData[0].blogId}
          title={blogData[0].title}
          author={blogData[0].author}
          date={blogData[0].date}
          description={blogData[0].description}
        />
      </Box>

      <Divider />

      {/* Blog Posts Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Center the entire section
          padding: { xs: "0 16px", md: "0 40px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Wrap items to the next line
            gap: 6, // Space between cards
            justifyContent: "flex-start", // Align items to the start of each row
            maxWidth: "1200px", // Constrain the width of the content
          }}
        >
          {blogData.slice(1).map((blog) => (
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

      <Divider />
    </MainLayout>
  );
};

export default BlogsPage;
