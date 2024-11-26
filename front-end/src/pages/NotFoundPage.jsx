import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirect to the home page
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        padding: "32px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "72px", sm: "96px" },
          fontWeight: "bold",
          color: "#343a40",
        }}
      >
        404
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginBottom: "24px",
          fontSize: { xs: "16px", sm: "20px" },
          color: "#6c757d",
        }}
      >
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#007bff",
          color: "#fff",
          fontWeight: "bold",
          textTransform: "none",
          padding: "8px 16px",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#0056b3",
          },
        }}
        onClick={handleGoHome}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
