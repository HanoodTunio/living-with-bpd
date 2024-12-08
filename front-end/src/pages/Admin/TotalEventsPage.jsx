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
    }, 2000); // Simulate an API response delay

    // API call (currently commented for future use)
    // const fetchEvents = async () => {
    //   try {
    //     const response = await fetch("/api/events");
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch events");
    //     }
    //     const data = await response.json();
    //     setEvents(data); // Set the fetched data to the state
    //     setLoading(false); // Set loading to false once data is fetched
    //   } catch (error) {
    //     setError(error.message); // Set error state if fetching fails
    //     setLoading(false); // Set loading to false in case of error
    //   }
    // };
    // fetchEvents();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ padding: "20px" }}>
      <Box sx={{ textAlign: "center", marginBottom: "50px" }}>
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
            onClick={() => navigate("/admin")} // Back to Admin Dashboard
            sx={{ margin: "10px" }}
          />
          <CustomButton
            text="View Blogs"
            variant="contained"
            size="medium"
            onClick={() => navigate("/total-blogs")} // Navigate to Total Blogs page
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
          <Box sx={{ overflowX: "auto", marginTop: "20px" }}>
            <table
              style={{
                width: "100%",
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
