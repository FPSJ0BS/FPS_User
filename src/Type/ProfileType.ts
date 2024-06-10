export interface IProfileType {
  email: string;
  name: string;
  state: string;
  city: string;
  job_function: string;
  qualification: string;
  experience: string;
  salary: string;
  expected_salary: string;
  last_employer?: string;
  university?: string;
  current_employer?: string;
  dob?: string;
  passing_year?: string;
  demolecture?: string;
  industry: string;
  alternate_contact: string;
  gender: string;
}
export interface IContactUs {
  name: string;
  email: string;
  message: string;
}

export interface IUserChangePassword {
  old_password: string;
  new_password: string;
}
