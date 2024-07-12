import React from 'react';

const CircularProgressBar = ({ percentage }) => {
    const radius = 50;
    const stroke = 9;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex justify-center items-center">
            <svg
                height={radius * 2}
                width={radius * 2}
                className="transform rotate-[deg]"
            >
                <circle
                    stroke="lightgray"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke="green"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fontSize="14px"
                    fontWeight="bold"
                    fill="green"
                >
                    {`${percentage}%`}
                </text>
            </svg>
        </div>
    );
};

export default CircularProgressBar;
