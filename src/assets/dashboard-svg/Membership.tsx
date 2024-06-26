const Membership = ({ color }: any) => {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M14.8083 8.35669V5.07891C14.8083 2.82599 12.9824 1.00004 10.7305 1.00004C8.47759 0.990348 6.64303 2.80761 6.6333 5.06054V5.07891V8.35669"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8562 21.0003H5.60292C3.06017 21.0003 1 18.9409 1 16.4004V10.4373C1 7.89682 3.06017 5.8374 5.60292 5.8374H15.8562C18.3989 5.8374 20.4591 7.89682 20.4591 10.4373V16.4004C20.4591 18.9409 18.3989 21.0003 15.8562 21.0003Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Membership;
