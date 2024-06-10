import DatePicker from "react-date-picker";
import { useForm, useFieldArray, Controller } from "react-hook-form";
const AppendFormExperience = ({
  setIsExperienced,
  setModal,
  setExperience,
}: {
  setIsExperienced: (valve: boolean) => void;
  setModal: (value: boolean) => void;
  setExperience: (value: any) => void;
}) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  const onSubmit = (data) => {
    console.log(data);
    setExperience(data);
    setIsExperienced(true);
    setModal(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => (
        <div
          key={item.id}
          style={{ marginBottom: "10px" }}
          className="d-flex flex-row flex-wrap"
        >
          <div className="d-flex flex-column col-12 col-md-6 col-lg-2 mb-4 gap-2 px-md-2">
            <label className="fw-bolder text-black">Experience</label>
            <Controller
              control={control}
              name={`experience.${index}.experience`}
              render={() => (
                <input
                  {...register(`experience.${index}.experience`, {
                    required: "Please enter experience",
                    // pattern: {
                    //   value: EMAIL_REGEX,
                    //   message: "Please enter a valid email address",
                    // }
                  })}
                  placeholder="Experience"
                  aria-invalid="true"
                  type="text"
                  className="p-2 border-1 "
                  style={{ paddingLeft: 10 }}
                />
              )}
            />
            {errors?.experience?.[index]?.experience && (
              <small className="text-danger">
                {errors?.experience?.[index]?.experience?.message?.toString() ||
                  ""}
              </small>
            )}
          </div>

          <div className="d-flex flex-column col-12 col-md-6 col-lg-3 mb-4 gap-2 px-md-2">
            <label className="fw-bolder text-black">Organization Name</label>
            <Controller
              control={control}
              render={() => (
                <input
                  {...register(`experience.${index}.organizationName`, {
                    required: "Please enter Organization Name",
                    // pattern: {
                    //   value: EMAIL_REGEX,
                    //   message: "Please enter a valid email address",
                    // }
                  })}
                  placeholder="Organization Name"
                  aria-invalid="true"
                  type="text"
                  className="p-2 border-1 "
                  style={{ paddingLeft: 10 }}
                />
              )}
              name={`experience.${index}.organizationName`}
            />
            {errors?.experience?.[index]?.organizationName && (
              <small className="text-danger">
                {errors?.experience?.[
                  index
                ]?.organizationName?.message?.toString() || ""}
              </small>
            )}
          </div>
          <div className="d-flex flex-column col-12 col-md-6 col-lg-2 mb-4 gap-2 px-md-2">
            <label className="fw-bolder text-black">Designation</label>
            <Controller
              control={control}
              render={() => (
                <input
                  {...register(`experience.${index}.designation`, {
                    required: "Please enter designation",
                    // pattern: {
                    //   value: EMAIL_REGEX,
                    //   message: "Please enter a valid email address",
                    // }
                  })}
                  placeholder="Designation"
                  aria-invalid="true"
                  type="text"
                  className="p-2 border-1 "
                  style={{ paddingLeft: 10 }}
                />
              )}
              name={`experience.${index}.designation`}
            />
            {errors?.experience?.[index]?.designation && (
              <small className="text-danger">
                {errors?.experience?.[
                  index
                ]?.designation?.message?.toString() || ""}
              </small>
            )}
          </div>
          <div className="d-flex flex-column col-12 col-md-6 col-lg-2 mb-4 gap-2 px-md-2">
            <label className="fw-bolder text-black">Start Date</label>
            <Controller
              name={`experience.${index}.startDate`}
              control={control}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  {...register(`experience.${index}.startDate`, {
                    required: "Please select start date",
                    // pattern: {
                    //   value: EMAIL_REGEX,
                    //   message: "Please enter a valid email address",
                    // }
                  })}
                  value={value ? new Date(value) : new Date()}
                  onChange={onChange}
                  maxDate={new Date()}
                  calendarIcon={null}
                  clearIcon={null}
                  className={"w-100 text-black border-0"}
                  calendarClassName={"w-100 text-black border border-secondary"}
                />
              )}
            />
            {errors?.experience?.[index]?.startDate && (
              <small className="text-danger">
                {errors?.experience?.[index]?.startDate?.message?.toString() ||
                  ""}
              </small>
            )}
          </div>
          <div className="d-flex flex-column col-12 col-md-6 col-lg-2 mb-4 gap-2 px-md-2">
            <label className="fw-bolder text-black">Start Date</label>
            <Controller
              name={`experience.${index}.endDate`}
              control={control}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  {...register(`experience.${index}.endDate`, {
                    required: "Please select end date",
                    // pattern: {
                    //   value: EMAIL_REGEX,
                    //   message: "Please enter a valid email address",
                    // }
                  })}
                  value={value ? new Date(value) : new Date()}
                  onChange={onChange}
                  maxDate={new Date()}
                  calendarIcon={null}
                  clearIcon={null}
                  className={"w-100 text-black border-0"}
                  calendarClassName={"w-100 text-black border border-secondary"}
                />
              )}
            />
            {errors?.experience?.[index]?.endDate && (
              <small className="text-danger">
                {errors?.experience?.[index]?.endDate?.message?.toString() ||
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
            Experience: "",
            organizationName: "",
            designation: "",
            startDate: "",
            endDate: "",
          })
        }
      >
        Add Field
      </button>
      <div className="modal-fixed-btn d-flex flex-row justify-content-center gap-5">
        <button
          type="submit"
          className="modal-save-btn mx-0"
          onClick={() => {
            setIsExperienced(true);
          }}
        >
          Back
        </button>
        <button type="submit" className="modal-save-btn mx-0">
          Save
        </button>
      </div>
    </form>
  );
};

export default AppendFormExperience;
