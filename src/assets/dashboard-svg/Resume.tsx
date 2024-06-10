

const Resume = ({ color }:any) => {
  return (
    <svg
      width={20}
      height={22}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M13.9988 15.6369H6.15527"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M13.9988 11.0893H6.15527"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M9.1487 6.5517H6.15576"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.208 0.999939C14.208 0.999939 5.86801 1.00428 5.85497 1.00428C2.8566 1.02275 1 2.99559 1 6.00483V15.9951C1 19.0195 2.87072 20.9999 5.89517 20.9999C5.89517 20.9999 14.2341 20.9967 14.2482 20.9967C17.2466 20.9782 19.1043 19.0043 19.1043 15.9951V6.00483C19.1043 2.98038 17.2325 0.999939 14.208 0.999939Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Resume
