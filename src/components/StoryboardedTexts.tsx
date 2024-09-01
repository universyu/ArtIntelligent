"use client";
import React, { useState } from "react";
import { Paper, TextField } from "@mui/material";
import { ActionButton } from "@/components/common";
import { useGlobalStore } from "@/globalStore";
import ImageContainer from "@/components/ImageContainer";

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
    try {
      const response = await fetch("/api/prompt", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: storyboardedPrompts[promptIndex],
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from target endpoint");
      }
      const ret = await response.json();
      const prompt = JSON.parse(ret.data).output;
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
    } catch (error) {
      console.error("Error:", error);
    }
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
