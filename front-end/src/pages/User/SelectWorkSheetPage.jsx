import React from "react";
import { Box, Grid2, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom"; // to handle navigation
import { motion } from "framer-motion"; // for hover effects (optional)
import UserLayout from "../../components/mainlayout/UserLayout"; // Import UserLayout

const SelectWorkSheetPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Dummy data for the worksheet boxes
  const worksheets = [
    {
      id: 1,
      title: "Mindfulness",
      imageUrl: "/src/assets/images/image.png",
      path: "/worksheet-1",
    },
    {
      id: 2,
      title: "Distress Tolerance",
      imageUrl: "/src/assets/images/image (1).png",
      path: "/worksheet-2",
    },
    {
      id: 3,
      title: "Emotion regulation",
      imageUrl: "/src/assets/images/image (2).png",
      path: "/worksheet-3",
    },
    {
      id: 4,
      title: "Interpersonal Skills",
      imageUrl: "/src/assets/images/image (3).png",
      path: "/worksheet-4",
    },
  ];

  return (
    <UserLayout>
      <Box sx={{ padding: "20px" }}>
        <Typography
          variant="h4"
          color="primary"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Select a Worksheet
        </Typography>

        <Grid2 container spacing={10} justifyContent="center" marginTop={20}>
          {worksheets.map((worksheet) => (
            <Grid2 item xs={12} sm={6} md={3} key={worksheet.id}>
              {/* Using motion.div from framer-motion for hover effects */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate(worksheet.path)} // Navigate to the specific worksheet path
              >
                <Box
                  sx={{
                    borderRadius: "8px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover": {
                      boxShadow: `0px 6px 18px ${theme.palette.primary.main}`,
                    },
                  }}
                >
                  <img
                    src={worksheet.imageUrl}
                    alt={worksheet.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderBottom: `1px solid ${theme.palette.divider}`,
                    }}
                  />
                  <Box sx={{ padding: "16px", textAlign: "center" }}>
                    <Typography variant="h6" color="textPrimary">
                      {worksheet.title}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </UserLayout>
  );
};

export default SelectWorkSheetPage;
