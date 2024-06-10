export const PHONE_REGEXP = /^[6789]\d{9}$/;
export const SINGLE_CHARACTER_ONLY = /^[^a-z]*([a-z]{1})[^a-z]*$/;
export const DIGIT_REGEX = /^\d+$/;
export const TEXT_EDITOR_REGEX = /<(.|\n)*?>/g;
export const MOBILE_NUMBER_REGEX = /[^\d]/gi;
export const NAME_REGEX = /[a-zA-Z]{3,}/;
export const EMAIL_REGEX =
  /^(?=[^@]{3,}@)([\w\.-]*[a-zA-Z0-9_]@(?=.{3,}\.[^.]*$)[\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z])$/;
export const URL_REGEX =
  /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
export const STRONG_PASSWORD =
  /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
export const STRONG_PASSWORD_MESSAGE =
  "Password must contain atleast 8 characters, including 1 UPPER, lowercase, special character and numbers ";
export const MOBILE_NUMBER_MESSAGE = "Please enter a valid mobile number!";
export const PDF_REGEX = /^.*\.(PDF)$/;

export const isDateBefore = (date1: string, date2: string) => {
  const isBefore = new Date(date1) < new Date(date2);
  return isBefore;
}

export const isDateAfter = (date1: string, date2: string) => {
  const isAfter = new Date(date1) > new Date(date2);
  return isAfter;
}

export const isDateSame = (date1: string, date2: string) => {
  const isBefore = isDateBefore(date1, date2);
  const isAfter = isDateAfter(date1, date2);
  const isSame = !isBefore && !isAfter
  return isSame
}