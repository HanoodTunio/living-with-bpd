export const cardStyles = {
  width: { xs: "60%", sm: "40%", md: "220px" }, // Adjust size based on screen width
  height: "auto", // Allow flexible height for variable content
  background: "linear-gradient(to bottom, #ffffff, #f0f8ff)",
  borderRadius: "30px",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: { xs: "12px", sm: "16px", md: "24px" }, // Smaller padding on smaller screens
  textAlign: "center",
  gap: "5px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Animation on hover
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
  },
};

  
  export const iconContainerStyles = {
    width: { xs: "80px", sm: "100px" }, // Smaller size for small screens
    height: { xs: "70px", sm: "90px" },
    backgroundColor: "rgba(0, 128, 128, 0.1)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  
  export const titleStyles = {
    fontWeight: "bold",
    fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Adjust font size for small, medium, and larger screens
    color: "#ff6f61",
  };
  
  export const subtitleStyles = {
    fontWeight: "bold",
    fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Adjust font size
    color: "#ff6f61",
    alignSelf: { xs: "center", sm: "flex-start" }, // Centered on smaller screens, aligned left otherwise
  };  
  
  export const descriptionStyles = {
    color: "#1d3557",
    lineHeight: "1.6",
    textAlign: "justify",
    fontSize: { xs: "12px", sm: "14px" }, // Adjust description font size
  };
  