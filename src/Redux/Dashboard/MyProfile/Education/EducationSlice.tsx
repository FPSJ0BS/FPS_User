import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppliedJobValues {
  individualId: number | null;
  instituteName: string;
  course: string;
  courseType: string;
  startDate: string;
  endDate: string;
  result: string;
  resultType: string;
  specialization: string;

  [key: string]: any;
}

interface EmploymentTtpes {
  employmentId: number | null;
  organization: string;
  designation: string;
  responsibilities: string;
  startDate: string;
  endDate: string;
  currently: number;
}

interface CertificateTypes {
  file: null;
  certificateTitle: string;
  certificateDescription: string;

  fileEdit: null;
  certificateTitleEdit: string;
  certificateDescriptionEdit: string;

  certId: number | null;
}

interface LanguageTypes {
  languageId: number | null;
}

interface QualificationData {
  // Define the structure of qualification data
}

interface ResultData {
  // Define the structure of result data
}

interface EducationData {
  // Define the structure of education data
}

interface UserData {
  // Define the structure of user data
}

interface SkillData {
  id: number;
  skill: string;
  skillId: string;
  active: number;
  created_at: string;
}

interface AppliedJobState {
  myProfileEducationModal: boolean;
  myProfileEducationEditModal: boolean;
  myProfileEducationDeleteModal: boolean;
  myProfileSkillsAddModal: boolean;
  myProfileEmploymentAddModal: boolean;
  myProfileEmploymentDeleteModal: boolean;
  myProfileEmploymentEditModal: boolean;
  myProfileCertificatePostModal: boolean;
  myProfileCertificateEditModal: boolean;
  myProfileCertificateDeleteModal: boolean;
  myProfileLanguageAddModal: boolean;
  myProfileLanguageDeleteModal: boolean;
  myProfileLanguageEditModal: boolean;
  myProfileCareerPreferenceModal: boolean;
  myProfileUserDetailsModal: boolean;
  myProfileSocialMediaModal: boolean;
  myProfileOtherDetailsModal: boolean;

  editEducationData: AppliedJobValues;
  editEmploymentData: EmploymentTtpes;
  editCertificateData: CertificateTypes;
  editLanguageData: LanguageTypes;
  qualificationDataArray: QualificationData[];
  resultDataArray: ResultData[];
  educationDataArray: EducationData[];
  userDataArray: UserData[];
  skillsDataArray: SkillData[];
  skillsDataArrayAfter: SkillData[];
  skillsDataAddArray: SkillData[];
  skillsDataFilteredArray: SkillData[];
  languageDataArray: SkillData[];
  languageDataToAddArray: SkillData[];
  percentageDataToAddArray: SkillData[];
  cityDataArray: SkillData[];
  salaryDataArray: SkillData[];
  careerPreferenceDataArray: SkillData[];
  idCounter: number;
  refetchProfile: boolean;
}

const initialState: AppliedJobState = {
  myProfileEducationModal: false,
  myProfileEducationEditModal: false,
  myProfileEducationDeleteModal: false,
  myProfileSkillsAddModal: false,
  myProfileEmploymentAddModal: false,
  myProfileEmploymentDeleteModal: false,
  myProfileEmploymentEditModal: false,
  myProfileCertificatePostModal: false,
  myProfileCertificateEditModal: false,
  myProfileCertificateDeleteModal: false,
  myProfileLanguageAddModal: false,
  myProfileLanguageDeleteModal: false,
  myProfileLanguageEditModal: false,
  myProfileCareerPreferenceModal: false,
  myProfileUserDetailsModal: false,
  myProfileSocialMediaModal: false,
  myProfileOtherDetailsModal: false,

  qualificationDataArray: [],
  resultDataArray: [],
  educationDataArray: [],
  userDataArray: [],
  skillsDataArray: [],
  skillsDataArrayAfter: [],
  skillsDataAddArray: [],
  skillsDataFilteredArray: [],
  languageDataArray: [],
  languageDataToAddArray: [],
  percentageDataToAddArray: [],

  cityDataArray: [],
  salaryDataArray: [],
  careerPreferenceDataArray: [],

  idCounter: 1,
  refetchProfile: false,

  editEducationData: {
    individualId: null,
    instituteName: "",
    course: "",
    courseType: "",
    startDate: "",
    endDate: "",
    result: "",
    resultType: "",
    specialization: "",
  },

  editEmploymentData: {
    employmentId: null,
    organization: "",
    designation: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
    currently: 0,
  },

  editCertificateData: {
    file: null,
    certificateTitle: "",
    certificateDescription: "",

    fileEdit: null,
    certificateTitleEdit: "",
    certificateDescriptionEdit: "",

    certId: null,
  },

  editLanguageData: {
    languageId: null,
  },
};

const myProfileEducationSlice = createSlice({
  name: "appliedJob",
  initialState,
  reducers: {
    // Modal Reducers
    openModalEducationModal(state) {
      state.myProfileEducationModal = true;
    },

    closeModalEducationModal(state) {
      state.myProfileEducationModal = false;
    },

    openModalEducationEditModal(state) {
      state.myProfileEducationEditModal = true;
    },

    closeModalEducationEditModal(state) {
      state.myProfileEducationEditModal = false;
    },

    openModalEducationDeleteModal(state) {
      state.myProfileEducationDeleteModal = true;
    },

    closeModalEducationDeleteModal(state) {
      state.myProfileEducationDeleteModal = false;
    },

    openModalSkillsAddModal(state) {
      state.myProfileSkillsAddModal = true;
    },

    closeModalSkillsAddModal(state) {
      state.myProfileSkillsAddModal = false;
    },

    openModalEmploymentAddModal(state) {
      state.myProfileEmploymentAddModal = true;
    },

    closeModalEmploymentAddModal(state) {
      state.myProfileEmploymentAddModal = false;
    },

    openModalEmploymentDeleteModal(state) {
      state.myProfileEmploymentDeleteModal = true;
    },

    closeModalEmploymentDeleteModal(state) {
      state.myProfileEmploymentDeleteModal = false;
    },

    openModalEmploymentEditModal(state) {
      state.myProfileEmploymentEditModal = true;
    },

    closeModalEmploymentEditModal(state) {
      state.myProfileEmploymentEditModal = false;
    },

    openModalCertificateEditModal(state) {
      state.myProfileCertificatePostModal = true;
    },

    closeModalCertificateEditModal(state) {
      state.myProfileCertificatePostModal = false;
    },

    openModalCertificateEditDataModal(state) {
      state.myProfileCertificateEditModal = true;
    },

    closeModalCertificateEditDataModal(state) {
      state.myProfileCertificateEditModal = false;
    },

    openModalCertificateDeleteDataModal(state) {
      state.myProfileCertificateDeleteModal = true;
    },

    closeModalCertificateDeleteDataModal(state) {
      state.myProfileCertificateDeleteModal = false;
    },

    openModalLanguageAddModal(state) {
      state.myProfileLanguageAddModal = true;
    },

    closeModalLanguageAddModal(state) {
      state.myProfileLanguageAddModal = false;
    },

    openModalLanguageDeleteModal(state) {
      state.myProfileLanguageDeleteModal = true;
    },

    closeModalLanguageDeleteModal(state) {
      state.myProfileLanguageDeleteModal = false;
    },

    openModalLanguageEditModal(state) {
      state.myProfileLanguageEditModal = true;
    },

    closeModalLanguageEditModal(state) {
      state.myProfileLanguageEditModal = false;
    },

    openModalCareerPreferenceModal(state) {
      state.myProfileCareerPreferenceModal = true;
    },

    closeModalCareerPreferenceModal(state) {
      state.myProfileCareerPreferenceModal = false;
    },

    openModalUserDetailsModal(state) {
      state.myProfileUserDetailsModal = true;
    },

    closeModalUserDetailsModal(state) {
      state.myProfileUserDetailsModal = false;
    },

    openModalSocialMediaModal(state) {
      state.myProfileSocialMediaModal = true;
    },

    closeModalSocialMediaModal(state) {
      state.myProfileSocialMediaModal = false;
    },

    openModalOtherDetailsModal(state) {
      state.myProfileOtherDetailsModal = true;
    },

    closeModalOtherDetailsModal(state) {
      state.myProfileOtherDetailsModal = false;
    },

    // Data Reducers
    addQualificationData: (
      state,
      action: PayloadAction<QualificationData[]>
    ) => {
      state.qualificationDataArray = action.payload;
    },

    addResultData: (state, action: PayloadAction<ResultData[]>) => {
      state.resultDataArray = action.payload;
    },

    addEducationData: (state, action: PayloadAction<EducationData[]>) => {
      state.educationDataArray = action.payload;
    },

    addUserData: (state, action: PayloadAction<UserData[]>) => {
      state.userDataArray = action.payload;
    },

    addSkillsData: (state, action: PayloadAction<SkillData[]>) => {
      state.skillsDataArray = action.payload;
    },

    addLanguageData: (state, action: PayloadAction<SkillData[]>) => {
      state.languageDataArray = action.payload;
    },

    addPercentageData: (state, action: PayloadAction<SkillData[]>) => {
      state.percentageDataToAddArray = action.payload;
    },

    addCityData: (state, action: PayloadAction<SkillData[]>) => {
      state.cityDataArray = action.payload;
    },

    addSalaryData: (state, action: PayloadAction<SkillData[]>) => {
      state.salaryDataArray = action.payload;
    },

    addCareerPreferenceData: (state, action: PayloadAction<SkillData[]>) => {
      state.careerPreferenceDataArray = action.payload;
    },

    editEducationDataJobValues(
      state,
      action: PayloadAction<Partial<AppliedJobValues>>
    ) {
      state.editEducationData = {
        ...state.editEducationData,
        ...action.payload,
      };
    },

    editEmploymentDataJobValues(
      state,
      action: PayloadAction<Partial<EmploymentTtpes>>
    ) {
      state.editEmploymentData = {
        ...state.editEmploymentData,
        ...action.payload,
      };
    },

    editCertificateDataJobValues(
      state,
      action: PayloadAction<Partial<CertificateTypes>>
    ) {
      state.editCertificateData = {
        ...state.editCertificateData,
        ...action.payload,
      };
    },

    editLanguageDataJobValues(
      state,
      action: PayloadAction<Partial<LanguageTypes>>
    ) {
      state.editLanguageData = {
        ...state.editLanguageData,
        ...action.payload,
      };
    },

    addSkill: (state, action) => {
      const { skillId, skill } = action.payload;
      const existingSkill = state.skillsDataAddArray.find(
          (skill) => skill.skillId === skillId
      );
  
      if (existingSkill) {
          existingSkill.active = 1;
      } else {
          const newSkill = {
              id: state.idCounter,
              skill: skill,
              skillId: skillId,
              active: 1,
              created_at: new Date().toISOString(),
          };
          state.skillsDataAddArray.push(newSkill);
          state.idCounter += 1;
      }
  
      const combinedSkills = [...state.skillsDataArrayAfter, ...state.skillsDataAddArray];
  
      const uniqueSkillsMap = new Map();
      combinedSkills.forEach(skill => {
          if (skill.active === 1) {
              uniqueSkillsMap.set(skill.skillId, skill);
          }
      });
  
      state.skillsDataArrayAfter = Array.from(uniqueSkillsMap.values());
  },
  

  deleteSkill: (state, action) => {
    const skillIdToDelete = action.payload;
    const skillToDelete = state.skillsDataAddArray.find(
        (skill) => skill.skillId === skillIdToDelete
    );

    if (skillToDelete) {
        skillToDelete.active = 0;
    }

    state.skillsDataArrayAfter = state.skillsDataArrayAfter.filter(
        (skill) => skill.skillId !== skillIdToDelete
    );
},


    addMultipleSkillsFromAPI: (state, action: PayloadAction<SkillData[]>) => {
      const newSkills = action.payload.map((skill, index) => ({
        id: state.idCounter + index,
        skill: skill.skill,
        skillId: skill.id, // Map 'id' from API data to 'skillId'
        active: skill.active,
        created_at: skill.created_at,
      }));

  
      state.skillsDataAddArray = newSkills;


      state.idCounter += newSkills.length;

      const newSkillsAdd = action.payload
        .filter((skill) => skill.active === 1) // Filter skills where active is 1
        .map((skill, index) => ({
          id: state.idCounter + index,
          skill: skill.skill,
          skillId: skill.id, // Map 'id' from API data to 'skillId'
          active: skill.active,
          created_at: skill.created_at,
        }));

      // Combine existing skills with new skills
      const combinedSkills = [...state.skillsDataArrayAfter, ...newSkillsAdd];
      const uniqueSkillsMap = new Map();
      combinedSkills.forEach(skill => {
          uniqueSkillsMap.set(skill.skillId, skill);
      });
  
      // Convert the Map back to an array to get unique skills
      const uniqueSkillsArray = Array.from(uniqueSkillsMap.values());
  
      // Update the state with the unique skills
      state.skillsDataArrayAfter = uniqueSkillsArray;
    },

    // Reducer to toggle refetchProfile
    toggleRefetchProfile: (state) => {
      return {
        ...state,
        refetchProfile: !state.refetchProfile,
      };
    },
  },
});

export const {
  openModalEducationModal,
  closeModalEducationModal,
  openModalEducationEditModal,
  closeModalEducationEditModal,
  openModalEducationDeleteModal,
  closeModalEducationDeleteModal,
  openModalSkillsAddModal,
  closeModalSkillsAddModal,
  openModalEmploymentAddModal,
  closeModalEmploymentAddModal,
  openModalEmploymentDeleteModal,
  closeModalEmploymentDeleteModal,
  openModalEmploymentEditModal,
  closeModalEmploymentEditModal,
  openModalCertificateEditModal,
  closeModalCertificateEditModal,
  openModalCertificateEditDataModal,
  closeModalCertificateEditDataModal,
  openModalCertificateDeleteDataModal,
  closeModalCertificateDeleteDataModal,
  openModalLanguageAddModal,
  closeModalLanguageAddModal,
  openModalLanguageDeleteModal,
  closeModalLanguageDeleteModal,
  openModalLanguageEditModal,
  closeModalLanguageEditModal,
  openModalCareerPreferenceModal,
  closeModalCareerPreferenceModal,
  openModalUserDetailsModal,
  closeModalUserDetailsModal,
  openModalSocialMediaModal,
  closeModalSocialMediaModal,
  openModalOtherDetailsModal,
  closeModalOtherDetailsModal,

  editEducationDataJobValues,
  editEmploymentDataJobValues,
  editCertificateDataJobValues,
  editLanguageDataJobValues,
  addQualificationData,
  addResultData,
  addEducationData,
  addUserData,
  addSkillsData,
  addLanguageData,
  addPercentageData,
  addCityData,
  addSalaryData,
  addCareerPreferenceData,
  addSkill,
  deleteSkill,
  addMultipleSkillsFromAPI,
  toggleRefetchProfile, // Export the new reducer
} = myProfileEducationSlice.actions;

export default myProfileEducationSlice.reducer;
