"use client";
import React, { useState, useMemo } from "react";
import Random from "@/assets/icons/Random";
import { Paper, TextField } from "@mui/material";
import { ActionButton } from "@/components/common";
import { useGlobalStore } from "@/globalStore";
import { sendRequestToCoze } from "@/utils/coze";
interface TextInputProps {
  randomTitle: string;
  buttonText: string;
}

const TextInput: React.FC<TextInputProps> = ({ randomTitle, buttonText }) => {
  const [textInput, setTextInput] = useState<string>("");
  const { setStoryboardedPrompts, setIsStoryboarded, isStoryboarded } =
    useGlobalStore();
  const isTextInputOpen = useMemo(() => {
    return !isStoryboarded;
  }, [isStoryboarded]);
  const handleRandom = () => {};
  const handleStoryboard = async () => {
    sendRequestToCoze(textInput, "7407621132809191433")
      .then(async (response) => {
        setStoryboardedPrompts(JSON.parse(response.data).output);
        setIsStoryboarded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return isTextInputOpen ? (
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
  ) : null;
};

export default TextInput;
