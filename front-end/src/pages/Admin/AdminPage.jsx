import React from "react";
import { Box, Grid2, Typography, Container, useTheme } from "@mui/material"; // Using Grid instead of Grid2
import AdminCardTwo from "../../components/common/Admin/AdminCardTwo"; // Ensure this path is correct
import CustomCard from "../../components/common/Admin/AdminCard"; // Ensure this path is correct
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const AdminPage = () => {
  const navigate = useNavigate(); // Hook to navigate to different pages
  const theme = useTheme(); // Access the theme to get primary color

  // Button click handler for AdminCardTwo
  const handleAdminCardTwoButtonClick = (page) => {
    console.log("hello");
    navigate(page); // Navigate to the specified page
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "20px",
        position: "relative",
        backgroundImage: 'url("/src/assets/images/backgroundColor.jpg")', // Correct path for background image
        backgroundSize: "cover", // Make the image cover the entire container
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent background image from repeating
        minHeight: "100vh", // Ensure the background covers the full height of the viewport
      }}
    >
      {/* Header */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "80px",
          position: "relative",
          paddingTop: "80px", // Add space for better positioning
        }}
      >
        <Typography
          variant="h3"
          color="primary"
          sx={{
            fontWeight: "600",
            letterSpacing: "1px", // Add spacing between letters for a professional feel
            textTransform: "uppercase", // Make the text uppercase for emphasis
            marginBottom: "10px", // Add some space below the title
          }}
        >
          Admin Dashboard
        </Typography>

        <Typography
          variant="h6"
          color="textSecondary"
          sx={{
            fontWeight: "400",
            fontSize: "1.1rem", // Slightly larger than normal subheading
            letterSpacing: "0.5px", // Add subtle letter spacing
            opacity: 0.8, // Slight transparency for a more modern look
          }}
        >
          Manage your content and monitor system activity efficiently
        </Typography>
      </Box>

      {/* Grid Container for positioning CustomCards and AdminCardTwo */}
      <Grid2 container spacing={4} justifyContent="center">
        {/* Left Side: CustomCards Container */}
        <Grid2 item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row", // Horizontal layout for CustomCards
              gap: "30px", // Space between custom cards
              alignItems: "center", // Align cards horizontally
            }}
          >
            {/* Custom Card 1 */}
            <CustomCard
              heading="Total Blogs"
              onButtonClick={() =>
                handleAdminCardTwoButtonClick("/admin-dashboard/total-blogs")
              } // Navigate to Total Blogs Page
              sx={{
                // Make the button circular
                borderRadius: "50%",
                padding: "20px",
                height: "80px",
                width: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.palette.primary.main,
                color: "white",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            />

            {/* Custom Card 2 */}
            <CustomCard
              heading="Total Events"
              onButtonClick={() =>
                handleAdminCardTwoButtonClick("/admin-dashboard/total-events")
              } // Navigate to Total Events Page
              sx={{
                // Make the button circular
                borderRadius: "50%",
                padding: "20px",
                height: "80px",
                width: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.palette.primary.main,
                color: "white",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            />
          </Box>
        </Grid2>

        {/* Right Side: AdminCardTwo Container */}
        <Grid2 item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // Stack AdminCards vertically
              gap: "30px", // Space between AdminCards
              marginTop: "50px", // Add some top margin
            }}
          >
            {/* Admin Card Two 1: Create Event */}
            <AdminCardTwo
              heading="Create Event"
              onButtonClick={() =>
                handleAdminCardTwoButtonClick("/admin-dashboard/create-events")
              } // Navigate to Create Event Page
            />

            {/* Admin Card Two 2: Create Blog */}
            <AdminCardTwo
              heading="Create Blog"
              onButtonClick={() =>
                handleAdminCardTwoButtonClick("/admin-dashboard/create-blogs")
              } // Navigate to Create Blog Page
            />

            {/* Admin Card Two 3: Number of Users */}
            <AdminCardTwo
              heading="Number of Users"
              onButtonClick={() =>
                handleAdminCardTwoButtonClick(
                  "/admin-dashboard/number-of-users"
                )
              } // Navigate to Number of Users Page (You can update the route as per your requirements)
            />
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default AdminPage;
