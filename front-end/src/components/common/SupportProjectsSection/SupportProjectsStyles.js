// src/components/SupportProjectsStyles.js

export const sectionStyles = {
  padding: { xs: "5px 12px", md: "10px 15px" }, // Reduced padding for less spacing
  textAlign: "center",
    //backgroundColor: "#f5f5f5",
  };
  
  export const headingBoxStyles = {
    display: "inline-block",
    position: "relative",
    marginBottom: "20px",
    "& h5": {
      fontWeight: "bold",
      color: "#00A86B",
      fontSize: { xs: "1.5rem", md: "2rem" },
    },
  };
  
  export const subtitleStyles = {
    color: "#333",
    marginBottom: "80px", // Increased margin for more space between subtitle and cards
    maxWidth: "600px",
    margin: "0 auto",
    fontSize: { xs: "0.9rem", md: "1rem" },
  };
  
  export const cardStyles = {
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#ffffff",
    width: "280px",
    height: "280px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    animation: "floatCard 5s ease-in-out infinite",
  };
  
  export const iconStyles = {
    width: "60px",
    marginBottom: "20px",
    animation: "scaleImage 3s ease-in-out infinite",
  };
  
  export const titleStyles = {
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#333",
  };
  
  export const descriptionStyles = {
    color: "#555",
    fontSize: "0.875rem",
    lineHeight: "1.5",
  };
  
  // Keyframes for animations
  export const animationKeyframes = {
    "@keyframes floatCard": {
      "0%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-5px)" },
      "100%": { transform: "translateY(0)" },
    },
    "@keyframes scaleImage": {
      "0%": { transform: "scale(1)" },
      "50%": { transform: "scale(1.1)" },
      "100%": { transform: "scale(1)" },
    },
  };
  