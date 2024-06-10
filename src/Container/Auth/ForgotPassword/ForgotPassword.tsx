import { AppConst } from "@/Enum/AppConst";
import Breadcrumb from "@Components/Breadcrump";
import SEO from "@Components/Seo/Seo";
import useForgotPassword from "@Hooks/Mutation/useForgotPassword";
import useResetPassword from "@Hooks/Mutation/useResetPassword";
import { AppRoute } from "@Navigator/AppRoute";
import { IForgotPassword} from "@Type/LoginType";
import { Toast } from "@Utils/Toast";
import {
  EMAIL_REGEX,
  STRONG_PASSWORD,
  STRONG_PASSWORD_MESSAGE,
} from "@Utils/Validate";
import { memo, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<IForgotPassword>();
  let pwd = watch("new_password");
  const { mutateAsync: forgotPassword, isPending } = useForgotPassword({});
  const { mutateAsync: resetPassword, isPending:isResetPassword } = useResetPassword({});
  const [isResetPage, setIsRestPage] = useState(false);
  const navigate = useNavigate();
  const onSubmitForgotPassword: SubmitHandler<IForgotPassword> = (_data) => {
    forgotPassword(_data)
      .then((res) => {
        if (res?.status) {
          Toast("success", res?.message);
          setIsRestPage(true);
        }
      })
      .catch((error) => {
        Toast("error", error?.response?.data?.message);
      });
  };
  const onSubmitResetPassword: SubmitHandler<IForgotPassword> = (_data) => {
    resetPassword(_data)
      .then((res) => {
        if (res?.status) {
          Toast("success", res?.message);
          navigate(AppRoute.Login);
        }
      })
      .catch((error) => {
        Toast("error", error?.response?.data?.message);
      });
  };
  return (
    <>
      <SEO
        title={`Best Educational and Faculty Jobs in India | ${AppConst.LogoName} `}
        description={`Discover online teaching opportunities for IIT JEE coaching, NEET coaching, Sales & marketing jobs work-from-home positions, and teaching vacancies near you with ${AppConst.LogoName}  in Education. Explore openings for English, Computers, Maths, Science, mother teacher, school principals, vice principal, academic head, academic director and more, spanning across Pre Schools, Schools, Colleges, and Private coaching. Part-time, remote, and full-time roles are available nationwide in India.`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={"Forgot Password Page"}
        type={"Web Page"}
      />
      <Breadcrumb title="Forgot Password" />
      <section className="account-section">
        <div className="container">
          <h6 className="fs-4 fw-bolder text-center">
            {`Welcome to ${AppConst.LogoName} - Forgot Password`}
          </h6>
          <p className="mt-2 text-base text-center mb-5">
            Search & apply to jobs from India's No.1 Job Site
          </p>
          <div className="row">
            <div className="container" style={{ width: "400px" }}>
              {isResetPage ? (
                <form id="email-reset-password">
                  <div className="ip mb-3">
                    <label className="mb-2">Email</label>
                    <input
                      {...register("username", {
                        required: "Email is required",
                        pattern: {
                          value: EMAIL_REGEX,
                          message: "Invalid email",
                        },
                      })}
                      name="username"
                      type="email"
                      placeholder="Email"
                      className="p-3 "
                    />
                    {errors.username && (
                      <small className="text-danger mt-2">
                        {errors.username.message}
                      </small>
                    )}
                  </div>
                  <div className="ip mb-3">
                    <label className="mb-2">Otp</label>
                    <input
                      {...register("otp", {
                        required: "OTP is required",
                        pattern: {
                          value: /^\d{4}$/,
                          message: "Please enter a valid otp",
                        },
                      })}
                      name="otp"
                      type="text"
                      placeholder="Otp"
                      className="p-3 border-1"
                    />
                    {errors.otp && (
                      <small className="text-danger mt-2">
                        {errors.otp.message}
                      </small>
                    )}
                  </div>

                  <div className="ip mb-3">
                    <label className="mb-2">New Password</label>

                    <Controller
                      name="new_password"
                      control={control}
                      rules={{
                        required: "New Password is required",
                        pattern: {
                          value: STRONG_PASSWORD,
                          message: STRONG_PASSWORD_MESSAGE,
                        },
                      }}
                      render={({ field: { onChange, value } }) => (
                        <input
                          name="new_password"
                          type={"password"}
                          className="p-3 border-1"
                          placeholder="New password"
                          id="password-input"
                          value={value}
                          onChange={onChange}
                        />
                      )}
                    />
                    {errors.new_password && (
                      <small className="text-danger mt-2">
                        {errors.new_password.message?.toString() || ""}
                      </small>
                    )}
                  </div>
                  <div className="ip mb-5">
                    <label className="mb-2">Confirm Password</label>
                    <Controller
                      name="confirm_password"
                      control={control}
                      rules={{
                        required: "Confirm Password is required",
                        validate: (value) =>
                          value === pwd || "The passwords do not match",
                      }}
                      render={({ field: { onChange, value } }) => (
                        <input
                          name="confirm_password"
                          type={"password"}
                          // className="p-2 border-1"
                          placeholder="Confirm Password"
                          id="password-input"
                          value={value}
                          onChange={onChange}
                          className="p-3 border-1"
                        />
                      )}
                    />

                    {errors.confirm_password && (
                      <small className="text-danger mt-2">
                        {errors.confirm_password.message}
                      </small>
                    )}
                  </div>
                  <button
                    onClick={handleSubmit(onSubmitResetPassword)}
                    className={`videoButton w-100 ${
                      isResetPassword &&
                      " d-flex flex-row justify-content-center"
                    }`}
                    disabled={isResetPassword ? true : false}
                  >
                    {isResetPassword ? (
                      <div className="btn-loader"></div>
                    ) : (
                      " Reset Password"
                    )}
                  </button>
                </form>
              ) : (
                <form id="email-forgot-password">
                  <div className="ip mb-5">
                    <label className="mb-2">Email</label>
                    <input
                      {...register("username", {
                        required: "Email is required",
                        pattern: {
                          value: EMAIL_REGEX,
                          message: "Invalid email",
                        },
                      })}
                      name="username"
                      type="email"
                      placeholder="Email"
                      className="p-3 "
                    />
                    {errors.username && (
                      <small className="text-danger mt-2">
                        {errors.username.message}
                      </small>
                    )}
                  </div>
                  <button
                    onClick={handleSubmit(onSubmitForgotPassword)}
                    className={`videoButton w-100 ${
                      isPending && " d-flex flex-row justify-content-center"
                    }`}
                    disabled={isPending ? true : false}
                  >
                    {isPending ? (
                      <div className="btn-loader"></div>
                    ) : (
                      "Send OTP"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(ForgotPassword);
