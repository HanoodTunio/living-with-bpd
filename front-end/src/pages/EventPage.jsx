// src/pages/EventPage.jsx
import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const events = [
  { title: "Event 1", date: "2024-11-28" },
  { title: "Event 2", date: "2024-12-05" },
  { title: "Event 3", date: "2024-12-15" },
];

const EventPage = () => {
  return (
    <Box
      sx={{
        padding: "16px",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "16px",
          fontWeight: "bold",
          color: "#0057B7",
        }}
      >
        Upcoming Events
      </Typography>

      <List>
        {events.map((event, index) => (
          <ListItem
            key={index}
            sx={{
              padding: "12px",
              marginBottom: "8px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <ListItemText
              primary={event.title}
              secondary={`Date: ${new Date(event.date).toLocaleDateString()}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default EventPage;
