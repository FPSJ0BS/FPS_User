import React, { useState, useRef, useEffect } from "react";

export const ExperienceInput = ({ query, setQuery, experiences }) => {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredStates, setFilteredStates] = useState([]);
  const [initialStates, setInitialStates] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (experiences) {
      setInitialStates(experiences.slice(0, 50));
      // setFilteredStates(experiences);
    }
  }, [experiences]);

  const openDropdown = () => {
    setShowDropdown(true);
    setInputValue("");
    setQuery({
      ...query,
      min_experience: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setShowDropdown(true);
    setQuery({
      ...query,
      min_experience: value,
    });

    const filtered = experiences?.filter((option) =>
      option?.name?.toLowerCase().includes(value?.toLowerCase())
    );
    setFilteredStates(filtered);
  };

  const handleOptionSelect = (option: string, id: number) => {
    setInputValue(option);
    setShowDropdown(false);
    setQuery({
      ...query,
      min_experience: option,
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
    <div className="relative w-full">
      <div className="flex items-center gap-3 mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-square-chevron-up text-white"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="m8 14 4-4 4 4" />
        </svg>
        <label
          htmlFor="EmployerPostJobState"
          className="postJobInputTitle block font-medium text-white"
        >
          Experience
        </label>
      </div>
      <div className="relative">
        <input
          placeholder="Search Experience..."
          autoComplete="off"
          ref={inputRef}
          type="text"
          id="EmployerPostJobState"
          name="EmployerPostJobState"
          value={query?.min_experience}
          onChange={handleInputChange}
          onClick={openDropdown}
          className="h-[30px] mt-1 p-2 text-white placeholder-white w-full border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </div>
      {showDropdown && (
        <ul
          ref={dropdownRef}
          className="postjobHandleScrollbar max-h-[300px] overflow-y-auto absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg"
        >
          {inputValue
            ? filteredStates?.map((option: any, index: any) => (
                <li
                  key={index}
                  className="cursor-pointer hover:bg-gray-100 py-1 px-3"
                  onClick={() => handleOptionSelect(option.name, option.id)}
                >
                  {option.name}
                </li>
              ))
            : initialStates?.map((option: any, index: any) => (
                <li
                  key={index}
                  className="cursor-pointer hover:bg-gray-100 py-1 px-3"
                  onClick={() => handleOptionSelect(option.name, option.id)}
                >
                  {option.name}
                </li>
              ))}
        </ul>
      )}
    </div>
  );
};
