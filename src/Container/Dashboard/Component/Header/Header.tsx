import Imag from "@Components/Image/Image";
// import Search from "@Assets/dashboard-svg/search.svg";
import notification from "@Assets/dashboard-svg/notification.svg";
import { memo, useEffect, useRef, useState } from "react";
import useNotifications from "@Hooks/Queries/useNotifications";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import FlatList from "@Components/FlatList/FlatLIst";
import { formatDistance } from "date-fns";
import { AppRoute } from "@Navigator/AppRoute";
import { useNavigate } from "react-router-dom";
import useReadOneNotification from "@Hooks/Mutation/useReadOneNotification";
import useReadAllNotification from "@Hooks/Mutation/useReadAllNotification";
import { useQueryClient } from "@tanstack/react-query";
import useProfileDetails from "@Hooks/Queries/useProfileDetails";
import { Querykeys } from "@Hooks/Queries/queryname";
import { createQueryBySlug } from "@Utils/navigationquery";
import useCategoryList from "@Hooks/Queries/useCategoryList";
const Header = ({
  setShow,
  show,
}: {
  setShow: (value: boolean) => void;
  show: boolean;
}) => {
  const [isDropdown, setIsDropDown] = useState(false);
  const { userData, setUserLoginData } = useGlobalContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: Category } = useCategoryList({});
  const btnRef = useRef<any>();
  useEffect(() => {
    const closeDropdown = (e: any) => {
      if (!btnRef?.current?.contains(e.target)) {
        setIsDropDown(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);
  const { data: Notifications } = useNotifications(
    { enabled: !!userData?.UID },
    { UID: userData?.UID }
  );
  const { mutateAsync: Read } = useReadOneNotification({});
  const { mutateAsync: ReadAll } = useReadAllNotification({});
  const { data: profileDetails } = useProfileDetails({
    UID: userData?.UID,
  });
  return (
    <header className="dashboard-header">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-5">
          <button
            className="dash-mobile-nav-toggler d-block d-md-none me-auto"
            onClick={() => setShow(!show)}
          >
            <span />
          </button>
        </div>
        <div className="d-flex align-items-center gap-2">
          <div className="profile-notification ms-2 ms-md-5 me-4">
            <button
              className="noti-btn dropdown-toggle show"
              type="button"
              id="notification-dropdown"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="true"
              ref={btnRef}
              onClick={() => setIsDropDown(!isDropdown)}
            >
              <Imag
                alt="Notification"
                loading="lazy"
                width={21}
                height={20}
                decoding="async"
                data-nimg={1}
                className="lazy-img"
                style={{ color: "transparent", width: 25 }}
                src={notification}
              />
              {profileDetails?.unread_notification !== 0 && (
                <div className="badge-pill"></div>
              )}
            </button>
            {isDropdown && (
              <ul
                className="dropdown-menu show w-full"
                aria-labelledby="notification-dropdown"
                style={{
                  position: "absolute",
                  top:"0%",
                  left:"42%",
                  // right:"50%",
                  margin: 0,
                  transform: "translate(-159px, 67px)",
                }}
                data-popper-placement="bottom-end"
              >
                <li style={{ height: "100%" }}>
                  <h4>Notification</h4>
                  <ul className="style-none notify-list">
                    <FlatList
                      data={Notifications?.notifications}
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
                          <li
                            className={`d-flex align-items-center ${
                              item?.status === "1" && "unread"
                            }`}
                            onClick={() => {
                              setIsDropDown(false);
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
                                      queryKey: [Querykeys.profileDetails],
                                    });
                                  }
                                });
                              }
                              navigate(createQueryBySlug(item, Category));
                            }}
                          >
                           
                            <div className="flex-fill ps-2">
                              <h6>{item?.message}</h6>
                              <span className="time">{date}</span>
                            </div>
                          </li>
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
                  </ul>
                  <button
                    className="readAll my-3"
                    onClick={() => {
                      ReadAll({
                        UID: userData?.UID,
                      }).then((res) => {
                        if (res?.status) {
                          queryClient.invalidateQueries({
                            queryKey: ["notifications"],
                          });
                          queryClient.invalidateQueries({
                            queryKey: [Querykeys.profileDetails],
                          });
                        }
                      });
                    }}
                    disabled={!(profileDetails?.unread_notification > 0)}
                  >
                    Read All
                  </button>
                </li>
              </ul>
            )}
          </div>
          <div>
            <a
              className="job-post-btn tran3s videoButton cursor-pointer"
              onClick={() => {
                setUserLoginData("");
                navigate(AppRoute.Home);
              }}
            >
              Logout
            </a>
          </div>
          <div className="ps-2">
            <a
              className="job-post-btn tran3s videoButton cursor-pointer"
              onClick={() => {
                navigate(AppRoute.Home);
              }}
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
