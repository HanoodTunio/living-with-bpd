import React, { useState } from "react";
import { Box, Grid2, TextField, Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton"; // Import the CustomButton component

const PasswordForm = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("/api/user/change-password", {
        // Replace with your endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passwords),
      });

      if (!response.ok) {
        throw new Error("Failed to change password");
      }

      alert("Password changed successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ width: "100%", marginBottom: 2 }}>
        <Grid2 container spacing={2} direction="column">
          <Grid2 item>
            <TextField
              label="Current Password"
              type="password"
              name="currentPassword"
              value={passwords.currentPassword}
              onChange={handleChange}
              required
              fullWidth
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#ccc", // Lighter underline color
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#3f51b5", // Primary color when focused
                },
              }}
            />
          </Grid2>

          <Grid2 item>
            <TextField
              label="New Password"
              type="password"
              name="newPassword"
              value={passwords.newPassword}
              onChange={handleChange}
              required
              fullWidth
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#ccc", // Lighter underline color
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#3f51b5", // Primary color when focused
                },
              }}
            />
          </Grid2>

          <Grid2 item>
            <TextField
              label="Confirm New Password"
              type="password"
              name="confirmPassword"
              value={passwords.confirmPassword}
              onChange={handleChange}
              required
              fullWidth
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#ccc", // Lighter underline color
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#3f51b5", // Primary color when focused
                },
              }}
            />
          </Grid2>

          <Grid2 item>
            {/* Replace default Button with CustomButton */}
            <CustomButton
              text="Change Password"
              size="medium"
              onClick={handleSubmit}
              variant="contained"
              sx={{ marginTop: 2 }} // Optional custom styling for spacing
            />
          </Grid2>
        </Grid2>
      </Box>
    </form>
  );
};

export default PasswordForm;
