import React, { useState, useEffect } from "react";
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
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Profile icon
import UserHeaderStyles from "./UserHeaderStyles"; // Import the styles

const UserHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeLink, setActiveLink] = useState("Dashboard");
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600); // Check if the screen is mobile

  // Navigation Links
  const navLinks = [
    "Dashboard",
    "Mindfulness",
    "Tolerance",
    "Emotions",
    "Interpersonal",
  ];

  // More Menu Items (Profile Settings)
  const moreMenuItems = [
    { label: "View Profile", action: () => navigate("/profile") },
    { label: "Settings", action: () => navigate("/settings") },
    { label: "Logout", action: () => navigate("/logout") },
  ];

  // Toggle Drawer
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  // More Menu Handlers
  const handleMoreClick = (event) => setAnchorEl(event.currentTarget);
  const handleMoreClose = () => setAnchorEl(null);

  // Listen to window resize events
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Check if screen size is mobile
      if (window.innerWidth > 600 && drawerOpen) {
        setDrawerOpen(false); // Close the drawer when the screen is resized to desktop size
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [drawerOpen]);

  return (
    <AppBar position="static" color="default" sx={UserHeaderStyles.appBar}>
      <Toolbar sx={UserHeaderStyles.toolbar}>
        {/* Logo and Navigation Links (Desktop) */}
        <Box sx={UserHeaderStyles.logoNavContainer}>
          {/* Logo */}
          <Box sx={UserHeaderStyles.logoContainer}>
            <img
              src="/src/assets/images/logo.webp"
              alt="Logo"
              style={UserHeaderStyles.logoImage}
            />
            <Typography
              variant="h6"
              component="div"
              sx={UserHeaderStyles.logoText}
            >
              BPD.in
            </Typography>
          </Box>

          {/* Navigation Links (Desktop only) */}
          <Box
            sx={{
              ...UserHeaderStyles.navLinksContainer,
              display: { xs: "none", md: "flex" },
            }}
          >
            {navLinks.map((link, index) => (
              <Button
                key={index}
                color="inherit"
                sx={
                  activeLink === link
                    ? UserHeaderStyles.activeLink
                    : UserHeaderStyles.link
                }
                onClick={() => {
                  setActiveLink(link);
                  navigate(`/${link.toLowerCase()}`);
                }}
              >
                {link}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Profile Icon (Desktop) */}
        <Box sx={UserHeaderStyles.profileContainer}>
          <IconButton
            color="inherit"
            onClick={handleMoreClick}
            sx={{
              ...UserHeaderStyles.profileIcon, // Keep the existing profileIcon styles
              display: { xs: "none", md: "inline-flex" }, // Hide on small screens
            }}
          >
            <AccountCircleIcon sx={{ fontSize: "inherit" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMoreClose}
          >
            {moreMenuItems.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  item.action();
                  handleMoreClose(); // Close the menu after action
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Mobile Drawer Icon */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleDrawer}
          sx={{ display: { xs: "inline-flex", md: "none" } }} // Show on mobile screens only
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <List>
            {/* Mobile Navigation Links */}
            {navLinks.map((link, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  setActiveLink(link);
                  navigate(`/${link.toLowerCase()}`);
                  toggleDrawer(); // Close drawer on click
                }}
              >
                <ListItemText primary={link} />
              </ListItem>
            ))}

            {/* Mobile Profile Settings */}
            {moreMenuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  item.action();
                  toggleDrawer(); // Close drawer after selecting option
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}

            {/* Removed Logout Button here */}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default UserHeader;
