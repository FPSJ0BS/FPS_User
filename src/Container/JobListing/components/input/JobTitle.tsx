
export const JobTitle = ({ query, setQuery }) => {
 
  return (
    <div className=" w-[100%]  flex flex-col gap-2 ">
      <div className=" flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-captions text-black"
        >
          <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
          <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
        </svg>
        <label
          htmlFor="EmployerPostJobJobTitle"
          className=" postJobInputTitle font-medium text-black "
        >
          Job Title
        </label>
      </div>

      <input
        value={query?.job_title}
        autoComplete="off"
        placeholder="Enter Job Title..."
        onChange={(e) => {
          setQuery({
            ...query,
            job_title: e.target.value,
          });
        }}
        type="text"
        id="EmployerPostJobJobTitle"
        name="jobTitle"
        className=" h-[30px] text-black p-2 placeholder-black sm:w-[100%] border-[1px] focus:border-[2px] border-gray-300 rounded-md shadow-sm focus:outline-none border-solid focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
      />
    </div>
  );
};
