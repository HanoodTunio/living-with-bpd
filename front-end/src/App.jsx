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

// // export default App;

import React from "react";
import ExerciseCard from "./components/common/ExerciseCard/ExerciseCard";
import exImage from "./assets/images/ex.png";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        justifyContent: "center",
        padding: "32px",
      }}
    >
      <ExerciseCard
        exerciseTitle="Exercise M1"
        exerciseImage={exImage}
        exerciseName="Observing"
        exerciseDescription="Start developing your mindfulness skills by observing a single object."
      />

      <ExerciseCard
        exerciseTitle="Exercise M2"
        exerciseImage={exImage}
        exerciseName="Focusing"
        exerciseDescription="Learn to focus on your breathing to enhance your mindfulness."
      />

      <ExerciseCard
        exerciseTitle="Exercise M3"
        exerciseImage={exImage}
        exerciseName="Listening"
        exerciseDescription="Improve your mindfulness by focusing on ambient sounds."
      />

      <ExerciseCard
        exerciseTitle="Exercise M3"
        exerciseImage={exImage}
        exerciseName="Listening"
        exerciseDescription="Improve your mindfulness by focusing on ambient sounds."
      />

      <ExerciseCard
        exerciseTitle="Exercise M3"
        exerciseImage={exImage}
        exerciseName="Listening"
        exerciseDescription="Improve your mindfulness by focusing on ambient sounds."
      />
    </div>
  );
};

export default App;
