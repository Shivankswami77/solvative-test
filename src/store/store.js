import create from "zustand";

const useStore = create((set) => ({
  time: 0,
  isRunning: false,
  elapsedSeconds: 0, // Initialize elapsedSeconds in the store
  stopTimer: () => {
    set((state) => ({
      isRunning: false,
      time: 0,
      elapsedSeconds: state.time, // Store elapsed seconds when timer stopped
    }));
  },
  startTimer: () =>
    set((state) => ({ isRunning: !state.isRunning, elapsedSeconds: 0 })),
  resetTimer: () => set(() => ({ time: 0, elapsedSeconds: 0 })),
  incrementTime: () =>
    set((state) => ({ time: state.time + 1, elapsedSeconds: 0 })),
}));

export default useStore;
