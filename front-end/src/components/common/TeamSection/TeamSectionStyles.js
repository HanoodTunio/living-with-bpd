// src/components/common/TeamSection/TeamSectionStyles.js
import { styled } from "@mui/material/styles";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import bgImage from "../../../assets/images/bg.png";
import roundedImage from "../../../assets/images/rounded.png";
import vectorImageSrc from "../../../assets/images/Vector.png";

export const HeadingContainer = styled("div")(({ theme }) => ({
  textAlign: "center",
  margin: "40px 0 20px",
  position: "relative",
}));

export const Heading = styled("h2")(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "#009688",
  position: "relative",
  display: "inline-block",
  marginBottom: "10px",
}));

export const VectorImage = styled("img")(({ theme }) => ({
  display: "block",
  position: "absolute", // Needed for 'left' property to work
  left: "52%", // Aligns the image 70% from the left side
  margin: "-15px 0 0 0", // Top margin of 5px, no left margin needed
  width: "80px",
  height: "auto",
  content: `url(${vectorImageSrc})`,
}));



export const BackgroundContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "85vh",
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
}));

export const Root = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  padding: "0",
  margin: "0",
}));

export const SwiperWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  overflow: "hidden",
}));

export const TeamCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  minHeight: 350,
  borderRadius: "26px",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  backgroundImage: `url(${roundedImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "0",
  position: "relative",
}));

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
  width: "120px",
  height: "120px",
  border: "5px solid #fff",
  borderRadius: "50%",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
  marginBottom: "20px",
}));

export const CardContentStyled = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  flexGrow: 1,
}));

export const Name = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.2rem",
  color: "#003300",
  marginTop: "10px",
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: "#006600",
  marginBottom: "0.5rem",
  fontWeight: 500,
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: "#004d40",
  fontSize: "0.9rem",
}));
