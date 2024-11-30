import React from "react";
import { TextField, Box, Typography } from "@mui/material";

const CardField = ({ label, value, onChange, placeholder }) => {
  return (
    <Box sx={{ marginBottom: "24px" }}>
      {/* Label (Question) above the text field */}
      <Typography variant="h6" sx={{ marginBottom: "8px" }}>
        {label} {/* This is the label text */}
      </Typography>

      {/* The Input Field */}
      <TextField
        variant="filled" // Use the filled variant (no outline)
        fullWidth
        value={value}
        onChange={onChange}
        placeholder={placeholder} // Placeholder for example/demo text
        multiline
        rows={2} // Height of the field to make it compact
        sx={{
          "& .MuiFilledInput-root": {
            backgroundColor: "#f9f9f9", // Light background color
            borderRadius: "8px", // Rounded corners for the input field
            "&:hover": {
              backgroundColor: "#f9f9f9", // No background change on hover
            },
            "&.Mui-focused": {
              backgroundColor: "#f9f9f9", // Keep the background same when focused
              boxShadow: "none", // No shadow on focus
            },
            // Here we completely remove the underline of the filled input field
            "& .MuiFilledInput-underline": {
              display: "none", // Hide the underline completely
            },
          },
          "& .MuiInputBase-input": {
            padding: "12px", // Padding to make text comfortable to read
            fontSize: "16px", // Font size for readability
          },
        }}
      />
    </Box>
  );
};

export default CardField;
