import React, { useState, useRef, useEffect } from "react";

export const CityInput = ({ query, setQuery, cityStateList }) => {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredStates, setFilteredStates] = useState([]);
  const [initialStates, setInitialStates] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (cityStateList?.data) {
      setInitialStates(cityStateList.data.slice(0, 50));
      setFilteredStates(cityStateList.data);
    }
  }, [cityStateList]);

  useEffect(() => {
    // Update inputValue when query.city changes
    setInputValue(query.city || "");
  }, [query.city]);

  const openDropdown = () => {
    setShowDropdown(true);
    setInputValue("");
    setQuery((query) => ({
      ...query,
      city: "",
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setShowDropdown(true);
    setQuery((query) => ({
      ...query,
      city: value,
    }));

    const filtered = cityStateList?.data.filter((option) =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredStates(filtered);
  };

  const handleOptionSelect = (option: string, id: number) => {
    setInputValue(option);
    setShowDropdown(false);
    setQuery((query) => ({
      ...query,
      city: option,
    }));
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
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-castle text-white"
        >
          <path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" />
          <path d="M18 11V4H6v7" />
          <path d="M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4" />
          <path d="M22 11V9" />
          <path d="M2 11V9" />
          <path d="M6 4V2" />
          <path d="M18 4V2" />
          <path d="M10 4V2" />
          <path d="M14 4V2" />
        </svg>
        <label
          htmlFor="EmployerPostJobCity"
          className="postJobInputTitle block font-medium text-white"
        >
          City
        </label>
      </div>
      <div className="relative">
        <input
          placeholder="Choose City..."
          autoComplete="off"
          ref={inputRef}
          type="text"
          id="EmployerPostJobCity"
          name="EmployerPostJobCity"
          value={inputValue}
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
