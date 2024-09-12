import React, { useRef, useEffect, useState } from "react";

const correctOTP = "123456"; // validate from your server

function OtpInputWithValidation({otp, setOtp, numberOfDigits}) {
 
  const otpBoxReference = useRef([]);



  useEffect(() => {
    otpBoxReference.current[0]?.focus();
  }, []);

  function handleChange(value, index) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  return (
    <article className="w-full">
      <div className="flex items-center justify-center gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
            ref={(reference) => (otpBoxReference.current[index] = reference)}
            className={`border w-12 h-auto text-white p-3 rounded-md block bg-black focus:border-2 focus:outline-none appearance-none`}
          />
        ))}
      </div>
    </article>
  );
}

export default OtpInputWithValidation;
