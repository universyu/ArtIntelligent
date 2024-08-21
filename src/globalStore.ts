import { create } from "zustand";

interface storeState {
  storyboaedPrompts: string[];
  setStoryboaedPrompts: (prompts: string[]) => void;
}

const initStates = {
  storyboaedPrompts: [],
};

export const usePromptStore = create<storeState>((set) => ({
  ...initStates,
  setStoryboaedPrompts: (prompts: string[]) => {
    set({ storyboaedPrompts: prompts });
  },
  reset: () => {
    set(initStates);
  },
}));
