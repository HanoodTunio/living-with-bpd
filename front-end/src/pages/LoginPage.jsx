import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation
import Field from "../components/common/Field/Field"; // Reusable Field Component
import Circle from "../components/common/Circle/Circle"; // Reusable Circle Component
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log({ username, password });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Full height of the screen
        backgroundColor: "rgba(60, 143, 124, 0.4)", // 10% opacity for better visibility
        position: "relative",
        overflow: "hidden", // Hide overflow to avoid vertical scroll
        margin: "0",
        padding: "0",
        boxSizing: "border-box", // Ensure padding does not cause overflow
      }}
    >
      {/* Decorative Circle Components */}
      <Circle size={280} top="5%" left="5%" />
      <Circle size={170} top="2%" left="72%" />
      <Circle size={150} top="50%" left="30%" />
      <Circle size={200} top="80%" left="80%" />

      {/* Additional Circles */}
      <Circle size={100} top="20%" left="80%" />
      <Circle size={250} top="60%" left="10%" />
      <Circle size={180} top="30%" left="50%" />
      <Circle size={120} top="90%" left="70%" />

      {/* Login Box */}
      <Box
        sx={{
          width: "400px",
          padding: "30px",
          backgroundColor: "none", // Subtle transparency
          textAlign: "center",
          boxSizing: "border-box", // Ensures padding is accounted for inside the box
          maxHeight: "80vh", // Limit the height to prevent overflow
          overflowY: "auto", // Allow scrolling if necessary within the login box itself
        }}
      >
        {/* Logo Section */}
        <Box
          component="img"
          src="src/assets/images/logo.webp" // Replace with the correct path to your logo
          alt="Logo"
          sx={{
            marginBottom: "2px",
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
          Sign In
        </Typography>

        {/* Input Fields */}
        <Field
          label="Username"
          icon={<AccountCircleIcon style={{ color: "white" }} />} // White icon
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            marginBottom: "16px", // Consistent margin for all input fields
          }}
        />
        <Field
          label="Password"
          icon={<LockIcon style={{ color: "white" }} />} // White icon
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            marginBottom: "16px", // Consistent margin for all input fields
          }}
        />

        {/* Forgot Password and Sign-In Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "8px",
          }}
        >
          {/* Forgot Password */}
          <Link
            to="/forgot-password" // Navigate to Forgot Password page
            style={{
              color: "rgba(0, 0, 0, 0.6)",
              textDecoration: "underline",
              fontSize: "0.9rem",
            }}
          >
            Forgot password?
          </Link>
        </Box>

        {/* Sign-In Button */}
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
          onClick={handleLogin}
        >
          Sign In
        </Button>

        {/* Sign-Up Link */}
        <Typography
          variant="body2"
          sx={{
            marginTop: "16px",
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#004494", // Blue color for link
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
