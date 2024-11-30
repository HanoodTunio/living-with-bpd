import React from "react";
import { Button } from "@mui/material";

const ToggleButton = ({ label, onClick }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        marginBottom: "12px",
        textTransform: "none",
        fontWeight: "bold",
        color: "#004494",
        borderColor: "#004494",
        "&:hover": {
          backgroundColor: "rgba(0, 68, 148, 0.1)",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default ToggleButton;
