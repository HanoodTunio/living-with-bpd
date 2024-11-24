// src/components/Hero.jsx

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import heroStyles from "./HeroStyles";
import peopleImage from "/src/assets/images/people.png";

const Hero = () => {
  return (
    <Box sx={heroStyles.heroContainer}>
      {/* Overlay Image of Two People */}
      <img src={peopleImage} alt="Two People" style={heroStyles.peopleImage} />

      {/* Text Overlay */}
      <Box sx={heroStyles.textContainer}>
        <Typography variant="h5" sx={heroStyles.smallText}>
          Breaking Boundaries
        </Typography>
        <Typography variant="h2" sx={heroStyles.mainText}>
          Embracing <span style={{ color: "#00A86B" }}>Your Journey</span> With{" "}
          <strong>BPD</strong>
        </Typography>
        <Typography variant="body1" sx={heroStyles.subText}>
          Your Story Deserves to Shine
        </Typography>

        {/* Join Now Button */}
        <Button variant="contained" sx={heroStyles.joinButton}>
          Join Now
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
