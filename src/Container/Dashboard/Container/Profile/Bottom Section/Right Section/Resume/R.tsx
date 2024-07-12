// src/Resume.js
import React from 'react';

const Resume = React.forwardRef((props, ref) => (
  <div ref={ref} className="p-8 bg-white shadow-lg rounded-lg flex flex-col w-[900px] justify-center items-center">
    <h1 className="text-4xl font-bold mb-2">John Doe</h1>
    <p className="text-xl mb-4">Software Engineer</p>
    {/* Add more resume details here */}
    <div>
      <h2 className="text-2xl font-semibold mb-2">Experience</h2>
      <ul>
        <li className="mb-1">Company A - Software Engineer (2020 - Present)</li>
        <li className="mb-1">Company B - Junior Developer (2018 - 2020)</li>
      </ul>
    </div>
  </div>
));

export default Resume;
