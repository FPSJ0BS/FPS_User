import { useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
const AppendFormEducation = ({
  setIsExperienced,
  setEducation,
  education,
}: {
  setIsExperienced: (valve: boolean) => void;
  setEducation: (value: any) => void;
  education: any;
}) => {
  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const { fields, append, remove,} = useFieldArray({
    control,
    name: "education",
  });

  const onSubmit = (data) => {
    setEducation(data);
    setIsExperienced(false);
  };

  
  useEffect(() => {
    education.education &&
      education?.education.forEach((item, index) => {
        for (let x in item) {
          if (`${x}` !== "data") {
            setValue(`education.${index}.${x}`, `${item[x]}`);
          }
        }
      });
  }, [education]);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => (
        <div
          key={item.id}
          style={{ marginBottom: "10px" }}
          className="d-flex flex-row flex-wrap"
        >
          <div className="d-flex flex-column col-12 col-md-6 col-lg-3 mb-4 gap-2 px-md-2">
            <label className="fw-bolder text-black">College/University</label>
            <Controller
              name={`education.${index}.collegeName`}
              control={control}
              render={({ field: { onChange, value } }) => (
                <input
                  {...register(`education.${index}.collegeName`, {
                    required: "University name is required",
                    // pattern: {
                    //   value: EMAIL_REGEX,
                    //   message: "Please enter a valid email address",
                    // },
                  })}
                  value={value}
                  onChange={onChange}
                  placeholder="College/University"
                  aria-invalid="true"
                  type="text"
                  className="p-2 border-1 "
                  style={{ paddingLeft: 10 }}
                />
              )}
            />
            {errors?.education?.[index]?.collegeName && (
              <small className="text-danger">
                {errors?.education?.[index]?.collegeName?.message?.toString() ||
                  ""}
              </small>
            )}
          </div>

          <div className="d-flex flex-column col-12 col-md-6 col-lg-3 mb-4 gap-2 px-md-2">
            <label className="fw-bolder text-black">Academic degree</label>
            <Controller
              render={() => (
                <input
                  {...register(`education.${index}.degree`, {
                    required: "Academic degree required",
                    // pattern: {
                    //   value: EMAIL_REGEX,
                    //   message: "Please enter a valid email address",
                    // },
                  })}
                  placeholder="Academic degree"
                  aria-invalid="true"
                  type="text"
                  className="p-2 border-1 "
                  style={{ paddingLeft: 10 }}
                />
              )}
              name={`education.${index}.degree`}
              control={control}
            />
            {errors?.education?.[index]?.degree && (
              <small className="text-danger">
                {errors?.education?.[index]?.degree?.message?.toString() || ""}
              </small>
            )}
          </div>
          <div className="d-flex flex-column col-12 col-md-6 col-lg-3 mb-4 gap-2 px-md-2">
            <label className="fw-bolder text-black">Passing Year</label>
            <Controller
              render={() => (
                <input
                  {...register(`education.${index}.passingYear`, {
                    required: "Please enter passing year",
                    pattern: {
                      value: /^(19[5-9]\d|20[0-2]\d|2026)$/,
                      message: "Please enter a valid passing year",
                    },
                  })}
                  placeholder="Passing Year"
                  aria-invalid="true"
                  type="text"
                  className="p-2 border-1 "
                  style={{ paddingLeft: 10 }}
                />
              )}
              name={`education.${index}.passingYear`}
              control={control}
            />
            {errors?.education?.[index]?.passingYear && (
              <small className="text-danger">
                {errors?.education?.[index]?.passingYear?.message?.toString() ||
                  ""}
              </small>
            )}
          </div>
          <div className="d-flex flex-column col-12 col-md-6 col-lg-2 mb-4 gap-2 px-md-2">
            <label className="fw-bolder text-black">Percentage</label>
            <Controller
              render={() => (
                <input
                  {...register(`education.${index}.percentage`, {
                    required: "Please enter percentage",
                    pattern: {
                      value:
                        /^100(\.(0){0,2})?$|^([1-9]?[0-9])(\.(\d{0,2}))?\%$/,
                      message: "Please enter a valid percentage",
                    },
                  })}
                  placeholder="Percentage"
                  aria-invalid="true"
                  type="text"
                  className="p-2 border-1 "
                  style={{ paddingLeft: 10 }}
                />
              )}
              name={`education.${index}.percentage`}
              control={control}
            />
            {errors?.education?.[index]?.percentage && (
              <small className="text-danger">
                {errors?.education?.[index]?.percentage?.message?.toString() ||
                  ""}
              </small>
            )}
          </div>
          <div className="d-flex flex-column col-12 col-md-6 col-lg-1 mb-4 gap-2 px-md-2 p-3">
            <button
              type="button"
              onClick={() => remove(index)}
              className="modal-save-btn1 mx-0 mt-3"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="modal-save-btn mx-0"
        onClick={() =>
          append({
            collegeName: "",
            degree: "",
            passingYear: "",
            percentage: "",
          })
        }
      >
        Add Field
      </button>
      <div className="modal-fixed-btn d-flex flex-row justify-content-center gap-5">
        <button type="submit" className="modal-save-btn mx-0">
          Next
        </button>
      </div>
    </form>
  );
};

export default AppendFormEducation;
