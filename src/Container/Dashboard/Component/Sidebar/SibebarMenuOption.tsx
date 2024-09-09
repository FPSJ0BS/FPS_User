import Userprofile from "@Assets/dashboard-svg/Userprofile";
import Resume from "@Assets/dashboard-svg/Resume";
import Saved from "@Assets/dashboard-svg/saved";
import Accountsetting from "@Assets/dashboard-svg/Accountsetting";
import Delete from "@Assets/dashboard-svg/Delete";
import { AppRoute } from "@Navigator/AppRoute";
import Dashboard from "@Assets/dashboard-svg/Dashboard";
import Membership from "@Assets/dashboard-svg/Membership";
import Search from "@Assets/dashboard-svg/Search";
import Reject from "@Assets/dashboard-svg/Reject";
import Accept from "@Assets/dashboard-svg/Accept";
export const menuOption = [
  {
    name: "Dashboard",
    icon: Dashboard,
    navigate: AppRoute.User_Dashboard,
    isDropdown: false,
  },
  {
    name: "My Profile",
    icon: Userprofile,
    navigate: AppRoute.Profile,
    isDropdown: true,
  },
  {
    name: "Find Jobs",
    icon: Search,
    navigate: AppRoute.Find_Jobs,
    isDropdown: true,
  },
  // {
  //   name: "Resume",
  //   icon: Resume,
  //   navigate: AppRoute.Resume,
  // },
  {
    name: "Saved Job",
    icon: Saved,
    navigate: AppRoute.Saved_Job,
  },
  {
    name: "Applied Job",
    icon: Resume,
    navigate: AppRoute.Applied_Job,
  },
  {
    name: "Accepted Job",
    icon: Accept,
    navigate: AppRoute.Accepted_Job,
  },
  {
    name: "Rejected Job",
    icon: Reject,
    navigate: AppRoute.Rejected_Job,
  },
  {
    name: "Membership",
    icon: Membership,
    navigate: AppRoute.Membership,
  },
  {
    name: "Change Password",
    icon: Accountsetting,
    navigate: AppRoute.Account_Setting,
    isDropdown: true,
  },
  {
    name: "Delete Account",
    icon: Delete,
  },
];
