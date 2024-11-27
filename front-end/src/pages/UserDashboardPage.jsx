import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import UserHeader from "../components/mainlayout/UserHeader/UserHeader"; // Import UserHeader component
import UserCard from "../components/common/UserCard/UserCard"; // Import UserCard component
import backgroundImage from "../assets/images/backgroundColor.jpg"; // Import background image

const UserDashboardPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh", // Ensure the background image covers the entire viewport height
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column", // Stack content vertically
      }}
    >
      {/* User Header Section */}
      <Box
        sx={{
          position: "fixed", // Fix the header at the top of the page
          top: 10, // Align the header at the very top of the page
          left: 0, // Align the header to the left
          width: "100%", // Ensure it spans the entire width
          zIndex: 10, // Make sure the header is above all other content
        }}
      >
        <UserHeader />
      </Box>

      {/* Welcome Section Below the Header */}
      <Box
        sx={{
          marginTop: "90px", // Add margin-top to prevent overlap with the fixed header
          padding: "16px", // Add padding for the welcome section
          textAlign: "center", // Center the text
          zIndex: 5,
        }}
      >
        <Typography
          variant="h4" // Adjust the size for the heading
          sx={{
            fontWeight: "bold",
            color: "#004494", // Set heading color as per your design
            marginBottom: "20px", // Add spacing below the heading
          }}
        >
          Welcome Back, Rizwan Ali
        </Typography>
        <Typography
          variant="body1" // Body text styling
          sx={{
            color: "#6F6E6E", // Set paragraph color
            fontSize: "1rem", // Adjust the font size for the paragraph
            lineHeight: 1.5, // Improve readability by adjusting line height
            marginBottom: "32px", // Add space below the paragraph
          }}
        >
          We provide you with tools and resources to help improve your mental
          well-being. Here’s how you can make the most of your journey with our
          platform.
        </Typography>
      </Box>

      {/* User Cards Section */}
      <Box
        sx={{
          flex: 1, // Make sure the content below header expands and takes the rest of the space
          padding: "16px", // Padding for content
        }}
      >
        {/* Centering the grid and adding spacing between cards */}
        <Grid2
          container
          spacing={3}
          justifyContent="center" // Centers the items horizontally
          alignItems="flex-start" // Align items to the top (optional, you can change to center if needed)
        >
          <Grid2 item xs={12} sm={6} md={4}>
            <UserCard
              title="Practice Exercises"
              description="Strengthen your coping mechanisms with our expertly designed exercises. From mindfulness to emotional regulation, these activities will help you navigate life more"
              image="src/assets/images/1.png"
              link="/profile"
              buttonText="Start Your Exercises"
            />
          </Grid2>

          <Grid2 item xs={12} sm={6} md={4}>
            <UserCard
              title="Record Notes with Worksheets"
              description="Track your thoughts, progress, and emotions with our guided worksheets. Keeping detailed records can help you identify patterns and celebrate small victories."
              image="src/assets/images/2.png"
              link="/orders"
              buttonText="WorkSheets"
            />
          </Grid2>

          <Grid2 item xs={12} sm={6} md={4}>
            <UserCard
              title="Binary Tracker"
              description="Monitor your daily emotions, activities, and habits with our binary tracking tool. Get insights into your patterns and work towards consistent improvement."
              image="src/assets/images/3.png"
              link="/settings"
              buttonText="Try the Binary Tracker"
            />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default UserDashboardPage;
