import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import headerStyles from "./HeaderStyles";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  // Sign Up Button Handler
  const handleSignUp = () => {
    navigate("/login"); // Navigate to login page
  };

  // Drawer and More Menu Handlers
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const handleMoreClick = (event) => setAnchorEl(event.currentTarget);
  const handleMoreClose = () => setAnchorEl(null);

  const navLinks = ["Home", "Events", "Resources", "Blogs", "More"];
  const moreMenuItems = [
    { label: "About", action: () => scrollToSection("about") },
    { label: "Team", action: () => scrollToSection("team") },
    { label: "Gallery", action: () => navigate("/gallery") },
    {
      label: "Contact",
      action: () => {
        document
          .getElementById("footer")
          ?.scrollIntoView({ behavior: "smooth" });
        handleMoreClose(); // Close the dropdown after scrolling
      },
    },
  ];

  // Function to scroll to a specific section by ID
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    handleMoreClose(); // Close the menu after scrolling
  };

  return (
    <AppBar position="static" color="default" sx={headerStyles.appBar}>
      <Toolbar sx={headerStyles.toolbar}>
        {/* Logo */}
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

        {/* Navigation Links */}
        <Box sx={headerStyles.navLinksContainer}>
          {navLinks.map((link, index) => {
            if (link === "More") {
              return (
                <Button
                  key={index}
                  color="inherit"
                  sx={headerStyles.link}
                  onClick={handleMoreClick}
                >
                  {link}
                </Button>
              );
            }
            return (
              <Button
                key={index}
                color="inherit"
                sx={
                  link === "Home" ? headerStyles.activeLink : headerStyles.link
                }
                onClick={() => navigate(`/${link.toLowerCase()}`)}
              >
                {link}
              </Button>
            );
          })}

          {/* Dropdown Menu for "More" */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMoreClose}
          >
            {moreMenuItems.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  item.action(); // Perform the defined action
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>

          {/* Sign Up Button */}
          <Button
            variant="contained"
            sx={headerStyles.signUpButton}
            onClick={handleSignUp}
          >
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
              <ListItem
                button
                key={index}
                onClick={() => navigate(`/${link.toLowerCase()}`)}
              >
                <ListItemText primary={link} />
              </ListItem>
            ))}
            <ListItem button>
              <Button
                variant="contained"
                onClick={handleSignUp}
                sx={headerStyles.drawerButton}
              >
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
