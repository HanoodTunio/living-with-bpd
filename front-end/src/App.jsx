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

// import React from "react";
// import { Box } from "@mui/material"; // Import Material-UI components
// import DialecticalBehaviorTherapyPage from "./pages/DialecticalBehaviorTherapyPage"; // Import the page
// import ExercisesPage from "./pages/ExcercisesPage";
// import backgroundImage from "./assets/images/backgroundColor.jpg"; // Path to your background image
// import CardField from "./components/common/DynamicCardSection/CardFields";

// const App = () => {
//   return (
//     <Box
//       sx={{
//         minHeight: "100vh", // Ensure the background image covers the entire viewport height
//         backgroundImage: `url(${backgroundImage})`, // Apply the background image
//         backgroundSize: "cover", // Make the background cover the entire page
//         backgroundPosition: "center", // Center the background image
//         backgroundRepeat: "no-repeat", // Avoid repeating the background image
//       }}
//     >
//       <CardField /> {/* Render the page directly */}
//     </Box>
//   );
// };
// export default App;

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

import React from "react";
import DynamicSection from "./components/common/WorksheetBoard/DynamicSection"; // Importing the DynamicSection component

const App = () => {
  // Dynamic fields data for Section 1 (fields without buttons)
  const dynamicFieldsData = [
    { label: "First Name" },
    { label: "Last Name" },
    { label: "Email" },
  ];

  // Dynamic buttons and fields for Section 2
  const buttonFieldsData = {
    "Button 1": [{ label: "Address" }, { label: "City" }],
    "Button 2": [{ label: "Phone Number" }, { label: "Country" }],
  };

  const handleSave = (formData) => {
    console.log("Saved Data: ", formData);
    // You can send this data to an API or process it further
  };

  return (
    <div>
      {/* Section 1 with Dynamic Fields (no buttons) */}
      <DynamicSection
        title="Section 1"
        dynamicFieldsData={dynamicFieldsData} // Passing fields data
        isButtonSection={false} // This section doesn't have buttons, only fields
        onSave={handleSave} // Save function to handle form data
      />

      {/* Section 2 with Dynamic Buttons and Fields */}
      <DynamicSection
        title="Section 2"
        dynamicFieldsData={buttonFieldsData} // Passing button-based fields data
        isButtonSection={true} // This section has buttons to show fields
        onSave={handleSave} // Save function to handle form data
      />
    </div>
  );
};

export default App;
