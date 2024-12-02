import React from "react";
import { Avatar, Box } from "@mui/material";

const ProfilePicture = ({ currentPicture, onPictureChange }) => {
  return (
    <Box position="relative" display="inline-block">
      <Avatar
        src={currentPicture}
        alt="Profile Picture"
        sx={{ width: 120, height: 120, borderRadius: "50%" }}
      />
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={(e) =>
          onPictureChange(URL.createObjectURL(e.target.files[0]))
        }
        style={{ display: "none" }}
      />
    </Box>
  );
};

export default ProfilePicture;
