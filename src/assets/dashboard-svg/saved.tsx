

const saved = ({ color }: any) => {
  return (
    <svg
      width={18}
      height={22}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0652 4.9841C17.0652 2.14005 15.1208 0.999939 12.3213 0.999939H5.74699C3.03354 0.999939 1 2.06231 1 4.79443V20.0169C1 20.7673 1.8074 21.24 2.46141 20.8731L9.05953 17.1719L15.6006 20.8668C16.2557 21.2358 17.0652 20.7632 17.0652 20.0118V4.9841Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M5.20905 7.95584H12.7752"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default saved
