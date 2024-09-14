import { setSubjectText } from "@/Redux/appliedJobSlice";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";


export const SubjectsInput = ({ query, setQuery, State }) => {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredStates, setFilteredStates] = useState([]);
  const [initialStates, setInitialStates] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
const dispatch = useDispatch()

  useEffect(() => {
    console.log("subjects data", State?.data);
  }, [State]);

  useEffect(() => {
    if (State) {
      setInitialStates(State?.data);
      setFilteredStates(State?.data);
    }
  }, [State]);

  const openDropdown = () => {
    setShowDropdown(true);
    setInputValue("");
    setQuery({
      ...query,
      function: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setShowDropdown(true);
    setQuery({
      ...query,
      function: value,
    });

    const filtered = State?.data?.filter((option) =>
      option.function.toLowerCase().includes(value.toLowerCase())
    );

    console.log("filteredStates", filtered);
    setFilteredStates(filtered);
  };

  const handleOptionSelect = (option: string) => {
    setInputValue(option);
    setShowDropdown(false);
    setQuery({
      ...query,
      function: option,
    });
    dispatch(setSubjectText(option))
    
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-3 mb-1">
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
          className="lucide lucide-graduation-cap -mr-1"
        >
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>
        <label
          htmlFor="EmployerPostJobState"
          className="postJobInputTitle block font-medium text-black"
        >
          Subjects
        </label>
      </div>
      <div className="relative">
        <input
          placeholder="Search Subjects..."
          autoComplete="off"
          ref={inputRef}
          type="text"
          id="EmployerPostJobState"
          name="EmployerPostJobState"
          value={query?.function}
          onChange={handleInputChange}
          onClick={openDropdown}
          className="h-[30px] mt-1 p-2 text-black placeholder-black w-full border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </div>
      {showDropdown && (
        <ul
          ref={dropdownRef}
          className="postjobHandleScrollbar max-h-[300px] overflow-y-auto absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg"
        >
          {inputValue
            ? filteredStates?.map((option: any, index: any) => (
                <div
                  key={index}
                  className="cursor-pointer hover:bg-gray-100 py-1 px-3 flex justify-between w-full"
                  onClick={() => handleOptionSelect(option.function)}
                >
                  <p className="mb-0">{option.function}</p>
                </div>
              ))
            : initialStates?.map((option: any, index: any) => (
                <div
                  key={index}
                  className="cursor-pointer hover:bg-gray-100 py-1 px-3 flex justify-between w-full"
                  onClick={() => handleOptionSelect(option.function)}
                >
                  <p className="mb-0">{option.function}</p>
                </div>
              ))}
        </ul>
      )}
    </div>
  );
};
