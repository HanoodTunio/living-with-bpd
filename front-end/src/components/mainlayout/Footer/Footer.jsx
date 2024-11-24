// src/components/common/Footer/Footer.jsx
import React from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import LocationOn from "@mui/icons-material/LocationOn";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";

import {
  FooterContainer,
  CircleStyled,
  GridContainer,
  SectionTitle,
  ContactInfo,
  LinkStyled,
  SignupCard,
  FooterBottom,
  HeadingWrapper,
  Heading,
  SocialLinks,
} from "./FooterStyles";

const Footer = () => {
  return (
    <>
      {/* Contact Us Heading */}
      <HeadingWrapper>
        <Heading>Contact Us</Heading>
      </HeadingWrapper>

      {/* Main Footer Section */}
      <FooterContainer>
        {/* Decorative Circles */}
        <CircleStyled
          size="300px"
          color="#3CAF99"
          position={{ top: "-10%", right: "0%" }}
          opacity={0.2}
        />
        <CircleStyled
          size="200px"
          color="#3CAF99"
          position={{ bottom: "-1%", right: "30%" }}
          opacity={0.3}
        />
        <CircleStyled
          size="150px"
          color="#3CAF99"
          position={{ top: "65%", right: "0%" }}
          opacity={0.15}
        />
        <CircleStyled
          size="100px"
          color="#3CAF99"
          position={{ top: "-10%", right: "20%" }}
          opacity={0.15}
        />
        <CircleStyled
          size="20px"
          color="#3CAF99"
          position={{ top: "-10%", right: "20%" }}
          opacity={0.15}
        />
        <CircleStyled
          size="40px"
          color="#3CAF99"
          position={{ top: "0%", right: "30%" }}
          opacity={0.15}
        />
        <CircleStyled
          size="80px"
          color="#3CAF99"
          position={{ top: "65%", right: "20%" }}
          opacity={0.15}
        />

        {/* Main Content */}
        <GridContainer container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>Reach Us</SectionTitle>
            <ContactInfo>
              <Typography variant="body1" gutterBottom>
                <Phone /> +1012 3456 789
              </Typography>
              <Typography variant="body1" gutterBottom>
                <Email /> demo@gmail.com
              </Typography>
              <Typography variant="body1" gutterBottom>
                <LocationOn /> 132 Dartmouth Street, Boston, MA 02156, USA
              </Typography>
            </ContactInfo>
            <SocialLinks>
              <IconButton
                href="https://www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://www.facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>
            </SocialLinks>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <SectionTitle>Company</SectionTitle>
            <LinkStyled href="#">About</LinkStyled>
            <LinkStyled href="#">Contact</LinkStyled>
            <LinkStyled href="#">Blogs</LinkStyled>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <SectionTitle>Quick Links</SectionTitle>
            <LinkStyled href="#">Techlabz Keybox</LinkStyled>
            <LinkStyled href="#">Downloads</LinkStyled>
            <LinkStyled href="#">Forum</LinkStyled>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <SignupCard>
              <Typography variant="h6" gutterBottom>
                Login for Exercises
              </Typography>
              <Button variant="contained" fullWidth>
                Subscribe
              </Button>
              <Typography variant="caption" sx={{ mt: 2 }}>
                * Will send you weekly updates for your better tool management.
              </Typography>
            </SignupCard>
          </Grid>
        </GridContainer>

        {/* Divider and Footer Bottom */}
        <Divider sx={{ my: 2, backgroundColor: "#D1D5DB" }} />
        <FooterBottom>
          <Typography variant="body2" sx={{ color: "#D1D5DB" }}>
            &copy; 2023 Your Company. All rights reserved.
          </Typography>
        </FooterBottom>
      </FooterContainer>
    </>
  );
};

export default Footer;
