"use client";
import React, { useState } from "react";
import Random from "@/assets/icons/Random";
import { Button, Paper, TextField } from "@mui/material";
interface TextInputProps {
  randomTitle?: string;
  placeHoder?: string;
  buttonText: string;
}

const TextInput: React.FC<TextInputProps> = ({
  randomTitle,
  placeHoder,
  buttonText,
}) => {
  const [textInput, setTextInput] = useState("");
  const handleRandom = () => {};
  return (
    <Paper
      style={{
        width: 432,
        height: 482,
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          backgroundColor: "#d9eee1",
          width: "100%",
          height: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          cursor: "pointer",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(0, 255, 0, 0.3)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#d9eee1";
        }}
        onClick={() => handleRandom()}
      >
        <Random />
        <span
          style={{
            fontSize: "24px",
            lineHeight: "32px",
            fontWeight: 600,
            textAlign: "center",
            color: "#0eb24c",
            textDecoration: "underline",
            textDecorationColor: "#6cce91",
            userSelect: "none",
          }}
        >
          {randomTitle}
        </span>
      </div>
      <TextField
        fullWidth
        multiline
        variant="standard"
        color="success"
        rows={10}
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        inputProps={{
          style: {
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0.1em",
          },
        }}
      />
    </Paper>
  );
};

export default TextInput;
