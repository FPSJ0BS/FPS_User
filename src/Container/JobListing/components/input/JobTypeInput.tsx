import React, { useState, useRef, useEffect } from "react";

export const JobTypeInput = ({ query, setQuery, State }) => {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredStates, setFilteredStates] = useState([]);
  const [initialStates, setInitialStates] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    console.log("jobTypee", State);
  }, [State]);

  useEffect(() => {
    if (State) {
      setInitialStates(State);
      setFilteredStates(State);
    }
  }, [State]);

  const openDropdown = () => {
    setShowDropdown(true);
    setInputValue("");
    setQuery({
      ...query,
      state: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setShowDropdown(true);
    setQuery({
      ...query,
      job_type: value,
    });

    const filtered = State?.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );

    console.log("filteredStates", filtered);
    setFilteredStates(filtered);
  };

  const handleOptionSelect = (option: string) => {
    setInputValue(option);
    setShowDropdown(false);
    setQuery({
      ...query,
      job_type: option,
    });
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
    <div className="relative w-full pb-[100px] sm:pb-0">
      <div className="flex items-center gap-3 mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-backpack text-black"
        >
          <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
          <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
          <path d="M8 10h8" />
          <path d="M8 18h8" />
        </svg>
        <label
          htmlFor="EmployerPostJobState"
          className="postJobInputTitle block font-medium text-black"
        >
          Job Type
        </label>
      </div>
      <div className="relative">
        <input
          placeholder="Search Job Type..."
          autoComplete="off"
          ref={inputRef}
          type="text"
          id="EmployerPostJobState"
          name="EmployerPostJobState"
          value={query?.job_type}
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
                  onClick={() => handleOptionSelect(option.value)}
                >
                  <p className="mb-0">{option.label}</p>
                </div>
              ))
            : initialStates?.map((option: any, index: any) => (
                <div
                  key={index}
                  className="cursor-pointer hover:bg-gray-100 py-1 px-3 flex justify-between w-full"
                  onClick={() => handleOptionSelect(option.value)}
                >
                  <p className="mb-0">{option.label}</p>
                </div>
              ))}
        </ul>
      )}
    </div>
  );
};
