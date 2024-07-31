import React, { useState, useRef, useEffect } from "react";

export const CityInput = ({ query, setQuery, cityStateList }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);


 


  const openDropdown = () => {
    setShowDropdown(true);

    setQuery({
      ...query,
      city: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setShowDropdown(true);

    setQuery({
      ...query,
      city: value,
    });
  };

  const handleOptionSelect = (city: string) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      city,
    }));
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

  return (
    <div className=" relative  sm:w-[100%] w-[250px]">
      <label
        htmlFor="EmployerPostJobState"
        className="postJobInputTitle pb-1 block  font-medium text-white"
      >
        City *
      </label>
      <div className="relative">
        <input
          placeholder="Choose City..."
          autoComplete="off"
          ref={inputRef}
          type="text"
          id="EmployerPostJobState"
          name="EmployerPostJobState"
          value={query?.city}
          onChange={handleInputChange}
          onClick={openDropdown}
          className=" placeholder-white text-white mt-1 p-2  w-[100%] border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </div>
      {showDropdown && (
        <ul className=" postjobHandleScrollbar max-h-[300px] overflow-y-auto absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {query?.city
            ? cityStateList?.data
                ?.filter((option) =>
                  option.name.toLowerCase().includes(query?.city.toLowerCase())
                )
                .map((option, index: number) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:bg-gray-100 py-1 px-3"
                    onClick={() => handleOptionSelect(option.name)}
                  >
                    {option.name}
                  </li>
                ))
            : cityStateList?.data?.map((option, index: number) => (
                <li
                  key={index}
                  className="cursor-pointer hover:bg-gray-100 py-1 px-3"
                  onClick={() => handleOptionSelect(option.name)}
                >
                  {option.name}
                </li>
              ))}
        </ul>
      )}
    </div>
  );
};
