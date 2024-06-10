import { AppRoute } from "../../Navigator/AppRoute";

export const navbar = [
  {
    name: "Home",
    to: AppRoute.Home,
    isGlobal: true,
    isDropDown: false,
  },

  {
    name: "Find Jobs",
    to: AppRoute.Find_Jobs,
    isGlobal: true,
    isDropDown: false,
  },

  // {
  //   name: "Contact Us",
  //   to: AppRoute.Contact_Us,
  //   isGlobal: true,
  //   isDropDown: false,
  // },

  {
    name: "Sign Up",
    to: AppRoute.SignUp,
    isLogin: false,
    isDropDown: false,
  },
  {
    name: "Sign In",
    to: AppRoute.Login,
    isLogin: false,
    isDropDown: false,
  },

  {
    name: "Dashboard",
    to: `${AppRoute.Dashboard}`,
    isLogin: true,
    isDropDown: true,
  },

  {
    name: "Log Out",
    to: "",
    isLogin: true,
    isDropDown: true,
  },
];
