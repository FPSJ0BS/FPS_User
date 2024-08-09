import axios from "axios";

const BASE_URL = "https://admin.fpsjob.com/api";
const BASE_URL_NODE = "https://empapi.fpsjob.com";

const getToken = (): string | null => {
  const tokenString = localStorage.getItem("token:fpsjob");
  if (tokenString === null) {
    return null;
  }
  const tokenObject = JSON.parse(tokenString);
  const loginToken = tokenObject.loginToken;
  return loginToken;
};

export const getTrackingData = async (applyID) => {
  const token = getToken();
  try {
    const response = await axios.get(
      `${BASE_URL_NODE}/user/appliedJobsStatus?applyID=${applyID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postSubmitEducationDetails = async (postData) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/faculity_education_save`,
      postData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postSubmitEducationEditDetails = async (postData) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/faculity_education_edit`,
      postData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
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
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/skill_edit`,
      postData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getRefetchUserProfileData = async (UID) => {
  try {
    const token = getToken();

    const response = await axios.get(`${BASE_URL}/v2/userDetail?UID=${UID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postSubmitEmploymentDetails = async (postData) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/faculity_experience_save`,
      postData,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          
        }
      }

    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getDeleteEmploymentDetails = async (empId) => {
  const token = getToken();
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/faculity_experience_delete?experience=${empId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }

    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getEmploymentDetailsSingle = async (empId, facultyId) => {
  const token = getToken();

  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/faculity_experience?experience=${empId}&faculity_id=${facultyId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }

    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postSubmitEmploymentEditDetails = async (postData) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/faculity_experience_edit`,
      postData,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }

    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postCertificateDetails = async (formData) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/faculityCertificateSave`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
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
  const token = getToken();
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/faculityCertificate?faculityID=${facultyId}&certificate_id=${certId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }

    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postCertificateDetailsEdit = async (formData) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/faculityCertificateEdit`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${token}`
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
  const token = getToken();
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/faculityCertificateDelete?certificate_id=${empId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }

    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postSubmitLanguageDetails = async (postData) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/languageAdd`,
      postData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getDeleteLanguageDetails = async (lanId) => {
  const token = getToken();
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/faculityLanguageDelete?language=${lanId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getSingleLanguageDetails = async (facId, lanId) => {
  const token = getToken();
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/faculityLanguage?faculity_id=${facId}&id=${lanId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postSubmitEditLanguageDetails = async (postData) => {
  const token = getToken();

  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/faculityLanguageEdit`,
      postData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
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
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL}/Web_api_V3_test/profileCv`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
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
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/saveSocialLink`,
      postData,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }

    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postOtherDetails = async (formData) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/updateOtherDetails`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${token}`
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
  const token = getToken();
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/checkProfilePercentage?faculityID=${UID}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }

    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getResumeDetail = async (tempId, UID) => {
  const token = getToken();

  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/useTemplate?template_id=${tempId}&faculityID=${UID}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }

    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const postSkillsAPI = async (formData) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL}/Faculity/skill_list`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
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
  const token = getToken();
  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/skill?faculity_id=${UID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const uploadProfileImage = async (formData) => {
  const token = getToken();

  try {
    const response = await axios.post(
      `${BASE_URL}/Web_api_V3_test/profileImage`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
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


export const findJobsSearch = async (formData) => {


  try {
    const response = await axios.post(
      `${BASE_URL}/v2/Jobs_filter`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};