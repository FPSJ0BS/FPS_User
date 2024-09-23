// src/store/appliedJobSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterJobInputs {
  city: string[];
  subject: string[];
}

interface FilterJobsState {
  filterJobInputs: FilterJobInputs;
}

const initialState: FilterJobsState = {
  filterJobInputs: {
    city: [],
    subject: [],
  },
};

const filterJobsSlice = createSlice({
  name: "filterJobsSlice",
  initialState,
  reducers: {
    addFilterInput: (state, action: PayloadAction<{ key: keyof FilterJobInputs; value: string }>) => {
      const { key, value } = action.payload;

      if (!state.filterJobInputs[key].includes(value)) {
        state.filterJobInputs[key].push(value);
      }
    },
    removeFilterInput: (state, action: PayloadAction<{ key: keyof FilterJobInputs; value: string }>) => {
      const { key, value } = action.payload;

      state.filterJobInputs[key] = state.filterJobInputs[key].filter(item => item !== value);
    },
  },
});

export const { addFilterInput, removeFilterInput } = filterJobsSlice.actions;

export default filterJobsSlice.reducer;
