import { AppConst } from "@/Enum/AppConst";
import FlatList from "@Components/FlatList/FlatLIst";
import SEO from "@Components/Seo/Seo";
import logo from "../../../../../public/fps-logo.webp";
import Title from "@Container/Dashboard/Component/Title/Title";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import usePackCancel from "@Hooks/Mutation/usePackCancel";
import { useGetPackages } from "@Hooks/Queries";
import { Querykeys } from "@Hooks/Queries/queryname";
import useProfileDetails from "@Hooks/Queries/useProfileDetails";
import { Toast } from "@Utils/Toast";
import { useQueryClient } from "@tanstack/react-query";
import { memo, useEffect, useState } from "react";
import useRazorpay from "react-razorpay";
import { AppRoute } from "@Navigator/AppRoute";
import { NavLink, useNavigate } from "react-router-dom";
import useCreateOrder from "@Hooks/Mutation/useCreateOrder";
import usePackUpdate from "@Hooks/Mutation/usePackUpdate";
import { getRefetchUserProfileData } from "@/api/api";
import { useDispatch, useSelector } from "react-redux";
import {
  openModalMembership,
  openModalTermsAndConditions,
  setMembershipButtonPopup,
  setMembershipItem,
  setMembershipTypeText,
  setModalOpenMembershipItemData,
} from "@/Redux/appliedJobSlice";
const Membership = () => {
  const { userData } = useGlobalContext();
  const [isMore, setIsMore] = useState(false);
  const { data: packageData } = useGetPackages({
    uid: userData?.UID,
    enabled: !!userData?.UID,
  });
  const dispatch = useDispatch();

  // const { data: profileDetails } = useProfileDetails({
  //   UID: userData?.UID,
  // });

  const [profileDetails, setProfileDetails] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await getRefetchUserProfileData(userData?.UID);

        if (res?.data?.status) {
          setProfileDetails(res?.data?.data);
        } else {
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchApi();
  }, []);

  const navigate = useNavigate();
  const { mutateAsync: packUpdate } = usePackUpdate({});
  const { mutateAsync: createOrder } = useCreateOrder({});
  const queryClient = useQueryClient();
  const currentPlan = packageData?.data?.packages?.filter((item) => {
    return item.packID === profileDetails?.user?.packID;
  });

  const _currentPlan = currentPlan?.[0];

  const currentPlanDetails = _currentPlan?.details.split(" ");
  const { mutateAsync: PackCancel } = usePackCancel({});
  const [Razorpay] = useRazorpay();

  const handlePayment = (item: any) => {
    if (item?.type === "Prepaid") {
      createOrder({
        user_id: userData?.UID,
        amount: Number(item?.price * 100),
        type: "INR",
      }).then((response) => {
        const options: any = {
          key: String(import.meta.env.VITE_Razorpay_KEY),
          amount: String(item?.price * 100),
          currency: "INR",
          name: AppConst.LogoName,
          image: logo,
          order_id: response?.order_id,
          handler: (res) => {
            packUpdate({
              facultyID: userData?.UID,
              packID: item?.packID,
              amount: item?.price,
              type: item?.type,
              subscription_day: item?.days,
              transaction_id: res?.razorpay_payment_id,
              transaction_signature: res?.razorpay_signature,
              transaction_order_id: res?.razorpay_order_id,
              payment_type: "razorpay",
              payment_status: "Capture",
            }).then((res) => {
              if (res?.status) {
                queryClient.invalidateQueries({
                  queryKey: [Querykeys.profileDetails],
                });
                Toast("success", res?.message);
              } else {
                navigate(`${AppRoute.Dashboard}/${AppRoute.User_Dashboard}`);
                Toast("error", res?.message);
              }
            });
          },
          prefill: {
            name: profileDetails?.user?.name,
            email: profileDetails?.user?.email,
            contact: profileDetails?.user?.mobile,
          },
          theme: {
            color: "#a73358",
          },
        };

        const rzp1 = new Razorpay(options);

        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });

        rzp1.open();
      });
    }

    if (item?.type === "Postpaid") {
      if (confirm("Do you really want to choose postpaid package") === true) {
        packUpdate({
          facultyID: userData?.UID,
          packID: item?.packID,
          type: item?.type,
        }).then((res) => {
          if (res?.status) {
            queryClient.invalidateQueries({
              queryKey: [Querykeys.profileDetails],
            });
            Toast("success", res?.message);
          } else {
            navigate(`${AppRoute.Dashboard}/${AppRoute.User_Dashboard}`);
            Toast("error", res?.message);
          }
        });
      }
    }
  };

  const openingmembershipModalAndData = (item) => {
    if (item?.type === "Postpaid") {
      if (confirm("Do you really want to choose postpaid package") === true) {
        packUpdate({
          facultyID: userData?.UID,
          packID: item?.packID,
          type: item?.type,
        }).then((res) => {
          if (res?.status) {
            queryClient.invalidateQueries({
              queryKey: [Querykeys.profileDetails],
            });
            Toast("success", res?.message);
          } else {
            navigate(`${AppRoute.Dashboard}/${AppRoute.User_Dashboard}`);
            Toast("error", res?.message);
          }
        });
      }
    } else {
      dispatch(setModalOpenMembershipItemData(item));

      dispatch(openModalMembership());
    }
  };

  const { isChecked, membershipButtonPopup, membershipStoreItem } = useSelector(
    (state: any) => state.appliedJobSlice
  );

  useEffect(() => {
    console.log("membershipButtonPopup", membershipButtonPopup);
    if (membershipButtonPopup) {
      openingmembershipModalAndData(membershipStoreItem);
    }
  }, [membershipButtonPopup]);

  return (
    <>
      <SEO
        title={`Best Educational and Faculty Jobs in India | ${AppConst.LogoName} `}
        description={`Discover online teaching opportunities for IIT JEE coaching, NEET coaching, Sales & marketing jobs work-from-home positions, and teaching vacancies near you with ${AppConst.LogoName}  in Education. Explore openings for English, Computers, Maths, Science, mother teacher, school principals, vice principal, academic head, academic director and more, spanning across Pre Schools, Schools, Colleges, and Private coaching. Part-time, remote, and full-time roles are available nationwide in India.`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={"Membership Page"}
        type={"Web Page"}
      />
      <Title title={"Membership"} />
      {_currentPlan ? (
        <div className="membership-plan-wrapper mb-20 current-plan">
          <div className="row gx-0">
            <div className="col-xxl-7 col-lg-6 d-flex flex-column ">
              <div className="column w-100 h-100">
                <h4>{`Current Plan (${_currentPlan?.type})`}</h4>
                <p>
                  {currentPlanDetails &&
                  currentPlanDetails.length > 30 &&
                  isMore
                    ? currentPlanDetails?.join(" ")
                    : currentPlanDetails?.slice(0, 38)?.join(" ")}
                </p>
                <span
                  className="text-white cursor-pointer fs-6"
                  onClick={() => {
                    setIsMore(!isMore);
                  }}
                >
                  {isMore ? "Less..." : "More..."}
                </span>
              </div>
            </div>
            <div className="col-xxl-5 col-lg-6 d-flex flex-column">
              <div className="column border-left w-100 h-100">
                <div className="d-flex">
                  {_currentPlan?.type === "Postpaid" ? (
                    <h6 className="price m0 w-50 fs-6">{`${_currentPlan?.price}`}</h6>
                  ) : (
                    <h3 className="price m0">{`₹${_currentPlan?.price}`}</h3>
                  )}

                  <div className="ps-4 flex-fill">
                    <h6>
                      {_currentPlan?.days === "365"
                        ? "Yearly Plan"
                        : "Monthly Plan"}
                    </h6>
                    <span className="text1 d-block">
                      Your subscription renews{/* */}{" "}
                      <span className="fw-500">{_currentPlan?.days} days</span>
                    </span>
                    {/* <a
                      className="cancel-plan tran3s cursor-pointer"
                      onClick={() => {
                        PackCancel({
                          UID: userData?.UID,
                          sid: _currentPlan?.sid,
                        }).then((res) => {
                          if (res.success) {
                            Toast("success", res?.message);
                            queryClient.invalidateQueries({
                              queryKey: [Querykeys.profileDetails],
                            });
                          } else {
                            Toast("error", res?.message);
                          }
                        });
                      }}
                    >
                      Cancel Current Plan
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning text-center fs-6" role="alert">
          {" "}
          <strong className="d-block fs-5">Subscription Reminder:</strong> You
          haven't subscribed to any plans yet. <br />{" "}
          <span className="">
            Take action now to unlock premium features!{" "}
            <NavLink to={AppRoute.Contact_Us} style={{ color: "#a73358" }}>
              {" "}
              Contact customer care
            </NavLink>{" "}
            for assistance or subscribe to a plan to enjoy exclusive benefits.{" "}
          </span>
        </div>
      )}
      <section className="pricing-section">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7  ">
          <FlatList
            data={packageData?.data?.packages}
            renderItem={(item: any) => {
              const isPriceNumber = !isNaN(Number(item?.price));
              const isCategory = new Set(item?.categories).has(
                packageData?.data?.catID
              );
              const isCurrentPlan =
                item.packID === profileDetails?.user?.packID;
              return (
                isCategory &&
                !isCurrentPlan && (
                  <div className=" w-full h-full ">
                    <div className="pricing-card-one border-0 popular-two mt-25">
                      <div className="popular-badge">popular</div>
                      <div className="pack-name">{item?.type}</div>
                      <h5 className="mt-3">{item?.package}</h5>
                      <div className=" flex justify-center items-center">
                        <div className=" flex">
                          {isPriceNumber && (
                            <p className=" mt-1  mr-2 font-semibold text-[15px]">
                              ₹
                            </p>
                          )}
                          <p
                            className={`${
                              !isPriceNumber
                                ? "text-[16px] my-3 mb-3 leading-[1.2em]"
                                : "text-[25px]"
                            } mb-0  font-semibold`}
                          >
                            {item?.non_gst_price}
                          </p>
                        </div>
                        {isPriceNumber && (
                          <div className=" flex  gap-1">
                            <p className=" mb-0  mr-2 font-semibold text-[15px] pl-2">
                              +
                            </p>

                            <p className=" mb-0 text-[16px] font-semibold">
                              ₹ {item?.gst}
                            </p>
                            <p className=" mb-0">(18% GST)</p>
                          </div>
                        )}
                      </div>
                      {isPriceNumber && (
                        <div className=" flex justify-center">
                          {isPriceNumber && (
                            <p className=" mb-0 mt-2 mr-2 font-semibold text-[15px]">
                              ₹
                            </p>
                          )}
                          <p
                            className={`${
                              !isPriceNumber
                                ? "text-[16px] my-3 mb-3 leading-[1.2em]"
                                : "text-[35px]"
                            } mb-0  font-semibold`}
                          >
                            {item?.price_label}
                          </p>
                        </div>
                      )}
                      {/* <div
                        className={`price fw-500 ${
                          !isPriceNumber && "price-less"
                        }`}
                      >
                        {isPriceNumber && <sub>₹</sub>}
                        {item?.price} 
                      </div> */}

                      <ul className="style-none">
                        <li>{`${item?.no_of_jobs} job Apply `}</li>
                        <li> Days: {item?.days}</li>
                      </ul>

                      {
                        <div
                          className={`flex justify-center w-full items-center gap-2 ${
                            item?.type === "Postpaid" && !isChecked
                              ? " "
                              : "pb-0 "
                          }`}
                        >
                          <p className=" leading-[1.2em] text-sm font-semibold">
                            {" "}
                            {` ${
                              item?.type === "Postpaid"
                                ? "Please view and check"
                                : ""
                            }`}
                            <br />
                            <span
                              onClick={() => {
                                const membershipText =
                                  item?.type === "Prepaid"
                                    ? "Prepaid"
                                    : "Postpaid";
                                console.log(
                                  "Dispatching membership type text:",
                                  membershipText
                                );
                                dispatch(setMembershipTypeText(membershipText));
                                dispatch(setMembershipButtonPopup(false));
                                dispatch(openModalTermsAndConditions());
                              }}
                              className="text-[#9a3c58] text-sm font-semibold cursor-pointer hover:underline"
                            >
                              Terms & Conditions
                            </span>{" "}
                            {` ${
                              item?.type === "Postpaid" ? "to proceed" : ""
                            }`}
                          </p>
                        </div>
                      }

                      <div className="d-flex flex-row justify-content-center">
                        <button
                          className={`get-plan-btn tran3s w-100  videoButton ${
                            item?.type === "Postpaid" && !isChecked ? "" : ""
                          }`}
                          onClick={() => {
                            if (item?.type === "Postpaid") {
                              const membershipText =
                                item?.type === "Prepaid"
                                  ? "Prepaid"
                                  : "Postpaid";
                              console.log(
                                "Dispatching membership type text:",
                                membershipText
                              );
                              dispatch(setMembershipTypeText(membershipText));
                              dispatch(setMembershipItem(item));
                              dispatch(openModalTermsAndConditions());
                              dispatch(setMembershipButtonPopup(false));
                            } else {
                              openingmembershipModalAndData(item);
                            }
                          }}
                        >
                          Choose Plan
                        </button>
                      </div>
                    </div>
                  </div>
                )
              );
            }}
          />
        </div>
      </section>
    </>
  );
};

export default memo(Membership);
