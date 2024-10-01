import Imag from "@Components/Image/Image";
import Logo from "../../../../../public/fps-logo.webp";
import FlatList from "@Components/FlatList/FlatLIst";
import { menuOption } from "./SibebarMenuOption";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logout from "@Assets/dashboard-svg/log-out.svg";
import { AppRoute } from "@Navigator/AppRoute";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { memo, useEffect, useRef, useState } from "react";
import useProfileDetails from "@Hooks/Queries/useProfileDetails";
import { calculation } from "@Utils/calculation";
import useWorkStatus from "@Hooks/Mutation/useWorkStatus";
import { Toast } from "@Utils/Toast";
import Switch from "react-switch";
import Opentowork from "@Assets/dashboard-svg/open-to-work.png";
import dummyiamge from "@Assets/Icons/Profile/user.png";
import useProfileDetailsNode from "@Hooks/Queries/useProfileDetailsNode";
import { getRefetchUserProfileData, postChangeWorkStatus } from "@/api/api";

const Sidebar = ({
  className,
  setShow,
}: {
  className: boolean;
  setShow: (value: boolean) => void;
}) => {
  const { setIsModalshow, userData, setUserLoginData } = useGlobalContext();
  const [ischecked, setIsChecked] = useState(false);
  const [percentage, setPercentage] = useState<any>(0);
  const navigate = useNavigate();
  const userId = userData?.UID;
  // const { data: profileDetails, refetch: refetchProfile } = useProfileDetailsNode({
  //   facultyID: userId,
  // });

  const [profileDetails, setProfileDetails] = useState([]);



  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await getRefetchUserProfileData(userId);

        if (res?.status) {
          setProfileDetails(res?.data?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const res = await getRefetchUserProfileData(userId);

      if (res?.status) {
        setProfileDetails(res?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const user = profileDetails?.user;
  const [isDropdown, setIsDropDown] = useState(false);
  const btnRef = useRef<any>();
  const location = useLocation();
  useEffect(() => {
    const closeDropdown = (e: any) => {
      if (!btnRef?.current?.contains(e.target)) {
        setIsDropDown(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  useEffect(() => {
    setPercentage(calculation(user));
  }, [user]);
  const { mutateAsync: workStatus } = useWorkStatus({});
  useEffect(() => {
    if (profileDetails?.user?.work_status === 1) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [profileDetails?.user?.work_status]);

  const fetchWorkStatus = async () => {
    const data = {
      facultyID: userData?.UID,
      status: !profileDetails?.user?.work_status,
    };
    try {
      const res = await postChangeWorkStatus(data);

      if (res?.status) {
        setIsChecked(!ischecked);
        fetchApi();
      } else {
        Toast("error", res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside className={`dash-aside-navbar ${className ? "show" : ""}`}>
      <div className="position-relative">
        <div className="logo text-md-center d-md-block d-flex align-items-center justify-content-between">
          <NavLink to={AppRoute.Home}>
            <Imag src={Logo} width={"160px"} height={"42px"} />
          </NavLink>
          <button
            className="close-btn d-block d-md-none"
            onClick={() => setShow(!className)}
          >
            <i className="icon-close" />
          </button>
        </div>
        <div className="user-data">
          <div className="user-avatar position-relative rounded-circle">
            <Imag
              alt="avatar"
              loading="lazy"
              width={75}
              height={75}
              decoding="async"
              data-nimg={1}
              className="lazy-img"
              style={{ color: "transparent", height: "75px" }}
              src={
                profileDetails?.user?.image
                  ? profileDetails?.user?.image
                  : dummyiamge
              }
            />
            {profileDetails?.user?.work_status === 1 && (
              <img
                src={Opentowork}
                style={{ position: "absolute", top: "0px", width: "95px" }}
              />
            )}
          </div>

          <div className="user-name-data">
            <button
              ref={btnRef}
              className="user-name dropdown-toggle show"
              type="button"
              id="profile-dropdown"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="true"
              onClick={() => setIsDropDown(!isDropdown)}
            >
              {profileDetails?.user?.name}
            </button>
            {isDropdown && (
              <ul
                className="dropdown-menu show"
                aria-labelledby="profile-dropdown"
                style={{
                  position: "absolute",
                  inset: "0px auto auto 0px",
                  margin: 0,
                  transform: "translate(0px, 207px)",
                }}
                data-popper-placement="bottom-start"
              >
                <FlatList
                  data={menuOption}
                  renderItem={(item: any) => {
                    return (
                      <li>
                        {item?.isDropdown && (
                          <NavLink
                            to={item?.navigate || ""}
                            className="dropdown-item d-flex align-items-center"
                            onClick={() => {
                              setIsDropDown(false);
                              setShow(false);
                            }}
                          >
                            <item.icon color={"#a73358"} />
                            <span className="ms-2 ps-1">{item.name}</span>
                          </NavLink>
                        )}
                      </li>
                    );
                  }}
                />
              </ul>
            )}
          </div>
          <div className="d-flex justify-content-center nav-margin mb-3 gap-2 justify-content-between align-items-center">
            <div
              className={`col-9  fs-6 font-bold border  rounded-full d-flex align-items-center py-2 justify-content-center`}
            >
              {profileDetails?.user?.work_status === 1
                ? " Looking for job"
                : "Not looking for job"}
            </div>
            <div className="col-3">
              <Switch
                onChange={(checked) => {
                  fetchWorkStatus();
                  // workStatus({
                  //   facultyID: userData?.UID,
                  //   status: !profileDetails?.user?.work_status,
                  // }).then((res) => {
                  //   if (res?.status) {
                  //     setIsChecked(checked);
                  //     fetchApi();
                  //     ;
                  //   } else {
                  //     Toast("error", res?.message);
                  //   }
                  // });
                }}
                offColor="#a73358"
                checked={ischecked}
              />
            </div>
          </div>
        </div>

        <nav className="dasboard-main-nav">
          <ul className="style-none">
            <FlatList
              data={menuOption}
              renderItem={(item: any) => {
                return (
                  <li>
                    {item?.navigate ? (
                      <NavLink
                        to={item?.navigate || ""}
                        className={({ isActive }) => {
                          return `d-flex w-100 align-items-center  ${
                            isActive && "active bg-black"
                          }`;
                        }}
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <item.icon
                          color={
                            `${AppRoute.Dashboard}/${item.navigate}` ===
                            location.pathname
                              ? "#fff"
                              : "#a73358"
                          }
                        />
                        <span>{item.name}</span>
                      </NavLink>
                    ) : (
                      <a
                        className="d-flex w-100 align-items-center cursor-pointer"
                        onClick={() => setIsModalshow(true)}
                      >
                        <item.icon color={"#a73358"} />
                        <span>{item.name}</span>
                      </a>
                    )}
                  </li>
                );
              }}
            />
          </ul>
        </nav>
        <div className="profile-complete-status">
          <div className="progress-value fw-500">{`${percentage}%`}</div>
          <div className="progress-line position-relative">
            <div className="inner-line" style={{ width: `${percentage}%` }} />
          </div>
          <p>Profile Complete</p>
        </div>
        <a
          className="d-flex w-100 align-items-center logout-btn cursor-pointer"
          onClick={() => {
            setUserLoginData("");
            navigate(AppRoute.Home);
          }}
        >
          <Imag
            alt="icon"
            loading="lazy"
            width={23}
            height={22}
            decoding="async"
            data-nimg={1}
            className="lazy-img"
            style={{ color: "transparent" }}
            src={Logout}
          />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default memo(Sidebar);
