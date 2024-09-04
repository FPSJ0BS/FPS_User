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
      `${BASE_URL_NODE}/user/facultyEducationSave`,
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
    const response = await axios.patch(
      `${BASE_URL_NODE}/user/facultyEducationUpdate`,
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
  const token = getToken();

  try {
    const response = await axios.get(
      `${BASE_URL_NODE}/user/facultyEducation?facultyID=${facultyId}&id=${eduId}`,
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

export const getDeleteEducationDetails = async (eduId) => {
  const token = getToken();

  try {
    const response = await axios.delete(
      `${BASE_URL_NODE}/user/facultyEducationDelete?id=${eduId}`,
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

    const response = await axios.get(
      `${BASE_URL_NODE}/user/facultyProfileAllData?facultyID=${UID}`,
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

export const postSubmitEmploymentDetails = async (postData) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL_NODE}/user/facultyExperienceSave`,
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

export const getDeleteEmploymentDetails = async (empId) => {
  const token = getToken();
  try {
    const response = await axios.delete(
      `${BASE_URL_NODE}/user/facultyExperienceDelete?id=${empId}`,
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

export const getEmploymentDetailsSingle = async (empId, facultyId) => {
  const token = getToken();

  try {
    const response = await axios.get(
      `${BASE_URL_NODE}/user/facultyExperienceAllData?facultyID=${facultyId}&id=${empId}`,
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

export const postSubmitEmploymentEditDetails = async (postData) => {
  const token = getToken();
  try {
    const response = await axios.patch(
      `${BASE_URL_NODE}/user/facultyExperienceUpdate`,
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

export const postCertificateDetails = async (formData) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL_NODE}/user/facultyCertificateSave`,
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
      `${BASE_URL_NODE}/user/facultyCertificate?facultyID=${facultyId}&id=${certId}`,
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

export const postCertificateDetailsEdit = async (formData) => {
  const token = getToken();
  try {
    const response = await axios.patch(
      `${BASE_URL_NODE}/user/facultyCertificateUpdate`,
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

export const getDeleteCertificateDetails = async (empId) => {
  const token = getToken();
  try {
    const response = await axios.delete(
      `${BASE_URL_NODE}/user/facultyCertificateDelete?id=${empId}`,
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

export const postSubmitLanguageDetails = async (postData) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL_NODE}/user/facultyLanguageSave`,
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
    const response = await axios.delete(
      `${BASE_URL_NODE}/user/facultyLanguageDelete?id=${lanId}`,
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
      `${BASE_URL_NODE}/user/facultyLanguage?facultyID=${facId}&id=${lanId}`,
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
    const response = await axios.patch(
      `${BASE_URL_NODE}/user/facultyLanguageUpdate`,
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
  const token = getToken();

  try {
    const response = await axios.post(
      `${BASE_URL_NODE}/user/facultyCareerPreferenceSave`,
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

export const postUploadResume = async (formData) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL_NODE}/user/resume-upload`,
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
      `${BASE_URL_NODE}/user/facultySocialLinkSave`,
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

export const postOtherDetails = async (formData) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL_NODE}/user/facultyOtherDetails`,
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

export const getRefetchPercentageDetail = async (UID) => {
  const token = getToken();
  try {
    const response = await axios.get(
      `${BASE_URL_NODE}/user/facultyProfilePercentage?facultyID=${UID}`,
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

export const getResumeDetail = async (tempId, UID) => {
  const token = getToken();

  try {
    const response = await axios.get(
      `${BASE_URL}/Faculity/useTemplate?template_id=${tempId}&faculityID=${UID}`,
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

export const postSkillsAPI = async (data) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `${BASE_URL_NODE}/user/skillSearch`,
      data,
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

export const getSelectedListSkill = async (UID) => {
  const token = getToken();
  try {
    const response = await axios.get(
      `${BASE_URL_NODE}/user/facultySkill?facultyID=${UID}`,
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
    const response = await axios.post(`${BASE_URL}/v2/Jobs_filter`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getEmailVerify = async (emailIdentity, auth) => {
  try {
    const response = await axios.get(
      `${BASE_URL_NODE}/user/authentication/verifyEmailLinkApprove?emailIdentity=${emailIdentity}&auth=${auth}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getEmailVerifyInitiate = async (faculityID) => {
  try {
    const response = await axios.get(
      `${BASE_URL_NODE}/user/authentication/verifyEmailLink?facultyID=${faculityID}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getGoogleAPI = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL_NODE}/request/request`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
export const getGoogleAPIOAuth = async (code) => {
  try {
    const response = await axios.get(
      `${BASE_URL_NODE}/request/oAuth?code=${code}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


export const postDbtandUpi = async (data) => {
  const token = getToken();
  
  try {
    const response = await axios.post(
      `${BASE_URL_NODE}/user/packUpdate`,
      data,
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

export const getBankDetails = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL_NODE}/user/bankDetails`
    );
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};