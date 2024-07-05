import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editCertificateDataJobValues } from '@/Redux/Dashboard/MyProfile/Education/EducationSlice';
import { TextInputValidEmployer } from '@Container/Dashboard/Container/functions/functions';

export const CertificateDescriptionEdit = () => {
  const { editCertificateData } = useSelector((state: any) => state.myProfileEducationSlice);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;

  
  
      dispatch(
        editCertificateDataJobValues({
          certificateDescriptionEdit: inputValue || '',
        })
      );
    
  };

  return (
    <div className="sm:w-[100%] w-[250px] flex flex-col gap-2 col-span-2">
      <label
        htmlFor="certificateDescriptionEditEdit"
        className="postJobInputTitle font-semibold text-black"
      >
        Certificate Description *
      </label>
      <textarea
      
        autoComplete="off"
        placeholder="Enter Certificate Description..."
        required
        onChange={handleChange}
        id="certificateDescriptionEditEdit"
        name="certificateDescriptionEdit"
        className="p-2 sm:w-[100%] border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        value={editCertificateData.certificateDescriptionEdit}
      />
    </div>
  );
};