import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface LanguageTypes {
  languageId: number | null;
}



interface ResultData {
  





}





interface AppliedJobState {


  resumeDataFetch: LanguageTypes;

  resumeDataArray: ResultData[];

  refetchProfile: boolean;
  loadingResumeData: boolean,
  paymentStatus: boolean,



  templateNumber:number | null;
}

const initialState: AppliedJobState = {
 
  resumeDataArray: [],

  refetchProfile: false,
  loadingResumeData: false,
  paymentStatus: false,
  templateNumber:null,


  resumeDataFetch: {
    languageId: null,
  },
};

const resumeBuilderSlice = createSlice({
  name: "resumeBuilderSlice",
  initialState,
  reducers: {
   

    addResumeDataArray: (state, action: PayloadAction<ResultData[]>) => {
      state.resumeDataArray = action.payload;
    },

   

    resumeDataFetchValues(
      state,
      action: PayloadAction<Partial<LanguageTypes>>
    ) {
      state.resumeDataFetch = {
        ...state.resumeDataFetch,
        ...action.payload,
      };
    },
   

    // Reducer to toggle refetchProfile
    toggleRefetchProfile: (state) => {
      return {
        ...state,
        refetchProfile: !state.refetchProfile,
      };
    },

    // Reducer to toggle fetch resume dat aloader
    toggleResumeDataLoader: (state, action) => {
      return {
        ...state,
        loadingResumeData: action.payload,
      };
    },

    paymentStatusCheck: (state, action) => {
      return {
        ...state,
        paymentStatus: action.payload,
      };
    },

    addNumberToTemplateNumber: (state, action: PayloadAction<number>) => {
      if (state.templateNumber === null) {
        state.templateNumber = action.payload; 
      } else {
        state.templateNumber = action.payload; 
      }
    },
  },
});

export const {
 

 
    resumeDataFetchValues,

    addResumeDataArray,
    addNumberToTemplateNumber,
    toggleResumeDataLoader,
    paymentStatusCheck,
  
  toggleRefetchProfile, // Export the new reducer
} = resumeBuilderSlice.actions;

export default resumeBuilderSlice.reducer;
