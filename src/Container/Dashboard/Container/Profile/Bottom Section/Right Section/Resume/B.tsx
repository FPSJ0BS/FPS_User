// src/PrintResume.js

import { useReactToPrint } from 'react-to-print';
import R from "./R"
import { useRef } from 'react';

const PrintResume = () => {
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <div className="print-resume-container">
      <R ref={resumeRef} />
      <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Print Resume
      </button>
    </div>
  );
};

export default PrintResume;
