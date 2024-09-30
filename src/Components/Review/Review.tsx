import { useState } from "react";
import { StarRating } from "./StarRating";
import { ImCross } from "react-icons/im";

const Review = () => {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
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

        <h2 className=" text-[25px] sm:text-[28px] font-bold">Please Rate Us?</h2>
        <p className=" mb-0 text-center px-[20px] font-medium leading-[1.2em]">
          Your review will help us improve our services to help you better!
        </p>

        <StarRating rating={rating} setRating={setRating} />

        <form className="flex flex-col w-full gap-3 justify-center items-center">
          <textarea
          required
            id="description"
            className="w-full h-[100px] rounded-[20px] p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Write your review here..."
            value={description}
            onChange={handleDescriptionChange}
          />
          <button type="submit" className=" w-full h-[40px] rounded-[10px] bg-[#235343] text-white font-semibold text-[15px]">Submit</button>
        </form>
        <p className=" mb-0 text-[#a5a5a5] font-semibold cursor-pointer">No, Thanks!</p>
      </div>
    </div>
  );
};

export default Review;
