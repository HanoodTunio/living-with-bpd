import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location to track active route

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600); // Check if the screen is mobile

  const navLinks = [
    "Dashboard",
    "Mindfulness",
    "Tolerance",
    "Emotions",
    "Interpersonal",
  ];

  const moreMenuItems = [
    {
      label: "View Profile",
      action: () => navigate("/user-dashboard/profile"),
    },
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

  // Determine the active link based on the current route
  const currentPath = location.pathname;

  const handleNavigation = (link) => {
    switch (link) {
      case "Dashboard":
        navigate("/user-dashboard");
        break;
      case "Mindfulness":
        navigate("/user-dashboard/start-exercises/mindfulness");
        break;
      case "Tolerance":
        navigate("/user-dashboard/start-exercises/tolerance");
        break;
      case "Emotions":
        navigate("/user-dashboard/start-exercises/emotions");
        break;
      case "Interpersonal":
        navigate("/user-dashboard/start-exercises/interpersonal");
        break;
      default:
        navigate(`/${link.toLowerCase()}`);
    }
  };

  const isActiveLink = (link) => {
    const route = link.toLowerCase();

    if (link === "Dashboard") {
      return currentPath === "/user-dashboard"; // Exact match for Dashboard
    }

    if (currentPath.includes(route)) {
      return true; // For other links, check if the current path includes the link name
    }

    return false;
  };

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
            {navLinks.map((link, index) => {
              // Check if the current route matches the link
              const isActive = isActiveLink(link); // Check if current path includes the link name
              return (
                <Button
                  key={index}
                  color="inherit"
                  sx={{
                    ...UserHeaderStyles.link,
                    color: isActive ? "green" : "inherit", // Active link color (green)
                    fontWeight: isActive ? "bold" : "normal", // Add bold to active link
                    textTransform: "none", // To prevent uppercase styling if it exists
                    fontSize: "18px", // Increased font size
                  }}
                  onClick={() => handleNavigation(link)}
                >
                  {link}
                </Button>
              );
            })}
          </Box>
        </Box>

        {/* Profile Icon (Desktop) */}
        <Box sx={UserHeaderStyles.profileContainer}>
          <IconButton
            color="inherit"
            onClick={handleMoreClick}
            sx={{
              ...UserHeaderStyles.profileIcon,
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
            {navLinks.map((link, index) => {
              // Check if the current route matches the link
              const isActive = isActiveLink(link);
              return (
                <ListItem
                  button
                  key={index}
                  onClick={() => {
                    handleNavigation(link);
                    toggleDrawer(); // Close drawer on click
                  }}
                  sx={{
                    backgroundColor: isActive ? "green" : "transparent", // Active link background color (green)
                    color: isActive ? "white" : "inherit", // Change text color for active link
                    fontWeight: isActive ? "bold" : "normal", // Add bold for active link
                  }}
                >
                  <ListItemText primary={link} />
                </ListItem>
              );
            })}

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
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default UserHeader;
