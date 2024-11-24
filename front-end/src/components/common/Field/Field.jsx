import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";

const Field = ({ label, icon, type = "text", value, onChange }) => {
  return (
    <Box sx={{ width: "100%", marginBottom: "16px" }}>
      <TextField
        variant="outlined"
        fullWidth
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label} // Placeholder text
        slotProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box
                sx={{
                  color: "white", // White icon color
                  fontSize: "20px", // Adjust the size of the icon
                }}
              >
                {icon}
              </Box>
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px", // Rounded corners
            backgroundColor: "rgba(60, 143, 124, 0.05)", // Light background (5% opacity of 3C8F7C)
            border: "1px solid white", // Thin white border
            boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.4)", // Subtle shadow for default state
            color: "#1D3557", // Input text color
            transition: "all 0.3s ease", // Smooth transitions for hover and focus
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white", // Keep outline white on hover
            },
            "&.Mui-focused": {
              backgroundColor: "rgba(60, 143, 124, 0.05)", // Keep field background consistent
              borderColor: "white", // Keep border white on focus
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)", // Stronger shadow on focus
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Ensure border remains white
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "white", // No blue border when focused
            },
          "& .MuiOutlinedInput-input": {
            color: "#1D3557", // Input text color
            fontWeight: "bold", // Slightly bold for better readability
          },
          "& .MuiInputAdornment-root": {
            color: "white", // Icon stays white
          },
        }}
      />
    </Box>
  );
};

export default Field;
