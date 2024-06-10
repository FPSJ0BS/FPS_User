
import CoreAPI from "./CoreAPI";
import { getQuery } from "@Utils/GetQuery";

const http = new CoreAPI();
export const doGetProfileDetails = async (data: any) => {
  const res = await http.getRequest(
    `v2/userDetail?${getQuery(data?.queryKey?.[1])}`
  );
  return res;
};

export const doGetExperiences = async () => {
  const res = await http.getRequest(`v2/experiences`);
  return res;
};

export const doProfileUpdate = async (data) => {
  const res = await http.postRequest(`v2/profileUpdate?`, data);
  return res;
};

export const doContactUs = async (data) => {
  const res = await http.postRequestForm(`v2/contact_us`, data);
  return res;
};
export const doGetBlog = async (data) => {
  const res = await http.postRequestForm(`blog/blogs`, data);
  return res;
};
export const doGetBlogDetails = async (data) => {
  const res = await http.postRequestForm(`blog/blog_details`, data);
  return res;
};
export const doUploadProfileImage = async (data) => {
  const res = await http.postRequestForm(`Web_api_V3_test/profileImage`, data);
  return res;
};

export const doUploadProfileCv = async (data, setProgress) => {
  const res = await http.postRequestForm(
    `Web_api_V3_test/profileCv`,
    data,
    setProgress
  );
  return res;
};

export const doGetSalary = async () => {
  const res = await http.getRequest(`v2/salaries`);
  return res;
};

export const doAllFavourite = async (query: any) => {
  const res = await http.getRequest(
    `v2/allFavourite?${getQuery(query?.queryKey?.[1])}`
  );
  return res;
};

export const doAllFeaturedJobs = async (query: any) => {
  const res = await http.getRequest(
    `v2/featuredJobs?${getQuery(query?.queryKey?.[1])}`
  );
  return res;
};

export const doApplyJob = async (query: any) => {
  const res = await http.getRequest(`v2/applyJob?${getQuery(query)}`);
  return res;
};

export const doCancelJob = async (query: any) => {
  const res = await http.getRequest(`v2/cancelJob?${getQuery(query)}`);
  return res;
};

export const doAppliedJobs = async (query: any) => {
  const res = await http.getRequest(
    `v2/appliedJobs?${getQuery(query?.queryKey?.[1])}`
  );
  return res;
};

export const doAppliedJobsTrackData = async (applyID: string) => {
  const res = await http.getRequest(
    `v2/appliedJobsStatus?applyID=${applyID}`
  );
  return res;
};

export const doNotifications = async (query: any) => {
  const res = await http.getRequest(
    `v2/Notification?${getQuery(query?.queryKey?.[1])}`
  );
  return res;
};
export const doReadAllNotifications = async (data: any) => {
  const res = await http.getRequest(`v2/notification_read?${getQuery(data)}`);
  return res;
};
export const doReadOneNotifications = async (data: any) => {
  const res = await http.getRequest(`v2/notification_read?${getQuery(data)}`);
  return res;
};
export const doGenerateDescription = async (data: any) => {
  const _data = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: `Generate a job description for ${data?.queryKey?.[1]?.jobTitle}.`,
      },
    ],
  };
  const res = await http.postRequestChat(_data);
  return res;
};
export const doDeleteAccount = async (data: any) => {
  const res = await http.getRequest(`v2/delete_user?${getQuery(data)}`);
  return res;
};
export const doChangePassword = async (data: any) => {
  const res = await http.postRequest(`v2/userChangePassword`, data);
  return res;
};

export const doPackCancel = async (data: any) => {
  const res = await http.getRequest(`v2/packcancel?${getQuery(data)}`);
  return res;
};
export const doCreateOrderId = async (data: any) => {
  const res = await http.postRequest("v2/GenerateOrderId", data);
  return res;
};
export const doPackUpdate = async (data: any) => {
  const res = await http.postRequest("v2/packUpdate", data);
  return res;
};
export const doWorkStatus = async (data: any) => {
  const res = await http.postRequestForm("faculity/workStatus", data);
  return res;
};
export const doFeaturedCity = async () => {
  const res = await http.getRequest("v2/featured_data");
  return res;
};
