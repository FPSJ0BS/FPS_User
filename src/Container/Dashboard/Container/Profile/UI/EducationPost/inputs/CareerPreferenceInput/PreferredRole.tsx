import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

export const PreferredRole = ({ roleArray, setRoleArray }) => {
  const { careerPreferenceDataArray } = useSelector(
    (state: any) => state.myProfileEducationSlice
  );

  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const openDropdown = () => {
    setShowDropdown(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setShowDropdown(true);
  };

  const handleOptionSelect = (option: string, id: number) => {
    if (!roleArray.some((city) => city.id === id)) {
      setRoleArray([...roleArray, { name: option, id }]);
    }
    setInputValue("");
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        !e.target.closest(".postjobHandleScrollbar")
      ) {
        setShowDropdown(false);
      }
    };

    document.body.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const clearInput = () => {
    setInputValue("");
    setShowDropdown(true);
  };

  const handleRemoveCity = (id: number) => {
    setRoleArray(roleArray.filter((city) => city.id !== id));
  };

  const filteredCities = careerPreferenceDataArray
    .filter((item) => item.type === "job_role")
    .filter((option) =>
      option?.value?.toLowerCase().includes(inputValue.toLowerCase())
    );

  return (
    <div className="relative w-[100%]  col-span-2">
      <label
        htmlFor="EmployerPostJobState"
        className="postJobInputTitle pb-1 block font-medium text-gray-700"
      >
        Preferred Role *
      </label>
      <div className="relative">
        <input
          placeholder="Preferred Role..."
          autoComplete="off"
          ref={inputRef}
          type="text"
          id="EmployerPostJobState"
          name="EmployerPostJobState"
          value={inputValue}
          onChange={handleInputChange}
          onClick={openDropdown}
          className="mt-1 p-2 w-[100%] border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
        {inputValue ? (
          <button
            className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
            onClick={clearInput}
            aria-label="Clear input"
            type="button"
          >
            <svg
              className="w-4 h-4 text-gray-500 hover:text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={openDropdown}
            className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
            aria-label="Clear input"
            type="button"
          >
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
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        )}
      </div>
      {showDropdown && (
        <ul className="postjobHandleScrollbar max-h-[300px] overflow-y-auto absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg pl-2">
          {filteredCities.slice(0, 50).map((option, index: number) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-100 py-1 "
              onClick={() => handleOptionSelect(option.value, option.id)}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-2 mt-2">
        {roleArray.map(({ name, id }) => (
          <div
            key={id}
            className="flex gap-2 items-center  p-2 bg-gray-300 rounded-full px-3"
          >
            <span>{name}</span>

            <svg
              onClick={() => handleRemoveCity(id)}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x text-red-500 cursor-pointer"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
