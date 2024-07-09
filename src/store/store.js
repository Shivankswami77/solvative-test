import create from "zustand";

const useStore = create((set) => ({
  time: 0,
  isRunning: false,
  startTimer: () => set((state) => ({ isRunning: !state.isRunning })),
  stopTimer: () => set(() => ({ isRunning: false, time: 0 })),
  resetTimer: () => set(() => ({ time: 0 })),
  incrementTime: () => set((state) => ({ time: state.time + 1 })),
}));

export default useStore;
