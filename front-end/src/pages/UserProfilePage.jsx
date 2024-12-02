// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Divider,
//   Grid2,
//   IconButton,
//   CircularProgress,
//   Snackbar, // Snackbar import
//   Alert, // Alert import
// } from "@mui/material";
// import { CameraAlt as CameraAltIcon } from "@mui/icons-material"; // Icon for changing profile picture
// import ProfileForm from "../components/common/UserProfile/ProfileForm";
// import PasswordForm from "../components/common/UserProfile/PasswordForm";
// import ProfilePicture from "../components/common/UserProfile/ProfilePicture";

// const UserProfilePage = () => {
//   const initialUserData = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     profilePicture: "/default-profile.jpg", // Default picture
//   };

//   const [user, setUser] = useState(initialUserData);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar

//   // Simulate fetching user data from the server
//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       // Uncomment below when API is available
//       // fetch('/api/user')
//       //   .then((response) => response.json())
//       //   .then((data) => {
//       //     setUser(data);
//       //     setLoading(false);
//       //   })
//       //   .catch((error) => {
//       //     setError(error);
//       //     setLoading(false);
//       //   });

//       setUser(initialUserData); // Simulate API response (temporary)
//       setLoading(false);
//     }, 1000); // Simulate network delay
//   }, []);

//   // Simulate updating the user data
//   const handleUpdateProfile = (updatedUser) => {
//     setLoading(true);
//     setTimeout(() => {
//       // Uncomment below when API is available
//       // fetch('/api/user/update', {
//       //   method: 'PUT',
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //   },
//       //   body: JSON.stringify(updatedUser),
//       // })
//       //   .then((response) => response.json())
//       //   .then((data) => {
//       //     setUser(data);
//       //     setLoading(false);
//       //     alert('Profile updated successfully!');
//       //   })
//       //   .catch((error) => {
//       //     setError(error);
//       //     setLoading(false);
//       //   });

//       setUser(updatedUser); // Simulate the updated user data from the server
//       setLoading(false);
//       setOpenSnackbar(true); // Open Snackbar after profile is updated
//     }, 1000); // Simulate network delay
//   };

//   // Simulate updating the profile picture
//   const handlePictureChange = (newPicture) => {
//     setLoading(true);
//     setTimeout(() => {
//       // Uncomment below when API is available
//       // fetch('/api/user/upload-picture', {
//       //   method: 'POST',
//       //   body: new FormData(newPicture),
//       // })
//       //   .then((response) => response.json())
//       //   .then((data) => {
//       //     setUser({ ...user, profilePicture: data.profilePicture });
//       //     setLoading(false);
//       //     alert('Profile picture updated!');
//       //   })
//       //   .catch((error) => {
//       //     setError(error);
//       //     setLoading(false);
//       //   });

//       setUser({ ...user, profilePicture: newPicture }); // Simulate picture change
//       setLoading(false);
//       setOpenSnackbar(true); // Open Snackbar after picture is updated
//     }, 1000); // Simulate network delay
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false); // Close the Snackbar when the user interacts with it
//   };

//   if (loading)
//     return <CircularProgress color="primary" sx={{ marginTop: 4 }} />;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <Container maxWidth="lg">
//       <Box textAlign="center" marginBottom={4}>
//         <Typography variant="h4" gutterBottom>
//           User Profile
//         </Typography>
//       </Box>

//       <Grid2 container spacing={12}>
//         {/* Left Column: Profile Picture and User Info */}
//         <Grid2 item xs={12} sm={12} md={4}>
//           <Box textAlign="center" position="relative" marginBottom={4}>
//             <ProfilePicture
//               currentPicture={user.profilePicture}
//               onPictureChange={handlePictureChange}
//             />
//             <IconButton
//               color="primary"
//               sx={{
//                 position: "absolute",
//                 top: 10,
//                 right: 10,
//                 backgroundColor: "rgba(255, 255, 255, 0.7)",
//                 "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
//               }}
//               onClick={() => document.getElementById("fileInput").click()}
//             >
//               <CameraAltIcon />
//             </IconButton>
//           </Box>

//           <Box textAlign="left">
//             <Typography variant="h6" gutterBottom>
//               Profile Details
//             </Typography>
//             <Box display="flex" flexDirection="column" marginTop={2}>
//               <Typography variant="body1" fontWeight="bold">
//                 {user.name}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 {user.email}
//               </Typography>
//             </Box>
//           </Box>
//         </Grid2>

//         {/* Right Column: Profile Form and Password Form */}
//         <Grid2 item xs={12} sm={12} md={8} lg={9}>
//           <Box marginBottom={4}>
//             <ProfileForm user={user} onUpdate={handleUpdateProfile} />
//           </Box>
//           <Divider sx={{ my: 4 }} />
//           <PasswordForm />
//         </Grid2>
//       </Grid2>

//       {/* Snackbar for showing success message */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={3000} // Automatically close after 3 seconds
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//       >
//         <Alert onClose={handleCloseSnackbar} severity="success">
//           Profile updated successfully!
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default UserProfilePage;

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  Grid2,
  IconButton,
  CircularProgress,
  Snackbar, // Snackbar import
  Alert, // Alert import
  Dialog, // Dialog import
  DialogActions, // DialogActions for the button
  DialogContent, // DialogContent for the message
  DialogTitle, // DialogTitle for the header
  Button, // Button to close the dialog
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material"; // Icon for changing profile picture
import ProfileForm from "../components/common/UserProfile/ProfileForm";
import PasswordForm from "../components/common/UserProfile/PasswordForm";
import ProfilePicture from "../components/common/UserProfile/ProfilePicture";

const UserProfilePage = () => {
  const initialUserData = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "/default-profile.jpg", // Default picture
  };

  const [user, setUser] = useState(initialUserData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar
  const [openDialog, setOpenDialog] = useState(false); // State for Dialog (modal)

  // Simulate fetching user data from the server
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setUser(initialUserData); // Simulate API response (temporary)
      setLoading(false);
    }, 1000); // Simulate network delay
  }, []);

  // Simulate updating the user data
  const handleUpdateProfile = (updatedUser) => {
    setLoading(true);
    setTimeout(() => {
      setUser(updatedUser); // Simulate the updated user data from the server
      setLoading(false);

      // For small screens, show the Snackbar
      if (window.innerWidth <= 600) {
        setOpenSnackbar(true);
      } else {
        // For larger screens, show the Modal (Dialog)
        setOpenDialog(true);
      }
    }, 1000); // Simulate network delay
  };

  // Simulate updating the profile picture
  const handlePictureChange = (newPicture) => {
    setLoading(true);
    setTimeout(() => {
      setUser({ ...user, profilePicture: newPicture }); // Simulate picture change
      setLoading(false);

      // For small screens, show the Snackbar
      if (window.innerWidth <= 600) {
        setOpenSnackbar(true);
      } else {
        // For larger screens, show the Modal (Dialog)
        setOpenDialog(true);
      }
    }, 1000); // Simulate network delay
  };

  if (loading)
    return <CircularProgress color="primary" sx={{ marginTop: 4 }} />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container maxWidth="lg">
      <Box textAlign="center" marginBottom={4}>
        <Typography variant="h4" gutterBottom>
          User Profile
        </Typography>
      </Box>

      <Grid2 container spacing={12}>
        {/* Left Column: Profile Picture and User Info */}
        <Grid2 item xs={12} sm={12} md={4}>
          <Box textAlign="center" position="relative" marginBottom={4}>
            <ProfilePicture
              currentPicture={user.profilePicture}
              onPictureChange={handlePictureChange}
            />
            <IconButton
              color="primary"
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
              }}
              onClick={() => document.getElementById("fileInput").click()}
            >
              <CameraAltIcon />
            </IconButton>
          </Box>

          <Box textAlign="left">
            <Typography variant="h6" gutterBottom>
              Profile Details
            </Typography>
            <Box display="flex" flexDirection="column" marginTop={2}>
              <Typography variant="body1" fontWeight="bold">
                {user.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {user.email}
              </Typography>
            </Box>
          </Box>
        </Grid2>

        {/* Right Column: Profile Form and Password Form */}
        <Grid2 item xs={12} sm={12} md={8} lg={9}>
          <Box marginBottom={4}>
            <ProfileForm user={user} onUpdate={handleUpdateProfile} />
          </Box>
          <Divider sx={{ my: 4 }} />
          <PasswordForm />
        </Grid2>
      </Grid2>

      {/* Snackbar for smaller screens */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Profile updated successfully!
        </Alert>
      </Snackbar>

      {/* Modal for larger screens */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Profile Updated</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Your profile has been updated successfully!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UserProfilePage;
