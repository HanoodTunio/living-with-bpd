import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  Grid2,
  IconButton,
  CircularProgress,
  Snackbar,
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import ProfileForm from "../../components/common/UserProfile/ProfileForm";
import PasswordForm from "../../components/common/UserProfile/PasswordForm";
import ProfilePicture from "../../components/common/UserProfile/ProfilePicture";

const UserProfilePage = () => {
  const initialUserData = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "/default-profile.jpg", // Default picture
  };

  const [user, setUser] = useState(initialUserData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar
  const [openDialog, setOpenDialog] = useState(false); // State for Dialog (modal)

  // Simulate fetching user data from the server
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setUser(initialUserData); // Simulate API response (temporary)
      setLoading(false);
    }, 1000); // Simulate network delay
  }, []);

  // Simulate updating the user data
  const handleUpdateProfile = (updatedUser) => {
    setLoading(true);
    setTimeout(() => {
      setUser(updatedUser); // Simulate the updated user data from the server
      setLoading(false);

      // For small screens, show the Snackbar
      if (window.innerWidth <= 600) {
        setOpenSnackbar(true);
      } else {
        // For larger screens, show the Modal (Dialog)
        setOpenDialog(true);
      }
    }, 1000); // Simulate network delay
  };

  // Simulate updating the profile picture
  const handlePictureChange = (newPicture) => {
    setLoading(true);
    setTimeout(() => {
      setUser({ ...user, profilePicture: newPicture }); // Simulate picture change
      setLoading(false);

      // For small screens, show the Snackbar
      if (window.innerWidth <= 600) {
        setOpenSnackbar(true);
      } else {
        // For larger screens, show the Modal (Dialog)
        setOpenDialog(true);
      }
    }, 1000); // Simulate network delay
  };

  if (loading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        sx={{ backgroundColor: "#f4f6f8", position: "relative" }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <Box
      sx={{
        // Applying the background image to the entire page
        backgroundImage: `url('/src/assets/images/backgroundColor.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure the background covers the full viewport height
        display: "flex",
        flexDirection: "column", // Make the content flow vertically
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          zIndex: 2,
          position: "relative",
          paddingTop: "40px",
        }}
      >
        <Box textAlign="center" marginBottom={4}>
          <Typography variant="h4" gutterBottom>
            Profile Overview
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Manage your personal details, update your profile picture, and
            change your password.
          </Typography>
        </Box>

        <Grid2 container spacing={12}>
          {/* Left Column: Profile Picture and User Info */}
          <Grid2 item xs={12} sm={12} md={4}>
            <Box textAlign="center" position="relative" marginBottom={4}>
              <ProfilePicture
                currentPicture={user.profilePicture}
                onPictureChange={handlePictureChange}
              />
              <IconButton
                color="primary"
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
                }}
                onClick={() => document.getElementById("fileInput").click()}
              >
                <CameraAltIcon />
              </IconButton>
            </Box>

            <Box textAlign="left">
              <Typography variant="h6" gutterBottom>
                Profile Details
              </Typography>
              <Box display="flex" flexDirection="column" marginTop={2}>
                <Typography variant="body1" fontWeight="bold">
                  {user.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {user.email}
                </Typography>
              </Box>
            </Box>
          </Grid2>

          {/* Right Column: Profile Form and Password Form */}
          <Grid2 item xs={12} sm={12} md={8} lg={9}>
            <Box marginBottom={4}>
              <ProfileForm user={user} onUpdate={handleUpdateProfile} />
            </Box>
            <Divider sx={{ my: 4 }} />
            <PasswordForm />
          </Grid2>
        </Grid2>

        {/* Snackbar for smaller screens */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity="success">
            Profile updated successfully!
          </Alert>
        </Snackbar>

        {/* Modal for larger screens */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Profile Updated</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Your profile has been updated successfully!
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default UserProfilePage;
