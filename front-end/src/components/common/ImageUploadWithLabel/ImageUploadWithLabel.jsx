import React from "react";
import { Box, Typography } from "@mui/material";

const ImageUploadWithLabel = ({
  label,
  onChange,
  acceptedFormats = "JPG, GIF, PNG",
}) => {
  return (
    <Box
      sx={{
        textAlign: "left", // Align text to the left
        borderRadius: "8px",
        padding: "16px",
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Label */}
      <Typography
        variant="body1"
        sx={{
          color: "#1D3557",
          fontWeight: "bold",
          marginBottom: "8px", // Adds space below the label
        }}
      >
        {label} <span style={{ color: "red" }}>*</span>
      </Typography>

      {/* File Input */}
      <input
        type="file"
        accept={acceptedFormats
          .split(", ")
          .map((format) => `.${format.toLowerCase()}`)
          .join(",")}
        onChange={onChange}
        style={{
          display: "block",
          margin: "8px 0",
          padding: "8px",
          width: "100%",
          maxWidth: "600px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      {/* Accepted Formats Note */}
      <Typography
        variant="body2"
        sx={{
          marginTop: "4px", // Adjusts spacing between input and format line
          color: "#757575",
        }}
      >
        Valid file formats: {acceptedFormats}.
      </Typography>
    </Box>
  );
};

export default ImageUploadWithLabel;
