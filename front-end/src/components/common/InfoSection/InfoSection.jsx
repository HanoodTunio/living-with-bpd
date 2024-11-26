import React from "react";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ExtensionIcon from "@mui/icons-material/Extension";

const InfoSection = () => {
  const items = [
    {
      icon: <ExtensionIcon style={{ fontSize: 30, color: "black" }} />, // Smaller icon
      title: "UNDERSTANDING DISORDERS",
      description:
        "Explore the complexities of personality disorders and deepen your understanding of mental health challenges.",
    },
    {
      icon: <SearchIcon style={{ fontSize: 30, color: "black" }} />, // Smaller icon
      title: "DIAGNOSIS",
      description:
        "Diagnosis involves assessing symptoms, history, and functioning for accurate identification of BPD.",
    },
    {
      icon: <AddIcon style={{ fontSize: 30, color: "black" }} />, // Smaller icon
      title: "THERAPEUTIC APPROACHES",
      description:
        "Therapeutic approaches for BPD include DBT, CBT, Schema Therapy, MBT, TFP, supportive therapy, and medication.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        padding: "20px",
        textAlign: "left",
        gap: "50px",
        flexWrap: "wrap", // Adjust for responsive layout
        marginTop: "50px",
        marginBottom: "70px",
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: "300px", // Width for each column
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* Icon and Heading Row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px", // Spacing between icon and title
            }}
          >
            {item.icon}
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              {item.title}
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify", // Justified text
              color: "#555",
              fontSize: "14px", // Adjust font size if needed
            }}
          >
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default InfoSection;
