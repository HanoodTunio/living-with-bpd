import React from "react";
import { Box, Grid2, Typography, Card, CardMedia, Button } from "@mui/material";

// Local images
import g1 from "../assets/images/g1.png";
import g2 from "../assets/images/g2.png";
import Header from "../components/mainlayout/Header/Header";
import Footer from "../components/mainlayout/Footer/Footer";

const images = [g1, g2, g1, g2, g1, g2, g1, g2]; // Repeat images for demo

const GalleryPage = () => {
  const hexagonImages = [g1, g2, g1, g2, g1, g2]; // Use for the polygon grid in HeroSection

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensure the layout spans the full viewport height
      }}
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: "32px",
          minHeight: "80vh",
          backgroundColor: "transparent", // Transparent background
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            marginRight: { md: "32px" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              marginBottom: "16px",
              lineHeight: "1.2",
              color: "#333",
            }}
          >
            Life With{" "}
            <Typography
              component="span"
              sx={{
                color: "green",
                fontWeight: "bold",
              }}
            >
              Nature
            </Typography>{" "}
            Is Very Fun And{" "}
            <Typography
              component="span"
              sx={{
                color: "#00A86B",
                fontWeight: "bold",
              }}
            >
              Beautiful
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "24px",
              color: "rgba(0, 0, 0, 0.7)",
            }}
          >
            Explore stunning landscapes, breathe in fresh air, and bring your
            creative dreams to life with the power of nature.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginRight: "12px",
              background: "linear-gradient(90deg, #0057B7, #00A86B)",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            Learn More
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#0057B7",
              border: "2px solid #0057B7",
              padding: "8px 16px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            Contact Us
          </Button>
        </Box>

        {/* Hexagonal Image Grid */}
        <Box
          sx={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            justifyItems: "center",
            alignItems: "center",
            marginTop: { xs: "24px", md: 0 },
          }}
        >
          {hexagonImages.map((image, index) => (
            <Box
              key={index}
              sx={{
                width: "150px", // Increased size for larger polygons
                height: "150px",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                },
              }}
            ></Box>
          ))}
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flex: "1",
          padding: "32px 24px",
        }}
      >
        {/* Page Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            marginBottom: "24px",
            textAlign: "center",
            color: "#FF69B4", // Cute pink color
          }}
        >
          Welcome to the Stylish Gallery!
        </Typography>

        {/* Image Grid */}
        <Grid2
          container
          spacing={4}
          sx={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {images.map((image, index) => (
            <Grid2 item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  position: "relative", // For overlay positioning
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)", // Zoom effect
                    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)", // Shadow on hover
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Gallery Image ${index + 1}`}
                  sx={{
                    height: "250px",
                    objectFit: "cover",
                    filter: "brightness(0.9)", // Slightly darken the image
                    transition: "filter 0.3s ease",
                    "&:hover": {
                      filter: "brightness(0.7)", // Darken on hover
                    },
                  }}
                />
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "none",
          color: "white",
          textAlign: "center",
          padding: "0px",
          width: "98vw",
          position: "relative",
          left: 0,
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default GalleryPage;
