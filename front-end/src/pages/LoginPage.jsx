import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Field from "../components/common/Field/Field"; // Reusable Field Component
import Circle from "../components/common/Circle/Circle"; // Reusable Circle Component
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

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

      {/* Additional Circles */}
      <Circle size={100} top="20%" left="80%" />
      <Circle size={250} top="60%" left="10%" />
      <Circle size={180} top="30%" left="50%" />
      <Circle size={120} top="90%" left="70%" />

      {/* Login Box */}
      <Box
        sx={{
          width: "400px",
          padding: "32px",
          backgroundColor: "none", // Subtle transparenc,
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
          Sign In
        </Typography>

        {/* Input Fields */}
        <Field
          label="Username"
          icon={<AccountCircleIcon style={{ color: "white" }} />} // White icon
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Field
          label="Password"
          icon={<LockIcon style={{ color: "white" }} />} // White icon
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

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

        {/* Forgot Password */}
        <Typography
          variant="body2"
          sx={{
            marginTop: "16px",
            color: "rgba(0, 0, 0, 0.6)",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Forgot password?
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
