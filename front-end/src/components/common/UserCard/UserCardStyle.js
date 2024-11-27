const userCardStyles = {
  card: {
    maxWidth: 280,
    cursor: "pointer",
    textAlign: "center",
    padding: "1rem",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column", // Stack elements vertically
    justifyContent: "flex-start", // Align content from the start (top of the card)
    backgroundColor: "transparent", // Ensures the background color is transparent
  },
  imageContainer: {
    width: "65px", // Icon-like size
    height: "65px", // Square size
    borderRadius: "10%", // Circular shape
    overflow: "hidden", // Clip image into circle
    marginBottom: "0.5rem", // Reduced space between image and title
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Make sure the image covers the circular area
  },
  content: {
    padding: "16px",
    display: "flex", // Use flexbox to align the content
    flexDirection: "column", // Stack elements in the content area
    justifyContent: "flex-start", // Align from the top
    flex: "none", // Prevent growing of content area
  },
  title: {
    fontWeight: "bold",
    fontSize: "1rem",
    marginBottom: "8px", // Adjust if needed
    textAlign: "left", // Align title to the left
  },
  description: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "0.875rem",
    marginBottom: "10px",
    lineHeight: "1.4",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left", // Align description to the left
  },
  button: {
    padding: "0.5rem 1.5rem",
    fontSize: "0.875rem",
    textTransform: "none",
    width: "100%",
    marginTop: "1rem",
    alignSelf: "flex-start", // Align button to the left of the card
    backgroundColor: "transparent", // Remove background color
    color: "black", // Set button text color to black
    border: "1px solid black", // Add border to keep the button outlined
    "&:hover": {
      backgroundColor: "transparent", // Keep button transparent on hover
      color: "black", // Keep button text color black on hover
      border: "1px solid #333", // Slightly darker border on hover
    },
  },
};

export default userCardStyles;
