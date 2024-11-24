import React from "react";
import { Box, Grid2 } from "@mui/material";
import Header from "../components/mainlayout/Header/Header";
import ResourcesHero from "../components/common/ResourceHero/ResourceHero";
import Footer from "../components/mainlayout/Footer/Footer";
import Book from "../components/common/Book/Book";
import YouTubeCard from "../components/common/YouTubeCard/YouTubeCard"; // Import YouTubeCard
import books from "../data/books";

const ResourcesPage = () => {
  return (
    <Box>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <ResourcesHero />

      {/* YouTube Videos Section */}
      <Box
        sx={{
          padding: "40px 24px", // Padding around the section
          margin: "24px auto", // Center the section with vertical margins
          maxWidth: "1200px", // Limit the width for content alignment
          display: "flex",
          flexDirection: "column", // Arrange content vertically
          alignItems: "center", // Center content horizontally
        }}
      >
        <Grid2
          container
          spacing={15} // Adds spacing between grid items
          sx={{
            width: "100%", // Grid spans full width of its container
          }}
        >
          {Array(5)
            .fill({
              videoTitle: "Introducing iPhone 14 Pro",
              thumbnailUrl:
                "https://img.youtube.com/vi/GDlkCkcIqTs/hqdefault.jpg",
              videoUrl: "https://www.youtube.com/watch?v=GDlkCkcIqTs",
              channelName: "Apple",
            })
            .map((video, index) => (
              <Grid2
                item
                xs={12} // Full width on small screens
                sm={6} // Half width on medium screens
                md={4} // One-third width on large screens
                key={index}
              >
                <YouTubeCard
                  videoTitle={video.videoTitle}
                  thumbnailUrl={video.thumbnailUrl}
                  videoUrl={video.videoUrl}
                  channelName={video.channelName}
                />
              </Grid2>
            ))}
        </Grid2>
      </Box>

      {/* Book Section */}
      <Box
        sx={{
          padding: "100px 24px", // Padding around the section
          margin: "24px auto", // Center the section with vertical margins
          maxWidth: "1200px", // Limit the width for content alignment
          display: "flex",
          flexDirection: "column", // Arrange content vertically
          alignItems: "center", // Center content horizontally
          backgroundColor: "none", // Transparent background
        }}
      >
        <Grid2
          container
          spacing={15} // Adds spacing between grid items
          sx={{
            width: "100%", // Grid spans full width of its container
          }}
        >
          {books.map((book, index) => (
            <Grid2
              item
              xs={12} // Full width on small screens
              sm={6} // Half width on medium screens
              md={4} // One-third width on large screens
              key={index}
              sx={{
                marginBottom: "24px", // Add space between rows
              }}
            >
              <Book
                image={book.image}
                title={book.title}
                description={book.description}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default ResourcesPage;
