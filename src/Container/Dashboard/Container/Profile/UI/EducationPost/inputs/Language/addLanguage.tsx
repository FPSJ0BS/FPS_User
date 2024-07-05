import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSkill } from '@/Redux/Dashboard/MyProfile/Education/EducationSlice';

function AddLanguage() {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    educationDataArray,
    editEducationData,
    skillsDataArray,
    skillsDataAddArray,
  } = useSelector((state: any) => state.myProfileEducationSlice);

  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCourseChange = async (skill) => {
    const foundItem = skillsDataAddArray?.find(item => item.skillId === skill);
    const skillId = foundItem?.skillId;

    const newSkill = { skillId };
    dispatch(addSkill(newSkill));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFocus = () => {
    setIsDropdownOpen(true);
    setSearchTerm("");  // Reset search term to show all items
  };

  const handleOptionClick = (skill) => {
    handleCourseChange(skill);
    setIsDropdownOpen(false);
  };

  const filteredSkills = skillsDataAddArray.filter(skill =>
    skill.skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if the clicked element is outside the input box and not within the dropdown
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        !e.target.closest(".postjobHandleScrollbar")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.body.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex w-full">
      <div className="w-[100%] pr-2 relative">
        <label className="block mb-2 text-sm font-semibold text-black">
          Select a Language
        </label>
        <div className="relative">
          <input
          ref={inputRef}
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={handleFocus}
            className="w-full mb-2 p-2 border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
          {isDropdownOpen && (
            <div className="postjobHandleScrollbar absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto handleScrollbarMain">
              {filteredSkills.filter(item => item.active === 0).map(({ skill,  skillId }) => (
                <div
                  key={skillId}
                  className="p-2 cursor-pointer hover:bg-gray-100 capitalize"
                  onClick={() => handleOptionClick(skillId)}
                >
                  {skill}
                </div>
              ))}
              {filteredSkills.length === 0 && (
                <div className="p-2 text-gray-500">No skills found</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddLanguage;
