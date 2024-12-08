import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  IconButton,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // for navigation
import DeleteIcon from "@mui/icons-material/Delete"; // Delete Icon
import CustomButton from "../../components/common/CustomButton/CustomButton"; // Import the CustomButton component

const TotalEventsPage = () => {
  const [events, setEvents] = useState([]); // State to store event data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // Hook to navigate between pages
  const theme = useTheme(); // Get the Material UI theme

  // Fetch data when the page loads
  useEffect(() => {
    // Dummy Data for testing
    const dummyEvents = [
      { id: 1, title: "React Conference 2024" },
      { id: 2, title: "JavaScript Developer Meetup" },
      { id: 3, title: "Frontend Developers Workshop" },
      { id: 4, title: "Web Dev Bootcamp 2024" },
      { id: 5, title: "CSS & HTML Best Practices" },
    ];

    setTimeout(() => {
      setEvents(dummyEvents); // Set the dummy events data to the state after 2 seconds
      setLoading(false); // Set loading to false after setting the data
    }, 1000); // Simulate an API response delay
  }, []);

  return (
    <Container
      maxWidth={false} // No max width so it stretches to the full screen width
      disableGutters // Remove default padding and margin around the container
      sx={{
        backgroundImage: "url('/src/assets/images/backgroundColor.jpg')", // Your background image path
        backgroundSize: "cover", // Ensure it covers the entire container
        backgroundPosition: "center", // Center the image
        backgroundAttachment: "fixed", // Keep the image fixed during scroll
        minHeight: "100vh", // Make sure the container takes the full screen height
      }}
    >
      <Box sx={{ textAlign: "center", marginBottom: "50px", padding: "20px" }}>
        <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
          Total Events
        </Typography>

        {/* Navigation Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end", // Align buttons to the right
            marginTop: "30px",
          }}
        >
          <CustomButton
            text="Back"
            variant="contained"
            size="medium"
            onClick={() => {
              navigate("/admin-dashboard");
            }}
            sx={{ margin: "10px" }}
          />
          <CustomButton
            text="View Blogs"
            variant="contained"
            size="medium"
            onClick={() => navigate("/admin-dashboard/total-blogs")} // Navigate to Total Blogs page
            sx={{ margin: "10px" }}
          />
        </Box>

        {/* Loading Spinner */}
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography variant="h6" color="error">
            Error: {error}
          </Typography>
        ) : (
          // Display the table when data is available
          <Box
            sx={{
              overflowX: "auto",
              marginTop: "20px",
              width: "70%", // Decreased table width (you can adjust this value as needed)
              margin: "0 auto", // Centers the table
            }}
          >
            <table
              style={{
                width: "100%", // Make sure the table fills the container width
                marginTop: "20px",
                backgroundColor: "transparent", // Transparent background
                borderCollapse: "collapse", // Ensures no gap between table cells
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "14px 20px", // Better padding for readability
                      border: `1px solid ${theme.palette.divider}`, // Subtle divider border
                      textAlign: "left",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    Event Title
                  </th>
                  <th
                    style={{
                      padding: "14px 20px", // Better padding for readability
                      border: `1px solid ${theme.palette.divider}`,
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.length > 0 ? (
                  events.map((event, index) => (
                    <tr
                      key={event.id}
                      style={{
                        backgroundColor:
                          index % 2 === 0
                            ? "transparent" // Transparent background for rows
                            : "transparent", // Ensure all rows are transparent
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                      }}
                    >
                      <td
                        style={{
                          padding: "12px 20px", // Consistent padding
                          border: `1px solid ${theme.palette.divider}`,
                          textAlign: "left",
                        }}
                      >
                        {event.title}
                      </td>
                      <td
                        style={{
                          padding: "12px 20px", // Consistent padding
                          border: `1px solid ${theme.palette.divider}`,
                          textAlign: "center",
                        }}
                      >
                        <IconButton
                          color="error"
                          onClick={() => alert(`Delete event: ${event.id}`)} // Handle delete action
                        >
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="2"
                      style={{
                        padding: "12px",
                        textAlign: "center",
                        fontStyle: "italic",
                      }}
                    >
                      No Events Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default TotalEventsPage;
