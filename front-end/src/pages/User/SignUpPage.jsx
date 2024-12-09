import React, { useState } from "react";
import { Box, Typography, Button, Alert, AlertTitle } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Field from "../../components/common/Field/Field"; // Reusable Field Component
import Circle from "../../components/common/Circle/Circle"; // Reusable Circle Component
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";

// Firebase Auth imports
import { auth } from "../../firebase/firebase"; // Make sure you import auth from your firebase config
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [verificationMessage, setVerificationMessage] = useState(""); // State to show the verification message
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Reset errors before checking
    setErrors({
      username: "",
      email: "",
      password: "",
    });

    // Simple validation check - check one field at a time
    if (!formData.username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username is required!",
      }));
      return;
    }

    if (!formData.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required!",
      }));
      return;
    }

    if (!formData.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required!",
      }));
      return;
    }

    // Firebase Authentication - Create User
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log("User signed up: ", user);

        // Send email verification
        sendEmailVerification(user)
          .then(() => {
            console.log("Verification email sent.");
            setVerificationMessage(
              "A verification email has been sent to your email address. Please verify to continue."
            );
          })
          .catch((error) => {
            console.error("Error sending verification email: ", error);
            setVerificationMessage(
              "There was an issue sending the verification email. Please try again."
            );
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // Handle Firebase Errors
        console.error("Error during sign-up: ", errorCode, errorMessage);
        if (errorCode === "auth/email-already-in-use") {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "This email is already in use. Please try another.",
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: errorMessage,
          }));
        }
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "rgba(60, 143, 124, 0.4)",
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
          // backgroundColor: "white",
          //boxShadow: 2,
        }}
      >
        {/* Logo Section */}
        <Box
          component="img"
          src="src/assets/images/logo.webp" // Replace with correct path to logo
          alt="Logo"
          sx={{
            marginBottom: "24px",
            width: "80px",
            height: "80px",
            objectFit: "contain",
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
            marginBottom: "24px",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login" // Navigate to Login page
            style={{
              color: "#004494",
              textDecoration: "underline",
              fontWeight: "bold",
              position: "relative",
              zIndex: 1,
            }}
          >
            Login
          </Link>
        </Typography>

        {/* Input Fields with Error Messages Above */}
        <Box sx={{ marginBottom: "16px", textAlign: "left" }}>
          {errors.username && (
            <Typography
              color="error"
              sx={{ fontSize: "0.8rem", marginBottom: "4px" }}
            >
              {errors.username}
            </Typography>
          )}
          <Field
            label="User Name"
            icon={<AccountCircleIcon style={{ color: "white" }} />}
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ marginBottom: "16px", textAlign: "left" }}>
          {errors.email && (
            <Typography
              color="error"
              sx={{ fontSize: "0.8rem", marginBottom: "4px" }}
            >
              {errors.email}
            </Typography>
          )}
          <Field
            label="Email"
            icon={<EmailIcon style={{ color: "white" }} />}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ marginBottom: "16px", textAlign: "left" }}>
          {errors.password && (
            <Typography
              color="error"
              sx={{ fontSize: "0.8rem", marginBottom: "4px" }}
            >
              {errors.password}
            </Typography>
          )}
          <Field
            label="Password"
            icon={<LockIcon style={{ color: "white" }} />}
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Box>

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

        {/* Verification message styled professionally */}
        {verificationMessage && (
          <Alert
            severity="success"
            sx={{
              marginTop: "16px",
              borderRadius: "8px",
              padding: "10px",
              boxShadow: 1,
            }}
          >
            <AlertTitle sx={{ fontWeight: "bold" }}>
              Verification Sent
            </AlertTitle>
            {verificationMessage}
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default SignUpPage;
