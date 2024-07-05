import axios from "axios";

const BASE_URL = "https://admin.fpsjob.com/api";

export const getTrackingData = async (applyID) => {
  console.log("axios id", applyID);
  try {
    const response = await axios.get(
      `${BASE_URL}/v2/appliedJobsStatus?applyID=${applyID}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postSubmitEducationDetails = async (postData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/faculity_education_save`,
      postData
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postSubmitEducationEditDetails = async (postData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/faculity_education_edit`,
      postData
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const getEducationDetailsSingle = async (eduId, facultyId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/faculity_education?education=${eduId}&faculity_id=${facultyId}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const getDeleteEducationDetails = async (eduId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/faculity_education_delete?education=${eduId}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postSubmitSkillsData = async (postData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/skill_edit`,
      postData
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const getRefetchUserProfileData = async (UID) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/v2/userDetail?UID=${UID}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const postSubmitEmploymentDetails = async (postData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/faculity_experience_save`,
      postData
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const getDeleteEmploymentDetails = async (empId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/faculity_experience_delete?experience=${empId}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getEmploymentDetailsSingle = async (empId, facultyId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/faculity_experience?experience=${empId}&faculity_id=${facultyId}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const postSubmitEmploymentEditDetails = async (postData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/faculity_experience_edit`,
      postData
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const postCertificateDetails = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/faculityCertificateSave`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const getCertificateDetailsSingle = async (certId, facultyId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/faculityCertificate?faculityID=${facultyId}&certificate_id=${certId}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postCertificateDetailsEdit = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/faculityCertificateEdit`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getDeleteCertificateDetails = async (empId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/faculityCertificateDelete?certificate_id=${empId}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const postSubmitLanguageDetails = async (postData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/languageAdd`,
      postData
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const getDeleteLanguageDetails = async (lanId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/faculityLanguageDelete?language=${lanId}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getSingleLanguageDetails = async (facId ,lanId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/faculityLanguage?faculity_id=${facId}&id=${lanId}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postSubmitEditLanguageDetails = async (postData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/faculityLanguageEdit`,
      postData
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getCareerPreferenceDetails = async (facId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/faculityCareerPreferences?faculityID=${facId}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postSubmitCareerPreferenceDetails = async (postData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/faculityCareerPreferencesSave`,
      postData
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const postUploadResume = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Web_api_V3_test/profileCv`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const postSubmitSocialMediaLinksDetails = async (postData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/saveSocialLink`,
      postData
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const postOtherDetails = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/updateOtherDetails`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getRefetchPercentageDetail = async (UID) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/checkProfilePercentage?faculityID=${UID}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getResumeDetail = async (tempId,UID) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/useTemplate?template_id=${tempId}&faculityID=${UID}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const postSkillsAPI = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/skill_list`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getSelectedListSkill = async (UID) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/skill?faculity_id=${UID}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const uploadProfileImage = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/Web_api_V3_test/profileImage`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getResumeData = async (UID) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/resumeTemplateList?faculityID=${UID}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};