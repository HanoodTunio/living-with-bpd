import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton"; // Import your Custom Save Button
import CardField from "./CardFields"; // Import the new simplified CardField

const DynamicSection = ({
  title,
  dynamicFieldsData,
  isButtonSection,
  onSave,
}) => {
  const [formData, setFormData] = useState({});

  // Handle field value change
  const handleFieldChange = (e, label) => {
    setFormData((prev) => ({ ...prev, [label]: e.target.value }));
  };

  // Rendering for Section 1 (Only Fields + Save Button)
  if (!isButtonSection) {
    return (
      <Box
        sx={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "16px" }}>
          {title}
        </Typography>

        {/* Render Dynamic Fields for Section 1 */}
        {dynamicFieldsData.map((field) => (
          <Box key={field.label} sx={{ marginBottom: "16px" }}>
            <CardField
              label={field.label} // Use the label as the question
              placeholder={`Enter your ${field.label} here...`} // Example/demo placeholder
              value={formData[field.label] || ""}
              onChange={(e) => handleFieldChange(e, field.label)}
            />
          </Box>
        ))}

        {/* Always Show Save Button */}
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
        >
          <CustomButton
            text="Save"
            onClick={() => onSave(formData)}
            sx={{
              width: "20%", // Set button width to 20%
              textAlign: "center", // Center the text within the button
            }}
          />
        </Box>
      </Box>
    );
  }

  // Section 2: Buttons + Fields based on button click
  const [visibleFields, setVisibleFields] = useState([]);
  const [buttonsVisible, setButtonsVisible] = useState(true); // Button visibility state

  // Field Configurations for button1 and button2
  const fieldConfigs = {
    button1: [
      { label: "Field 1", value: "" },
      { label: "Field 2", value: "" },
    ],
    button2: [
      { label: "Field 3", value: "" },
      { label: "Field 4", value: "" },
    ],
  };

  const handleButtonClick = (buttonLabel) => {
    const selectedFields = fieldConfigs[buttonLabel] || [];
    setVisibleFields(selectedFields);

    const newFormData = selectedFields.reduce((acc, field) => {
      acc[field.label] = field.value || "";
      return acc;
    }, {});

    setFormData(newFormData);
    setButtonsVisible(false); // Hide the buttons once a button is clicked
  };

  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "16px" }}>
        {title}
      </Typography>

      {/* Render Buttons for Section 2, only if buttonsVisible is true */}
      {buttonsVisible &&
        Object.keys(fieldConfigs).map((buttonLabel) => (
          <Box
            key={buttonLabel}
            sx={{
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centering buttons
            }}
          >
            <CustomButton
              text={buttonLabel}
              onClick={() => handleButtonClick(buttonLabel)}
              sx={{
                marginBottom: "8px",
                width: "20%", // Set button width to 20% for button1 and button2
                textAlign: "center", // Center the text on the button
              }}
            />
          </Box>
        ))}

      {/* Render Dynamic Fields for Section 2 */}
      {visibleFields.map((field) => (
        <Box key={field.label} sx={{ marginBottom: "16px" }}>
          <CardField
            label={field.label} // Use the label as the question
            placeholder={`Enter your ${field.label} here...`} // Example/demo placeholder
            value={formData[field.label] || ""}
            onChange={(e) => handleFieldChange(e, field.label)}
          />
        </Box>
      ))}

      {/* Show Save Button only after a button is clicked */}
      {visibleFields.length > 0 && (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
        >
          <CustomButton
            text="Save"
            onClick={() => onSave(formData)}
            sx={{
              width: "20%", // Set Save button width to 20%
              textAlign: "center", // Center the text on the button
              padding: "14px", // Padding for better click area
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default DynamicSection;
