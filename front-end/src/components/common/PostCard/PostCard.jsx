import React from "react";
import blogImage from "../../../assets/images/LatestBlog.png";
import {
  CenterContainer,
  PostCardContainer,
  PostCardImage,
  PostCardContent,
  PostTitle,
  AuthorDateContainer,
  QuoteText,
  ReadMoreLink,
} from "./PostCardStyles";
import { Typography } from "@mui/material";

const PostCard = () => {
  return (
    <CenterContainer>
      <PostCardContainer>
        {/* Blog Image */}
        <PostCardImage src={blogImage} alt="Blog Image" />

        {/* Card Content */}
        <PostCardContent>
          <PostTitle>Latest post heading sample text..</PostTitle>

          {/* Author and Date */}
          <AuthorDateContainer>
            <Typography variant="body2" color="text.secondary">
              By Writer Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              23 Dec.
            </Typography>
          </AuthorDateContainer>

          {/* Description */}
          <QuoteText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </QuoteText>

          {/* Read More Link */}
          <ReadMoreLink href="/blog-detail">Read More</ReadMoreLink>
        </PostCardContent>
      </PostCardContainer>
    </CenterContainer>
  );
};

export default PostCard;
