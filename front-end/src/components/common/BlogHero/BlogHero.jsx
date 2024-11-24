import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BlogHero = ({ title, subtitle, textColor, textPosition, imageSrc }) => {
  return (
    <BlogHeroContainer>
      <BlogText sx={{ position: "relative", ...textPosition }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ color: textColor }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h3" component="h1" sx={{ color: textColor }}>
            {subtitle}
          </Typography>
        )}
      </BlogText>
      <BlogImage src={imageSrc} alt="Blog Illustration" />
    </BlogHeroContainer>
  );
};

export default BlogHero;

// Styling Section

const BlogHeroContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px",
  width: "100%",
  height: "80vh",
  maxWidth: "1200px",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
  },
}));

const BlogText = styled(Box)(({ theme }) => ({
  flex: "1",
  position: "relative",
  left: "60px", // Default left position
  top: "-80px", // Default top position
  "& h1": {
    fontWeight: 600,
    fontSize: "2.3rem",
    lineHeight: "1.2",
    color: "#333", // Default text color
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
      textAlign: "center",
      left: "0",
      top: "0",
    },
  },
}));

const BlogImage = styled("img")(({ theme }) => ({
  flex: "1",
  maxWidth: "350px",
  height: "auto",
  position: "relative",
  left: "-60px",
  clipPath: "inset(0 0 0 -30px)",
  [theme.breakpoints.down("md")]: {
    maxWidth: "300px",
    marginTop: "20px",
    clipPath: "none",
    left: "0",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "250px",
    marginTop: "10px",
  },
}));
