// src/components/SupportProjectsSection.jsx

import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import heartIcon from "../../../assets/images/heart.png";

import {
  sectionStyles,
  headingBoxStyles,
  subtitleStyles,
  cardStyles,
  iconStyles,
  titleStyles,
  descriptionStyles,
  animationKeyframes,
} from "./SupportProjectsStyles";

const supportProjects = [
  {
    icon: heartIcon,
    title: "Awareness & Education",
    description:
      "Raising awareness and providing education about personality disorders to reduce stigma.",
  },
  {
    icon: heartIcon,
    title: "Community Integration",
    description:
      "Fostering community acceptance and support networks for individuals living with personality disorders.",
  },
  {
    icon: heartIcon,
    title: "Therapy & Rehabilitation",
    description:
      "Providing therapeutic interventions and rehabilitation programs to support mental wellness and recovery.",
  },
];

const SupportProjectsSection = () => {
  return (
    <Box sx={{ ...sectionStyles, ...animationKeyframes }}>
      <Box sx={headingBoxStyles}>
        <Typography variant="h5">
          BPD <span style={{ color: "#0057B7" }}>Support Projects</span>
        </Typography>
      </Box>

      <Typography sx={subtitleStyles}>
        Supporting individuals and families affected by Borderline Personality
        Disorder.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {supportProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={cardStyles}>
              <CardContent>
                <img
                  src={project.icon}
                  alt={project.title}
                  style={iconStyles}
                />
                <Typography variant="h6" sx={titleStyles}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={descriptionStyles}>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SupportProjectsSection;
