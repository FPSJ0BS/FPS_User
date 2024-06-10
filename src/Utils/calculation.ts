export const calculation = (user: any) => {
  let percentage = 100;
  if (user?.image == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.email == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.dob == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.CID == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.job_function_name == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.name == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.mobile == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.last_employer == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.current_employer == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.cv_doc == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.experience == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.qualification == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.university == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.passing_year == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.demolecture == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.city == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.state == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.salary == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.expected_salary == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.alternate_contact == "") {
    percentage = percentage - 4.7619;
  }
  if (user?.gender == "") {
    percentage = percentage - 4.7619;
  }
  return percentage.toFixed();
};
