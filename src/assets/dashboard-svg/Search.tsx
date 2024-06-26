

const Search = ({ color }: any) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.875 7.38747C13.875 10.9913 10.9399 13.9183 7.3125 13.9183C3.68505 13.9183 0.75 10.9913 0.75 7.38747C0.75 3.78369 3.68505 0.856689 7.3125 0.856689C10.9399 0.856689 13.875 3.78369 13.875 7.38747Z"
        stroke={color}
        stroke-width="1.5"
      />
      <path
        d="M11.9741 12.0288L15.2766 15.7867"
        stroke={color}
        stroke-width="1.5"
      />
    </svg>
  );
};

export default Search