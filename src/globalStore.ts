import { create } from "zustand";

interface storeState {
  storyboardedPrompts: string[];
  setStoryboardedPrompts: (prompts: string[]) => void;
  storyboardedImages: string[]
  setStoryboardedImages: (images: string[]) => void;  
}

const initStates = {
  storyboardedPrompts: [],
  storyboardedImages: [], 
};

export const useGlobalStore = create<storeState>((set) => ({
  ...initStates,
  setStoryboardedPrompts: (prompts: string[]) => {
    set({ storyboardedPrompts: prompts });
  },
  setStoryboardedImages: (images: string[]) => {
    set({ storyboardedImages: images });
  },
  reset: () => {
    set(initStates);
  },
}));
