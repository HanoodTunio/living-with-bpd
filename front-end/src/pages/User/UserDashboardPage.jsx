import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import UserCard from "../../components/common/UserCard/UserCard";
import UserLayout from "../../components/mainlayout/UserLayout"; // Correct relative path
import backgroundImage from "../../assets/images/backgroundColor.jpg"; // Update path if needed

const UserDashboardPage = () => {
  return (
    <UserLayout>
      {/* Welcome Section */}
      <Box
        sx={{
          marginTop: "90px",
          padding: "16px",
          textAlign: "center",
          zIndex: 5,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#004494",
            marginBottom: "20px",
          }}
        >
          Welcome Back, Rizwan Ali
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#6F6E6E",
            fontSize: "1rem",
            lineHeight: 1.5,
            marginBottom: "32px",
          }}
        >
          We provide you with tools and resources to help improve your mental
          well-being. Here’s how you can make the most of your journey with our
          platform.
        </Typography>
      </Box>

      {/* User Cards Section */}
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Grid2
          container
          spacing={3}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid2 item xs={12} sm={6} md={4}>
            <UserCard
              title="Practice Exercises"
              description="Strengthen your coping mechanisms with our expertly designed exercises."
              image="/src/assets/images/1.png"
              link="/user-dashboard/start-exercises"
              buttonText="Start Your Exercises"
              sx={{ height: "400px" }}
            />
          </Grid2>

          <Grid2 item xs={12} sm={6} md={4}>
            <UserCard
              title="Record Notes with Worksheets"
              description="Track your thoughts, progress, and emotions with our guided worksheets."
              image="/src/assets/images/2.png"
              link="/user-dashboard/worksheets"
              buttonText="WorkSheets"
              sx={{ height: "400px" }}
            />
          </Grid2>

          <Grid2 item xs={12} sm={6} md={4}>
            <UserCard
              title="Binary Tracker"
              description="Monitor your daily emotions, activities, and habits with our tracking tool."
              image="/src/assets/images/3.png"
              link="/user-dashboard/binary-tracker"
              buttonText="Try the Binary Tracker"
              sx={{ height: "400px" }}
            />
          </Grid2>
        </Grid2>
      </Box>
    </UserLayout>
  );
};

export default UserDashboardPage;
