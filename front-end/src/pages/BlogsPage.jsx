import React from "react";
import MainLayout from "../components/mainlayout/MainLayout"; // Import MainLayout
import Divider from "../components/common/CustomDivider/CustomDivider";
import BlogHero from "../components/common/BlogHero/BlogHero";
import PostCard from "../components/common/PostCard/PostCard";
import BlogSection from "../components/Specific/BlogSection/BlogSection";
import BlogImageSrc from "../assets/images/blog.png";
import { Box } from "@mui/material"; // Import Box for margin control

const Blogs = () => {
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

      {/* PostCard Section */}
      <Box mb={15}>
        <PostCard />
      </Box>

      <Divider />

      {/* BlogPage Section */}
      <Box mb={10}>
        <BlogSection />
      </Box>

      <Divider />
    </MainLayout>
  );
};

export default Blogs;
