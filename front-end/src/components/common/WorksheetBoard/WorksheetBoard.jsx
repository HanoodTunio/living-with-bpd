import React from "react";
import { Box } from "@mui/material";
import DynamicSection from "./DynamicSection";

const WorksheetBoard = () => {
  const fieldConfigs = {
    "Button 1": [
      { label: "Field 1", value: "" },
      { label: "Field 2", value: "" },
    ],
    "Button 2": [
      { label: "Field 3", value: "" },
      { label: "Field 4", value: "" },
      { label: "Field 5", value: "" },
    ],
  };

  const handleSave = (formData) => {
    console.log("Form data saved:", formData); // Handle saving the data
    alert("Form saved!");
  };

  return (
    <Box
      sx={{
        padding: "20px",
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <DynamicSection
        title="Section 1"
        fieldConfigs={fieldConfigs}
        isButtonSection={true}
        onSave={handleSave}
      />
      <DynamicSection
        title="Section 2"
        fieldConfigs={fieldConfigs}
        isButtonSection={false}
        onSave={handleSave}
      />
    </Box>
  );
};

export default WorksheetBoard;
