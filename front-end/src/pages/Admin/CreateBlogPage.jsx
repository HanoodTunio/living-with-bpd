import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Snackbar,
  Alert,
  Grid2,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ProgressBar from "../../components/common/ProgressBar/ProgressBar";
import BlogTitleField from "../../components/common/InputWithLabel/InputWithLabel";
import RichTextEditor from "../../components/common/RichTextEditor/RichTextEditor";
import CustomButton from "../../components/common/CustomButton/CustomButton";
import backgroundImage from "../../assets/images/backgroundColor.jpg";
import ImageUploadWithLabel from "../../components/common/ImageUploadWithLabel/ImageUploadWithLabel";
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const CreateBlogPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [writerName, setWriterName] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const steps = ["Blog Content", "Banner"];

  const handleNext = async () => {
    if (activeStep === 0) {
      if (eventTitle && eventDescription) {
        setActiveStep((prevStep) => prevStep + 1);
      } else {
        alert("Please fill in all required fields!");
      }
    } else if (activeStep === 1) {
      if (!bannerImage || !writerName || !publishedDate) {
        alert(
          "Please upload a banner, provide writer name, and published date."
        );
      } else {
        await resizeAndStoreImage();
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBannerImage(file);
      console.log("Selected file:", file);
    }
  };

  const resizeAndStoreImage = async () => {
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

          const blogData = {
            title: eventTitle,
            description: eventDescription,
            imageURL: base64Image,
            writerName,
            publishedDate,
          };

          const docRef = await addDoc(collection(db, "blogs"), blogData);
          console.log("Blog saved successfully with doc ID:", docRef.id);

          setSnackbarMessage("Your blog has been published successfully!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
        };
        img.src = reader.result;
      };

      reader.readAsDataURL(bannerImage);
    } catch (error) {
      console.error("Error saving blog data:", error);
      setSnackbarMessage("Failed to save blog. Please try again.");
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
        padding: "16px",
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "16px",
          justifyContent: "center",
        }}
      >
        <ArrowBackIosIcon
          sx={{ cursor: "pointer", marginRight: "8px", color: "#1D3557" }}
          onClick={() => console.log("Go back to the previous page")}
        />
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1D3557" }}>
          Create a New Blog
        </Typography>
      </Box>

      {/* Progress Bar */}
      <Box sx={{ marginBottom: "22px", maxWidth: "900px", margin: "0 auto" }}>
        <ProgressBar steps={steps} activeStep={activeStep} />
      </Box>

      {/* Steps Section */}
      <Box
        sx={{
          maxWidth: "900px",
          borderRadius: "16px",
          padding: "16px",
          minHeight: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {activeStep === 0 && (
          <>
            <BlogTitleField
              label="Blog Title"
              placeholder="Enter the name of your Event"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", marginBottom: "8px" }}
              >
                Blog Description <span style={{ color: "red" }}>*</span>
              </Typography>
              <RichTextEditor
                value={eventDescription}
                onChange={setEventDescription}
                placeholder="Write your Blog description here..."
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
              label="Writer Name"
              placeholder="Enter the name of the writer"
              value={writerName}
              onChange={(e) => setWriterName(e.target.value)}
            />
            <TextField
              type="date"
              label="Published Date"
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true, // Ensures the label is always visible
              }}
              sx={{
                "& .MuiInputBase-root": {
                  paddingRight: "0px", // Adjusts padding to fix the field display
                },
              }}
            />
            {/* Buttons Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "16px",
                gap: "16px",
              }}
            >
              <CustomButton
                text="Back"
                size="medium"
                onClick={handleBack}
                fullWidth
              />
              <CustomButton
                text="Publish Blog"
                size="medium"
                onClick={handleNext}
                fullWidth
              />
            </Box>
          </>
        )}

        {/* Snackbar for Success/Failure */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default CreateBlogPage;
