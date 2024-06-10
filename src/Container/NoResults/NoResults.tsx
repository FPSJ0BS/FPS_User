import { memo } from "react";

const NoResults = ({ text = "Sorry,we couldn't find any results" }: { text?: string }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={212}
        height={212}
        viewBox="0 0 512 512"
        id="sad"
        fill="#a83359"
        className="opacity-50"
      >
        <path d="M256 32C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32zM145.062 291.696c-1.551 4.952-5.62 8.724-10.693 10.606-3.358 1.246-6.816 1.774-10.236.938-8.866-2.185-13.916-10.907-11.255-19.443 5.101-16.379 14.22-29.995 33.802-37.263s35.265-2.877 49.868 6.15c7.615 4.707 10.029 14.019 4.214 22.123-2.049 2.854-5.019 4.717-8.376 5.963-5.059 1.876-10.584 1.678-14.965-1.036-4.778-2.957-10.643-6.526-19.607-3.199-9.009 3.343-11.102 9.839-12.752 15.161zm200.094 89.758a15.931 15.931 0 0 1-9.144 2.881c-5.053 0-10.023-2.388-13.134-6.845C322.703 377.239 304 352 256 352c-47.98 0-66.704 25.239-66.879 25.49-3.111 4.457-8.083 6.845-13.135 6.845a15.93 15.93 0 0 1-9.143-2.881c-7.246-5.058-9.021-15.031-3.963-22.278C163.986 357.59 190.739 320 256 320c65 0 92.013 37.59 93.119 39.176 5.058 7.247 3.283 17.22-3.963 22.278zm42.873-78.214c-3.42.837-6.879.309-10.236-.938-5.073-1.883-9.143-5.654-10.693-10.606-1.649-5.322-3.742-11.818-12.752-15.161-8.964-3.327-14.829.242-19.607 3.199-4.381 2.714-9.906 2.912-14.965 1.036-3.357-1.246-6.327-3.108-8.376-5.963-5.815-8.104-3.401-17.416 4.214-22.123 14.604-9.027 30.286-13.418 49.868-6.15s28.702 20.884 33.802 37.263c2.66 8.536-2.389 17.259-11.255 19.443z" />
      </svg>
      <p className="fs-4  text-secondary">
        {text}
      </p>
    </div>
  );
};

export default memo(NoResults);
