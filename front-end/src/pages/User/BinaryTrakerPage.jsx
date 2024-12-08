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
import EmojiSlider from "../../components/common/BinaryTracker/EmojiSlider";
import CustomButton from "../../components/common/CustomButton/CustomButton";
import Field from "../../components/common/Field/Field";
import DeleteIcon from "@mui/icons-material/Delete"; // Import the Delete icon
import UserLayout from "../../components/mainlayout/UserLayout"; // Correct relative path

const BinaryTrackerPage = () => {
  const [username, setUsername] = useState("");
  const [sliderValues, setSliderValues] = useState([50, 40, 60, 45, 55]); // Adjusted for 5 sliders
  const [userData, setUserData] = useState([]);
  const [isUserAdding, setIsUserAdding] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalAverage, setModalAverage] = useState(0);
  const [feedbackProvided, setFeedbackProvided] = useState(false);
  const [showTable, setShowTable] = useState(false); // To toggle table visibility

  const getEmojiForValue = (traitIndex, value) => {
    const ranges = emojiRanges[traitIndex]; // Emoji ranges based on trait
    for (let i = 0; i < ranges.length; i++) {
      const { range, emoji } = ranges[i];
      if (value >= range[0] && value <= range[1]) {
        return emoji;
      }
    }
    return "😐"; // Default emoji if no range matched
  };

  // Calculate the average of slider values as a percentage
  const calculateAverage = (values) => {
    const sum = values.reduce((acc, value) => acc + value, 0);
    const avg = (sum / values.length).toFixed(2);
    return `${avg}%`; // Return percentage format
  };

  const handleSliderChange = (index, newValue) => {
    setSliderValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = newValue;
      return updatedValues;
    });
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAddUser = () => {
    if (username.trim() !== "") {
      const newUser = { username, traits: sliderValues };
      setUserData((prevData) => [...prevData, newUser]);
      setUsername("");
      setSliderValues([50, 40, 60, 45, 55]); // Reset sliders
      setIsUserAdding(false);

      // Calculate the average before opening modal
      const avg = calculateAverage(sliderValues);
      setModalAverage(avg); // Set the calculated average for the modal

      setFeedbackProvided(true);
      setOpenModal(true);
    } else {
      alert("Please enter a valid username.");
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setFeedbackProvided(false); // Reset feedback state when closing modal
  };

  const handleDeleteUser = (usernameToDelete) => {
    setUserData((prevData) =>
      prevData.filter((user) => user.username !== usernameToDelete)
    );
  };

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

  const handleTrackerRecordClick = () => {
    setShowTable(true);
    setIsUserAdding(false);
  };

  const handleBackButton = () => {
    setIsUserAdding(false);
    setUsername("");
    setSliderValues([50, 40, 60, 45, 55]); // Reset slider values
    setShowTable(false);
  };

  const handleAddUserFromTable = () => {
    setShowTable(false);
    setIsUserAdding(true);
  };

  return (
    <UserLayout>
      <Box sx={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        <Typography
          variant="h4"
          sx={{ marginBottom: "20px", textAlign: "center" }}
        >
          Binary Tracker: Track User Traits
        </Typography>

        <Box sx={{ marginBottom: "20px", textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            {!showTable && (
              <>
                <CustomButton
                  text="Add User"
                  onClick={() => setIsUserAdding(true)}
                />
                <CustomButton
                  text="Tracker Record"
                  onClick={handleTrackerRecordClick}
                />
              </>
            )}
            {showTable && (
              <>
                <CustomButton text="Back" onClick={handleBackButton} />
                <CustomButton
                  text="Add User"
                  onClick={handleAddUserFromTable}
                />
              </>
            )}
          </Box>

          {isUserAdding && !showTable ? (
            <>
              <Box
                sx={{
                  marginTop: "50px",
                  marginBottom: "50px",
                  width: "50%",
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
                {/* Render EmojiSliders for traits */}
                {emojiSliders.map((slider, index) => (
                  <EmojiSlider
                    key={slider.title}
                    title={slider.title}
                    value={sliderValues[index]}
                    onValueChange={(newValue) =>
                      handleSliderChange(index, newValue)
                    }
                    emojiRanges={slider.emojiRanges}
                    sliderWidth={300}
                    thumbSize={25}
                  />
                ))}
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
              <TableContainer component={Paper} sx={{ width: "100%" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Username</TableCell>
                      <TableCell>Kindness</TableCell>
                      <TableCell>Anger</TableCell>
                      <TableCell>Helpfulness</TableCell>
                      <TableCell>Trustworthiness</TableCell>
                      <TableCell>Understanding</TableCell>
                      <TableCell>Average</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userData.map((user) => {
                      const average = calculateAverage(user.traits);
                      return (
                        <TableRow key={user.username}>
                          <TableCell>{user.username}</TableCell>
                          {user.traits.map((trait, index) => (
                            <TableCell align="center" key={index}>
                              {getEmojiForValue(index, trait)}
                            </TableCell>
                          ))}
                          <TableCell align="center">{average}</TableCell>
                          <TableCell align="center">
                            <IconButton
                              color="secondary"
                              onClick={() => handleDeleteUser(user.username)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : null}
        </Box>

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
    </UserLayout>
  );
};

const emojiRanges = [
  // Emoji ranges for each trait
  [
    { range: [0, 20], emoji: "😡", color: "#FF6347" },
    { range: [21, 40], emoji: "😤", color: "#FF4500" },
    { range: [41, 60], emoji: "😐", color: "#FFCC00" },
    { range: [61, 80], emoji: "😊", color: "#4CAF50" },
    { range: [81, 100], emoji: "🥰", color: "#FFD700" },
  ],
  [
    { range: [0, 20], emoji: "🧘", color: "#00FF00" },
    { range: [21, 40], emoji: "😕", color: "#FFFF00" },
    { range: [41, 60], emoji: "🙂", color: "#FF5733" },
    { range: [61, 80], emoji: "🤩", color: "#4CAF50" },
    { range: [81, 100], emoji: "💥", color: "#FF6347" },
  ],
  [
    { range: [0, 20], emoji: "😢", color: "#FF6347" },
    { range: [21, 40], emoji: "🤔", color: "#FFFF00" },
    { range: [41, 60], emoji: "😏", color: "#FF5733" },
    { range: [61, 80], emoji: "💡", color: "#4CAF50" },
    { range: [81, 100], emoji: "💥", color: "#FF6347" },
  ],
  // Define other trait ranges similarly...
];

const emojiSliders = [
  {
    title: "Kindness",
    emojiRanges: emojiRanges[0],
  },
  {
    title: "Anger",
    emojiRanges: emojiRanges[1],
  },
  {
    title: "Helpfulness",
    emojiRanges: emojiRanges[2],
  },
  {
    title: "Trustworthiness",
    emojiRanges: emojiRanges[3],
  },
  {
    title: "Understanding",
    emojiRanges: emojiRanges[4],
  },
];

export default BinaryTrackerPage;
