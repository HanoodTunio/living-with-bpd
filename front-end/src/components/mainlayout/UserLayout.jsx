import React from "react";
import { Box } from "@mui/material";
import UserHeader from "../../components/mainlayout/UserHeader/UserHeader"; // Correct relative path
import backgroundImage from "../../assets/images/backgroundColor.jpg"; // Update path if needed

const UserLayout = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100%", // Ensure the Box spans the entire viewport
        minHeight: "100vh", // Ensure the page takes up the full viewport height
        backgroundImage: `url(${backgroundImage})`, // Background image
        backgroundSize: "cover", // Cover the whole container
        backgroundPosition: "center", // Center-align the background image
        backgroundRepeat: "no-repeat", // Prevent tiling
        display: "flex", // Flexbox for alignment
        flexDirection: "column", // Stack items vertically
        justifyContent: "flex-start", // Align items at the top
        boxSizing: "border-box", // Include padding in the box model
        margin: 0, // Ensure no margin
        padding: 0, // Ensure no padding
        overflow: "hidden",
      }}
    >
      {/* User Header Section */}
      <Box sx={{ width: "100%", flexShrink: 0 }}>
        <UserHeader />
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          flex: 1,
          width: "100%",
          padding: "20px", // Optional padding for content
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default UserLayout;
