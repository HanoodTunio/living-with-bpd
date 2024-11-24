import React from "react";
import Divider from "../components/common/CustomDivider/CustomDivider";
import Header from "../components/mainlayout/Header/Header";
import Footer from "../components/mainlayout/Footer/Footer";
import BlogHero from "../components/common/BlogHero/BlogHero";
import PostCard from "../components/common/PostCard/PostCard";
import BlogPage from "../components/Specific/BlogSection/BlogSection";
import BlogImageSrc from "../assets/images/blog.png";

import { Box } from "@mui/material"; // Import Box for margin control

const Blogs = () => {
  return (
    <>
      <Box mb={5}>
        {" "}
        {/* Adds a bottom margin between components */}
        <Header />
      </Box>

      <BlogHero
        title="Understanding BPD and its Impact at Work"
        subtitle=""
        textColor="#2F86C5"
        textPosition={{ left: "10px", top: "140px" }}
        imageSrc={BlogImageSrc}
      />

      <Divider />

      <Box mb={15}>
        <PostCard />
      </Box>

      <Divider />

      <Box mb={10}>
        <BlogPage />
      </Box>

      <Divider />

      <Box mt={5}>
        {" "}
        {/* Adds a top margin for Footer */}
        <Footer />
      </Box>
    </>
  );
};

export default Blogs;
