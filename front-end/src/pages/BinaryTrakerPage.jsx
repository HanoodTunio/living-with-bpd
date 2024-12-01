import React, { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";
import EmojiSlider from "../components/common/BinaryTracker/EmojiSlider";
import CustomButton from "../components/common/CustomButton/CustomButton";
import Field from "../components/common/Field/Field";

const BinaryTrackerPage = () => {
  const [username, setUsername] = useState("");
  const [sliderValues, setSliderValues] = useState([50, 40, 60, 45, 70]);
  const [userData, setUserData] = useState([]);
  const [isUserAdding, setIsUserAdding] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalAverage, setModalAverage] = useState(0);
  const [feedbackProvided, setFeedbackProvided] = useState(false);

  // Calculate the average of slider values
  const calculateAverage = (values) => {
    const sum = values.reduce((acc, value) => acc + value, 0);
    return (sum / values.length).toFixed(2);
  };

  // Handle slider value change
  const handleSliderChange = (index, newValue) => {
    setSliderValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = newValue;
      return updatedValues;
    });
  };

  // Handle username input change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Add user and reset form
  const handleAddUser = () => {
    if (username.trim() !== "") {
      const newUser = { username, traits: sliderValues };
      setUserData((prevData) => [...prevData, newUser]);
      setUsername("");
      setSliderValues([50, 40, 60, 45, 70]);
      setIsUserAdding(false);

      // Calculate the average before opening modal
      const avg = calculateAverage(sliderValues);
      setModalAverage(avg); // Set the calculated average for the modal

      setFeedbackProvided(true); // Mark feedback as provided
      setOpenModal(true); // Open modal immediately
    } else {
      alert("Please enter a valid username.");
    }
  };

  // Close the modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setFeedbackProvided(false); // Reset feedback state when closing modal
  };

  // Define modal style
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    backgroundColor: "white",
    border: "2px solid #000",
    padding: "20px",
    boxShadow: 24,
    zIndex: 1300,
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <Typography
        variant="h4"
        sx={{ marginBottom: "20px", textAlign: "center" }}
      >
        Binary Tracker: Track User Traits
      </Typography>

      <Box sx={{ marginBottom: "20px", textAlign: "center" }}>
        {!isUserAdding ? (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "12px",
              }}
            >
              <CustomButton
                text="Add User"
                onClick={() => setIsUserAdding(true)}
              />
              <CustomButton
                text="Tracker Record"
                //onClick={handleTrackerRecord}
              />
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                marginTop: "50px",
                marginBottom: "30px",
                width: "60%",
                display: "flex", // Enable flexbox
                justifyContent: "center", // Center horizontally
                alignItems: "center", // Center vertically (optional, but helps in case there's any vertical gap)
                marginLeft: "auto", // Optional: ensures the Box itself is centered in its parent container
                marginRight: "auto", // Optional: ensures the Box itself is centered in its parent container
              }}
            >
              <Field
                label="Enter Username"
                value={username}
                onChange={handleUsernameChange}
                icon="👤"
              />
            </Box>

            <Box sx={{ marginBottom: "30px" }}>
              <EmojiSlider
                title="Kindness"
                value={sliderValues[0]}
                onValueChange={(newValue) => handleSliderChange(0, newValue)} // Pass function to handle value change
                emojiRanges={[
                  { range: [0, 20], emoji: "😡", color: "#FF6347" },
                  { range: [21, 40], emoji: "😤", color: "#FF4500" },
                  { range: [41, 60], emoji: "😐", color: "#FFCC00" },
                  { range: [61, 80], emoji: "😊", color: "#4CAF50" },
                  { range: [81, 100], emoji: "🥰", color: "#FFD700" },
                ]}
                sliderWidth={300}
                thumbSize={25}
              />
              <EmojiSlider
                title="Anger"
                value={sliderValues[1]}
                onValueChange={(newValue) => handleSliderChange(1, newValue)} // Pass function to handle value change
                emojiRanges={[
                  { range: [0, 20], emoji: "🧘", color: "#00FF00" },
                  { range: [21, 40], emoji: "😐", color: "#FFD700" },
                  { range: [41, 60], emoji: "😤", color: "#FF6347" },
                  { range: [61, 80], emoji: "😡", color: "#FF4500" },
                  { range: [81, 100], emoji: "💢", color: "#FF0000" },
                ]}
                sliderWidth={300}
                thumbSize={25}
              />
              <EmojiSlider
                title="Helpfulness"
                value={sliderValues[2]}
                onValueChange={(newValue) => handleSliderChange(2, newValue)} // Pass function to handle value change
                emojiRanges={[
                  { range: [0, 20], emoji: "🙅", color: "#FF6347" },
                  { range: [21, 40], emoji: "😐", color: "#FFD700" },
                  { range: [41, 60], emoji: "🤝", color: "#0000FF" },
                  { range: [61, 80], emoji: "👍", color: "#4CAF50" },
                  { range: [81, 100], emoji: "💪", color: "#00FF00" },
                ]}
                sliderWidth={300}
                thumbSize={25}
              />
              <EmojiSlider
                title="Trustworthiness"
                value={sliderValues[3]}
                onValueChange={(newValue) => handleSliderChange(3, newValue)} // Pass function to handle value change
                emojiRanges={[
                  { range: [0, 20], emoji: "👀", color: "#FF6347" },
                  { range: [21, 40], emoji: "🙄", color: "#FF4500" },
                  { range: [41, 60], emoji: "😐", color: "#FFD700" },
                  { range: [61, 80], emoji: "💎", color: "#4CAF50" },
                  { range: [81, 100], emoji: "💖", color: "#00BFFF" },
                ]}
                sliderWidth={300}
                thumbSize={25}
              />
              <EmojiSlider
                title="Understanding"
                value={sliderValues[4]}
                onValueChange={(newValue) => handleSliderChange(4, newValue)} // Pass function to handle value change
                emojiRanges={[
                  { range: [0, 20], emoji: "❌", color: "#FF6347" },
                  { range: [21, 40], emoji: "😐", color: "#FF4500" },
                  { range: [41, 60], emoji: "🤗", color: "#00FF00" },
                  { range: [61, 80], emoji: "🙌", color: "#FFD700" },
                  { range: [81, 100], emoji: "✨", color: "#00BFFF" },
                ]}
                sliderWidth={300}
                thumbSize={25}
              />
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <CustomButton text="Add User" onClick={handleAddUser} />
            </Box>
          </>
        )}
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" id="modal-title">
            Feedback Submitted!
          </Typography>
          <Typography
            variant="body1"
            id="modal-description"
            sx={{ marginTop: "10px" }}
          >
            The calculated average score is: {modalAverage}%
          </Typography>
          <CustomButton
            text="Close"
            onClick={handleCloseModal}
            sx={{ marginTop: "20px" }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default BinaryTrackerPage;
