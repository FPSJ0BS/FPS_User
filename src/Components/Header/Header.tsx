import { useState, useEffect, useRef, memo } from "react";
import logo from "@Assets/Icons/tallento white (1).png";

import { NavLink, useNavigate } from "react-router-dom";
import { navbar } from "@Const/fakeData/navbar";
import { useGlobalContext } from "../../Context/GlobalContextProvider";
// import image from "@Assets/images/01.jpg";
import { AppRoute } from "@Navigator/AppRoute";
import useProfileDetails from "@Hooks/Queries/useProfileDetails";
import useNotifications from "@Hooks/Queries/useNotifications";
import { formatDistance } from "date-fns";
import useCategoryList from "@Hooks/Queries/useCategoryList";
import Imag from "@Components/Image/Image";
import FlatList from "@Components/FlatList/FlatLIst";
import useReadOneNotification from "@Hooks/Mutation/useReadOneNotification";
import useReadAllNotification from "@Hooks/Mutation/useReadAllNotification";
import { useQueryClient } from "@tanstack/react-query";
import { Querykeys } from "@Hooks/Queries/queryname";
import { createQueryBySlug } from "@Utils/navigationquery";
import dummyiamge from "@Assets/Icons/Profile/user.png";
import useProfileDetailsNode from "@Hooks/Queries/useProfileDetailsNode";
import useNotificationsNode from "@Hooks/Queries/useNotificationsNode";
const Header = ({ clname = "", handleMobile }: any) => {
  const { userData, setUserLoginData, setCategoryData } = useGlobalContext();
  const [isDropdown, openDropdown] = useState(false);
  const [isBell, setIsBell] = useState(false);
  const { data: Category } = useCategoryList({});
  const queryClient = useQueryClient();
  // const { data: Notifications } = useNotifications(
  //   { enabled: !!userData?.UID },
  //   { UID: userData?.UID }
  // );

  const { data: NotificationsNode } = useNotificationsNode(
    { enabled: !!userData?.UID },
    { facultyID: userData?.UID }
  );

  const navigate = useNavigate();
  const btnRef = useRef<any>();
  const bellRef = useRef<any>();
  const userId = userData?.UID;
  // const { data: profileDetails } = useProfileDetails({
  //   UID: userId,
  // });

  const { data: profileDetailsNode } = useProfileDetailsNode({
    facultyID: userId,
  });

  const [menuDropDown, setMenuDropDown] = useState({
    services: false,
  });

  const toggleMenuDropDown = (menu, value) => {
    setMenuDropDown((prevState) => ({
      ...prevState,
      [menu]: value,
    }));
  };

  useEffect(() => {
    const closeDropdown = (e: any) => {
      if (!btnRef?.current?.contains(e.target)) {
        openDropdown(false);
      }
      if (!bellRef?.current?.contains(e.target)) {
        setIsBell(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  const { mutateAsync: Read } = useReadOneNotification({});
  const { mutateAsync: ReadAll } = useReadAllNotification({});

  return (
    <div style={{ height: 80 }} className="">
      <header
        // ${scroll ? "is-fixed is-small" : ""}
        id="header"
        className={` w-[100%] header header-default is-fixed is-small border-[#9c9595]
        `}
      >
        <div className="container ct2   xl:w-[85%] 2xl:w-[75%]">
          <div className="row">
            <div className="col-md-12">
              <div className="sticky-area-wrap">
                <div className="header-ct-left">
                  <div id="logo" className="logo">
                    <NavLink to={AppRoute.Home}>
                      <img
                        className="site-logo"
                        id="trans-logo"
                        src={logo}
                        alt="Image"
                      />
                    </NavLink>
                  </div>

                  <div className="categories">
                    <a>
                      <span className="icon-grid text-white"></span>
                    </a>
                    <div className={`sub-categorie min-h-[200px] pt-3`}>
                      <ul className={`pop-up border-end`}>
                        <FlatList
                          data={Category?.data}
                          renderItem={(item: any) => {
                            if (item.status !== "1") {
                              return null;
                            }
                            return (
                              <li
                                onClick={() => {
                                  setCategoryData(item);
                                  navigate(
                                    `${item?.category
                                      .trim()
                                      .replaceAll(" ", "-")
                                      .toLowerCase()}/${item?.ID}`,
                                    {
                                      state: item?.ID,
                                    }
                                  );
                                }}
                              >
                                <a className="d-flex gap-2 align-items-center">
                                  <Imag
                                    src={item?.image}
                                    className="imgCategory"
                                    alt="catImg"
                                  />
                                  {item?.category}
                                </a>
                              </li>
                            );
                          }}
                        />
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Navigation Menu */}

                <div className="ml-[5vw] hidden lg:block ">
                  <div className="nav-wrap">
                    <nav id="main-nav" className="main-nav">
                      <ul id="menu-primary-menu" className={`menu ${clname}`}>
                        {userData?.UID
                          ? navbar.map((item, index) => {
                              return (
                                (item?.isGlobal || item?.isLogin) &&
                                !item.isDropDown &&
                                item.main && (
                                  <>
                                    <li
                                      onMouseLeave={() => {
                                        if (
                                          item?.dropFor === "services-dropdown"
                                        ) {
                                          toggleMenuDropDown("services", false);
                                        }
                                      }}
                                      className={`menu-item flex items-center justify-center gap-2 `}
                                    >
                                      <NavLink
                                        onMouseEnter={() => {
                                          if (
                                            item?.dropFor ===
                                            "services-dropdown"
                                          ) {
                                            toggleMenuDropDown(
                                              "services",
                                              true
                                            );
                                          }
                                        }}
                                        onMouseLeave={() => {
                                          if (
                                            item?.dropFor ===
                                            "services-dropdown"
                                          ) {
                                            toggleMenuDropDown(
                                              "services",
                                              false
                                            );
                                          }
                                        }}
                                        className={({ isActive }) => {
                                          return isActive ? `active` : "";
                                        }}
                                        to={item?.to}
                                      >
                                        {item.name}
                                      </NavLink>
                                      {item?.dropFor ===
                                        "services-dropdown" && (
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="lucide lucide-chevron-down text-white"
                                        >
                                          <path d="m6 9 6 6 6-6" />
                                        </svg>
                                      )}
                                      {item?.dropFor === "services-dropdown" &&
                                        menuDropDown.services && (
                                          <div
                                            onMouseEnter={() => {
                                              if (
                                                item?.dropFor ===
                                                "services-dropdown"
                                              ) {
                                                toggleMenuDropDown(
                                                  "services",
                                                  true
                                                );
                                              }
                                            }}
                                            className=" absolute top-[70px] h-[80px] w-[150px] pr-4 justify-center items-center flex flex-col bg-black rounded-lg text-white border-[0.5px] border-solid border-white"
                                          >
                                            <div className=" flex flex-col justify-start items-start gap-2 ">
                                              {navbar?.map((item, index) => {
                                                if (
                                                  item?.dropFor === "services"
                                                ) {
                                                  return (
                                                    <div
                                                      className="flex"
                                                      key={index}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-dot"
                                                      >
                                                        <circle
                                                          cx="12.1"
                                                          cy="12.1"
                                                          r="1"
                                                        />
                                                      </svg>
                                                      <span>
                                                        <NavLink
                                                          to={item.to}
                                                          className={({
                                                            isActive,
                                                          }) => {
                                                            return isActive
                                                              ? `active`
                                                              : "";
                                                          }}
                                                        >
                                                          {item.name}
                                                        </NavLink>
                                                      </span>
                                                    </div>
                                                  );
                                                } else {
                                                  return null;
                                                }
                                              })}
                                            </div>
                                          </div>
                                        )}
                                    </li>
                                  </>
                                )
                              );
                            })
                          : navbar.map((item, index) => {
                              return (
                                (item?.isGlobal || !item?.isLogin) &&
                                !item.isDropDown &&
                                item?.main && (
                                  <li
                                    key={index}
                                    onMouseLeave={() => {
                                      if (
                                        item?.dropFor === "services-dropdown"
                                      ) {
                                        toggleMenuDropDown("services", false);
                                      }
                                    }}
                                    className={`menu-item flex items-center justify-center gap-2`}
                                  >
                                    <NavLink
                                      onMouseEnter={() => {
                                        if (
                                          item?.dropFor === "services-dropdown"
                                        ) {
                                          toggleMenuDropDown("services", true);
                                        }
                                      }}
                                      onMouseLeave={() => {
                                        if (
                                          item?.dropFor === "services-dropdown"
                                        ) {
                                          toggleMenuDropDown("services", false);
                                        }
                                      }}
                                      className={({ isActive }) => {
                                        return isActive ? `active` : "";
                                      }}
                                      to={item?.to}
                                      className={`
                                      ${
                                        item.name === "Register"
                                          ? " bg-[#c24d2f] text-white px-4  rounded-sm h-[30px] b-0 flex items-center "
                                          : ""
                                      }
                                      ${
                                        item.name === "Login"
                                          ? "bg-blue-600 text-white px-4  rounded-sm h-[30px] b-0 flex items-center"
                                          : ""
                                      }
                                    `}
                                    >
                                      {item.name}
                                    </NavLink>
                                    {item?.dropFor === "services-dropdown" && (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-chevron-down text-white"
                                      >
                                        <path d="m6 9 6 6 6-6" />
                                      </svg>
                                    )}
                                    {item?.dropFor === "services-dropdown" &&
                                      menuDropDown.services && (
                                        <div
                                          onMouseEnter={() => {
                                            if (
                                              item?.dropFor ===
                                              "services-dropdown"
                                            ) {
                                              toggleMenuDropDown(
                                                "services",
                                                true
                                              );
                                            }
                                          }}
                                          className="absolute top-[70px] h-[80px] w-[150px] pr-4 justify-center items-center flex flex-col bg-black rounded-lg text-white border-[0.5px] border-solid border-white"
                                        >
                                          <div className="flex flex-col justify-start items-start gap-2">
                                            {navbar?.map(
                                              (dropdownItem, index) => {
                                                if (
                                                  dropdownItem?.dropFor ===
                                                  "services"
                                                ) {
                                                  return (
                                                    <div
                                                      className="flex"
                                                      key={index}
                                                    >
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-dot"
                                                      >
                                                        <circle
                                                          cx="12.1"
                                                          cy="12.1"
                                                          r="1"
                                                        />
                                                      </svg>
                                                      <span>
                                                        <NavLink
                                                          to={dropdownItem.to}
                                                          className={({
                                                            isActive,
                                                          }) => {
                                                            return isActive
                                                              ? `active`
                                                              : "";
                                                          }}
                                                        >
                                                          {dropdownItem.name}
                                                        </NavLink>
                                                      </span>
                                                    </div>
                                                  );
                                                } else {
                                                  return null;
                                                }
                                              }
                                            )}
                                          </div>
                                        </div>
                                      )}
                                  </li>
                                )
                              );
                            })}
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="header-ct-right">
                  {userData?.UID && (
                    <div
                      className={`header-customize-item ${
                        profileDetailsNode?.data?.unread_notification > 0 &&
                        "bell"
                      }`}
                    >
                      <span
                        ref={bellRef}
                        className="icon-bell text-white"
                        onClick={() => {
                          setIsBell(!isBell);
                        }}
                        style={{}}
                      ></span>
                      {isBell && (
                        <div className="sub-notification">
                          <div className="sub-notification-heading">
                            <div className="sub-notification-title">
                              Notification
                            </div>
                            <span>
                              {NotificationsNode?.data?.notification &&
                                NotificationsNode?.data?.notification.length}
                            </span>
                          </div>
                          <div className="sub-notification-content">
                            <FlatList
                              data={NotificationsNode?.data?.notification}
                              renderItem={(item: any) => {
                                const date =
                                  item?.created_at &&
                                  formatDistance(
                                    new Date(item?.created_at),
                                    new Date(),
                                    {
                                      addSuffix: true,
                                    }
                                  );
                                return (
                                  <div
                                    className={`sub-notification-item time ${
                                      item?.status === "1" && "icon-plus"
                                    }`}
                                    onClick={() => {
                                      if (item?.status === "1") {
                                        Read({
                                          UID: userData?.UID,
                                          notification_id: item?.NID,
                                        }).then((res) => {
                                          if (res?.status) {
                                            queryClient.invalidateQueries({
                                              queryKey: ["notifications"],
                                            });
                                            queryClient.invalidateQueries({
                                              queryKey: [
                                                Querykeys.profileDetailsNode
                                                  ?.data,
                                              ],
                                            });
                                          }
                                        });
                                      }
                                      navigate(
                                        createQueryBySlug(item, Category)
                                      );
                                    }}
                                  >
                                    <div className="time">{date}</div>
                                    <div className="content">
                                      {item?.message}
                                    </div>
                                  </div>
                                );
                              }}
                              ListEmptyComponent={() => {
                                return (
                                  <div className="h-100">
                                    <span className="text-center d-flex flex-col align-items-center ">
                                      No notifications
                                    </span>
                                  </div>
                                );
                              }}
                            />
                          </div>

                          <button
                            className="sub-notification-button"
                            style={{ color: "white", border: 0 }}
                            onClick={() => {
                              ReadAll({
                                UID: userData?.UID,
                              }).then((res) => {
                                if (res?.status) {
                                  queryClient.invalidateQueries({
                                    queryKey: ["notifications"],
                                  });
                                  queryClient.invalidateQueries({
                                    queryKey: [
                                      Querykeys.profileDetailsNode?.data,
                                    ],
                                  });
                                }
                              });
                            }}
                            disabled={
                              !(
                                profileDetailsNode?.data?.unread_notification >
                                0
                              )
                            }
                          >
                            Read All
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  {!userData?.UID && (
                    <div className="header-customize-item button border-white border-1 border-solid  ">
                      <NavLink
                        to="https://employer.tallento.ai/"
                        target={"_blank"}
                        aria-label="Sign Up page"
                      >
                        Post Job
                      </NavLink>
                    </div>
                  )}
                  <div className="nav-filter" onClick={handleMobile}>
                    <div className="nav-mobile">
                      <span></span>
                    </div>
                  </div>
                  {userData?.UID && (
                    <ul className="buy-button list-none mb-0 profileDropdown p-0">
                      <li className="dropdown inline-block relative ps-1">
                        <button
                          ref={btnRef}
                          onClick={() => openDropdown(!isDropdown)}
                          // data-dropdown-toggle="dropdown"
                          className=" w-[50px] h-[50px] bg-white rounded-full  border-0 relative"
                          type="button"
                          id="buttonProfile"
                          title="profile"
                        >
                          <Imag
                            src={
                              profileDetailsNode?.data?.user?.image
                                ? profileDetailsNode?.data?.user?.image
                                : dummyiamge
                            }
                            className="h-full w-full rounded-full"
                            alt=""
                          />
                          {/* <img
                            src={Opentowork}
                            style={{ position: "absolute", top: "-10px",width:"55px",height:"65px" }}
                          /> */}
                        </button>
                        {isDropdown && (
                          <div
                            className={`dropdown-menu-one absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white  shadow  block`}
                          >
                            <ul className="py-2 text-start">
                              {navbar.map((item, index) => {
                                return (
                                  item?.isDropDown && (
                                    <li key={index}>
                                      <NavLink
                                        to={item.to}
                                        className={({ isActive }) => {
                                          return isActive
                                            ? `flex items-center text-primaryOne font-medium py-2 px-4  hover:text-primaryOne`
                                            : "flex items-center text-black font-medium py-2 px-4  hover:text-primaryOne";
                                        }}
                                        onClick={() => {
                                          if (item?.name === "Log Out") {
                                            setUserLoginData("");
                                            navigate(AppRoute.Home);
                                          }
                                        }}
                                      >
                                        {item.name}
                                      </NavLink>
                                    </li>
                                  )
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default memo(Header);
