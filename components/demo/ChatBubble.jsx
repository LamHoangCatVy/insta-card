import React from "react";
import { Fade, Paper, Typography } from "@mui/material";

const ChatBubble = ({ message, isVisible }) => {
  return (
    <Fade in={isVisible} timeout={500}>
      <Paper
        elevation={3}
        style={{
          fontSize: "10px",
          padding: "10px",
          backgroundColor: "#FFFFFF",
          marginBottom: "10px",
          borderRadius: "10px",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out", 
        }}>
        <Typography variant="body1" style={{ color: "#3285E1" }}>
          {message}
        </Typography>
      </Paper>
    </Fade>
  );
};

export default ChatBubble;
