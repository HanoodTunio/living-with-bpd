import { height, textTransform } from "@mui/system";

const bookStyles = {
    card: {
      width: 320, // Adjusted width to match the design
      height: 470, // Adjusted height to match the design
      borderRadius: "30px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      backgroundColor: "#ECECEC", // Light background color for the card
      display: "flex",
      flexDirection: "column", // Stacks image and content vertically
      "&:hover": {
      transform: "scale(1.05)", // Slight scale effect
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)", // Elevation shadow
    },
    },
    media: {
        height: "302px", // Fixed height for the image container
        width: "100%", // Full width of the card
        objectFit: "cover", // Maintain aspect ratio and fill the space
        objectPosition: "center", // Center the image if cropping occurs
        borderRadius: "0px", // Optional: No rounding for images
      },
      
    content: {
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      textAlign: "left",
    },
    title: {
      fontWeight: "bold",
      fontSize: "1.2rem", // Font size adjusted
      color: "#F47458", // Title color
      marginBottom: "2px", // Minimal space between title and description
    },
    description: {
      color: "rgba(0, 0, 0, 0.8)",
      fontSize: "0.9rem",
      lineHeight: 1.5,
      marginBottom: "-15px", // No space between the description and button
      display: "-webkit-box", // Limit to 3 lines
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    buttonContainer: {
      marginTop: "10px", // Slight spacing above the button
      display: "flex",
      justifyContent: "flex-end", // Center the button
      marginBottom: "-15px", // Slight spacing below the button
    },
    button: {
      background: "linear-gradient(90deg, #004494, #008456)", // Gradient background
      color: "#ffffff", // White text
      borderRadius: "20px", // Rounded corners
      padding: "8px 16px",
      fontWeight: "bold",
      height: "35px", // Button height
      fontSize: "0.9rem",
      textTransform: "uppercase", // Uppercase text
      textTransform: "capitalize", // Better readability
      "&:hover": {
        background: "linear-gradient(90deg, #0057B7, #00A86B)", // Slightly darker gradient
      },
    },
  };
  
  export default bookStyles;
  