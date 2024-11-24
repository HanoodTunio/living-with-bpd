import React from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const BlogContent = ({ heading, text }) => {
  return (
    <Box>
      {/* Text (List or Paragraph) */}
      {Array.isArray(text) ? (
        <List>
          {text.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                padding: "0 0 10px",
              }}
            >
              <ListItemText
                primary={item}
                sx={{
                  fontSize: "1rem",
                  color: "#333",
                }}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography
          variant="body1"
          sx={{
            lineHeight: "1.8",
            color: "#333",
          }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default BlogContent;
