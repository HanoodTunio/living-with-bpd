import React, { useState, useEffect } from "react";
import { TextField, Box, Grid2 } from "@mui/material"; // Use Grid2 as intended
import CustomButton from "../CustomButton/CustomButton"; // Import the CustomButton component

const ProfileForm = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
  });

  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
    });
  }, [user]); // Update the form data when the user changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData); // Send the updated data back to ProfilePage
  };

  return (
    <Box sx={{ paddingTop: 3, paddingBottom: 5 }}>
      {/* Gap between the Profile section and Form */}
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: 3, width: "100%" }}>
          {/* Name Field */}
          <Grid2 container spacing={2} sx={{ width: "100%" }}>
            <Grid2 item xs={12}>
              <TextField
                label="Name"
                variant="standard"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{
                  width: "100%", // Ensures the TextField is full width
                  minWidth: 500, // Prevents the field from shrinking too small
                  maxWidth: 750, // Prevents the field from getting too large
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#ccc", // Lighter underline color
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#3f51b5", // Primary color when focused
                  },
                }}
              />
            </Grid2>
          </Grid2>
        </Box>

        <Box sx={{ marginBottom: 3, width: "100%" }}>
          {/* Email Field */}
          <Grid2 container spacing={2} sx={{ width: "100%" }}>
            <Grid2 item xs={12}>
              <TextField
                label="Email"
                variant="standard"
                fullWidth
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{
                  width: "100%", // Ensures the TextField is full width
                  minWidth: 500, // Prevents the field from shrinking too small
                  maxWidth: 750, // Prevents the field from getting too large
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#ccc", // Lighter underline color
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#3f51b5", // Primary color when focused
                  },
                }}
              />
            </Grid2>
          </Grid2>
        </Box>

        {/* Custom Submit Button */}
        <CustomButton
          text="Update Profile"
          size="medium"
          onClick={handleSubmit}
          variant="contained"
          sx={{
            marginTop: 2,
            display: "inline-block", // Prevent the button from taking full width
            minWidth: 150, // Set a reasonable min width for the button
            maxWidth: 300, // Set a max width to avoid it stretching too far
          }}
        />
      </form>
    </Box>
  );
};

export default ProfileForm;
