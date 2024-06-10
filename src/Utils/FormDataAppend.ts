export const FormDataAppend = (obj: any) => {
  const formData = new FormData();
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (obj?.[key] && key !== "resume" && key !== "cvDoc") {
      formData.append(key, obj?.[key]);
    }
  });
  const file = obj?.resume?.[0];
  if (file) {
    formData.append("resume", file);
  } 
 
  return formData;
};
