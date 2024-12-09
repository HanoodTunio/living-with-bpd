import React, { useState, useEffect } from "react";
import { Box, Typography, Alert, AlertTitle } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Field from "../../components/common/Field/Field"; // Reusable Field Component
import Circle from "../../components/common/Circle/Circle"; // Reusable Circle Component
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import CustomButton from "../../components/common/CustomButton/CustomButton"; // Import your custom button

// Firebase Auth imports
import { auth, googleAuthProvider } from "../../firebase/firebase"; // Ensure correct firebase imports
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth"; // Import the correct Firebase Auth methods

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

  const [verificationMessage, setVerificationMessage] = useState("");
  const [googleError, setGoogleError] = useState(""); // Google login error message
  const [isEmailVerified, setIsEmailVerified] = useState(false); // Track email verification
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

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User:", user);

      // After successful Google sign-in, check if it's a new user or an existing one
      const userExists =
        user.metadata.creationTime === user.metadata.lastSignInTime;

      if (userExists) {
        console.log("New user registered via Google");

        // Ensure persistence is set to LOCAL to keep the user logged in
        auth.setPersistence("local").then(() => {
          navigate("/user-dashboard"); // Redirect after successful login/registration
        });
      } else {
        console.log("Existing Google user logged in");

        // Again ensure persistence and then navigate
        auth.setPersistence("local").then(() => {
          navigate("/user-dashboard"); // Redirect after successful login
        });
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
      if (error.code === "auth/popup-closed-by-user") {
        setGoogleError(
          "The popup was closed before completing the sign-in. Please try again."
        );
      } else if (error.code === "auth/network-request-failed") {
        setGoogleError(
          "Network error. Please check your connection and try again."
        );
      } else if (error.code === "auth/cancelled-popup-request") {
        setGoogleError("Sign-in was cancelled. Please try again.");
      } else {
        setGoogleError("Failed to sign in with Google. Please try again.");
      }
    }
  };

  useEffect(() => {
    // Listen to auth state changes to navigate the user to their dashboard after successful login
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Only navigate to dashboard if user email is verified
        if (user.emailVerified) {
          setIsEmailVerified(true);
        } else {
          setVerificationMessage("Please verify your email before continuing.");
        }
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  useEffect(() => {
    if (isEmailVerified) {
      navigate("/user-dashboard");
    }
  }, [isEmailVerified, navigate]); // Trigger navigation only after email is verified

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
        }}
      >
        {/* Logo Section */}
        <Box
          component="img"
          src="src/assets/images/logo.webp" // Ensure correct path to your logo
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
            marginBottom: "24px",
            color: "#555",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#0073e6" }}
          >
            Log in
          </Link>
        </Typography>

        {/* Username */}
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
            label="Username"
            icon={<AccountCircleIcon sx={{ color: "white" }} />}
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
        </Box>

        {/* Email */}
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
            icon={<EmailIcon sx={{ color: "white" }} />}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Box>

        {/* Password */}
        <Box sx={{ marginBottom: "24px", textAlign: "left" }}>
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
            icon={<LockIcon sx={{ color: "white" }} />}
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Box>

        {/* Sign Up Button */}
        <CustomButton
          text="Sign Up"
          onClick={handleSignUp}
          sx={{ width: "100%" }}
        />

        {/* Google Sign-In */}
        <Box sx={{ marginTop: "16px" }}>
          <CustomButton
            text="Continue with Google"
            variant="outlined"
            onClick={handleGoogleSignIn}
            sx={{
              width: "100%",
              borderColor: "#ddd",
              color: "#004494",
              fontWeight: "bold",
              padding: "10px",
            }}
            icon={<GoogleIcon sx={{ color: "#004494", marginRight: "8px" }} />}
          />
        </Box>

        {/* Verification or Error Message */}
        {verificationMessage && (
          <Alert severity="info" sx={{ marginTop: "24px" }}>
            <AlertTitle>Info</AlertTitle>
            {verificationMessage}
          </Alert>
        )}
        {googleError && (
          <Alert severity="error" sx={{ marginTop: "16px" }}>
            <AlertTitle>Error</AlertTitle>
            {googleError}
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default SignUpPage;
