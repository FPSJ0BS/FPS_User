export interface ILoginWithEmailType {
  email?: string;
  password?: string;
  mobile?: string;
}

export interface IRegType {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  password: string;
  confirm_password: string;
  state: number;
  city: number;
  industry: number;
  subject: number;
  resume: any;
  otp?: string;
  job_function: string;
  term: boolean;
}
export interface ISearchJobs {
  keyword: string;
  name: string;
}
export interface IForgotPassword {
  username: string;
  otp: number;
  new_password: string;
  confirm_password: string;
}

