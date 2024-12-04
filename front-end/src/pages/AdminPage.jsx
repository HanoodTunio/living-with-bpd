import React from "react";
import { Box, Grid2, Typography, Container } from "@mui/material";
import AdminCardTwo from "../components/common/Admin/AdminCardTwo"; // Adjust the path if necessary
import CustomCard from "../components/common/Admin/AdminCard"; // Assuming you have a CustomCard component
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const AdminPage = () => {
  const navigate = useNavigate(); // Hook to navigate to different pages

  // Button click handler for AdminCardTwo
  const handleAdminCardTwoButtonClick = (page) => {
    navigate(page); // Navigate to the specified page
  };

  return (
    <Container maxWidth="xl" sx={{ padding: "20px", position: "relative" }}>
      {/* Header */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "100px",
          position: "relative",
        }}
      >
        <Typography variant="h3" color="primary" sx={{ fontWeight: "bold" }}>
          Admin Dashboard
        </Typography>
      </Box>

      {/* Grid Container for positioning CustomCards and AdminCardTwo */}
      <Grid2 container spacing={16} justifyContent="center">
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
                handleAdminCardTwoButtonClick("/total-blogs")
              } // Navigate to Total Blogs Page
            />

            {/* Custom Card 2 */}
            <CustomCard
              heading="Total Events"
              onButtonClick={() =>
                handleAdminCardTwoButtonClick("/total-events")
              } // Navigate to Total Events Page
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
            {/* Admin Card Two 1 */}
            <AdminCardTwo
              heading="Create Event"
              onButtonClick={handleAdminCardTwoButtonClick}
            />

            {/* Admin Card Two 2 */}
            <AdminCardTwo
              heading="Create Blog"
              onButtonClick={handleAdminCardTwoButtonClick}
            />

            {/* Admin Card Two 3 */}
            <AdminCardTwo
              heading="Number of Users"
              onButtonClick={handleAdminCardTwoButtonClick}
            />
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default AdminPage;
