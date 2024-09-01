"use client";
import React, { useState } from "react";
import { Paper, TextField } from "@mui/material";
import { ActionButton } from "@/components/common";
import { useGlobalStore } from "@/globalStore";
import ImageContainer from "@/components/ImageContainer";
import { sendRequestToCoze } from "@/utils/coze";
interface StoryboardedTextsProps {
  buttonText: string;
}

const StoryboardedTexts: React.FC<StoryboardedTextsProps> = ({
  buttonText,
}) => {
  const [promptIndex, setPromptIndex] = useState<number>(0);
  const {
    isStoryboarded,
    storyboardedPrompts,
    setStoryboardedPrompts,
    storyboardedImages,
    setStoryboardedImages,
  } = useGlobalStore();
  const handleGenerate = async () => {
    sendRequestToCoze(storyboardedPrompts[promptIndex], "7407627249333862450")
      .then(async (result) => {
        const prompt = JSON.parse(result.data).output;
        console.log(prompt);
        const imgResponse = await fetch("/api/sd", {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: prompt,
        });
        const newImages = [...storyboardedImages];
        newImages[promptIndex] = await imgResponse.text();
        setStoryboardedImages(newImages);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTexts = [...storyboardedPrompts];
    newTexts[promptIndex] = e.target.value;
    setStoryboardedPrompts(newTexts);
  };

  return isStoryboarded ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 25,
      }}
    >
      <Paper
        style={{
          width: 432,
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "12px",
        }}
      >
        <TextField
          fullWidth
          multiline
          variant="standard"
          color="success"
          rows={10}
          value={storyboardedPrompts[promptIndex]}
          onChange={handlePromptChange}
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
          onClick={handleGenerate}
        >
          {buttonText}
        </ActionButton>
      </Paper>
      <ImageContainer />
    </div>
  ) : null;
};

export default StoryboardedTexts;
