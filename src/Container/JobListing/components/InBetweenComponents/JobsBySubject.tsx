import { useState, useRef } from "react";
import useAllCityListNode from "@Hooks/Queries/useAllCityListNode";

const JobsBySubject = ({setCitySelect}) => {
  const { data: AllCityList } = useAllCityListNode({});
  const [search, setSearch] = useState("");
  const cityListRef = useRef<HTMLDivElement | null>(null);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCities = AllCityList?.data?.filter(({ city }) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  // Function to scroll left
  const scrollLeft = () => {
    if (cityListRef.current) {
      cityListRef.current.scrollBy({
        left: -300, // Adjust this value for how far it scrolls
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (cityListRef.current) {
      cityListRef.current.scrollBy({
        left: 300, // Adjust this value for how far it scrolls
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full bg-[#eef5fe] rounded-[20px] shadow-sm gap-4 flex flex-col items-start p-4 cursor-default">
      {/* Search Bar Section */}
      <div className="flex items-center justify-between w-full mb-2">
        <div className="flex items-center gap-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-blend"
          >
            <circle cx="9" cy="9" r="7" />
            <circle cx="15" cy="15" r="7" />
          </svg>
          <h2 className="font-bold text-[16px]">Filter Jobs By City</h2>
        </div>

        <input
          type="text"
          placeholder="Search City"
          value={search}
          onChange={handleSearchChange}
          className="h-[30px] w-[200px] rounded-[30px] px-4 bg-white"
        />
      </div>

      {/* Left and Right Buttons */}
      <div
        onClick={scrollLeft}
        className="absolute left-0 top-[45%] w-[40px] h-[40px] transform -translate-y-1/2 bg-[#85809b] text-white p-2 rounded-full flex items-center justify-center cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </div>

      <div
        onClick={scrollRight}
        className="absolute right-0 top-[45%] w-[40px] h-[40px] transform -translate-y-1/2 bg-[#85809b] text-white p-2 rounded-full flex items-center justify-center cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>

      {/* Scrollable City List */}
      <div
        ref={cityListRef}
        className="flex gap-3 cursor-pointer overflow-x-hidden w-full no-scrollbar"
      >
        {filteredCities?.slice(0, 20)?.map(({ id, city, jobs }) => {
          return (
            <div
            onClick={() => setCitySelect(city)}
              key={id}
              className="h-[70px] min-w-[150px] rounded-[10px] p-3 bg-white flex flex-col justify-center items-start"
            >
              <h3 className="font-semibold">{city}</h3>
              <p className="mb-0 text-[#3561ee] font-semibold">{jobs} Jobs</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobsBySubject;
