import { Link, NavLink} from "react-router-dom";
import { memo, useEffect, useState } from "react";
import useLoginWithEmail from "@Hooks/Mutation/useLoginWithEmail";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginWithEmailType } from "@Type/LoginType";
import { useGlobalContext } from "../../../Context/GlobalContextProvider";
import { EMAIL_REGEX, PHONE_REGEXP } from "@Utils/Validate";
import useMobileCheck from "@Hooks/Mutation/useMobileCheck";
import { Toast } from "@Utils/Toast";
import Otp from "../Component/Otp";
import useSendOtp from "@Hooks/Mutation/useSendOtp";
import useOtpCheck from "@Hooks/Mutation/useOtpCheck";
import { AppRoute } from "../../../Navigator/AppRoute";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AppConst } from "@/Enum/AppConst";
import LoginPage from "@Assets/images/login-page-image.svg";
import Imag from "@Components/Image/Image";

const LoginModal = ({ setIsModal }: any) => {
  const [showPass, setShowPass] = useState(false);
  const [isOtp, setIsOtp] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [sendOtpObj, setSendOtpObj] = useState({});
  const [data, setData] = useState({});
  const { setUserLoginData } = useGlobalContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus,
  } = useForm<ILoginWithEmailType>();
  const { mutateAsync: Login, isPending } = useLoginWithEmail({});
  const { mutateAsync: MobileCheck, isPending: isMobileCheckLoader } =
    useMobileCheck({});
  const { mutateAsync: OtpCheck, isPending: isOtpCheckLoader } = useOtpCheck(
    {}
  );
  const onSubmitEmail: SubmitHandler<ILoginWithEmailType> = (data) => {
    Login(data)
      .then((res) => {
        if (res?.status) {
          setUserLoginData({
            UID: res?.data?.faculityID,
            loginToken: res?.data?.login_token,
          });
          setIsModal(false);
          Toast("success", "Login successful! Enjoy your experience.");
        }
      })
      .catch((error) => {
        Toast("error", error?.response?.data?.message);
      });
  };
  const { mutateAsync: sendOtp, isPending: isSendOtpLoader } = useSendOtp({});
  const onMobileNumberCheck: SubmitHandler<ILoginWithEmailType> = (data) => {
    MobileCheck(data).then((res) => {
      setSendOtpObj(data);
      if (res?.userStatus) {
        sendOtp(data).then((res) => {
          if (res?.status === "success") {
            Toast(
              "success",
              "Your Verification Code Send Successfully,Please Check Your Mobile"
            );
            setIsOtp(true);
            setData({
              UID: res?.UID,
              regToken: res?.smsResult?.result,
              device_type: "Web",
              ip_address: "192.54.565",
            });
          } else {
            Toast("error", res?.message);
          }
        });
      } else {
        Toast("error", res?.message);
      }
    });
  };

  useEffect(() => {
    if (tabIndex === 1) {
      if (!isOtp) {
        setFocus("mobile");
      }
    } else {
      setFocus("email");
    }
  }, [tabIndex, isOtp]);

  return (
    <>
      <section className="account-section p-lg-5" >
        <button
          type="button"
          className="btnclose"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={() => setIsModal(false)}
          style={{ display: "block", zIndex: "10001" }}
        >
          x
        </button>
        <div className="container p-0">
          <div className="d-flex flex-row justify-content-between gap-3 flex-wrap">
            <div className="col-12 col-lg-5 d-none d-lg-block ">
              <Imag src={LoginPage} />
            </div>
            <div className="col-12 col-lg-5">
              <h6 className="fs-5 fw-bolder text-center">
                {`Welcome to ${AppConst.LogoName} - Login`}
              </h6>
              <p className="mt-2 text-base text-center mb-4">
                Search & apply to jobs from India's No.1 Job Site
              </p>
              <div className="row">
                <Tabs
                  className="wd-form-login tf-tab"
                  selectedIndex={tabIndex}
                  onSelect={(index) => {
                    setIsOtp(false);
                    reset();
                    setTabIndex(index);
                  }}
                >
                  {/* <h6 className="fs-4 mb-4 fw-bolder">Login</h6> */}
                  <TabList className="menu-tab">
                    <Tab className="ct-tab">Login with Email</Tab>
                    <Tab className="ct-tab">Login with Mobile</Tab>
                  </TabList>
                  <div className="content-tab">
                    <TabPanel className="inner animation-tab">
                      {tabIndex === 0 ? (
                        <form id="email-form">
                          <div className="ip">
                            <label>
                              Email
                              <span>*</span>
                            </label>
                            <input
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value: EMAIL_REGEX,
                                  message: "Invalid email",
                                },
                              })}
                              name="email"
                              type="email"
                              placeholder="Email"
                            />
                            {errors.email && (
                              <small className="text-danger mt-2">
                                {errors.email.message}
                              </small>
                            )}
                          </div>
                          <div className="ip">
                            <label>
                              Password<span>*</span>
                            </label>
                            <div className="inputs-group auth-pass-inputgroup">
                              <input
                                {...register("password", {
                                  required: "Please enter your password",
                                })}
                                name="password"
                                type={showPass ? "text" : "password"}
                                className="input-form password-input"
                                placeholder="Password"
                                id="password-input"
                              />
                              <Link
                                className={`password-addon ${
                                  showPass ? "icon-eye" : "icon-eye-off"
                                }`}
                                id="password-addon"
                                onClick={() => setShowPass(!showPass)}
                                to={""}
                              />
                            </div>
                            {errors.password && (
                              <small className="text-danger mt-2">
                                {errors.password.message}
                              </small>
                            )}
                          </div>
                          <div className="d-flex flex-row justify-content-end">
                            <NavLink
                              to={AppRoute.Forgot_password}
                              className="color-primary"
                            >
                              Forgot password
                            </NavLink>
                          </div>
                          <button
                            onClick={handleSubmit(onSubmitEmail)}
                            className={`${
                              isPending &&
                              "d-flex flex-row justify-content-center"
                            }`}
                            disabled={isPending ? true : false}
                          >
                            {isPending ? (
                              <div className="btn-loader"></div>
                            ) : (
                              "Login"
                            )}
                          </button>
                          <div className="sign-up">
                            <span className="fw-bolder">
                              {" "}
                              Not registered yet?{" "}
                            </span>

                            <NavLink
                              to={AppRoute.SignUp}
                              className="color-primary"
                            >
                              Sign Up
                            </NavLink>
                          </div>
                        </form>
                      ) : (
                        <></>
                      )}
                    </TabPanel>
                    <TabPanel className="inner animation-tab">
                      {tabIndex === 1 ? (
                        isOtp ? (
                          <>
                            <Otp
                              name={"otp"}
                              cb={(_data) => {
                                const query = { ..._data, ...data };
                                OtpCheck(query).then((res) => {
                                  if (res?.status === "success") {
                                    setUserLoginData(res);
                                    setIsModal(false);
                                    Toast(
                                      "success",
                                      "Login successful! Enjoy your experience."
                                    );
                                  } else {
                                    Toast("error", res?.message);
                                  }
                                });
                              }}
                              label={
                                "Confirm your sign-in with the 6-digit code from your Messaging App."
                              }
                              sendOtpObj={sendOtpObj}
                              digit={6}
                              isPending={isOtpCheckLoader}
                            />
                          </>
                        ) : (
                          <form id="send-otp-form">
                            <div className="ip">
                              <label>
                                Mobile
                                <span>*</span>
                              </label>
                              <input
                                {...register("mobile", {
                                  required: "Mobile Number is required",
                                  pattern: {
                                    value: PHONE_REGEXP,
                                    message: "Invalid Mobile number",
                                  },
                                })}
                                name="mobile"
                                type="text"
                                placeholder="Mobile Number"
                              />
                              {errors.mobile && (
                                <small className="text-danger mt-2">
                                  {errors.mobile.message}
                                </small>
                              )}
                            </div>

                            <button
                              onClick={handleSubmit(onMobileNumberCheck)}
                              className={`${
                                (isMobileCheckLoader || isSendOtpLoader) &&
                                "d-flex flex-row justify-content-center"
                              }`}
                              disabled={
                                isMobileCheckLoader || isSendOtpLoader
                                  ? true
                                  : false
                              }
                            >
                              {isMobileCheckLoader || isSendOtpLoader ? (
                                <div className="btn-loader"></div>
                              ) : (
                                "Send Otp"
                              )}
                            </button>
                            <div className="sign-up">
                              <span className="fw-bolder">
                                {" "}
                                Not registered yet?{" "}
                              </span>
                              <NavLink
                                to={AppRoute.SignUp}
                                className="color-primary"
                              >
                                Sign Up
                              </NavLink>
                            </div>
                          </form>
                        )
                      ) : (
                        <></>
                      )}
                    </TabPanel>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(LoginModal);
