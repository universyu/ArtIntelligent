"use client";
import React from "react";
import { useGlobalStore } from "@/globalStore";
import { ChildCenterDiv } from "@/components/common";
interface ImageProps {}

const Image: React.FC<ImageProps> = () => {
  const { storyboaedPrompts } = useGlobalStore();
  return (
    <ChildCenterDiv
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <img src={`data:image/png;base64,${storyboaedPrompts}`} alt="" />
    </ChildCenterDiv>
  );
};
export default Image;
