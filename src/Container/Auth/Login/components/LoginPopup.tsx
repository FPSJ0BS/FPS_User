import { useEffect, useState } from "react";
import OtpComp from "./OtpComp";
import OtpInputWithValidation from "./OtpComp";
import useSendOtp from "@Hooks/Mutation/useSendOtp";
import { Toast } from "@Utils/Toast";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@Navigator/AppRoute";
import useOtpCheck from "@Hooks/Mutation/useOtpCheck";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { closeModalLogin } from "@/Redux/appliedJobSlice";
import { useDispatch, useSelector } from "react-redux";
import useLoginWithEmail from "@Hooks/Mutation/useLoginWithEmail";
import { postSignInWithEmail } from "@/api/api";

const LoginPopup = () => {
  const [panelChange, setPanelChange] = useState(false);
  const [panelOTP, setPanelOTP] = useState(false);
  const { setUserLoginData } = useGlobalContext();
  const numberOfDigits = 6;
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const { modalOpenmodalOpenLogin } = useSelector(
    (state: any) => state.appliedJobSlice
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({});
  const [mobNumber, setMobNumber] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutateAsync: sendOtp, isPending: isSendOtpLoader } = useSendOtp({});
  const { mutateAsync: OtpCheck, isPending: isOtpCheckLoader } = useOtpCheck(
    {}
  );
  const { mutateAsync: Login, isPending } = useLoginWithEmail({});

  const onMobileNumberCheck = (e) => {
    e.preventDefault();
    const data = {
      mobile: mobNumber,
    };

    sendOtp(data).then((res) => {
      if (res?.statusCode === 200) {
        Toast(
          "success",
          "Your Verification Code Send Successfully,Please Check Your Mobile"
        );
        setPanelOTP(true);
        setData({
          phone_number: mobNumber,
          hash: res?.data[0],
          fcm_token: "no token",
          device_type: "Web",
        });
      } else {
        const msg = "Sorry, account is not found on this number...";
        if (res?.message === msg) {
          setTimeout(() => {
            navigate(AppRoute.SignUp);
          }, 3000);
        }
        Toast("error", res?.message);
      }
    });
  };

  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (panelOTP) {
      setTimeLeft(60);
    }
  }, [panelOTP]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const resendOtp = () => {
    const sendOtpObj = {
      mobile: mobNumber,
    };

    sendOtp(sendOtpObj).then((res) => {
      if (res?.statusCode === 200) {
        setTimeLeft(60);
        clearEverything();
        Toast(
          "success",
          "Your Verification Code Send Successfully,Please Check Your Mobile"
        );
      }
    });
  };

  const otpVerify = async (e) => {
    e.preventDefault();

    const otpJoin = otp.join("");

    const myData = {
      ...data,
      otp: Number(otpJoin),
    };

    OtpCheck(myData).then((res) => {
      if (res?.statusCode === 200) {
        setUserLoginData(res?.data);
        navigate(AppRoute.Dashboard);
        Toast("success", "Login successful! Enjoy your experience.");
        dispatch(closeModalLogin());
      } else {
        Toast("error", res?.message);
      }
    });
  };

  const enterPhoneAgainFunc = () => {
    setPanelOTP(false);
    clearEverything();
  };

  const clearEverything = () => {
    setOtp(new Array(numberOfDigits).fill(""));
  };

  const emailHandleSubmit = async (e) => {
    e.preventDefault();

    const main = {
      username: email,
      password: password,
    };

    try {
      const res = await postSignInWithEmail(main);

      if (res?.data?.status) {
        setUserLoginData({
          UID: res?.data?.faculityID,
          loginToken: res?.data?.login_token,
        });
        navigate(AppRoute.Home);
        Toast("success", "Login successful! Enjoy your experience.");
        dispatch(closeModalLogin());
      } else {
        Toast("error", res?.data?.message);
        dispatch(closeModalLogin());
      }
    } catch (error) {}

    // Login(main)
    //   .then((res) => {
    //     if (res?.statusCode === 200) {
    //       setUserLoginData({
    //         UID: res?.data?.faculityID,
    //         loginToken: res?.data?.login_token,
    //       });
    //       navigate(AppRoute.Home);
    //       Toast("success", "Login successful! Enjoy your experience.");
    //     } else {
    //       Toast("error", res?.message);
    //     }
    //   })
    //   .catch((error) => {
    //     Toast("error", error);
    //   });
  };

  const registerNav = () => {
    navigate(AppRoute.SignUp);
    dispatch(closeModalLogin());
  }

  return (
    <div className="fixed h-full w-full bg-gray-900 bg-opacity-80  paymentPopupCss hidden xl:flex justify-end cursor-default">
      <div
        className={`${
          modalOpenmodalOpenLogin
            ? "animate-slideInFromRight"
            : "animate-slideOutToRight"
        } bg-white min-h-[100%] w-[30%] flex flex-col justify-start items-start items-top z-40 fixed p-4 gap-4 rounded-l-[30px] `}
      >
        <div className="   w-full flex justify-end    ">
          <svg
            onClick={() => dispatch(closeModalLogin())}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x cursor-pointer"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>

        <div className=" flex justify-between items-center w-full">
          <h3 className=" text-[18px] font-bold underline">Login</h3>
          <h3 onClick={() => registerNav()} className=" text-[18px] font-semibold text-[#355cec] cursor-pointer">
            Register For Free
          </h3>
        </div>

        <div className="w-full flex flex-col gap-4 py-2">
          <div className=" flex w-full justify-between">
            <button
              onClick={() => setPanelChange(false)}
              className={`w-[150px] h-[40px] rounded-md border-2 ${
                panelChange ? "" : "bg-[#0f0c6d] text-white"
              }  font-semibold`}
            >
              Login with Number
            </button>
            <button
              onClick={() => setPanelChange(true)}
              className={` w-[150px] h-[40px] rounded-md border-2 ${
                panelChange ? "bg-[#0f0c6d] text-white" : ""
              } font-semibold`}
            >
              Login with Email
            </button>
          </div>

          {panelChange ? (
            <div className=" min-h-[200px] flex items-center  w-full bg-white shadow-lg rounded-lg p-4">
              <form
                onSubmit={(e) => emailHandleSubmit(e)}
                className=" flex flex-col gap-4 w-full"
              >
                <div className=" flex flex-col gap-2">
                  <label className=" font-semibold" htmlFor="ema">
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e?.target.value)}
                    value={email}
                    required
                    className=" w-full rounded-[15px] border-2 border-[#e7e7f0] pl-2 "
                    placeholder="Enter Email Address ..."
                    type="email"
                    id="ema"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="pwd">
                    Password
                  </label>
                  <div className="relative w-full">
                    <input
                      onChange={(e) => setPassword(e?.target.value)}
                      value={password}
                      required
                      className="w-full rounded-[15px] border-2 border-[#e7e7f0] pl-2 pr-10"
                      placeholder="Enter Password ..."
                      type={showPassword ? "text" : "password"}
                      id="pwd"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-2 flex items-center text-gray-500 border-none"
                    >
                      {showPassword ? "Hide" : "Show"}{" "}
                    </button>
                  </div>
                </div>
                <button
                  className="bg-[#0f0c6d] w-full text-white h-[50px] rounded-[15px] font-semibold text-[16px]"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          ) : (
            <div className=" min-h-[200px] flex items-center justify-center  w-full bg-white shadow-lg rounded-lg p-4">
              {panelOTP ? (
                <div className="w-full">
                  <form
                    onSubmit={(e) => otpVerify(e)}
                    className=" flex flex-col gap-[30px] w-full"
                  >
                    <div className=" flex flex-col gap-2">
                      <div className=" flex items-center gap-2 w-full">
                        <OtpInputWithValidation
                          otp={otp}
                          setOtp={setOtp}
                          numberOfDigits={numberOfDigits}
                        />
                      </div>
                    </div>
                    <div className=" flex w-full justify-between items-center">
                      <button
                        onClick={() => resendOtp()}
                        type="button"
                        disabled={timeLeft > 0}
                        className=" border-none px-2 py-1 rounded-md text-[15px] font-semibold text-[#355cec] cursor-pointer"
                      >
                        {timeLeft !== 0 ? "Resend OTP in" : "Resend Now!"}{" "}
                        <span className=" text-red-600">
                          {timeLeft !== 0 ? timeLeft : ""}
                        </span>
                      </button>
                      <h3
                        onClick={() => enterPhoneAgainFunc()}
                        className=" text-[15px] font-semibold text-[#355cec] cursor-pointer"
                      >
                        Enter Phone number again!
                      </h3>
                    </div>
                    <button
                      className="bg-[#0f0c6d] w-full text-white h-[50px] rounded-[15px] font-semibold text-[16px]"
                      type="submit"
                    >
                      Verify OTP
                    </button>
                  </form>
                </div>
              ) : (
                <form
                  onSubmit={(e) => onMobileNumberCheck(e)}
                  className=" flex flex-col gap-4 w-full"
                >
                  <div className=" flex flex-col gap-2">
                    <label className=" font-semibold" htmlFor="pnNumebr">
                      Phone Number
                    </label>
                    <div className=" flex items-center gap-2 w-full">
                      <p className=" rounded-[15px] mb-0 border-2 border-solid border-[#e7e7f0] h-[50px] w-[50px] flex items-center justify-center font-semibold">
                        {" "}
                        +91
                      </p>
                      <input
                        value={mobNumber}
                        onChange={(e) => setMobNumber(e?.target?.value)}
                        required
                        className=" w-full rounded-[15px] border-2 border-[#e7e7f0] pl-2 "
                        placeholder="10 digit phone number ..."
                        type="tel"
                        id="pnNumebr"
                      />
                    </div>
                  </div>
                  <button
                    className="bg-[#0f0c6d] w-full text-white h-[50px] rounded-[15px] font-semibold text-[16px]"
                    type="submit"
                  >
                    Send OTP
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
