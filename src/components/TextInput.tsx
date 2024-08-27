"use client";
import React, { useState } from "react";
import Random from "@/assets/icons/Random";
import { Paper, TextField } from "@mui/material";
import { ActionButton } from "@/components/common";
import { useGlobalStore } from "@/globalStore";
interface TextInputProps {
  randomTitle: string;
  buttonText: string;
}

const TextInput: React.FC<TextInputProps> = ({ randomTitle, buttonText }) => {
  const [textInput, setTextInput] = useState("");
  const { setStoryboaedPrompts } = useGlobalStore();
  const handleRandom = () => {};
  const handleStoryboard = async () => {
    try {
      const response = await fetch("/api/sd", {
        method: "POST",
        headers: {
          'Content-Type': 'text/plain'
        },
        body: textInput,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from target endpoint");
      }
      const base64Image = await response.text();
      setStoryboaedPrompts([base64Image]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Paper
      style={{
        width: 432,
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
          marginBottom: 16,
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
      <ActionButton
        variant="contained"
        style={{
          color: "white",
          marginTop: 32,
          height: "48px",
          backgroundColor: "#00ae42",
          fontSize: 20,
        }}
        onClick={handleStoryboard}
      >
        {buttonText}
      </ActionButton>
    </Paper>
  );
};

export default TextInput;
