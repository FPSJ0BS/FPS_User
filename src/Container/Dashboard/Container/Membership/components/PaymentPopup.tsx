import React, { useEffect } from "react";
import CloseIcon from "@Assets/Payment/remove.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import QRImage from "@Assets/Payment/QrCode.png";
import { DbtOrUpi } from "./input/dbtOrUpi";
import { useNavigate } from "react-router-dom";
import { getBankDetails, postDbtandUpi } from "@/api/api";
import SuccessGif from "@Assets/Payment/Successful purchase.gif";
import { useQueryClient } from "@tanstack/react-query";
import usePackUpdate from "@Hooks/Mutation/usePackUpdate";
import useCreateOrder from "@Hooks/Mutation/useCreateOrder";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { AppConst } from "@/Enum/AppConst";
import logo from "../../../../../../public/fps-logo.webp";
import { Toast } from "@Utils/Toast";
import { AppRoute } from "@Navigator/AppRoute";
import useRazorpay from "react-razorpay";
import { Querykeys } from "@Hooks/Queries/queryname";
import { closeModalMembership } from "@/Redux/appliedJobSlice";

export const PaymentPopup = () => {
  const [bankData, setbankData] = useState(null);
  const queryClient = useQueryClient();
  const { mutateAsync: packUpdate } = usePackUpdate({});
  const { mutateAsync: createOrder } = useCreateOrder({});
  const { userData } = useGlobalContext();
  const [Razorpay] = useRazorpay();
  const { modalOpenMembershipItemData } = useSelector(
    (state: any) => state.appliedJobSlice
  );
  const [paymentSuccesful, setPaymentSuccessful] = useState(false);
  const [secondsTime, setSecondsTime] = useState(30);
  const item = modalOpenMembershipItemData;


  useEffect(() => {
    const apiFetch = async () => {
      try {
        const res = await getBankDetails();

        if (res?.data?.status) {
          const data = await res?.data?.data[0];
          setbankData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    apiFetch();
  }, []);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(closeModalMembership());
  };

  const [passValue, setPassValue] = useState("");
  const [upiOrDbt, setUpiOrDbt] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPassValue(inputValue);
  };

  const payment = async (e) => {
    e.preventDefault();
    try {
      const res = await postDbtandUpi({
        facultyID: userData?.UID,
        packID: Number(item?.packID),
        amount: parseInt(item?.price),
        type: "Prepaid",
        transaction_id: passValue,
        payment_type: upiOrDbt,
        payment_status: "captured",
        subscription_day: "",
        transaction_order_id: "",
        transaction_signature: "",
      });
      if (res?.data.status) {
        setPaymentSuccessful(true);
        setSecondsTime(30);
     

        Toast("success", res?.data?.message);
      } else {
    

        Toast("error", res?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = () => {
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
            name: "profileDetails?.user?.name",
            email: "profileDetails?.user?.email",
            contact: "profileDetails?.user?.mobile",
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

  useEffect(() => {
    if (secondsTime > 0 && paymentSuccesful) {
      const timerId = setInterval(() => {
        setSecondsTime((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }

    if (secondsTime === 0) {
      closeModal();
      navigate(`${AppRoute.Find_Jobs}`);
    }
  }, [secondsTime, paymentSuccesful]);

  const redirect = () => {
    closeModal();
    navigate(AppRoute.Find_Jobs);
  };

  return (
    <div className="fixed h-full w-full bg-gray-900 bg-opacity-80  paymentPopupCss">
      <div className=" min-h-[30%] w-[100%] flex justify-center items-top z-40 fixed mt-[10px] ">
        {!paymentSuccesful && (
          <div
            className={` bg-white overflow-y-auto h-[500px] sm:mt-0 mt-3   sm:min-h-[500px] w-[700px] rounded-lg relative z-50 sm:py-[20px] `}
          >
            <div className=" absolute right-1 top-1 z-50">
              <img
                onClick={() => closeModal()}
                src={CloseIcon}
                alt="close"
                className=" w-[30px] cursor-pointer"
              />
            </div>
            <div className=" w-[100%] h-[100%] flex justify-center items-center flex-col gap-2 sm:my-0 my-[100px] ">
              <div className=" w-[100%] flex flex-col sm:flex-row-reverse">
                <div className=" w-[100%] sm:w-[50%] flex flex-col justify-center items-center">
                  <img
                    className="w-[150px] pt-[10px]"
                    src={bankData?.qr_img}
                    alt="Phone Number"
                  />
                  <p>{bankData?.upi}</p>
                </div>

                <div className="w-[100%] sm:w-[50%] flex flex-col justify-center items-center my-[10px] gap-4">
                  <h2 className="text-black font-bold text-[18px] underline ">
                    Direct Bank Transfer
                  </h2>
                  <div className=" gap-2 flex flex-col ">
                    <div className=" flex items-center gap-2">
                      <h3 className=" font-bold underline text-[16px]">
                        Amount -
                      </h3>
                      <p className=" font-bold underline text-[20px]">
                        {item?.price_label}
                      </p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <h3 className=" font-semibold">Bank Name -</h3>
                      <p>{bankData?.bank_name}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <h3 className=" font-semibold">Account Name -</h3>
                      <p>{bankData?.name}</p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <h3 className=" font-semibold">Account Number -</h3>
                      <p>{bankData?.number}</p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <h3 className=" font-semibold">IFSC Code -</h3>
                      <p>{bankData?.ifsc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[100%] h-[50px] flex justify-center items-center">
                <span className="w-[40%]">
                  <hr className="bg-gray-600 h-[1.5px]" />
                </span>
                <span className="w-[20%] flex justify-center items-center font-semibold">
                  Final Step
                </span>
                <span className="w-[40%]">
                  <hr className="bg-gray-600 h-[1.5px]" />
                </span>
              </div>

              <form
                onSubmit={(e) => payment(e)}
                className="flex flex-col gap-2 justify-center items-center w-[80%]"
              >
                <div className="flex flex-col gap-2 w-[100%]">
                  <label
                    htmlFor="contactPersonName"
                    className=" postJobInputTitle font-semibold text-gray-700"
                  >
                    Enter Transaction Id & Payment Type to verify the Payment!
                  </label>
                  <div className="flex justify-center items-baseline gap-2">
                    <input
                      placeholder="Enter Transaction Id..."
                      autoComplete="off"
                      required
                      onChange={(e) => handleChange(e)}
                      type="text"
                      id="contactPersonName"
                      name="InstituteName"
                      className=" h-[40px] p-2 w-[50%] sm:w-[50%] border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      value={passValue}
                    />
                    <DbtOrUpi
                      upiOrDbtinput={upiOrDbt}
                      setUpiOrDbtinput={setUpiOrDbt}
                    />
                  </div>
                </div>

                <button className=" font-semibold  w-[300px] relative mt-3 px-8 py-2 rounded-md bg-[#cc5475] isolation-auto z-10 border-2 border-solid text-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                  Verify Payment
                </button>
              </form>

              <div className="w-[100%] h-[50px] flex justify-center items-center">
                <span className="w-[50%]">
                  <hr className="bg-gray-600" />
                </span>
                <span className="w-[10%] flex justify-center items-center font-semibold">
                  OR
                </span>
                <span className="w-[50%]">
                  <hr className="bg-gray-600" />
                </span>
              </div>

              <div className=" w-[100%] flex justify-center items-center">
                <button
                  onClick={() => handlePayment()}
                  className=" px-5 py-2 border-2 rounded-md bg-[#324898] font-semibold text-white"
                >
                  Pay with Razorpay
                </button>
              </div>
            </div>
          </div>
        )}

        {paymentSuccesful && (
          <div className="bg-white  h-[350px] w-[800px] rounded-lg relative z-40 py-[20px] mt-[100px] flex justify-center items-center">
            <div className="w-[40%]  justify-center items-center hidden sm:flex">
              <img className="w-[80%]" src={SuccessGif} alt="success" />
            </div>

            <div className="z-50 w-[100%] sm:w-[60%] flex  flex-col justify-center items-center sm:pr-[50px] gap-4">
              <div>
                <h2 className="flex justify-center items-center  text-[30px] text-center font-medium leading-[1.4em]">
                  Congratulations{" "}
                </h2>
                <h2 className="text-[30px] text-center font-medium leading-[1.4em]">
                  on being a part of{" "}
                  <span className="font-bold ">Tallento.ai</span>
                </h2>
              </div>
              <p className="text-center">
                * We have recieved the transaction id and we will soon <br />
                update the status of your payment.
              </p>
              <div>
                <p>
                  <span
                    onClick={() => redirect()}
                    className="text-black font-medium cursor-pointer"
                  >
                    Click here
                  </span>{" "}
                  to redirect or Redirecting in{" "}
                  <span className="font-medium">{secondsTime}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
