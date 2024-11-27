import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation
import Field from "../components/common/Field/Field"; // Reusable Field Component
import Circle from "../components/common/Circle/Circle"; // Reusable Circle Component
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log({ username, email, password });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "rgba(60, 143, 124, 0.4)", // Subtle background color with transparency
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

      {/* Sign-Up Box */}
      <Box
        sx={{
          width: "400px",
          padding: "30px",
          borderRadius: "16px",
          textAlign: "center",
          boxSizing: "border-box",
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

        {/* Sign Up Heading */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px", // Reduced margin for spacing between heading and the link
            color: "#333",
          }}
        >
          Sign Up
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
            marginBottom: "24px", // Added margin to create spacing between the link and form fields
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login" // Navigate to Login page
            style={{
              color: "#004494", // Blue color for link
              textDecoration: "underline",
              fontWeight: "bold",
              position: "relative", // Ensuring it's above other content
              zIndex: 1, // Makes sure it's clickable if overlapping elements exist
            }}
          >
            Login
          </Link>
        </Typography>

        {/* Input Fields */}
        <Field
          label="User Name"
          icon={<AccountCircleIcon style={{ color: "white" }} />} // White icon
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            marginBottom: "16px", // Consistent margin for all input fields
          }}
        />
        <Field
          label="Email"
          icon={<EmailIcon style={{ color: "white" }} />} // White icon
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        {/* Google Sign-In */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            margin: "16px 0",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#333",
              marginRight: "8px",
              fontWeight: "bold",
            }}
          >
            CONTINUE WITH
          </Typography>
          <GoogleIcon sx={{ color: "blue", fontSize: "28px" }} />
        </Box>

        {/* Sign-Up Button */}
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
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpPage;
