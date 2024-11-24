export const cardStyles = {
    width: { xs: "100%", sm: "280px" }, // Full width on small screens, fixed width on larger screens
    height: "auto", // Allow auto height for flexible content
    background: "linear-gradient(to bottom, #ffffff, #f0f8ff)",
    borderRadius: "16px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: { xs: "16px", sm: "24px" }, // Smaller padding for small screens
    textAlign: "center",
    gap: "16px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Animation on hover
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
    },
  };
  
  export const iconContainerStyles = {
    width: { xs: "80px", sm: "100px" }, // Smaller size for small screens
    height: { xs: "80px", sm: "100px" },
    backgroundColor: "rgba(0, 128, 128, 0.1)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  
  export const titleStyles = {
    fontWeight: "bold",
    fontSize: { xs: "16px", sm: "18px" }, // Smaller font size on small screens
    color: "#ff6f61",
  };
  
  export const subtitleStyles = {
    fontWeight: "bold",
    fontSize: { xs: "14px", sm: "16px" }, // Adjust font size
    color: "#ff6f61",
    alignSelf: "flex-start", // Align the subtitle (exercise name) to the left
  };
  
  export const descriptionStyles = {
    color: "#1d3557",
    lineHeight: "1.6",
    textAlign: "justify", // Justify the description text
    fontSize: { xs: "12px", sm: "14px" }, // Adjust description font size
  };
  