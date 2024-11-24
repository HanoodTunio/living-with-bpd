import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle"; // Import Material-UI play icon

const YouTubeCard = ({ videoTitle, thumbnailUrl, videoUrl, channelName }) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative", // Needed for overlay positioning
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
        "&:hover": {
          transform: "scale(1.05)", // Slight zoom effect
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)", // Elevate shadow on hover
        },
      }}
      onClick={() => window.open(videoUrl, "_blank")} // Redirect to YouTube
    >
      {/* Thumbnail */}
      <CardMedia
        component="img"
        height="200"
        image={thumbnailUrl}
        alt={videoTitle}
        sx={{
          objectFit: "cover",
        }}
      />

      {/* Play Button Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the play button
          zIndex: 1, // Ensure the play button appears above the thumbnail
          color: "white", // White play button
          fontSize: "64px", // Large play button
          opacity: 0.8, // Slight transparency
          transition: "opacity 0.3s ease",
          "&:hover": {
            opacity: 1, // Fully visible on hover
          },
        }}
      >
        <PlayCircleIcon fontSize="inherit" />
      </Box>

      {/* Video Title and Channel */}
      <CardContent
        sx={{
          backgroundColor: "#f9f9f9",
          padding: "16px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            marginBottom: "8px",
            color: "#333",
          }}
        >
          {videoTitle}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          {channelName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default YouTubeCard;
