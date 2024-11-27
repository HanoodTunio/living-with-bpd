// // import React from "react";
// // import { Box } from "@mui/material";
// // import backgroundImage from "./assets/images/backgroundColor.jpg";
// // import ExerciseSectionLinks from "./components/common/ExerciseSectionLinks/ExerciseSectionLinks";
// // import Paragraph from "./components/common/Paragraph/Paragraph";
// // import introIcon from "./assets/images/Introduction.png";
// // import instructionIcon from "./assets/images/Instruction.png";
// // import worksheetIcon from "./assets/images/worksheet.png";
// // import faqIcon from "./assets/images/faq.png";
// // import disclaimerIcon from "./assets/images/disclaimer.png";

// // const sections = [
// //   {
// //     icon: introIcon,
// //     label: "Introduction",
// //     content:
// //       " This is the content for the Introduction section. You can replace this text with the actual content for the Introduction section. It provides essential information about mindfulness exercises.",
// //   },
// //   {
// //     icon: instructionIcon,
// //     label: "Instruction",
// //     content:
// //       "This is the content for the Instruction section. Replace this text with detailed steps or guidance on how to perform mindfulness exercises effectively.",
// //   },
// //   {
// //     icon: worksheetIcon,
// //     label: "WorkSheet",
// //     content:
// //       "This is the content for the WorkSheet section. Provide users with interactive or printable worksheets to support their mindfulness practice.",
// //   },
// //   {
// //     icon: faqIcon,
// //     label: "FAQs",
// //     content:
// //       "This is the content for the FAQs section. Answer common questions users might have about mindfulness exercises or the application itself.",
// //   },
// //   {
// //     icon: disclaimerIcon,
// //     label: "Disclaimers",
// //     content:
// //       "This is the content for the Disclaimers section. Include important information or disclaimers regarding the use of mindfulness exercises.",
// //   },
// // ];

// // const App = () => {
// //   return (
// //     <Box
// //       sx={{
// //         minHeight: "100vh",
// //         backgroundImage: `url(${backgroundImage})`,
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //         backgroundRepeat: "no-repeat",
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "flex-start", // Align everything to the left
// //         padding: "16px",
// //       }}
// //     >
// //       {/* Render Section Links */}
// //       <ExerciseSectionLinks sections={sections} />

// //       {/* Render Target Sections */}
// //       {sections.map((section) => (
// //         <Box
// //           key={section.label}
// //           id={section.label.toLowerCase()} // Match href and id for scrolling
// //           sx={{
// //             width: "100%",
// //             maxWidth: "800px",
// //             margin: "40px 0",
// //             padding: "16px",
// //             textAlign: "justify",
// //           }}
// //         >
// //           <Paragraph heading={section.label} content={section.content} />
// //         </Box>
// //       ))}
// //     </Box>
// //   );
// // };

// // export default App;

// import React from "react";
// import { Box } from "@mui/material";
// import backgroundImage from "./assets/images/backgroundColor.jpg"; // Background image
// import ResourcesPage from "./pages/ResourcesPage";
// import GalleryPage from "./pages/GalleryPage";
// import LoginPage from "./pages/LoginPage";
// import ForgotPasswordPage from "./pages/ForgotPasswordPage";
// import SignUpPage from "./pages/SignUpPage";
// import CreateBlogPage from "./pages/CreateBlogPage";
// import CreateEventPage from "./pages/CreateEventPage";
// import ExerciseCard from "./components/common/ExerciseCard/ExerciseCard";

// const App = () => {
//   return (
//     <Box
//       sx={{
//         minHeight: "120vh",
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         display: "flex",
//         justifyContent: "center", // Center the Book component
//         alignItems: "flex",
//         padding: "16px",
//       }}
//     >
//       <CreateEventPage />
//     </Box>
//   );
// };

// export default App;

// src/App.jsx
import React from "react";
import Routing from "./routes/Routing"; // Import the Routing component
import Loader from "./components/common/Loader/Loader"; // Import the Loader component
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading (e.g., data fetch or setup)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000); // Adjust the time as needed
  }, []);

  return (
    <div>
      {loading ? <Loader /> : <Routing />}{" "}
      {/* Show loader if loading is true */}
    </div>
  );
};

export default App;
