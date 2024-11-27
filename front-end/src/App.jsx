// import React from "react";
// import Routing from "./routes/Routing"; // Import the Routing component
// import Loader from "./components/common/Loader/Loader"; // Import the Loader component
// import { useState, useEffect } from "react";

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   // Simulate loading (e.g., data fetch or setup)
//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false); // Set loading to false after 3 seconds
//     }, 3000); // Adjust the time as needed
//   }, []);

//   return (
//     <div>
//       {loading ? <Loader /> : <Routing />}{" "}
//       {/* Show loader if loading is true */}
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Box } from "@mui/material"; // Import Material-UI components
import DialecticalBehaviorTherapyPage from "./pages/DialecticalBehaviorTherapyPage"; // Import the page
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
      <DialecticalBehaviorTherapyPage /> {/* Render the page directly */}
    </Box>
  );
};

export default App;
