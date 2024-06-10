// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import appliedJobSlice from '@/Redux/appliedJobSlice';

const store = configureStore({
  reducer: {
    appliedJobSlice,
    // Add other reducers here if necessary
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
