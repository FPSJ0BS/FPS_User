// src/store/appliedJobSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for applied job values
interface AppliedJobValues {
  applyID: string;
  // Add more fields as necessary
  [key: string]: any;
}

// Define the interface for the slice state
interface AppliedJobState {
  modalOpen: boolean;
  modalOpenMembership: boolean;
  modalOpenmodalOpenLogin: boolean;
  modalOpenMembershipItemData: any;
  appliedJobValues: AppliedJobValues;
}

// Define the initial state for the slice
const initialState: AppliedJobState = {
  modalOpen: false,
  modalOpenMembership: false,
  modalOpenmodalOpenLogin: false,
  modalOpenMembershipItemData: null,
  appliedJobValues: {
    applyID: "",
  },
};

// Create the slice
const appliedJobSlice = createSlice({
  name: "appliedJob",
  initialState,
  reducers: {
    // Reducer to open the modal
    openModal(state) {
      state.modalOpen = true;
    },
    // Reducer to close the modal and reset applyID
    closeModal(state) {
      state.modalOpen = false;
    },
    openModalMembership(state) {
      state.modalOpenMembership = true;
    },
    // Reducer to close the modal and reset applyID
    closeModalMembership(state) {
      state.modalOpenMembership = false;
    },
    setModalOpenMembershipItemData: (state, action) => {
      state.modalOpenMembershipItemData = action.payload;
    },

    openModalLogin(state) {
      state.modalOpenmodalOpenLogin = true;
    },
    // Reducer to close the modal and reset applyID
    closeModalLogin(state) {
      state.modalOpenmodalOpenLogin = false;
    },
    // Reducer to update applied job values
    updateAppliedJobValues(
      state,
      action: PayloadAction<Partial<AppliedJobValues>>
    ) {
      state.appliedJobValues = {
        ...state.appliedJobValues,
        ...action.payload,
      };
    },
  },
});

// Export the actions
export const {
  openModal,
  closeModal,
  updateAppliedJobValues,
  openModalMembership,
  closeModalMembership,
  setModalOpenMembershipItemData,
  closeModalLogin,
  openModalLogin,
} = appliedJobSlice.actions;

// Export the reducer
export default appliedJobSlice.reducer;
