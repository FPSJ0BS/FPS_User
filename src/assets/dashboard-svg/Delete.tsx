

const Delete = ({ color,width,height }: any) => {
  return (
    <svg
      width={width ? width : 21}
      height={height ? height :23}
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.8382 8.70241C17.8382 8.70241 17.2512 15.9838 16.9106 19.0509C16.7484 20.5159 15.8435 21.3743 14.3613 21.4013C11.5407 21.4521 8.71676 21.4554 5.89719 21.3959C4.47119 21.3667 3.58142 20.4975 3.4225 19.0585C3.07978 15.9643 2.49597 8.70241 2.49597 8.70241"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.3337 5.21199H1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8008 5.21199C14.9522 5.21199 14.2213 4.61196 14.0548 3.78058L13.7921 2.46593C13.63 1.85942 13.0807 1.43994 12.4548 1.43994H7.87837C7.2524 1.43994 6.70319 1.85942 6.54102 2.46593L6.2783 3.78058C6.11181 4.61196 5.38097 5.21199 4.53229 5.21199"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Delete
