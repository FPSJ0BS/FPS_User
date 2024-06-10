

const Userprofile = ({ color }: any) => {
  return (
    <svg
      width={20}
      height={25}
      viewBox="0 0 20 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.96017 16.6594C5.12723 16.6594 1 17.3901 1 20.3165C1 23.2429 5.10104 23.9998 9.96017 23.9998C14.7931 23.9998 18.9192 23.2679 18.9192 20.3427C18.9192 17.4174 14.8193 16.6594 9.96017 16.6594Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.96011 12.4855C13.1317 12.4855 15.7023 9.91376 15.7023 6.74218C15.7023 3.57059 13.1317 1 9.96011 1C6.78852 1 4.21671 3.57059 4.21671 6.74218C4.20603 9.90305 6.75996 12.4748 9.91964 12.4855H9.96011Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Userprofile