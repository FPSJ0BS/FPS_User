import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editCertificateDataJobValues } from '@/Redux/Dashboard/MyProfile/Education/EducationSlice';
import { TextInputValidEmployer } from '@Container/Dashboard/Container/functions/functions';

export const CertificateDescription = () => {
  const { editCertificateData } = useSelector((state: any) => state.myProfileEducationSlice);
  const dispatch = useDispatch();
 

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;

  
  
      dispatch(
        editCertificateDataJobValues({
          certificateDescription: inputValue || '',
        })
      );
    
  };

  return (
    <div className="w-[100%]  flex flex-col gap-2 col-span-2">
      <label
        htmlFor="certificateDescriptionEdit"
        className="postJobInputTitle font-semibold text-black"
      >
        Certificate Description *
      </label>
      <textarea
      
        autoComplete="off"
        placeholder="Enter Certificate Description..."
        required
        onChange={handleChange}
        id="certificateDescriptionEdit"
        name="certificateDescription"
        className="p-2 sm:w-[100%] border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        value={editCertificateData.certificateDescription}
      />
    </div>
  );
};
