// // import React from "react";
// // import Routing from "./routes/Routing"; // Import the Routing component
// // import Loader from "./components/common/Loader/Loader"; // Import the Loader component
// // import { useState, useEffect } from "react";

// // const App = () => {
// //   const [loading, setLoading] = useState(true);

// //   // Simulate loading (e.g., data fetch or setup)
// //   useEffect(() => {
// //     setTimeout(() => {
// //       setLoading(false); // Set loading to false after 3 seconds
// //     }, 3000); // Adjust the time as needed
// //   }, []);

// //   return (
// //     <div>
// //       {loading ? <Loader /> : <Routing />}{" "}
// //       {/* Show loader if loading is true */}
// //     </div>
// //   );
// // };

// // export default App;

import React from "react";
import { Box } from "@mui/material"; // Import Material-UI components
import DialecticalBehaviorTherapyPage from "./pages/DialecticalBehaviorTherapyPage"; // Import the page
import ExercisesPage from "./pages/ExcercisesPage";
import backgroundImage from "./assets/images/backgroundColor.jpg"; // Path to your background image

const App = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh", // Ensure the background image covers the entire viewport height
        backgroundImage: `url(${backgroundImage})`, // Apply the background image
        backgroundSize: "cover", // Make the background cover the entire page
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Avoid repeating the background image
      }}
    >
      <ExercisesPage /> {/* Render the page directly */}
    </Box>
  );
};
export default App;

// import React from "react";
// import { Container, Box, Typography } from "@mui/material";
// import ExerciseSectionLinks from "./components/common/ExerciseSectionLinks/ExerciseSectionLinks"; // Import the ExerciseSectionLinks component

// const App = () => {
//   // Define the sections data
//   const sections = [
//     {
//       label: "Warm-up",
//       icon: "https://via.placeholder.com/100x100?text=Warm-up", // Example icon URL
//     },
//     {
//       label: "Workout",
//       icon: "https://via.placeholder.com/100x100?text=Workout", // Example icon URL
//     },
//     {
//       label: "Cool-down",
//       icon: "https://via.placeholder.com/100x100?text=Cool-down", // Example icon URL
//     },
//     // You can add more sections if needed
//   ];

//   return (
//     <Container sx={{ paddingTop: "32px" }}>
//       <Box sx={{ paddingBottom: "32px" }}>
//         <Typography
//           variant="h3"
//           sx={{ fontWeight: "bold", marginBottom: "24px" }}
//         >
//           Exercise Sections
//         </Typography>

//         {/* ExerciseSectionLinks component to display the list */}
//         <ExerciseSectionLinks sections={sections} />
//       </Box>
//     </Container>
//   );
// };

// export default App;
