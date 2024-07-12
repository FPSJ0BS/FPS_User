import {
  addResumeDataArray,
  toggleResumeDataLoader,
} from "@/Redux/Resume Builder/resumeBuilderSlice";
import { getResumeDetail, uploadProfileImage } from "@/api/api";
import ResumeLoader from "@Container/Resume Builder/ui/resumeLoader";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function LeftSection() {
  const dispatch = useDispatch();
  const { resumeDataFetch } = useSelector(
    (state: any) => state.ResumeBuilderSlice
  );
  const [resumeData, setResumeData] = useState<any>(null);
  const [formData, setFormData] = useState<any>(null);
  const [errors, setErrors] = useState({});

  const { userData } = useGlobalContext();
  const userId = userData?.UID;

  useEffect(() => {
    console.log("formData", formData);
    dispatch(addResumeDataArray(formData));
  }, [formData]);

  const { templateNumber, loadingResumeData } = useSelector(
    (state: any) => state.ResumeBuilderSlice
  );

  useLayoutEffect(() => {
    const fetch = async () => {
      try {
        const res = await getResumeDetail(templateNumber, userId);
        if (res?.data?.status) {
          const data = await res?.data?.data;
          await setResumeData(data);
          await setFormData({
            name: data?.NAME,
            address: data?.ADDRESS,
            Subject: data?.FUNCTION,
            city: data?.CITY,
            state: data?.STATE,
            phoneNumber: data?.PHONE_NUMBER,
            email: data?.EMAIL,
            bio: data?.BIO,
            cityPreferences: data?.CITY_PREFERENCES,
            socialLink: data?.SOCIAL_LINK || [],
            skill: data?.SKILL,
            education: data?.EDUCATION,
            experience: data?.EXPERIENCE,
            language: data?.LANGUAGE,
            profileImage: data?.IMAGE,
            certificate:
              data?.CERTIFICATE?.map((cert) => ({
                title: cert.title,
                url: cert.certificate_file,
              })) || [],
          });
          await dispatch(toggleResumeDataLoader(true));
          console.log("testtest", data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (name === "phoneNumber") {
      if (!/^[6-9]\d{0,9}$/.test(value) || value.length > 10) {
        newErrors.phoneNumber =
          "Phone number must start with 6, 7, 8, or 9 and have 10 digits.";
      } else {
        delete newErrors.phoneNumber;
      }
    } else if (
      ![
        "address",
        "experience",
        "phoneNumber",
        "socialLink",
        "cityPreferences",
        "language",
        "certificate",
        "skill",
      ].includes(name) &&
      /\d/.test(value)
    ) {
      return;
    }

    setFormData({ ...formData, [name]: value });
    setErrors(newErrors);
  };

  const handleKeyPress = (e, field) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      e.preventDefault();
      if (field === "certificate") {
        setFormData({
          ...formData,
          certificate: [
            ...formData.certificate,
            { title: e.target.value.trim(), url: "" },
          ],
        });
      } else {
        setFormData({
          ...formData,
          [field]: [...formData[field], e.target.value.trim()],
        });
      }
      e.target.value = "";
    }
  };

  const handleDelete = (field, index) => {
    const updatedArray = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updatedArray });
  };

  const handleCertificateChange = (e, index, type) => {
    const { value } = e.target;
    const updatedCertificates = formData.certificate.map((cert, i) =>
      i === index ? { ...cert, [type]: value } : cert
    );
    setFormData({ ...formData, certificate: updatedCertificates });
  };

  const handleSocialMediaChange = (e, index, type) => {
    const { value } = e.target;
    const updatedSocialLinks = formData.socialLink.map((link, i) =>
      i === index ? { ...link, [type]: value } : link
    );
    setFormData({ ...formData, socialLink: updatedSocialLinks });
  };

  const handleExperienceChange = (e, index, type) => {
    const { value } = e.target;
    const updatedExperience = formData.experience.map((exp, i) =>
      i === index ? { ...exp, [type]: value } : exp
    );
    setFormData({ ...formData, experience: updatedExperience });
  };

  const handleEducationChange = (e, index, type) => {
    const { value } = e.target;
    const updatedEducation = formData.education.map((edu, i) =>
      i === index ? { ...edu, [type]: value } : edu
    );
    setFormData({ ...formData, education: updatedEducation });
  };

  const addSocialLink = () => {
    setFormData({
      ...formData,
      socialLink: [...formData.socialLink, { name: "", url: "" }],
    });
  };

  const addCertificate = () => {
    setFormData({
      ...formData,
      certificate: [...formData.certificate, { title: "", url: "" }],
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          organization: "",
          designation: "",
          responsibilities: "",
          start_date: "",
          end_date: "",
        },
      ],
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          institute_name: "",
          start_date: "",
          end_date: "",
          course_txt: "",
          result: "",
          specialization: "",
          education_type: "",
        },
      ],
    });
  };

  const generateUniqueId = (field) =>
    `${field}-${Math.random().toString(36).substr(2, 9)}`;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Check if the file is JPEG or PNG
      if (
        selectedFile.type === "image/jpeg" ||
        selectedFile.type === "image/png"
      ) {
        // Update the profile image preview
        setFormData({
          ...formData,
          profileImage: URL.createObjectURL(selectedFile),
        });
        uploadProfilePicture(selectedFile);
      } else {
        alert("Please select a JPEG or PNG file.");
      }
    }
  };

  // Function to trigger the file input
  const triggerFileInput = () => {
    document.getElementById("hiddenFileInput").click();
  };

  // Function to hit the API with the selected file
  const uploadProfilePicture = async (file) => {
    const formData = new FormData();
    formData.append("profilePic", file);
    formData.append("UID", userId);

    try {
      const res = await uploadProfileImage(formData);
      if (res?.data?.status) {
        console.log(res);
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-[40%] mt-[20px] h-[84vh] bg-[#fff] shadow-lg rounded-l-3xl p-[30px] overflow-y-auto handleScrollbarResume">
        {!loadingResumeData ? (
          <ResumeLoader />
        ) : (
          <div className="flex flex-col gap-3">
            <h1 className="text-[27px] font-bold underline text-black">
              Let’s start with your Personal Details
            </h1>

            <div className="w-full justify-between items-center flex mt-[50px]">
              <button
                className="bg-blue-400 text-white px-[20px] py-[10px] rounded-lg"
                onClick={triggerFileInput}
              >
                Upload Image
              </button>
              <input
                type="file"
                id="hiddenFileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept="image/jpeg,image/png"
              />
              <img
                alt="profile"
                className="w-[30%]"
                src={formData?.profileImage}
              />
            </div>

            <div className=" grid grid-cols-3 gap-3 mt-10">
              {[
                {
                  label: "Name",
                  name: "name",
                  placeholder: "Enter Name",
                  type: "text",
                },
                {
                  label: "Address",
                  name: "address",
                  placeholder: "Enter Address",
                  type: "text",
                },
                {
                  label: "Subject",
                  name: "Subject",
                  placeholder: "Enter Subject",
                  type: "text",
                },
                {
                  label: "City",
                  name: "city",
                  placeholder: "Enter City",
                  type: "text",
                },
                {
                  label: "State",
                  name: "state",
                  placeholder: "Enter State",
                  type: "text",
                },
                {
                  label: "Phone Number",
                  name: "phoneNumber",
                  placeholder: "Enter Phone Number",
                  type: "tel",
                },
                {
                  label: "Email",
                  name: "email",
                  placeholder: "Enter Email",
                  type: "email",
                },
                {
                  label: "About",
                  name: "bio",
                  placeholder: "Enter your biography",
                  type: "textarea",
                },
              ].map((field, index) => (
                <div
                  key={field.name}
                  className={`mb-4 ${index === 7 ? "col-span-3" : ""}`}
                >
                  <label
                    className="font-semibold text-black mb-2"
                    htmlFor={generateUniqueId(field.name)}
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      className={`p-2 w-full border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50 ${
                        errors[field.name] ? "border-red-500 font-bold" : ""
                      }`}
                      id={generateUniqueId(field.name)}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData?.[field.name] || ""}
                      onChange={handleChange}
                      rows={3}
                    />
                  ) : (
                    <input
                      className={`p-2 sm:w-[100%] border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50 ${
                        errors[field.name] ? "border-red-500 font-bold" : ""
                      }`}
                      id={generateUniqueId(field.name)}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData?.[field.name] || ""}
                      onChange={handleChange}
                    />
                  )}
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              {[
                {
                  label: "City Preferences (Press Enter to add)",
                  name: "cityPreferences",
                  placeholder: "Enter City Preferences",
                  type: "text",
                },
                {
                  label: "Language (Press Enter to add)",
                  name: "language",
                  placeholder: "Enter Language",
                  type: "text",
                },
                {
                  label: "Skill (Press Enter to add)",
                  name: "skill",
                  placeholder: "Enter Skill",
                  type: "text",
                },
              ]?.map((field) => (
                <div key={field.name} className=" mb-4 col-span-3">
                  <label
                    className="font-semibold text-black mb-2"
                    htmlFor={generateUniqueId(field.name)}
                  >
                    {field.label}
                  </label>
                  <input
                    className="p-2 w-full border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                    id={generateUniqueId(field.name)}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    onKeyDown={(e) => handleKeyPress(e, field.name)}
                  />
                  <div className="mt-2 flex gap-3 flex-wrap">
                    {formData?.[field.name]?.map((item, index) => (
                      <div
                        key={`${item}-${index}`}
                        className=" bg-[#83c5be] font-semibold flex items-center justify-between  px-4 py-2 border border-gray-300 mb-2 rounded-full gap-2 capitalize"
                      >
                        <span>{item}</span>

                        <svg
                          onClick={() => handleDelete(field.name, index)}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-x cursor-pointer"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <hr className=" col-span-3" />

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<- Experience->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <div className="mb-4 col-span-3 ">
                <h1 className="text-[35px] font-bold underline text-black mb-3 mt-2">
                  Experience Details
                </h1>
                <div className="flex flex-col gap-2">
                  {formData?.experience?.map((exp, index) => (
                    <div
                      key={`experience-${index}`}
                      className="grid grid-cols-2 gap-4 bg-white p-4 rounded-md border border-gray-300"
                    >
                      <div className=" flex flex-col gap-2">
                        <label
                          htmlFor="organization"
                          className="font-semibold text-black"
                        >
                          Organization
                        </label>
                        <input
                          id="organization"
                          className="p-2 border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                          name="organization"
                          placeholder="Organization"
                          value={exp.organization}
                          onChange={(e) =>
                            handleExperienceChange(e, index, "organization")
                          }
                        />
                      </div>
                      <div className=" flex flex-col gap-2">
                        <label
                          htmlFor="designation"
                          className="font-semibold text-black"
                        >
                          Designation
                        </label>
                        <input
                          id="designation"
                          className="p-2 border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                          name="designation"
                          placeholder="Designation"
                          value={exp.designation}
                          onChange={(e) =>
                            handleExperienceChange(e, index, "designation")
                          }
                        />
                      </div>

                      <div className=" flex flex-col gap-2">
                        <label
                          htmlFor="start_date"
                          className="font-semibold text-black"
                        >
                          Start Date
                        </label>
                        <input
                          id="start_date"
                          className="p-2 border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                          name="start_date"
                          placeholder="Start Date"
                          value={exp.start_date}
                          onChange={(e) =>
                            handleExperienceChange(e, index, "start_date")
                          }
                          type="date"
                        />
                      </div>

                      <div className=" flex flex-col gap-2">
                        <label
                          htmlFor="end_date"
                          className="font-semibold text-black"
                        >
                          End Date
                        </label>
                        <input
                          id="end_date"
                          className="p-2 border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                          name="end_date"
                          placeholder="End Date"
                          value={exp.end_date}
                          onChange={(e) =>
                            handleExperienceChange(e, index, "end_date")
                          }
                          type="date"
                        />
                      </div>

                      <div className=" flex flex-col gap-2 col-span-2">
                        <label
                          htmlFor="end_date"
                          className="font-semibold text-black"
                        >
                          Responsibilities
                        </label>
                        <textarea
                          className="p-2 border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                          name="responsibilities"
                          placeholder="Responsibilities"
                          value={exp.responsibilities}
                          onChange={(e) =>
                            handleExperienceChange(e, index, "responsibilities")
                          }
                        />
                      </div>

                      <button
                        className="text-white border-none py-2 rounded-lg  bg-red-600 w-[30%]"
                        onClick={() => handleDelete("experience", index)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                  <button
                    className="bg-green-500 border-none w-[30%] py-2 rounded-lg text-white font-semibold "
                    onClick={addExperience}
                  >
                    Add Experience
                  </button>
                </div>
              </div>

              <hr className=" col-span-3 h-[0.5px]" />

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<- Education ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <div className="mb-4 col-span-3">
                <h1 className="text-[35px] font-bold underline text-black mb-4 mt-2">
                  Education Details
                </h1>
                <div className="flex flex-col gap-2">
                  {formData?.education?.map((edu, index) => (
                    <div
                      key={`education-${index}`}
                      className="grid grid-cols-2 gap-4 bg-white p-4 rounded-md border border-gray-300"
                    >
                      <div className=" flex flex-col gap-2">
                        <label
                          htmlFor="Institute_Name"
                          className="font-semibold text-black"
                        >
                          Institute/University Name
                        </label>
                        <input
                          id="Institute_Name"
                          className="p-2 border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                          name="institute_name"
                          placeholder="Institute/University Name"
                          value={edu.institute_name}
                          onChange={(e) =>
                            handleEducationChange(e, index, "institute_name")
                          }
                        />
                      </div>

                      <div className=" flex flex-col gap-2">
                        <label
                          htmlFor="Course2"
                          className="font-semibold text-black"
                        >
                          Course
                        </label>
                        <input
                          id="Course2"
                          className="p-2 border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                          name="course_txt"
                          placeholder="Course"
                          value={edu.course_txt}
                          onChange={(e) =>
                            handleEducationChange(e, index, "course_txt")
                          }
                        />
                      </div>
                      <div className=" flex flex-col gap-2">
                        <label
                          htmlFor="start_date2"
                          className="font-semibold text-black"
                        >
                          Start Date
                        </label>
                        <input
                          id="start_date2"
                          className="p-2 border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                          name="start_date"
                          placeholder="Start Date ..."
                          value={edu.start_date}
                          onChange={(e) =>
                            handleEducationChange(e, index, "start_date")
                          }
                          type="date"
                        />
                      </div>

                      <div className=" flex flex-col gap-2">
                        <label
                          htmlFor="end_date2"
                          className="font-semibold text-black"
                        >
                          End Date
                        </label>
                        <input
                          id="end_date2"
                          className="p-2 border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                          name="end_date"
                          placeholder="End Date"
                          value={edu.end_date}
                          onChange={(e) =>
                            handleEducationChange(e, index, "end_date")
                          }
                          type="date"
                        />
                      </div>

                      <div className=" flex flex-col gap-2">
                        <label
                          htmlFor="result"
                          className="font-semibold text-black"
                        >
                          Result
                        </label>
                        <input
                          id="result"
                          className="p-2 border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                          name="result"
                          placeholder="Result"
                          value={edu.result}
                          onChange={(e) =>
                            handleEducationChange(e, index, "result")
                          }
                        />
                      </div>

                      <div className=" flex flex-col gap-2">
                        <label
                          htmlFor="specialization"
                          className="font-semibold text-black"
                        >
                          Specialization
                        </label>
                        <input
                          id="specialization"
                          className="p-2 border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                          name="specialization"
                          placeholder="Specialization"
                          value={edu.specialization}
                          onChange={(e) =>
                            handleEducationChange(e, index, "specialization")
                          }
                        />
                      </div>

                      <div className=" flex flex-col gap-2">
                        <label
                          htmlFor="education_type"
                          className="font-semibold text-black"
                        >
                          Education Type
                        </label>
                        <input
                          className="p-2 border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                          name="education_type"
                          placeholder="Full Time / Part Time"
                          value={edu.education_type}
                          onChange={(e) =>
                            handleEducationChange(e, index, "education_type")
                          }
                        />
                      </div>

                      <button
                        className="text-white border-none py-2 rounded-lg  bg-red-600 w-[15%] col-span-2"
                        onClick={() => handleDelete("education", index)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                  <button
                    className="bg-green-500 border-none w-[30%] py-2 rounded-lg text-white font-semibold "
                    onClick={addEducation}
                  >
                    Add Education
                  </button>
                </div>
              </div>

              <hr className=" col-span-3 h-[0.5px]" />

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<- Certificates->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <div className="mb-4 w-full col-span-3">
                <h1 className="text-[35px] font-bold underline text-black mb-4 mt-2">
                  Certificate Details
                </h1>
                {formData?.certificate?.map((cert, index) => (
                  <div key={index} className="grid grid-cols-2 gap-2 mb-4">
                    <input
                      className="p-2 w-[100%] border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50 mb-2"
                      type="text"
                      placeholder="Certificate Title"
                      value={cert.title}
                      onChange={(e) =>
                        handleCertificateChange(e, index, "title")
                      }
                    />
                    <input
                      className="p-2 w-[100%] border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                      type="text"
                      placeholder="Certificate URL"
                      value={cert.url}
                      onChange={(e) => handleCertificateChange(e, index, "url")}
                    />
                    <button
                      type="button"
                      className="text-white border-none py-2 rounded-lg  bg-red-600 w-[15%] col-span-2"
                      onClick={() => handleDelete("certificate", index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-green-500 border-none w-[30%] py-2 rounded-lg text-white font-semibold "
                  onClick={addCertificate}
                >
                  Add Certificate
                </button>
              </div>

              <hr className=" col-span-3 h-[0.5px]" />

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<- Social Links->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <div className="mb-4 col-span-3">
                <h1 className="text-[35px] font-bold underline text-black mb-4 mt-2">
                  Social Media Details
                </h1>
                <div className="flex flex-col gap-2">
                  {formData?.socialLink?.map((link, index) => (
                    <div
                      key={`socialLink-${index}`}
                      className="grid grid-cols-2 gap-2 bg-white p-4 rounded-md border border-gray-300"
                    >
                      <div className=" flex flex-col gap-2">
                        <label
                          htmlFor="PlatformName"
                          className="font-semibold text-black"
                        >
                          Platform Name
                        </label>
                        <input
                          id="PlatformName"
                          className="p-2 border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                          name="name"
                          placeholder="Platform Name ..."
                          value={link.name}
                          onChange={(e) =>
                            handleSocialMediaChange(e, index, "name")
                          }
                        />
                      </div>

                      <div className=" flex flex-col gap-2">
                        <label
                          htmlFor="url"
                          className="font-semibold text-black"
                        >
                          URL
                        </label>
                        <input
                          id="url"
                          className="p-2 border-[1px] focus:border-[2px] bg-white border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-green-400 focus:ring focus:ring-green-400 focus:ring-opacity-50"
                          name="url"
                          placeholder="URL"
                          value={link.url}
                          onChange={(e) =>
                            handleSocialMediaChange(e, index, "url")
                          }
                        />
                      </div>

                      <button
                        className="text-white border-none py-2 rounded-lg  bg-red-600 w-[30%]"
                        onClick={() => handleDelete("socialLink", index)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                  <button
                    className="bg-green-500 border-none w-[30%] py-2 rounded-lg text-white font-semibold "
                    onClick={addSocialLink}
                  >
                    Add Social Link
                  </button>
                </div>
              </div>

              {/* <div className="col-span-3">
            <button
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
              //   onClick={submitForm}
            >
              Preview Resume
            </button>
          </div> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LeftSection;
