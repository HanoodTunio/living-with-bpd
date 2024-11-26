import React from "react";
import { Box } from "@mui/material";
import Header from "./Header/Header"; // Correct relative path
import Footer from "./Footer/Footer"; // Correct relative path
import backgroundImage from "../../assets/images/backgroundColor.jpg"; // Update path if needed

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "120vh", // Ensure the page takes up the full viewport height
        backgroundImage: `url(${backgroundImage})`, // Background image
        backgroundSize: "cover", // Cover the whole container
        backgroundPosition: "center", // Center-align the background image
        backgroundRepeat: "no-repeat", // Prevent tiling
        display: "flex", // Flexbox for alignment
        flexDirection: "column", // Stack items vertically
        justifyContent: "flex-start", // Align items at the top
        boxSizing: "border-box", // Include padding in the box model
      }}
    >
      {/* Header Section */}
      <Box sx={{ width: "100%", flexShrink: 0 }}>
        <Header />
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          flex: 1,
          width: "100%",
        }}
      >
        {children}
      </Box>

      {/* Footer Section */}
      <Box sx={{ width: "100%", flexShrink: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
