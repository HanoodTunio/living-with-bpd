import { styled, keyframes } from "@mui/material/styles";
import { Box, Grid, Typography, Link } from "@mui/material";

// Define floating animation keyframes for both X and Y axis
const floatingAnimation = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(-10px, -10px);
  }
  50% {
    transform: translate(10px, -15px);
  }
  75% {
    transform: translate(-10px, 10px);
  }
  100% {
    transform: translate(0px, 0px);
  }
`;

// CircleStyled with animation applied
export const CircleStyled = styled(Box)(({ size, color, position, opacity }) => ({
  width: size,
  height: size,
  backgroundColor: color,
  borderRadius: "50%",
  position: "absolute",
  ...position,
  opacity: opacity,
  zIndex: 1,
  pointerEvents: "none",
  animation: `${floatingAnimation} 8s ease-in-out infinite`,
}));


export const HeadingWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "20px",
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "#009688",
  "&::after": {
    content: '""',
    display: "block",
    width: "100px",
    height: "4px",
    backgroundColor: "#3CAF99",
    margin: "10px auto 0",
  },
}));

export const FooterContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: "60px 20px",
  background: "linear-gradient(to right, #247BA0 -10%, #FFFFFF 100%)",
  color: "#F3F4F6",
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.3rem",
  fontWeight: 700,
  marginBottom: "20px",
  color: "#F3F4F6",
}));

export const ContactInfo = styled(Box)(({ theme }) => ({
  "& > *": {
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
}));

export const LinkStyled = styled(Link)(({ theme }) => ({
  display: "block",
  color: "#F3F4F6",
  textDecoration: "none",
  marginBottom: "10px",
  "&:hover": {
    color: "#3CAF99",
  },
}));

export const SocialLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "15px",
  marginTop: "10px",
}));

export const SignupCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#0f172a",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 5px 20px rgba(0, 0, 0, 0.2)",
  "& .MuiButton-root": {
    backgroundColor: "#3CAF99",
  },
  "& .MuiTypography-caption": {
    color: "#D1D5DB",
  },
}));

export const FooterBottom = styled(Box)(({ theme }) => ({
  textAlign: "left", // Align text to the left side
  color: "#D1D5DB",
  marginTop: "10px",
}));
