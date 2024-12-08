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
import VisibilityIcon from "@mui/icons-material/Visibility"; // View Icon
import DeleteIcon from "@mui/icons-material/Delete"; // Delete Icon
import CustomButton from "../../components/common/CustomButton/CustomButton"; // Import the CustomButton component

const TotalBlogsPage = () => {
  const [blogs, setBlogs] = useState([]); // State to store the blog data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // Hook to navigate between pages
  const theme = useTheme(); // Get the Material UI theme

  // Fetch data when the page loads
  useEffect(() => {
    // API call (currently commented for future use)
    // fetch("/api/blogs")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setBlogs(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setError("Failed to fetch blogs");
    //     setLoading(false);
    //   });

    // Dummy Data for testing
    const dummyBlogs = [
      { id: 1, title: "How to Learn React" },
      { id: 2, title: "JavaScript Best Practices" },
      { id: 3, title: "Introduction to Web Development" },
      { id: 4, title: "CSS Tips and Tricks" },
      { id: 5, title: "Understanding Asynchronous JavaScript" },
    ];

    setTimeout(() => {
      setBlogs(dummyBlogs); // Set the dummy blogs data to the state after 2 seconds
      setLoading(false); // Set loading to false after setting the data
    }, 2000); // Simulate an API response delay
  }, []);

  return (
    <Container maxWidth="lg" sx={{ padding: "20px" }}>
      <Box sx={{ textAlign: "center", marginBottom: "50px" }}>
        <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
          Total Blogs
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
            text="View Events"
            variant="contained"
            size="medium"
            onClick={() => navigate("/total-events")} // Navigate to Total Events page
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
                    Blog Title
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
                {blogs.length > 0 ? (
                  blogs.map((blog, index) => (
                    <tr
                      key={blog.id}
                      style={{
                        backgroundColor:
                          index % 2 === 0
                            ? "transparent" // Transparent background for rows
                            : "transparent", // Ensure all rows are transparent
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor =
                          theme.palette.action.hover)
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor =
                          index % 2 === 0 ? "transparent" : "transparent")
                      }
                    >
                      <td
                        style={{
                          padding: "12px 20px", // Consistent padding
                          border: `1px solid ${theme.palette.divider}`,
                          textAlign: "left",
                        }}
                      >
                        {blog.title}
                      </td>
                      <td
                        style={{
                          padding: "12px 20px", // Consistent padding
                          border: `1px solid ${theme.palette.divider}`,
                          textAlign: "center",
                        }}
                      >
                        <IconButton
                          color="primary"
                          sx={{ marginRight: "10px" }}
                          onClick={() => alert(`View blog: ${blog.id}`)} // Handle view action
                        >
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() => alert(`Delete blog: ${blog.id}`)} // Handle delete action
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
                      No Blogs Available
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

export default TotalBlogsPage;
