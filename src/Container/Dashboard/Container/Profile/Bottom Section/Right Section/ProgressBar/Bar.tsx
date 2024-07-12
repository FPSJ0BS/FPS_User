// src/ProgressBar.js
import React from 'react';
import { useSelector } from 'react-redux';

const ProgressBarHori = () => {
  const percentage = useSelector((state:any) => state.myProfileEducationSlice.percentageDataToAddArray?.percentage || 0);

  const width = 500;
  const height = 20;
  const stroke = 0;
  const normalizedWidth = width - stroke * 2;
  const progressWidth = (percentage / 100) * normalizedWidth;

  return (
    <div className="flex justify-center items-center">
      <svg width={width} height={height} >
        <rect
          width={width}
          height={height}
          fill="#fff"
          rx={height / 2}
          ry={height / 2}
        />
        <rect
          width={progressWidth}
          height={height - stroke}
          fill="#70c351"
          rx={(height - stroke) / 2}
          ry={(height - stroke) / 2}
          x={stroke / 2}
          y={stroke / 2}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="13px"
          fontWeight="bold"
          fill="black"
        >
          {`${percentage}%`}
        </text>
      </svg>
    </div>
  );
};

export default ProgressBarHori;
