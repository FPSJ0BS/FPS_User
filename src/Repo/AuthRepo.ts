import { ILoginWithEmailType, IRegType } from "@Type/LoginType";
import CoreAPI from "./CoreAPI";
import { getQuery } from "@Utils/GetQuery";
import { Package } from "@Type/PackageType";
import CoreAPINode from "./CoreAPINode";
const http = new CoreAPI();
const httpNode = new CoreAPINode();

const getToken = (): string | null => {
  const tokenString = localStorage.getItem("token:fpsjob");
  if (!tokenString) {
    return null;
  }
  const tokenObject = JSON.parse(tokenString);
  const loginToken = tokenObject.loginToken;
  return loginToken;
};

export const loginwithEmail = async (req: ILoginWithEmailType) => {
  const _req = { ...req, ip_address: "192.168.1.14" };
  const res = await http.postRequestForm("login", _req);
  return res;
};

export const doSignUp = async (req: IRegType) => {
  const res = await http.postRequestForm("register", req);
  // const res = await http.postRequestForm("Web_api_V3_test/signup", req);
  return res;
};

export const doVerificationOtp = async (req: any) => {
  const formData = new FormData();
  formData.append("mobile", req?.mobile);
  formData.append("otp", req?.otp);
  const res = await http.postRequestForm("varification-otp", formData);
  return res;
};

export const doMobileNumberCheck = async (data: any) => {
  const res = await http.getRequest(`v2/mobileCheck?${getQuery(data)}`);
  return res;
};

export const sendOtp = async (req: any) => {
  const res = await http.getRequest(`v2/sendotp?${getQuery(req)}`);
  return res;
};

export const otpCheck = async (req: any) => {
  const res = await http.getRequest(`v2/otpCheck?${getQuery(req)}`);
  return res;
};

export const dogetCategory = async () => {
  const res = await httpNode.getRequest(`user/categories`, {});
  return res;
};
export const dogetSubjectCategory = async (req: any) => {
  const formData = new FormData();
  formData.append("categoryId", req?.queryKey?.[1]?.categoryId);
  const res = await http.postRequestForm(`v2/subjects`, formData);
  return res;
};

export const dogetJobTitle = async (data) => {
  const res = await http.postRequest(`v3/job-title`, {
    industry_id: data.queryKey[1]?.industry_id,
  });
  return res;
};

export const dogetStateList = async () => {
  const res = await http.getRequest(`v2/states`);
  return res;
};

export const dogetStateListNode = async () => {
  const res = await httpNode.getRequest(`user/state`);
  return res;
};

export const dogetindustryList = async () => {
  const res = await http.getRequest(`v3/industry`);
  return res;
};

export const dogetCityList = async (data) => {
  const res = await http.getRequest(
    `v2/cities?stateID=${data?.queryKey?.[1]?.stateID}`
  );
  return res;
};

export const dogetFiterCityList = async () => {
  const res = await httpNode.getRequest(`user/allCities`);
  return res;
};

export const doSearchJobs = async (data) => {
  const res = await http.postRequest(
    `v2/Jobs_filter`,
    data?.queryKey?.[1] ? data?.queryKey?.[1] : {}
  );
  return res;
};

export const doSearchJobsNode = async (data) => {
  const res = await httpNode.getRequest(
    `user/filterJobs`,
    data?.queryKey?.[1] ? data?.queryKey?.[1] : {}
  );
  return res;
};



export const doLatestJobs = async () => {
  const res = await http.postRequest(`v2/searchJobs`, {});
  return res;
};

export const dogetJobDetails = async (req: any) => {
  const res = await http.getRequest(
    `v2/jobDetailBySlug?${getQuery(req?.queryKey[1])}`
  );
  return res;
};

export const dogetJobDetailsNode = async (req: any) => {
  const res = await httpNode.getRequest(
    `user/jobDetail?${getQuery(req?.queryKey[1])}`
  );
  return res;
};

export const doaddFavourite = async (req: any) => {
  const token = getToken();
  const res = await http.getRequest(
    `Web_api_V3_test/addFavourite?${getQuery(req)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const doRemoveFavourite = async (req: any) => {
  const token = getToken();
  const res = await http.getRequest(`v2/removeFavourite?${getQuery(req)},`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const doJobFilter = async (req: any) => {
  const res = await http.postRequest(`v2/Jobs_filter`, req?.queryKey?.[1]);
  return res;
};

export const doQualification = async () => {
  const res = await http.getRequest(`v2/qualifications`);
  return res;
};

export const doResultType = async () => {
  const res = await http.getRequest(`Faculity/resultType`);
  return res;
};

export const doEducationType = async () => {
  const res = await http.getRequest(`Faculity/educationType`);
  return res;
};

export const getPackages = async (UID: string): Promise<Package[]> => {
  const token = getToken();
  const res = await http.getRequest("v2/packages?UID=" + UID, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res as Package[];
};
export const doGetPartner = async () => {
  const res = await http.getRequest(`Clients/clients`);
  return res;
};
export const doGetTestimonial = async () => {
  const res = await httpNode.getRequest(`user/testimonials`);
  return res;
};
export const doForgotPassword = async (data) => {
  const res = await http.postRequestForm(
    `Faculity/forgetPassword
 `,
    data
  );
  return res;
};
export const doResetPassword = async (data) => {
  const res = await http.postRequestForm(
    `Faculity/passwordReset
 `,
    data
  );
  return res;
};
export const doGenerateAccessToken = async (data: any) => {
  const LINKEDIN_CLIENT_SECRET = "KYiQCPqRGk3dTMwA";
  const LINKEDIN_CLIENT_ID = "8649n4sxr39wfa";
  const LINKEDIN_CALLBACK_URL = `${window.location.origin}/`;
  const code = data?.code;
  const res = await http.postGenerateAccessToken(
    `/Url/accessToken`,
    new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: LINKEDIN_CALLBACK_URL,
      client_id: LINKEDIN_CLIENT_ID,
      client_secret: LINKEDIN_CLIENT_SECRET,
    })
  );
  return res;
};
export const doGetLinkedinProfile = async () => {
  const res = await http.getRequestLinkedin(`/api2/userinfo`);
  return res;
};
