

const Dashboard = ({color}:any) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4.49997C1 1.87478 1.02811 1 4.49997 1C7.97182 1 7.99993 1.87478 7.99993 4.49997C7.99993 7.12515 8.01101 7.99993 4.49997 7.99993C0.988927 7.99993 1 7.12515 1 4.49997Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.49997C12 1.87478 12.0281 1 15.5 1C18.9718 1 18.9999 1.87478 18.9999 4.49997C18.9999 7.12515 19.011 7.99993 15.5 7.99993C11.9889 7.99993 12 7.12515 12 4.49997Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 15.5C1 12.8748 1.02811 12 4.49997 12C7.97182 12 7.99993 12.8748 7.99993 15.5C7.99993 18.1252 8.01101 18.9999 4.49997 18.9999C0.988927 18.9999 1 18.1252 1 15.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15.5C12 12.8748 12.0281 12 15.5 12C18.9718 12 18.9999 12.8748 18.9999 15.5C18.9999 18.1252 19.011 18.9999 15.5 18.9999C11.9889 18.9999 12 18.1252 12 15.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Dashboard;