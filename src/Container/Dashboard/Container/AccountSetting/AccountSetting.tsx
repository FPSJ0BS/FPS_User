import { AppConst } from "@/Enum/AppConst";
import SEO from "@Components/Seo/Seo";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import useUserChangePassword from "@Hooks/Mutation/useUserChangePassword";
import { AppRoute } from "@Navigator/AppRoute";
import { IUserChangePassword } from "@Type/ProfileType";
import { Toast } from "@Utils/Toast";
import { STRONG_PASSWORD, STRONG_PASSWORD_MESSAGE } from "@Utils/Validate";
import { memo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AccountSetting = () => {
  const [showPass, setShowPass] = useState(false);
  const [showOldPass, setOldShowPass] = useState(false);
  const navigate = useNavigate();
  const { userData } = useGlobalContext();
  const { mutateAsync: changePassword } = useUserChangePassword({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserChangePassword>();
  const onSubmitChangePassword: SubmitHandler<IUserChangePassword> = (data) => {
    const _data = { ...data, user_id: userData?.UID };
    changePassword(_data)
      .then((res) => {
        if (res?.status) {
          Toast("success", res?.message);
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
        name={"Account Settings Page"}
        type={"Web Page"}
      />
      <h2 className="main-title">Change Password</h2>
      <div className="mt-45">
        <div className="position-relative">
          <div className="bg-white card-box border-20">
            <form id="change_password">
              <div className="row">
                <div className="col-12">
                  <div className="dash-input-wrapper mb-20">
                    <label htmlFor="">Old Password*</label>
                    <div className="relative">
                      <input
                        {...register("old_password", {
                          required: "Please enter Old password",
                        })}
                        type={showOldPass ? "text" : "password"}
                        name="old_password"
                        placeholder="Old Password"
                      />
                      <a
                        className={`password-addon eye ${
                          showOldPass ? "icon-eye" : "icon-eye-off"
                        }`}
                        id="password-addon"
                        onClick={() => setOldShowPass(!showOldPass)}
                      />
                    </div>

                    {errors.old_password && (
                      <small className="text-danger mt-2">
                        {errors.old_password.message}
                      </small>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="dash-input-wrapper mb-20 ">
                    <label htmlFor="">New Password*</label>
                    <div className="relative">
                      <input
                        {...register("new_password", {
                          required: "Please enter New password",
                          pattern: {
                            value: STRONG_PASSWORD,
                            message: STRONG_PASSWORD_MESSAGE,
                          },
                        })}
                        name="new_password"
                        type={showPass ? "text" : "password"}
                        placeholder="New Password"
                        id="password-input"
                      />
                      <a
                        className={`password-addon eye ${
                          showPass ? "icon-eye" : "icon-eye-off"
                        }`}
                        id="password-addon"
                        onClick={() => setShowPass(!showPass)}
                      />
                    </div>

                    {errors.new_password && (
                      <small className="text-danger mt-2">
                        {errors.new_password.message}
                      </small>
                    )}
                  </div>
                </div>
              </div>
              <div className="button-group d-inline-flex align-items-center">
                <button
                  className="dash-btn-two tran3s rounded-3 me-3 videoButton"
                  onClick={handleSubmit(onSubmitChangePassword)}
                >
                  Save &amp; Updated
                </button>
                <button
                  className="dash-cancel-btn tran3s"
                  onClick={() => {
                    navigate(
                      `${AppRoute.Dashboard}/${AppRoute.User_Dashboard}`
                    );
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(AccountSetting);
