import { create } from "zustand";

interface storeState {
  storyboardedPrompts: string[];
  setStoryboardedPrompts: (prompts: string[]) => void;
  storyboardedImages: string[];
  setStoryboardedImages: (images: string[]) => void;
  isStoryboarded: boolean;
  setIsStoryboarded: (isStoryboarded: boolean) => void;
}

const initStates = {
  storyboardedPrompts: [],
  storyboardedImages: [],
  isStoryboarded: false,
};

export const useGlobalStore = create<storeState>((set) => ({
  ...initStates,
  setStoryboardedPrompts: (prompts: string[]) => {
    set({ storyboardedPrompts: prompts });
  },
  setStoryboardedImages: (images: string[]) => {
    set({ storyboardedImages: images });
  },
  setIsStoryboarded: (isStoryboarded: boolean) => {
    set({ isStoryboarded });
  },
  reset: () => {
    set(initStates);
  },
}));
