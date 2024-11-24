// src/layouts/Header.jsx

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import headerStyles from "./HeaderStyles";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = ["Home", "Events", "Resources", "Blogs", "More"];

  return (
    <AppBar position="static" color="default" sx={headerStyles.appBar}>
      <Toolbar sx={headerStyles.toolbar}>
        {/* Logo Section */}
        <Box sx={headerStyles.logoContainer}>
          <img
            src="/src/assets/images/logo.webp"
            alt="BPD.in Logo"
            style={headerStyles.logoImage}
          />
          <Typography variant="h6" component="div" sx={headerStyles.logoText}>
            BPD.in
          </Typography>
        </Box>

        {/* Navigation Links and Sign Up Button */}
        <Box sx={headerStyles.navLinksContainer}>
          {navLinks.map((link, index) => (
            <Button
              key={index}
              color="inherit"
              sx={link === "Home" ? headerStyles.activeLink : headerStyles.link}
            >
              {link}
            </Button>
          ))}
          <Button variant="contained" sx={headerStyles.signUpButton}>
            Sign Up
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleDrawer}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for Mobile Navigation */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <List>
            {navLinks.map((link, index) => (
              <ListItem button key={index}>
                <ListItemText primary={link} />
              </ListItem>
            ))}
            <ListItem button>
              <Button variant="contained" sx={headerStyles.drawerButton}>
                Sign Up
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
