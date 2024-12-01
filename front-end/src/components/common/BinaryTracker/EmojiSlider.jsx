import React, { useState } from "react";
import { Box, Slider, Typography } from "@mui/material"; // Import necessary Material UI components

// Reusable EmojiSlider Component
const EmojiSlider = ({
  title = "Trait", // Default title if none is provided
  emojiRanges = [
    { range: [0, 20], emoji: "😡", color: "#FF7043" }, // Low Kindness / Anger (Muted Red)
    { range: [21, 40], emoji: "🙅", color: "#FFC107" }, // Low Helpfulness (Amber)
    { range: [41, 60], emoji: "😐", color: "#9E9E9E" }, // Neutral (Gray)
    { range: [61, 80], emoji: "💪", color: "#03A9F4" }, // High Helpfulness (Sky Blue)
    { range: [81, 100], emoji: "🥰", color: "#66BB6A" }, // High Kindness (Soft Green)
  ],
  value, // slider value passed from parent
  onValueChange, // callback function passed from parent
  sliderWidth = "100%", // Slider width (default to 100% to fill its parent)
  thumbSize = 40, // Thumb size
  spacing = 30, // Space between elements (slider, emoji, label)
}) => {
  const [mood, setMood] = useState(emojiRanges[2].emoji); // Default emoji is neutral

  // Handle slider change and update mood
  const handleChange = (e, newValue) => {
    onValueChange(newValue); // Pass the new value back to the parent
    // Update mood based on slider value and passed emojiRanges
    const selectedRange = emojiRanges.find(
      (range) => newValue >= range.range[0] && newValue <= range.range[1]
    );
    setMood(selectedRange ? selectedRange.emoji : emojiRanges[2].emoji); // Default to neutral if not found
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row", // Layout set to row for horizontal alignment
        justifyContent: "center", // Center everything horizontally
        padding: "5px", // Reduced padding
        borderRadius: "8px",
        width: "100%", // Ensure the container takes full width of its parent
        marginTop: "20px", // Space at the top
        alignItems: "center", // Vertically center items in the container
        overflowX: "visible", // Make sure nothing overflows
      }}
    >
      {/* Label Box */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: `${spacing}px`, // Space between label and slider
          minWidth: "120px", // Ensure label box has a minimum width
          flexShrink: 0, // Prevent shrinking
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "16px",
            color: "#3BB08B", // Green color for the label
            fontWeight: "bold", // Bold label
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)", // Light shadow
            whiteSpace: "nowrap", // Prevent text from wrapping
            overflow: "hidden", // Prevent overflow if text is long
            textOverflow: "ellipsis", // Add ellipsis if text is too long
          }}
        >
          {title} {/* Dynamic Title */}
        </Typography>
      </Box>

      {/* Slider Box */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center", // Align slider and value label vertically
          marginRight: `${spacing}px`, // Space between slider and emoji
          width: sliderWidth, // Dynamic slider width (can be % or px)
        }}
      >
        <Slider
          value={value} // Get the value from the parent component
          onChange={handleChange}
          aria-labelledby="trait-slider"
          sx={{
            height: 8, // Height of the slider
            "& .MuiSlider-thumb": {
              backgroundColor:
                emojiRanges.find(
                  (range) => value >= range.range[0] && value <= range.range[1]
                )?.color || "#ddd", // Thumb color based on range
              borderRadius: "50%",
              width: thumbSize, // Thumb size
              height: thumbSize, // Thumb size
            },
            "& .MuiSlider-rail": {
              backgroundColor: "transparent", // Make the rail invisible
            },
            "& .MuiSlider-track": {
              backgroundColor: "transparent", // Make the track invisible
            },
            // Customizing the value label (emoji) size and positioning
            "& .MuiSlider-valueLabel": {
              fontSize: "1.5rem", // Smaller font size for emoji (reduce size here)
              backgroundColor: "#ffffff", // Background color for the emoji label
              borderRadius: "60%", // Circular label
              width: 20, // Smaller width for the box
              height: 28, // Smaller height for the box
              display: "flex",
              justifyContent: "center", // Center emoji horizontally
              alignItems: "center", // Center emoji vertically
            },
          }}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => {
            // Return emoji based on current value and the emoji ranges
            const selectedRange = emojiRanges.find(
              (range) => value >= range.range[0] && value <= range.range[1]
            );
            return selectedRange ? selectedRange.emoji : emojiRanges[2].emoji; // Default to neutral emoji
          }}
        />
      </Box>

      {/* Emoji Box */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "80px", // Minimum width for the emoji column
          flexShrink: 0, // Prevent shrinking
          textAlign: "center", // Ensure the emoji is centered
          padding: "5px", // Padding for extra space
          overflow: "visible", // Make sure emoji is not clipped
        }}
      >
        <Typography sx={{ fontSize: `${thumbSize * 1.5}px` }}>
          {mood}
        </Typography>{" "}
        {/* Emoji */}
      </Box>
    </Box>
  );
};

export default EmojiSlider;
