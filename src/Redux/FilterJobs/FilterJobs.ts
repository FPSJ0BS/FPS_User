import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface City {
  city: string;
  id: number;
}

interface Subject {
  function: string;
  ID: number;
}
interface JobType {
  value: string;
  label: string;
}

interface FilterJobInputs {
  city: string[];
  subject: string[];
  jobType: string[];
}

interface FilterJobsState {
  filterJobInputs: FilterJobInputs;
  visibleCities: City[];
  remainingCities: City[];
  showPopup: boolean;
  searchQuery: string;
  filteredCities: City[];

  visibleSubjects: Subject[];
  remainingSubjects: Subject[];
  showPopupSubjects: boolean;
  searchQuerySubjects: string;
  filteredSubjects: Subject[];

  visibleJobType: JobType[];
  remainingJobType: JobType[];
  showPopupJobType: boolean;
  searchQueryJobType: string;
  filteredJobType: JobType[];
}

const initialState: FilterJobsState = {
  filterJobInputs: {
    city: [],
    subject: [],
    jobType: [],
  },
  visibleCities: [],
  remainingCities: [],
  showPopup: false,
  searchQuery: "",
  filteredCities: [],

  visibleSubjects: [],
  remainingSubjects: [],
  showPopupSubjects: false,
  searchQuerySubjects: "",
  filteredSubjects: [],


  visibleJobType: [],
  remainingJobType: [],
  showPopupJobType: false,
  searchQueryJobType: "",
  filteredJobType: [],
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
    initializeCityData: (state, action: PayloadAction<City[]>) => {
      const cities = action.payload;
      state.visibleCities = cities.slice(0, 4);
      state.remainingCities = cities.slice(4);
      state.filteredCities = cities; // Set to all cities initially
    },
    togglePopup: (state) => {
      state.showPopup = !state.showPopup;
    },
    toggleCitySelection: (state, action: PayloadAction<string>) => {
      const city = action.payload;
      if (state.filterJobInputs.city.includes(city)) {
        state.filterJobInputs.city = state.filterJobInputs.city.filter(c => c !== city);
      } else {
        state.filterJobInputs.city.push(city);
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;

      // Combine visible and remaining cities to filter
      const allCitiesInPopup = [...state.visibleCities, ...state.remainingCities];
      state.filteredCities = allCitiesInPopup.filter(city =>
        city.city.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    uncheckAllCities: (state) => {
      state.filterJobInputs.city = []; // Reset the selected cities
    },




    

    initializeSubjectData: (state, action: PayloadAction<Subject[]>) => {
      const subjects = action.payload;
      state.visibleSubjects = subjects.slice(0, 4);
      state.remainingSubjects = subjects.slice(4);
      state.filteredSubjects = subjects; // Set to all subjects initially
    },
    togglePopupSubjects: (state) => {
      state.showPopupSubjects = !state.showPopupSubjects;
    },
    toggleSubjectSelection: (state, action: PayloadAction<string>) => {
      const subject = action.payload;
      if (state.filterJobInputs.subject.includes(subject)) {
        state.filterJobInputs.subject = state.filterJobInputs.subject.filter(s => s !== subject);
      } else {
        state.filterJobInputs.subject.push(subject);
      }
    },
    setSearchQuerySubject: (state, action: PayloadAction<string>) => {
      state.searchQuerySubjects = action.payload;

      // Combine visible and remaining subjects to filter
      const allSubjectsInPopup = [...state.visibleSubjects, ...state.remainingSubjects];
      state.filteredSubjects = allSubjectsInPopup.filter(subject =>
        subject.function.toLowerCase().includes(state.searchQuerySubjects.toLowerCase())
      );
    },
    uncheckAllSubjects: (state) => {
      state.filterJobInputs.subject = []; // Reset the selected subjects
    },















    initializeJobTypeData: (state, action: PayloadAction<JobType[]>) => {
      const type = action.payload;
      state.visibleJobType = type.slice(0, 5);
      state.remainingJobType = type.slice(4);
      state.filteredJobType = type; 
    },
   
    toggleJobTypeSelection: (state, action: PayloadAction<string>) => {
      const type = action.payload;
      if (state.filterJobInputs.jobType.includes(type)) {
        state.filterJobInputs.jobType = state.filterJobInputs.jobType.filter(s => s !== type);
      } else {
        state.filterJobInputs.jobType.push(type);
      }
    },
    setSearchQueryJobType: (state, action: PayloadAction<string>) => {
      state.searchQueryJobType = action.payload;

  
      const allJobTypeInPopup = [...state.visibleJobType, ...state.remainingJobType];
      state.filteredJobType = allJobTypeInPopup.filter(subject =>
        subject.label.toLowerCase().includes(state.searchQueryJobType.toLowerCase())
      );
    },
    uncheckAllJobType: (state) => {
      state.filterJobInputs.jobType = []; 
    },

  },
});

export const {
  addFilterInput,
  removeFilterInput,
  initializeCityData,
  togglePopup,
  toggleCitySelection,
  setSearchQuery,
  uncheckAllCities,
  initializeSubjectData,
  togglePopupSubjects,
  toggleSubjectSelection,
  setSearchQuerySubject,
  uncheckAllSubjects,
  initializeJobTypeData,
  toggleJobTypeSelection,
  uncheckAllJobType
} = filterJobsSlice.actions;

export default filterJobsSlice.reducer;
