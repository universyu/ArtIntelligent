"use client";
import React from "react";
import Image from "next/image";
import { useGlobalStore } from "@/globalStore";
interface ImageContainerProps {}

const ImageContainer: React.FC<ImageContainerProps> = () => {
  const { storyboardedImages } = useGlobalStore();
  return (
    <Image
      src={`data:image/png;base64,${storyboardedImages[0]}`}
      alt=""
      width={512}
      height={512}
    />
  );
};
export default ImageContainer;
