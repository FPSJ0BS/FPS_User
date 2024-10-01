import { useState } from "react";
import { StarRating } from "./StarRating";
import { ImCross } from "react-icons/im";
import { postReviewForm } from "@/api/api";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { Toast } from "@Utils/Toast";

const Review = () => {
  const { userData } = useGlobalContext();
  const [error, setError] = useState(false);
  const userId = userData?.UID;
  const [formVal, setFormVal] = useState({
    feedback: 0,
    message: "",
    device_type: "Web",
    faculityID: userId,
  });
  const handleDescriptionChange = (event) => {
    setFormVal({
      ...formVal,
      message: event.target.value,
    });
  };

  const postReview = async (e: any) => {
    e.preventDefault();

    if (formVal?.feedback === 0) {
      setError(true);
    } else {
      try {
        const res = await postReviewForm(formVal);

        if (res?.status) {
          console.log(res);
          Toast("success", res?.data?.message);
        }
      } catch (error) {}
    }
  };

  return (
    <div className="fixed h-full w-full bg-gray-900 bg-opacity-80  paymentPopupCss flex justify-center items-center cursor-default">
      <div
        className={` bg-white min-h-[100px] w-[95%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%] gap-3 flex flex-col justify-center items-center  z-40 fixed p-4  rounded-[30px]  `}
      >
        <ImCross
          size={20}
          className=" absolute right-5 top-5 cursor-pointer "
        />

        <h2 className=" text-[25px] sm:text-[28px] font-bold">
          Please Rate Us?
        </h2>
        <p className=" mb-0 text-center px-[20px] font-medium leading-[1.2em]">
          Your review will help us improve our services to help you better!
        </p>

        <StarRating setFormVal={setFormVal} formVal={formVal} />
        {error && (
          <div>
            <p className=" text-red-500 text-[16px] font-bold">
              Please rate us using Stars!
            </p>
          </div>
        )}

        <form
          onSubmit={(e) => postReview(e)}
          className="flex flex-col w-full gap-3 justify-center items-center"
        >
          <textarea
            required
            id="description"
            className="w-full h-[100px] rounded-[20px] p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Write your review here..."
            value={formVal?.message}
            onChange={handleDescriptionChange}
          />
          <button
            type="submit"
            className=" w-full h-[40px] rounded-[10px] bg-[#235343] text-white font-semibold text-[15px]"
          >
            Submit
          </button>
        </form>
        <p className=" mb-0 text-[#a5a5a5] font-semibold cursor-pointer">
          No, Thanks!
        </p>
      </div>
    </div>
  );
};

export default Review;
