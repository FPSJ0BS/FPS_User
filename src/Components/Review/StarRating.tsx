import { useState } from "react";
import { FaStar } from "react-icons/fa"; 

export const StarRating = ({rating, setRating}) => {
  const [hoverValue, setHoverValue] = useState(undefined);



  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setRating(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="flex flex-col justify-center items-center">
     


      <div className="flex">
        {stars.map((_, index) => {
          const starIndex = index + 1;
          return (
            <FaStar
              key={index}
              size={40}
              className="cursor-pointer"
              color={(hoverValue || rating) >= starIndex ? "#ffc107" : "#e4e5e9"}
              onClick={() => handleClick(starIndex)}
              onMouseOver={() => handleMouseOver(starIndex)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>

      <p className="mt-4 text-center font-semibold">
        {rating > 0 ? `You rated us ${rating} star${rating === 1 ? "" : "s"}` : "No ratings given"}
      </p>
    </div>
  );
};