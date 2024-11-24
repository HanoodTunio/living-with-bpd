// src/pages/EventsSection.jsx

import React from "react";
import { Box, Typography, Link, Grid2 } from "@mui/material";
import EventCard from "../../common/EventCard/EventCard";
import eventImage1 from "../../../assets/images/event1.jpeg";
import eventImage2 from "../../../assets/images/event2.jpeg";
import eventImage3 from "../../../assets/images/event1.jpeg";
import underlineImage from "../../../assets/images/vector.png"; // Import the vector/PNG image

const eventData = [
  {
    image: eventImage1,
    title: "Cricket Business Meetup",
    description:
      "Join us for an exciting cricket and business networking event.",
    date: "08 Dec",
    location: "The Turf, Malad, Mumbai",
    category: "Sports & Fitness",
  },
  {
    image: eventImage2,
    title: "Valentine's Day Sail",
    description: "Enjoy a romantic sail on a yacht in Mumbai.",
    date: "14 Feb",
    location: "Mumbai",
    category: "Travel & Adventure",
  },
  {
    image: eventImage3,
    title: "Tech Startup Expo",
    description:
      "Explore the latest in technology and startups at our annual expo.",
    date: "20 Jan",
    location: "BKC, Mumbai",
    category: "Business & Tech",
  },
];

const EventsSection = () => {
  return (
    <Box sx={{ padding: { xs: "0 16px", md: "0 40px" }, marginBottom: "40px" }}>
      {/* Heading and "See More" Link Container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
          paddingTop: "80px",
        }}
      >
        {/* Centered Title and Underline Image */}
        <Box sx={{ textAlign: "center", flex: 1, position: "relative" }}>
          <Typography
            sx={{
              color: "#00A86B",
              fontWeight: "bold",
              fontSize: "1.5rem",
              position: "relative",
              display: "inline-block",
            }}
          >
            Events
            {/* Decorative Underline Image */}
            <img
              src={underlineImage}
              alt="Underline Decoration"
              style={{
                position: "absolute",
                bottom: "-5px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "50px",
              }}
            />
          </Typography>
        </Box>

        {/* "See More" Link aligned to the right */}
        <Link
          href="/events"
          underline="hover"
          sx={{
            fontSize: "0.9rem",
            color: "#0057B7",
            fontWeight: "bold",
            textDecoration: "underline",
            cursor: "pointer",
            marginLeft: "auto",
          }}
        >
          See More
        </Link>
      </Box>

      {/* Grid Container for Event Cards */}
      <Grid2 container spacing={3} alignItems="stretch">
        {eventData.map((event, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <EventCard {...event} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default EventsSection;
