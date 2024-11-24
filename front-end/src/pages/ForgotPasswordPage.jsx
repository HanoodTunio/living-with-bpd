import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Field from "../components/common/Field/Field"; // Reusable Field Component
import Circle from "../components/common/Circle/Circle"; // Reusable Circle Component

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    console.log({ email });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "rgba(60, 143, 124, 0.4)", // 10% opacity for better visibility
        position: "relative",
        overflow: "hidden",
        margin: "0",
        padding: "0",
      }}
    >
      {/* Decorative Circle Components */}
      <Circle size={280} top="5%" left="5%" />
      <Circle size={170} top="2%" left="72%" />
      <Circle size={150} top="50%" left="30%" />
      <Circle size={200} top="80%" left="80%" />
      <Circle size={100} top="20%" left="80%" />
      <Circle size={250} top="60%" left="10%" />
      <Circle size={180} top="30%" left="50%" />
      <Circle size={120} top="90%" left="70%" />

      {/* Forgot Password Box */}
      <Box
        sx={{
          width: "400px",
          padding: "32px",
          borderRadius: "16px",
          textAlign: "center",
        }}
      >
        {/* Logo Section */}
        <Box
          component="img"
          src="src/assets/images/logo.webp" // Replace with the correct path to your logo
          alt="Logo"
          sx={{
            marginBottom: "24px",
            width: "80px", // Adjust width to fit your design
            height: "80px", // Adjust height or remove to maintain aspect ratio
            objectFit: "contain", // Ensure the image is fully visible without distortion
          }}
        />

        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "24px",
            color: "#333",
          }}
        >
          Forgot Password
        </Typography>

        {/* Email Field */}
        <Field
          label="Email"
          icon={<AccountCircleIcon style={{ color: "white" }} />} // White icon
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Reset Password Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            background: "linear-gradient(90deg, #004494, #008456)", // Gradient background
            color: "#fff",
            padding: "10px 16px",
            borderRadius: "8px",
            fontWeight: "bold",
            textTransform: "none",
            marginTop: "16px",
            "&:hover": {
              background: "linear-gradient(90deg, #0057B7, #00A86B)", // Slightly darker gradient
            },
          }}
          onClick={handleResetPassword}
        >
          Reset Password
        </Button>
      </Box>
    </Box>
  );
};

export default ForgotPasswordPage;
