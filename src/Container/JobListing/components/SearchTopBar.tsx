import { useState } from "react";

const SearchTopBar = ({ query, setQuery }) => {
  const [listSet, setListSet] = useState({
    listOne: false,
    listTwo: false,
    listThree: true,
  });

  const handleListSetChange = (listName) => {
    setListSet({
      listOne: listName === "listOne",
      listTwo: listName === "listTwo",
      listThree: listName === "listThree",
    });
  };
  return (
    <div className="flex w-full justify-center items-center bg-black py-3 rounded-lg px-4">
      <div className="relative flex items-center w-[60%]">
        <input
          onChange={(e) => {
            setQuery({
              ...query,
              job_title: e.target.value,
            });
          }}
          value={query?.job_title}
          type="text"
          className="w-full xl:h-[40px] 2xl:h-[45px] px-4 py-2 pr-12 border border-gray-300 bg-white  focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[30px]"
          placeholder="Search Jobs"
        />
        <button className=" font-semibold text-[16px]  border-0 shadow-lg absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#c94f56] text-white px-3 w-[30%] h-[100%] rounded-[30px] hover:bg-blue-600">
          Search Jobs
        </button>
      </div>

      <div className="  xl:flex justify-end gap-2 items-center hidden w-[40%]">
        <svg
          onClick={() => handleListSetChange("listOne")}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-align-justify text-white cursor-pointer"
        >
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>

        <svg
          onClick={() => handleListSetChange("listThree")}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-columns-3 text-white cursor-pointer"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 3v18" />
          <path d="M15 3v18" />
        </svg>
      </div>
    </div>
  );
};

export default SearchTopBar;
