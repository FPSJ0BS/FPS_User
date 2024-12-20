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
  modalOpenTermsAndConditions: boolean;
  modalOpenmodalOpenLogin: boolean;
  modalOpenReview: boolean;
  isChecked:  boolean;
  membershipButtonPopup:  boolean;
  modalOpenMembershipItemData: any;
  appliedJobValues: AppliedJobValues;
  subjectText: String;
  membershipTypeText: String;
  membershipStoreItem: String[];
}

// Define the initial state for the slice
const initialState: AppliedJobState = {
  modalOpen: false,
  modalOpenMembership: false,
  modalOpenTermsAndConditions: false,
  modalOpenmodalOpenLogin: false,
  modalOpenReview: false,
  modalOpenMembershipItemData: null,
  subjectText: "",
  appliedJobValues: {
    applyID: "",
  },
  isChecked: false,
  membershipButtonPopup: false,
  membershipTypeText: "",
  membershipStoreItem: [],
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


    openModalTermsAndConditions(state) {
      state.modalOpenTermsAndConditions = true;
    },
    // Reducer to close the modal and reset applyID
    closeModalTermsAndConditions(state) {
      state.modalOpenTermsAndConditions = false;
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
    openModalReview(state) {
      state.modalOpenReview = true;
    },
    // Reducer to close the modal and reset applyID
    closeModalReview(state) {
      state.modalOpenReview = false;
    },

    setSubjectText: (state, action) => {
      state.subjectText = action.payload;
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

    setToggleMembershipTnCCheck: (state) => {
      state.isChecked = !state.isChecked; 
    },

    setMembershipTypeText: (state, action) => {
      state.membershipTypeText = action.payload;
    },
    setMembershipButtonPopup: (state, action) => {
      console.log('action.payloadaction.payload',action.payload);
      state.membershipButtonPopup = action.payload;
    },
    setMembershipItem: (state, action) => {
      state.membershipStoreItem = action.payload;
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
  setSubjectText,
  openModalReview,
  closeModalReview,
  openModalTermsAndConditions,
  closeModalTermsAndConditions,
  setToggleMembershipTnCCheck,
  setMembershipTypeText,
  setMembershipButtonPopup,
  setMembershipItem
} = appliedJobSlice.actions;

// Export the reducer
export default appliedJobSlice.reducer;
