import { editCertificateDataJobValues } from '@/Redux/Dashboard/MyProfile/Education/EducationSlice';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

const ResumeUpload = ({file, setFile}) => {
    const dispatch = useDispatch()

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);

    

    
  };

  console.log(file);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="resume-upload">
      <div>
      <label
        htmlFor="resume"
        className=" postJobInputTitle font-semibold text-black pb-1 "
      >
        Select Certificate
      </label>
        <input
          type="file"
          id="resume"
          accept=".pdf,.doc,.docx,.jpg,.png,.jpeg"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className="h-[50px] mt-1 block w-full p-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
        >
          {file ? file.name : 'Choose File'}
        </button>
      </div>
    </div>
  );
};

export default ResumeUpload;
