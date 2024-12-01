import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EmojiSlider from "../components/common/BinaryTracker/EmojiSlider";
import CustomButton from "../components/common/CustomButton/CustomButton";
import Field from "../components/common/Field/Field";
import DeleteIcon from "@mui/icons-material/Delete"; // Import the Delete icon

const BinaryTrackerPage = () => {
  const [username, setUsername] = useState("");
  const [sliderValues, setSliderValues] = useState([50, 40, 60, 45]); // Removed the 5th slider (Work Ethic)
  const [userData, setUserData] = useState([]);
  const [isUserAdding, setIsUserAdding] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalAverage, setModalAverage] = useState(0);
  const [feedbackProvided, setFeedbackProvided] = useState(false);
  const [showTable, setShowTable] = useState(false); // To toggle table visibility

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
      setSliderValues([50, 40, 60, 45]); // Reset the sliders
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

  // Delete user function
  const handleDeleteUser = (usernameToDelete) => {
    setUserData((prevData) =>
      prevData.filter((user) => user.username !== usernameToDelete)
    );
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

  // Toggle table visibility on "Tracker Record" click
  const handleTrackerRecordClick = () => {
    setShowTable(true);
    setIsUserAdding(false); // Hide the form when showing the table
  };

  // Back button functionality
  const handleBackButton = () => {
    setIsUserAdding(false); // Reset state to show the initial buttons
    setUsername(""); // Reset form data
    setSliderValues([50, 40, 60, 45]); // Reset slider values
    setShowTable(false); // Close the table if it's open
  };

  // Handle "Add User" from the table to show the user form
  const handleAddUserFromTable = () => {
    setShowTable(false); // Hide the table
    setIsUserAdding(true); // Show the user tracker form
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
        {/* Always show buttons at the top */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginBottom: "20px", // To give space between buttons and form/table
          }}
        >
          {!showTable && (
            <>
              <CustomButton
                text="Add User"
                onClick={() => setIsUserAdding(true)} // Show form when adding user
              />
              <CustomButton
                text="Tracker Record"
                onClick={handleTrackerRecordClick} // Show table when viewing record
              />
            </>
          )}
          {showTable && (
            <>
              <CustomButton
                text="Back"
                onClick={handleBackButton} // Show back button to go back
              />
              <CustomButton
                text="Add User"
                onClick={handleAddUserFromTable} // Add user from table to form
              />
            </>
          )}
        </Box>

        {isUserAdding && !showTable ? (
          <>
            {/* User form */}
            <Box
              sx={{
                marginTop: "50px",
                marginBottom: "30px",
                width: "60%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
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
                onValueChange={(newValue) => handleSliderChange(0, newValue)}
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
                onValueChange={(newValue) => handleSliderChange(1, newValue)}
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
                onValueChange={(newValue) => handleSliderChange(2, newValue)}
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
                onValueChange={(newValue) => handleSliderChange(3, newValue)}
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
                onValueChange={(newValue) => handleSliderChange(4, newValue)} // Handling slider value change
                emojiRanges={[
                  { range: [0, 20], emoji: "🤔", color: "#FF6347" },
                  { range: [21, 40], emoji: "😐", color: "#FFD700" },
                  { range: [41, 60], emoji: "🙋", color: "#4CAF50" },
                  { range: [61, 80], emoji: "🧠", color: "#00BFFF" },
                  { range: [81, 100], emoji: "💡", color: "#FFD700" },
                ]}
                sliderWidth={300}
                thumbSize={25}
              />
            </Box>

            <Box
              sx={{ display: "flex", justifyContent: "center", gap: "12px" }}
            >
              <CustomButton text="Back" onClick={handleBackButton} />
              <CustomButton text="Submit" onClick={handleAddUser} />
            </Box>
          </>
        ) : showTable ? (
          <>
            {/* Render the table */}
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>Kindness</TableCell>
                    <TableCell>Anger</TableCell>
                    <TableCell>Helpfulness</TableCell>
                    <TableCell>Trustworthiness</TableCell>
                    <TableCell>Average</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userData.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.traits[0]}</TableCell>
                      <TableCell>{user.traits[1]}</TableCell>
                      <TableCell>{user.traits[2]}</TableCell>
                      <TableCell>{user.traits[3]}</TableCell>
                      <TableCell>{calculateAverage(user.traits)}</TableCell>
                      <TableCell>
                        <IconButton
                          color="error"
                          onClick={() => handleDeleteUser(user.username)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <></>
        )}
      </Box>

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-title" variant="h6">
            Feedback Submitted
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Average Score: {modalAverage}
          </Typography>
          <CustomButton text="Close" onClick={handleCloseModal} />
        </Box>
      </Modal>
    </Box>
  );
};

export default BinaryTrackerPage;
