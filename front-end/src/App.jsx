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
//         alignItems: "center",
//         padding: "16px",
//       }}
//     >
//       <ExerciseCard />
//     </Box>
//   );
// };

// export default App;

// // import React from "react";
// // import { Box } from "@mui/material";
// // import YouTubeCard from "./components/common/YouTubeCard/YouTubeCard";

// // const App = () => {
// //   return (
// //     <Box
// //       sx={{
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         minHeight: "100vh",
// //         backgroundColor: "#f5f5f5",
// //       }}
// //     >
// //       <YouTubeCard
// //         videoTitle="Introducing iPhone 14 Pro"
// //         thumbnailUrl="https://img.youtube.com/vi/GDlkCkcIqTs/hqdefault.jpg"
// //         videoUrl="https://www.youtube.com/watch?v=GDlkCkcIqTs"
// //         channelName="Apple"
// //       />
// //     </Box>
// //   );
// // };

import React from "react";
import { Box } from "@mui/material";
import backgroundImage from "./assets/images/backgroundColor.jpg"; // Background image
import SelectExercisePage from "./pages/SelectExercisePage";

const App = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh", // Use 100vh for full viewport height
        backgroundImage: `url(${backgroundImage})`, // Ensure the path is correct
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column", // Allow content to stack naturally
        alignItems: "center",
        padding: "16px",
      }}
    >
      <SelectExercisePage />
    </Box>
  );
};

export default App;
