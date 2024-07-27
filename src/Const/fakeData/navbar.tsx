import { AppRoute } from "../../Navigator/AppRoute";

export const navbar = [
  {
    name: "Home",
    to: AppRoute.Home,
    isGlobal: true,
    isDropDown: false,
    main:true,

  },

  {
    name: "Find Jobs",
    to: AppRoute.Find_Jobs,
    isGlobal: true,
    isDropDown: false,
    main:true,

  },

  {
    name: "Services",
    to: AppRoute.services,
    isGlobal: true,
    isDropDown: false,
    dropFor: "services-dropdown",
    main:true,
    mobile:false
  },

  {
    name: "Build Resume",
    to: AppRoute.resume,
    isGlobal: true,
    isDropDown: false,
    dropFor: "services",
    mobile:false
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
    main:true,

  },
  {
    name: "Sign In",
    to: AppRoute.Login,
    isLogin: false,
    isDropDown: false,
    main:true,

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
