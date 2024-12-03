import React from "react";
import { Box, Grid2, Typography, Container } from "@mui/material";
import AdminCardTwo from "../components/common/Admin/AdminCardTwo"; // Adjust the path if necessary
import CustomCard from "../components/common/Admin/AdminCard"; // Assuming you have a CustomCard component
import Flower from "../components/common/Admin/Flower"; // Adjust the import path if needed

const AdminPage = () => {
  // Button click handler for AdminCardTwo
  const handleAdminCardTwoButtonClick = () => {
    alert("Admin Card Two Button Clicked!");
  };

  // Button click handler for CustomCard
  const handleCustomCardButtonClick = () => {
    alert("Custom Card Button Clicked!");
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
              heading="Custom Card 1"
              onButtonClick={handleCustomCardButtonClick}
            />

            {/* Custom Card 2 */}
            <CustomCard
              heading="Custom Card 2"
              onButtonClick={handleCustomCardButtonClick}
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
              heading="Admin Card Two 1"
              onButtonClick={handleAdminCardTwoButtonClick}
            />

            {/* Admin Card Two 2 */}
            <AdminCardTwo
              heading="Admin Card Two 2"
              onButtonClick={handleAdminCardTwoButtonClick}
            />

            {/* Admin Card Two 3 */}
            <AdminCardTwo
              heading="Admin Card Two 3"
              onButtonClick={handleAdminCardTwoButtonClick}
            />
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default AdminPage;
