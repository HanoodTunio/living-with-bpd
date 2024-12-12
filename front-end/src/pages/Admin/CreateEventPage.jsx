import React, { useState } from "react";
import { Box, Typography, Snackbar, Alert, TextField } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ProgressBar from "../../components/common/ProgressBar/ProgressBar";
import BlogTitleField from "../../components/common/InputWithLabel/InputWithLabel"; // Reused for consistency
import RichTextEditor from "../../components/common/RichTextEditor/RichTextEditor";
import CustomButton from "../../components/common/CustomButton/CustomButton";
import ImageUploadWithLabel from "../../components/common/ImageUploadWithLabel/ImageUploadWithLabel";
import backgroundImage from "../../assets/images/backgroundColor.jpg"; // Adjust path if needed
import { db } from "../../firebase/firebase"; // Firebase configuration
import { collection, addDoc } from "firebase/firestore"; // Firestore methods

const CreateEventPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventLocation] = useState(""); // State for Location
  const [bannerImage, setBannerImage] = useState(null);
  const [eventDate, setEventDate] = useState(""); // For storing event date
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const steps = ["Event Content", "Banner"];

  const handleNext = async () => {
    if (activeStep === 0) {
      if (eventTitle && eventDescription && eventDate) {
        setActiveStep((prevStep) => prevStep + 1);
      } else {
        setSnackbarMessage("Please fill in all required fields!");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } else if (activeStep === 1) {
      if (!eventLocation || !bannerImage) {
        setSnackbarMessage("Please upload a banner and provide a location.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      } else {
        await handleSaveEvent();
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

  const handleSaveEvent = async () => {
    try {
      if (!bannerImage) throw new Error("No image selected!");

      const img = new Image();
      const reader = new FileReader();

      reader.onload = () => {
        img.onload = async () => {
          const canvas = document.createElement("canvas");
          const maxWidth = 800;
          const maxHeight = 800;
          let width = img.width;
          let height = img.height;

          if (width > maxWidth || height > maxHeight) {
            const aspectRatio = width / height;
            if (width > height) {
              width = maxWidth;
              height = width / aspectRatio;
            } else {
              height = maxHeight;
              width = height * aspectRatio;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          const base64Image = canvas.toDataURL("image/jpeg", 0.8);

          const eventData = {
            title: eventTitle,
            description: eventDescription,
            location: eventLocation,
            image: base64Image,
            date: new Date(eventDate).toISOString(),
          };

          const docRef = await addDoc(collection(db, "events"), eventData);
          console.log("Event saved successfully with doc ID:", docRef.id);

          setSnackbarMessage("Your event has been created successfully!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
        };
        img.src = reader.result;
      };

      reader.readAsDataURL(bannerImage);
    } catch (error) {
      console.error("Error saving event data:", error);
      setSnackbarMessage("Failed to save event. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: "32px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <ArrowBackIosIcon
          sx={{
            cursor: "pointer",
            marginRight: "8px",
            color: "#1D3557",
          }}
          onClick={handleBack}
        />
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1D3557" }}>
          Create a New Event
        </Typography>
      </Box>

      <Box sx={{ width: "100%", maxWidth: "900px", marginBottom: "22px" }}>
        <ProgressBar steps={steps} activeStep={activeStep} />
      </Box>

      {/* Event Content Section */}
      {activeStep === 0 && (
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
            borderRadius: "16px",
            padding: "32px",
            minHeight: "500px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <BlogTitleField
            label="Event Title"
            placeholder="Enter the name of your Event"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            sx={{ width: "100%" }}
          />

          <Box sx={{ marginBottom: "24px" }}>
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

          <Box sx={{ marginBottom: "24px" }}>
            <TextField
              type="date"
              label="Event Date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                "& .MuiInputBase-root": {
                  paddingRight: "0px",
                },
              }}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <CustomButton text="Next" size="medium" onClick={handleNext} />
          </Box>
        </Box>
      )}

      {/* Banner Section */}
      {activeStep === 1 && (
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
            borderRadius: "16px",
            padding: "32px",
            minHeight: "500px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <BlogTitleField
            label="Event Location"
            placeholder="Enter the location of the event"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)} // Make sure this is working
            sx={{ width: "100%" }}
          />

          <ImageUploadWithLabel
            label="Upload Event Banner"
            onChange={handleImageChange}
          />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <CustomButton text="Back" size="medium" onClick={handleBack} />
            <CustomButton text="Submit" size="medium" onClick={handleNext} />
          </Box>
        </Box>
      )}

      {/* Snackbar for showing messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CreateEventPage;
