"use client";
import React from "react";
import Image from 'next/image'
import { useGlobalStore } from "@/globalStore";
import { ChildCenterDiv } from "@/components/common";
interface ImageContainerProps {}

const ImageContainer: React.FC<ImageContainerProps> = () => {
  const { storyboardedPrompts } = useGlobalStore();
  return (
    <ChildCenterDiv
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Image src={`data:image/png;base64,${storyboardedPrompts}`} alt="" width={512} height={512}/>
    </ChildCenterDiv>
  );
};
export default ImageContainer;
