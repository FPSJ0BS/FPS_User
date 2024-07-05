// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import appliedJobSlice from '@/Redux/appliedJobSlice';
import myProfileEducationSlice from '@/Redux/Dashboard/MyProfile/Education/EducationSlice'
import ResumeBuilderSlice from '@/Redux/Resume Builder/resumeBuilderSlice';

const store = configureStore({
  reducer: {
    appliedJobSlice,
    myProfileEducationSlice,
    ResumeBuilderSlice
    // Add other reducers here if necessary
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
