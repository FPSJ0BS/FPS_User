
import CoreAPI from "./CoreAPI";
import { getQuery } from "@Utils/GetQuery";

const http = new CoreAPI();



export const doProfileEducationPost = async (data) => {
  const res = await http.postRequestForm(`/Faculity/faculity_education_save`, data);
  return res;
};



export const doGetUserDetailByUID = async (UID) => {
  const res = await http.getRequest(`v2/userDetail?UID=${UID}`);
  return res;
};



export const doSkillsType = async (faculty_id) => {
  const formData = new FormData();
  formData.append('faculty_id', faculty_id);


  const res = await http.postRequest('/Faculity/skill_list', formData);
  return res;
};


export const doLanguagesType = async (UID) => {
  const res = await http.getRequest(`/Faculity/languageList?faculity_id=${UID}`);
  return res;
};

export const doSkillsSubmittedType = async (UID) => {
  const res = await http.getRequest(`/Faculity/skill?faculity_id=${UID}`);
  return res;
};



export const doCityType = async () => {
  const res = await http.getRequest(`v2/filter_city?limit=&offset=`);
  return res;
};

export const doCareerPreferenceType = async () => {
  const res = await http.getRequest(`/Faculity/careerPreferencesList`);
  return res;
};

export const doProfilePercentage = async (UID) => {
  const res = await http.getRequest(`/Faculity/checkProfilePercentage?faculityID=${UID}`);
  return res;
};
