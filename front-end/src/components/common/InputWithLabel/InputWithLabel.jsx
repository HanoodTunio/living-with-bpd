import React from "react";
import { Box, Typography, TextField } from "@mui/material";

const InputWithLabel = ({ label, placeholder, value, onChange }) => {
  return (
    <Box sx={{ marginBottom: "24px" }}>
      {/* Label */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: "bold",
          marginBottom: "8px",
          color: "#1D3557", // Dark blue color
        }}
      >
        {label} <span style={{ color: "red" }}>*</span>
      </Typography>

      {/* Input Field */}
      <TextField
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        value={value}
        onChange={onChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px", // Rounded corners
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Slight transparency
          },
        }}
      />
    </Box>
  );
};

export default InputWithLabel;
