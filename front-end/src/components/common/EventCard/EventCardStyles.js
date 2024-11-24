// src/components/EventCard/EventCardStyles.js
import { styled } from "@mui/material/styles";
import { Card, CardMedia, Chip, Link } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  width: 345,
  height: 330, // Reduced height
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  },
  overflow: "hidden",
  position: "relative",
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 150, // Adjusted image height
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
  position: "absolute",
  top: 12,
  left: 12,
  backgroundColor: "#FFC107",
  color: "#000",
  fontWeight: "bold",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    top: 8,
    left: 8,
    fontSize: "0.75rem",
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  cursor: "pointer",
  color: theme.palette.primary.main,
  fontSize: "0.9rem",
  fontWeight: "bold",
  textDecoration: "underline",
  textAlign: "center",
  marginTop: "auto",
}));

// New styled component for the description
export const StyledDescription = styled('p')(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
  display: "-webkit-box",
  WebkitLineClamp: 3, // Limit the description to 3 lines
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: "0.85rem",
  lineHeight: "1.2",
}));
