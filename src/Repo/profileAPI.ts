import { useGlobalContext } from "@Context/GlobalContextProvider";
import CoreAPI from "./CoreAPI";
import { getQuery } from "@Utils/GetQuery";
import CoreAPINode from "./CoreAPINode";

const http = new CoreAPI();
const httpNode = new CoreAPINode();

const getToken = (): string | null => {
  const tokenString = localStorage.getItem("token:fpsjob");
  if (tokenString === null) {
    return null;
  }
  const tokenObject = JSON.parse(tokenString);
  const loginToken = tokenObject.loginToken;
  return loginToken;
};

export const doProfileEducationPost = async (data) => {
  const token = getToken();

  const res = await http.postRequestForm(
    `/Faculity/faculity_education_save`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    } as any
  );
  return res;
};

export const doGetUserDetailByUID = async (UID) => {
  const token = getToken();
  const res = await http.getRequest(`v2/userDetail?UID=${UID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
export const doGetUserDetailByUIDNode = async (UID) => {
  const token = getToken();
  const res = await httpNode.getRequest(`/user/facultyProfileAllData?facultyID=${UID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const doSkillsType = async (faculty_id) => {
  const token = getToken();
  const formData = {
    facultyID: faculty_id,
    skill: "",
  };

  const res = await httpNode.postRequest("/user/skillSearch", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
// export const doSkillsType = async (faculty_id) => {
//   const token = getToken();
//   const formData = new FormData();
//   formData.append("faculty_id", faculty_id);

//   const res = await http.postRequest("/Faculity/skill_list", formData, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res;
// };

export const doLanguagesType = async (UID) => {
 
  const res = await httpNode.getRequest(
    `user/languageList`
  );
  return res;
};

export const doSkillsSubmittedType = async (UID) => {
  const token = getToken();
  const res = await http.getRequest(`/Faculity/skill?faculity_id=${UID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const doCityType = async () => {
  const res = await httpNode.getRequest(`user/allCities`);
  return res;
};

export const doCareerPreferenceType = async () => {
  const res = await httpNode.getRequest(`user/careerPreferenceList`);
  return res;
};

export const doProfilePercentage = async (UID) => {
  const token = getToken();
  const res = await httpNode.getRequest(
    `user/facultyProfilePercentage?facultyID=${UID}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};
// export const doProfilePercentage = async (UID) => {
//   const token = getToken();
//   const res = await http.getRequest(
//     `/Faculity/checkProfilePercentage?faculityID=${UID}`,
//     {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     }

//   );
//   return res;
// };
