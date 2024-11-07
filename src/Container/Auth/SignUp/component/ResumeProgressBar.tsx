
import React, { useEffect, useState } from 'react';

const ResumeProgressBar = ({progress, setProgress}) => {

  const [uploadText, setUploadText] = useState('Uploading resume...');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setUploadText('Resume uploaded successfully');
          return 100;
        }
      });
    }, 50); // 5000ms / 100 steps = 50ms per step

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="w-full pb-2 pt-2">
      <div className="text-left text-gray-600 text-sm mb-1">
        {uploadText}
      </div>
      <div className="w-full h-4 bg-gray-200 rounded">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-blue-500 rounded transition-all duration-50 ease-linear flex justify-center items-center"
        >
            <span className='text-white'>{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeProgressBar;
