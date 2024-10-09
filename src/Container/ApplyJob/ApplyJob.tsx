import { Controller, SubmitHandler, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import useApplyJob from "@Hooks/Mutation/useApplyJob";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import Logo from "../../../public/fps-logo.webp";
import {
  NavigationType,
  useLocation,
  useNavigate,
  useNavigationType,
} from "react-router-dom";
import { Toast } from "@Utils/Toast";
import { isDateAfter, isDateBefore, isDateSame } from "@Utils/Validate";
import { AppRoute } from "@Navigator/AppRoute";
import { differenceInDays } from "date-fns";
import Breadcrumb from "@Components/Breadcrump";
import SEO from "@Components/Seo/Seo";
import { AppConst } from "@/Enum/AppConst";
import { memo, useEffect, useRef, useState } from "react";

const ApplyJob = () => {
  const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		// This forces a rerender, so the date is rendered
		// the second time but not the first
		setHydrated(true);
	}, []);
	if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null;
	}
  const { state } = useLocation();
  const navigate = useNavigate();
  const navType: NavigationType = useNavigationType();
  const hasN: any = useRef(false);
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<any>();
  const { userData } = useGlobalContext();
  let date1 = watch("date1");
  let date2 = watch("date2");

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  

  const { mutateAsync } = useApplyJob({});
  const onSubmit: SubmitHandler<any> = async (data) => {
    const _data = {
      ...data,
      facultyID: userData?.UID,
      jobID: state.jobID,
      regToken: "",
      duration_notice_period: "",
      date1: formatDate(data.date1),
      date2: formatDate(data.date2),
      expected_joining_date: formatDate(data.expected_joining_date),
    };
    try {
      await mutateAsync(_data).then((res) => {
        if (res?.status) {
          navigate(AppRoute.Thank_You);
          Toast("success", res?.message);
        } else {
          Toast("error", res?.message);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (navType === "POP" && !hasN.current) {
      navigate(-1);
      hasN.current = true;
    }
  }, []);
  return (
    <>
      <SEO
        title={`Apply for Job Openings | ${AppConst.LogoName} Careers`}
        description={`Discover exciting career opportunities at ${AppConst.LogoName} . Apply for job openings and join our dynamic team. Explore positions, submit your application, and take the next step in your career journey.`}
        name={"Job Application Page"}
        type={"Web Page"}
      />
      <Breadcrumb title="Apply Job" />
      <section className="relative bg-slate-50  lg:py-8 py-8">
        <div className="container">
          <div className="md:flex justify-center">
            <div className="lg:w-2/4 md:w-2/3">
              <div
                className="p-6 bg-white dark:bg-slate-900 shadow border border-danger rounded-md"
                style={{ paddingBottom: "40px" }}
              >
                <div className="d-flex justify-content-center">
                  <img
                    id="trans-logo"
                    src={Logo}
                    alt="Image"
                    style={{ width: "150px" }}
                  />
                </div>

                <h4 className="fs-5 my-3 text-center font-bold">
                  Fill The Following Details To Apply
                </h4>
                <form className="text-left">
                  <div className="grid grid-cols-2">
                    <div className="mb-4 ltr:text-left rtl:text-right mr-4">
                      <label className="form-label font-medium block">
                        Interview Date :
                      </label>
                      <Controller
                        name="date1"
                        control={control}
                        rules={{
                          required: "Interview date 1 is required",
                          validate: (value) => {
                            if (isDateAfter(value, date2)) {
                              return "Date 1 cannot be after date 2";
                            }
                            return (
                              !isDateSame(value, date2) ||
                              "Both interview date cannot be same"
                            );
                          },
                        }}
                        render={({ field: { onChange, value } }) => (
                          <DatePicker
                            selected={value}
                            onChange={onChange}
                            placeholderText={"Date 1"}
                            style={{ paddingLeft: 10, color: "#000" }}
                            minDate={new Date()}
                            customInput={
                              <input
                                style={{
                                  color: "#000",
                                  width: "100%",
                                  border: "1px solid #ddd",
                                  padding: "12px",
                                }}
                              />
                            }
                          />
                        )}
                      />
                      {errors?.date1 && (
                        <small className="text-danger">
                          {errors.date1?.message?.toString()}
                        </small>
                      )}
                    </div>
                    <div className="mb-3 ltr:text-left rtl:text-right mt-4">
                      <label className="form-label font-medium block mb-1"></label>
                      <Controller
                        name="date2"
                        control={control}
                        rules={{
                          required: "Interview date 2 is required",
                          validate: (value) => {
                            if (isDateBefore(value, date1)) {
                              return "Date 2 cannot be before date 1";
                            }
                            return (
                              !isDateSame(value, date1) ||
                              "Both interview date cannot be same"
                            );
                          },
                        }}
                        render={({ field: { onChange, value } }) => (
                          <DatePicker
                            selected={value}
                            onChange={onChange}
                            minDate={new Date()}
                            placeholderText={"Date 2"}
                            style={{ paddingLeft: 10, color: "#000" }}
                            customInput={
                              <input
                                style={{
                                  color: "#000",
                                  width: "100%",
                                  border: "1px solid #ddd",
                                  padding: "12px",
                                }}
                              />
                            }
                          />
                        )}
                      />
                      {errors?.date2 && (
                        <small className="text-danger">
                          {errors.date2?.message?.toString()}
                        </small>
                      )}
                    </div>
                    <div className="mb-3 ltr:text-left rtl:text-right ">
                      <label className="form-label font-medium block ">
                        Expected Joining Date:
                      </label>
                      <Controller
                        name="expected_joining_date"
                        control={control}
                        rules={{
                          required: "Expected joining date is required",
                        }}
                        render={({ field: { onChange, value } }) => (
                          <DatePicker
                            selected={value}
                            onChange={onChange}
                            minDate={new Date()}
                            placeholderText={"Expected Joining Date"}
                            style={{ paddingLeft: 10, color: "#000" }}
                            customInput={
                              <input
                                style={{
                                  color: "#000",
                                  width: "100%",
                                  border: "1px solid #ddd",
                                  padding: "12px",
                                }}
                              />
                            }
                          />
                        )}
                      />
                      {errors?.expected_joining_date && (
                        <small className="text-danger">
                          {errors.expected_joining_date?.message?.toString()}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-start col-12 mt-3">
                    <button
                      type="button"
                      id="submit"
                      className="videoButton col-4"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Apply
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(ApplyJob);
