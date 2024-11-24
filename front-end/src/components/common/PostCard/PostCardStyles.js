import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

// Main Container
export const PostCardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  border: "1px solid #ddd",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "#fff",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
  maxWidth: "1100px", // Reduced width for a smaller box
}));

// Image Styling
export const PostCardImage = styled("img")(({ theme }) => ({
  width: "460px", // Increased image size
  height: "310px", // Keep the aspect ratio square
  objectFit: "cover",
  flexShrink: 0,
}));

// Content Area
export const PostCardContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: "16px",
}));

// Title
export const PostTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "8px",
  color: "#333",
}));

// Author and Date
export const AuthorDateContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "12px",
}));

// Truncated Text
export const QuoteText = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 7, // Display only 5 lines
  overflow: "hidden",
  textOverflow: "ellipsis",
  lineHeight: "1.6",
  marginBottom: "12px",
  color: "#555",
}));

// Read More Link
export const ReadMoreLink = styled("a")(({ theme }) => ({
  fontSize: "0.9rem",
  color: theme.palette.primary.main,
  textDecoration: "underline",
  fontWeight: "bold",
  cursor: "pointer",
}));

// Parent Container for Centering
export const CenterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
}));
