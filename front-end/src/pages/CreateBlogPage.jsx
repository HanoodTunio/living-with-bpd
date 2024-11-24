import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ProgressBar from "../components/common/ProgressBar/ProgressBar";
import BlogTitleField from "../components/common/InputWithLabel/InputWithLabel";
import RichTextEditor from "../components/common/RichTextEditor/RichTextEditor";
import CustomButton from "../components/common/CustomButton/CustomButton";
import ImageUploadWithLabel from "../components/common/ImageUploadWithLabel/ImageUploadWithLabel";

const CreateEventPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [bannerImage, setBannerImage] = useState(null);

  const steps = ["Event Content", "Banner"];

  const handleNext = () => {
    if (activeStep === 0) {
      if (eventTitle && eventDescription) {
        setActiveStep((prevStep) => prevStep + 1);
      } else {
        alert("Please fill in all required fields!");
      }
    } else if (activeStep === 1) {
      if (!eventLocation || !bannerImage) {
        alert("Please upload a banner and provide a location.");
      } else {
        alert("Event saved successfully!");
        console.log({
          eventTitle,
          eventDescription,
          eventLocation,
          bannerImage,
        });
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setBannerImage(file);
    console.log("Selected file:", file);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: "32px",
        gap: "24px", // Add spacing between major sections
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          margin: "0 auto", // Center-align the header
        }}
      >
        <ArrowBackIosIcon
          sx={{
            cursor: "pointer",
            marginRight: "8px",
            color: "#1D3557",
          }}
          onClick={() => console.log("Go back to the previous page")}
        />
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1D3557" }}>
          Create a New Event
        </Typography>
      </Box>

      {/* Progress Bar */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
          marginBottom: "22px",
          margin: "0 auto", // Center-align progress bar
        }}
      >
        <ProgressBar steps={steps} activeStep={activeStep} />
      </Box>

      {/* Steps Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "16px",
          padding: "32px",
          minHeight: "500px",
          margin: "0 auto", // Center the steps container
          display: "flex",
          flexDirection: "column",
          gap: "24px", // Consistent spacing between child components
        }}
      >
        {activeStep === 0 && (
          <>
            <BlogTitleField
              label="Event Title"
              placeholder="Enter the name of your Event"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "#1D3557",
                }}
              >
                Event Description <span style={{ color: "red" }}>*</span>
              </Typography>
              <RichTextEditor
                value={eventDescription}
                onChange={setEventDescription}
                placeholder="Write your event description here..."
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <CustomButton text="Next" size="medium" onClick={handleNext} />
            </Box>
          </>
        )}

        {activeStep === 1 && (
          <>
            <ImageUploadWithLabel
              label="Upload Event Banner"
              onChange={handleImageChange}
              acceptedFormats="JPG, GIF, PNG"
            />
            <BlogTitleField
              label="Location"
              placeholder="Enter Location"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              <CustomButton
                text="Go back to edit"
                size="medium"
                onClick={handleBack}
              />
              <CustomButton
                text="Save and Continue"
                size="medium"
                onClick={handleNext}
              />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default CreateEventPage;
