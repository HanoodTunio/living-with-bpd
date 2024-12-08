import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import Field from "../../components/common/Field/Field"; // Reusable Field Component
import Circle from "../../components/common/Circle/Circle"; // Reusable Circle Component
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";

const SignUpPage = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSignUp = (e) => {
    e.preventDefault();

    // Simulate form submission (Replace with actual backend logic in the future)
    console.log("Form Submitted:", formData);

    // Simulate a successful signup by redirecting to the dashboard
    // In future, you may want to make an API call here to create the user in the database
    navigate("/user-dashboard");
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
          src="src/assets/images/logo.webp" // Replace with correct path to logo
          alt="Logo"
          sx={{
            marginBottom: "24px",
            width: "80px", // Adjust width as needed
            height: "80px", // Adjust height or remove to maintain aspect ratio
            objectFit: "contain", // Ensure no distortion
          }}
        />

        {/* Sign Up Heading */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "16px",
            color: "#333",
          }}
        >
          Sign Up
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
            marginBottom: "24px", // Margin for spacing
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login" // Navigate to Login page
            style={{
              color: "#004494", // Blue color for the link
              textDecoration: "underline",
              fontWeight: "bold",
              position: "relative",
              zIndex: 1,
            }}
          >
            Login
          </Link>
        </Typography>

        {/* Input Fields */}
        <Field
          label="User Name"
          icon={<AccountCircleIcon style={{ color: "white" }} />} // White icon
          name="username"
          value={formData.username}
          onChange={handleChange}
          sx={{ marginBottom: "16px" }}
        />
        <Field
          label="Email"
          icon={<EmailIcon style={{ color: "white" }} />} // White icon
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ marginBottom: "16px" }}
        />
        <Field
          label="Password"
          icon={<LockIcon style={{ color: "white" }} />} // White icon
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          sx={{ marginBottom: "16px" }}
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
            background: "linear-gradient(90deg, #004494, #008456)",
            color: "#fff",
            padding: "10px 16px",
            borderRadius: "8px",
            fontWeight: "bold",
            textTransform: "none",
            marginTop: "16px",
            "&:hover": {
              background: "linear-gradient(90deg, #0057B7, #00A86B)",
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
