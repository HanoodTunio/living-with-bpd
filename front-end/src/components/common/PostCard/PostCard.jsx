import React from "react";
import { useNavigate } from "react-router-dom";
import blogImage from "../../../assets/images/LatestBlog.png"; // Example image
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

const PostCard = ({ blogId, title, author, date, description }) => {
  const navigate = useNavigate(); // React Router hook for navigation

  const handleReadMoreClick = () => {
    navigate(`/blogs/${blogId}`); // Navigate to the detailed blog page with blogId
  };

  return (
    <CenterContainer>
      <PostCardContainer>
        {/* Blog Image */}
        <PostCardImage src={blogImage} alt="Blog Image" />

        {/* Card Content */}
        <PostCardContent>
          {/* Blog Title */}
          <PostTitle>{title}</PostTitle>

          {/* Author and Date */}
          <AuthorDateContainer>
            <Typography variant="body2" color="text.secondary">
              By {author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>
          </AuthorDateContainer>

          {/* Blog Description */}
          <QuoteText>{description}</QuoteText>

          {/* "See Full" Link */}
          <ReadMoreLink as="button" onClick={handleReadMoreClick}>
            See full
          </ReadMoreLink>
        </PostCardContent>
      </PostCardContainer>
    </CenterContainer>
  );
};

export default PostCard;
