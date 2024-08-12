import { Controller, SubmitHandler, useForm } from "react-hook-form";
import OTPInput from "otp-input-react";
import { memo, useEffect, useState } from "react";
import Countdown from "@Components/Countdown/Countdown";
import useSendOtp from "@Hooks/Mutation/useSendOtp";
import { Toast } from "@Utils/Toast";
import './otp.scss'

const OtpSignUp = ({
  name,
  cb,
  label,
  sendOtpObj,
  digit,
  isResendOtp = true,
  isPending,
  mobile,
  sethashValue,
  setOtpSendData,
  otpSendData
}: {
  name: string;
  cb: (value: any) => void;
  label: string;
  sendOtpObj?: any;
  digit: number;
  isPending: boolean;
  isResendOtp?: boolean;
  mobile:any;
  sethashValue : any
  setOtpSendData : any
  otpSendData : any
}) => {

  const [initialSeconds, setInitialSeconds] = useState(30);
 
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>();

  const { mutateAsync: sendOtp } = useSendOtp({});

  const onSubmit: SubmitHandler<any> = (data) => {
    cb(data);
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <h6 className="fs-6 text-center mb-16 text-black">{label}</h6>
      <form id="otp-form" className="w-100">
        <div className="otpInputCon text-white ">
          <Controller
            name={name}
            control={control}
            rules={{
              required: "Please enter valid otp",
              validate: (value) =>
                value.length >= digit || "Please enter valid otp",
            }}
            render={({ field: { onChange, value } }) => (
              <OTPInput
                value={value}
                onChange={onChange}
                autoFocus={true}
                OTPLength={digit}
                disabled={false}
                inputClassName={"otpInput"}
                className={"flex flex-row justify-center text-black "}
              />
            )}
          />
          {errors?.[name] && (
            <small className="text-danger mt-2 text-center block fs-6">
              {errors?.[name]?.message?.toString()}
            </small>
          )}
        </div>
        {(
          <Countdown
            initialSeconds={initialSeconds}
            setInitialSeconds={setInitialSeconds}
            onPress={() => {

              sendOtp({
                mobile
              }).then((res) => {
              
                sethashValue(res?.data[0])
                setOtpSendData({
                  ...otpSendData,
                  hash : res?.data[0]

                })
                if (res?.statusCode === 200) {
                  Toast(
                    "success",
                    "Your Verification Code Send Successfully,Please Check Your Mobile"
                  );
                }
              });
            }}
          />
        )}

        <div
          className={`d-flex flex-row justify-content-center col-12 text-black ${
            !isResendOtp && "mt-10"
          }`}
        >
          <button
            onClick={handleSubmit(onSubmit)}
            className={`bg-black text-white border-1 border-white border-solid col-8 mt-[13px] py-3 rounded-lg text-[17px] ${
              isPending && "text-black d-flex flex-row justify-content-center "
            }`}
            disabled={isPending ? true : false}
          >
            {isPending ? <div className="btn-loader text-black"></div> : "Verify Otp"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(OtpSignUp);
