import { useState } from "react";
import "./signup.scss";

import AppendFormEducation from "./AppendFormEducation";
import AppendFormExperience from "./AppendFormExperience";
const SignUpSecondModal = ({ setModal, isModal }: any) => {
  const [isExperienced, setIsExperienced] = useState(true);
  const [education,setEducation] = useState([]);
  const [experience,setExperience] = useState([]);

  return (
    <>
      <div className="addJobPreference">
        <div
          className={`modal-style ${isModal && "active"}`}
          id="job-preference-modal"
        >
          {isExperienced ? (
            <>
              <div className="header position-relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  viewBox="0 0 25 25"
                >
                  <g
                    id="Group_844"
                    data-name="Group 844"
                    transform="translate(-919 -310.238)"
                  >
                    <g
                      id="Rectangle_480"
                      data-name="Rectangle 480"
                      transform="translate(919 310.238)"
                      fill="#fff"
                      stroke="#707070"
                      strokeWidth={1}
                      opacity={0}
                    >
                      <rect width={25} height={25} stroke="none" />
                      <rect
                        x="0.5"
                        y="0.5"
                        width={24}
                        height={24}
                        fill="none"
                      />
                    </g>
                    <g
                      id="Asset_1_23"
                      data-name="Asset 1 23"
                      transform="translate(922.156 311.319)"
                    >
                      <g id="Group" transform="translate(0 0)">
                        <path
                          id="Vector"
                          d="M8.181,15.863H7.562a5.868,5.868,0,0,0-.79-.024H5.02q-1.937-.027-3.869-.1c-.1-.006-.212.006-.283-.094a.8.8,0,0,0-.183-.295,1.349,1.349,0,0,1-.295-.678C.3,14.07.261,13.457.2,12.849c-.077-.843-.1-1.687-.165-2.53C.025,10.2.031,10.071.025,9.941.013,9.4,0,8.85,0,8.308.007,7.4,0,6.485.06,5.571.084,5.2.084,4.822.107,4.445.178,3.389.255,2.333.385,1.284a1.6,1.6,0,0,1,.354-.8A.444.444,0,0,0,.85.257C.9.151,1,.151,1.1.14A20.822,20.822,0,0,1,4.006.01,20.455,20.455,0,0,1,6.554.246a1.57,1.57,0,0,1,.4.118A1.507,1.507,0,0,1,7.7,1.13a2.085,2.085,0,0,1,.177.7A1.246,1.246,0,0,0,9.2,2.923h.088c1.115-.029,2.223.029,3.338.059s2.223.071,3.326.171a2.973,2.973,0,0,1,.46.142,1.514,1.514,0,0,1,.843,1.4c.059,1.368.124,2.737.088,4.1-.029,1.144-.071,2.294-.165,3.438-.053.69-.118,1.38-.189,2.064a1.511,1.511,0,0,1-1.38,1.351c-.72.059-1.439.106-2.159.124-.914.024-1.822.047-2.737.059H8.96A5.836,5.836,0,0,0,8.181,15.863Z"
                          transform="translate(1.507 6.802)"
                          fill="#f6b333"
                        />
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M8.563.059c1.079.018,2.153.1,3.232.218a2.89,2.89,0,0,1,.944.189,1.53,1.53,0,0,1,.9,1.41c.071,1.315.153,2.624.195,3.94.047,1.457.012,2.913.035,4.37a2.494,2.494,0,0,0-.95-.159c-2.052-.118-4.1-.183-6.157-.177a1.385,1.385,0,0,1-1.5-1.321,2.415,2.415,0,0,0-.13-.578c.077-.142.218-.112.336-.112.749-.006,1.5-.006,2.247-.006.548,0,1.1-.006,1.651,0A.485.485,0,0,1,9.7,7.9c.065.13-.035.153-.118.171a1.34,1.34,0,0,1-.307.018H6.069c-.242.006-.289.088-.153.3a1.208,1.208,0,0,0,.891.548.121.121,0,0,0,.065,0c.849-.029,1.693.065,2.542.047.731-.018,1.457.059,2.188.059.212,0,.283-.035.265-.248-.041-.661-.018-1.327-.071-1.988-.029-.366-.035-.737-.047-1.1-.029-.749-.088-1.5-.147-2.247a1.44,1.44,0,0,0-1.3-1.292c-.731-.083-1.463-.147-2.2-.195S6.641,1.9,5.915,1.875c-.448-.018-.9-.047-1.345-.029-1.309.053-2.619.065-3.922.206-.153.018-.307,0-.46.029A.166.166,0,0,1,0,2V1.911c.053-.065-.006-.153.041-.224A1.541,1.541,0,0,1,1.374.313c.92-.1,1.84-.183,2.76-.23.313-.018.631-.029.944-.035a5.49,5.49,0,0,1,.7-.024C5.851.018,5.933.047,6.01,0h1.64a4.273,4.273,0,0,0,.672.024C8.392.041,8.481.018,8.563.059Z"
                          transform="translate(4.001)"
                          fill="#f6b333"
                          opacity="0.5"
                        />
                        <path
                          id="Vector-3"
                          data-name="Vector"
                          d="M.932,0A3.788,3.788,0,0,1,0,.041V0Z"
                          transform="translate(9.069 0.018)"
                          fill="#f0f3f9"
                        />
                        <path
                          id="Vector-4"
                          data-name="Vector"
                          d="M.932.041A4.115,4.115,0,0,1,0,0H.932Z"
                          transform="translate(11.632 0.018)"
                          fill="#f0f3f9"
                        />
                        <path
                          id="Vector-5"
                          data-name="Vector"
                          d="M.022.007a3,3,0,0,1,.8.041h-.8C-.007.036-.007.024.022.007Z"
                          transform="translate(8.249 22.611)"
                          fill="#e8ac6e"
                        />
                        <path
                          id="Vector-6"
                          data-name="Vector"
                          d="M0,.05A2.771,2.771,0,0,1,.8.009C.826.027.826.039.8.05Z"
                          transform="translate(9.687 22.615)"
                          fill="#e8ac6e"
                        />
                        <path
                          id="Vector-7"
                          data-name="Vector"
                          d="M.423,0V.041h-.4C-.007.029-.007.012.022,0Z"
                          transform="translate(7.848 22.618)"
                          fill="#ebb984"
                        />
                        <path
                          id="Vector-8"
                          data-name="Vector"
                          d="M0,.041V0H.4C.425.018.425.029.4.041Z"
                          transform="translate(10.482 22.624)"
                          fill="#ebb984"
                        />
                        <path
                          id="Vector-9"
                          data-name="Vector"
                          d="M.022,0H.376c.029.012.035.024,0,.035H.022Q-.022.027.022,0Z"
                          transform="translate(6.746 22.624)"
                          fill="#f8e6d3"
                        />
                        <path
                          id="Vector-10"
                          data-name="Vector"
                          d="M.022,0H.376c.029.012.029.029,0,.035H.022Q-.022.018.022,0Z"
                          transform="translate(11.393 22.624)"
                          fill="#f4dabf"
                        />
                        <path
                          id="Vector-11"
                          data-name="Vector"
                          d="M.022.006C.128.006.229.006.335,0c.029.012.029.029,0,.041H.022Q-.022.032.022.006Z"
                          transform="translate(7.317 22.618)"
                          fill="#f0cba4"
                        />
                        <path
                          id="Vector-12"
                          data-name="Vector"
                          d="M.335.006V.041H.022C-.007.029-.007.012.022,0,.128.006.234.006.335.006Z"
                          transform="translate(11.079 22.618)"
                          fill="#f0cba4"
                        />
                        <path
                          id="Vector-13"
                          data-name="Vector"
                          d="M.224,0V.035H0V0Z"
                          transform="translate(6.543 22.624)"
                          fill="#fbf4ed"
                        />
                        <path
                          id="Vector-14"
                          data-name="Vector"
                          d="M.224,0V.041H0V.006C.077,0,.153,0,.224,0Z"
                          transform="translate(7.114 22.624)"
                          fill="#f3d7b9"
                        />
                        <path
                          id="Vector-15"
                          data-name="Vector"
                          d="M0,.041V0H.224V.041Z"
                          transform="translate(7.652 22.624)"
                          fill="#eec295"
                        />
                        <path
                          id="Vector-16"
                          data-name="Vector"
                          d="M.224,0V.044H0V0C.077,0,.153,0,.224,0Z"
                          transform="translate(10.879 22.621)"
                          fill="#eec295"
                        />
                        <path
                          id="Vector-17"
                          data-name="Vector"
                          d="M0,.035V0H.218q.044.018,0,.035Z"
                          transform="translate(11.768 22.629)"
                          fill="#f8e9d9"
                        />
                        <path
                          id="Vector-18"
                          data-name="Vector"
                          d="M0,.035V0H.218V.035Z"
                          transform="translate(11.987 22.629)"
                          fill="#fbf4ed"
                        />
                        <path
                          id="Vector-19"
                          data-name="Vector"
                          d="M2.379,15.409a4.572,4.572,0,0,1-.985-.094,1.363,1.363,0,0,1-1.038-1.2A56.132,56.132,0,0,1,.009,6.728c.024-1.433.1-2.866.254-4.294C.3,2.1.327,1.762.362,1.426A1.414,1.414,0,0,1,1.536.187L1.908.134C2.1-.031,2.2-.043,2.385.093L2.6.117A1.69,1.69,0,0,0,2.12.73a3.765,3.765,0,0,0-.2,1.168c-.088.908-.171,1.816-.218,2.725-.041.8-.035,1.6-.071,2.406-.035.908.018,1.811.024,2.713.006.92.077,1.834.153,2.754.053.625.106,1.244.177,1.864a1.6,1.6,0,0,0,.543,1.02C2.462,15.392,2.421,15.4,2.379,15.409Z"
                          transform="translate(0 6.996)"
                          fill="#c88a13"
                        />
                        <path
                          id="Vector-20"
                          data-name="Vector"
                          d="M.006,2.34C.006,1.7,0,1.06.006.417.006.116.124,0,.425,0Q.964,0,1.5,0A1.251,1.251,0,0,1,2.577,1.927c-.071.118-.059.165.041.248a1.413,1.413,0,0,1-.9,2.5c-.413.012-.826.012-1.239.012C.112,4.687,0,4.581,0,4.215,0,3.59.006,2.965.006,2.34Z"
                          transform="translate(14.257 16.362)"
                          fill="#fff"
                        />
                        <path
                          id="Vector-21"
                          data-name="Vector"
                          d="M4.683,2.336A2.341,2.341,0,1,1,2.347,0,2.342,2.342,0,0,1,4.683,2.336Z"
                          transform="translate(9.008 16.366)"
                          fill="#fff"
                        />
                        <path
                          id="Vector-22"
                          data-name="Vector"
                          d="M.478,1.037c-.159.012-.318.029-.478.041,0-.248,0-.5.006-.743A.672.672,0,0,1,.383.182,20.861,20.861,0,0,1,3.816,0,15.788,15.788,0,0,1,6.558.229,1.415,1.415,0,0,1,7.573.972c.047.088.112.183.029.283a1.379,1.379,0,0,1-.773.035,1.787,1.787,0,0,1-.254-.071A9.6,9.6,0,0,0,4.482.913,22.444,22.444,0,0,0,.6,1C.56,1.008.519,1.025.478,1.037Z"
                          transform="translate(1.901 6.052)"
                          fill="#f6b333"
                          opacity="0.1"
                        />
                        <path
                          id="Vector-23"
                          data-name="Vector"
                          d="M2.093,1.976c0,.5.006,1,0,1.5A1.134,1.134,0,0,1,.182,4.37.357.357,0,0,1,.07,3.851.354.354,0,0,1,.6,3.828c.171.124.348.236.566.118s.242-.313.242-.531C1.4,2.46,1.4,1.5,1.4.543A1.349,1.349,0,0,1,1.409.325.332.332,0,0,1,1.757,0a.329.329,0,0,1,.33.342c.012.259.006.513.006.773Z"
                          transform="translate(6.173 16.372)"
                          fill="#fff"
                        />
                        <path
                          id="Vector-24"
                          data-name="Vector"
                          d="M0,.113C.342.107.69.107,1.032.1A.262.262,0,0,1,1.268.007C2.56,0,3.857,0,5.149.007a.415.415,0,0,1,.413.277A.38.38,0,0,1,5.5.7c-.071.083-.147.147-.265.077H.649A1.663,1.663,0,0,0,0,.113Z"
                          transform="translate(8.478 7.164)"
                          fill="#f6b333"
                        />
                        <path
                          id="Vector-25"
                          data-name="Vector"
                          d="M11.8,6.2a.332.332,0,0,0,.248-.407c-.047-.206-.206-.265-.407-.265-1.345,0-2.7,0-4.04-.006-.094-.142-.177-.289-.277-.425a1.407,1.407,0,0,0-.979-.49,18.97,18.97,0,0,0-2.082-.195c-.33-.012-.661-.047-.991-.035a25.984,25.984,0,0,0-3.1.254A.893.893,0,0,1,0,4.643a1.715,1.715,0,0,0,.041-.46A24.2,24.2,0,0,1,.224,1.576,1.49,1.49,0,0,1,1.681.308c.13-.006.265-.029.4-.041C2.925.184,3.775.119,4.624.084,5.538.048,6.446-.022,7.36.007,8.51.042,9.666.06,10.816.172c.6.059,1.2.077,1.8.189a1.56,1.56,0,0,1,1.185,1.4c.071,1.073.147,2.141.183,3.214l.035.9c.012.448.024.9.047,1.345.006.165-.059.224-.224.212-1.079-.083-2.164-.071-3.244-.1-.572-.018-1.15-.018-1.722-.035a1.36,1.36,0,0,1-1.126-.9c-.041-.13.012-.153.124-.153h3.651A.447.447,0,0,0,11.8,6.2Z"
                          transform="translate(1.908 1.738)"
                          fill="#f6b333"
                          opacity="0.4"
                        />
                        <path
                          id="Vector-26"
                          data-name="Vector"
                          d="M.042,0A.335.335,0,0,1,0,.224.323.323,0,0,1,.042,0Z"
                          transform="translate(3.983 1.698)"
                          fill="#f8f5f5"
                        />
                        <path
                          id="Vector-27"
                          data-name="Vector"
                          d="M0,.726C0,.543.007.354,0,.172-.005.03.048-.005.178,0c.277.006.56,0,.837,0a.723.723,0,0,1,.743.714.734.734,0,0,1-.7.743c-.307.018-.619,0-.926.006-.112,0-.142-.047-.136-.147C.007,1.127,0,.927,0,.726Z"
                          transform="translate(14.947 18.896)"
                          fill="#f6b333"
                        />
                        <path
                          id="Vector-28"
                          data-name="Vector"
                          d="M0,.574C0,0,0,0,.567,0A2.364,2.364,0,0,1,.856.007.582.582,0,0,1,1.4.6a.569.569,0,0,1-.566.56c-.218.006-.442-.006-.661.006C.053,1.169-.005,1.134,0,1,.012.857,0,.715,0,.574Z"
                          transform="translate(14.947 17.043)"
                          fill="#f6b333"
                        />
                        <path
                          id="Vector-29"
                          data-name="Vector"
                          d="M1.657,0A1.657,1.657,0,1,1,0,1.657,1.659,1.659,0,0,1,1.657,0Z"
                          transform="translate(9.692 17.044)"
                          fill="#f6b333"
                        />
                        <path
                          id="Vector-30"
                          data-name="Vector"
                          d="M4.783.006H9.006c.083,0,.165,0,.242.006a.31.31,0,0,1,.3.3.316.316,0,0,1-.265.354,1.091,1.091,0,0,1-.242.012H.507C.448.678.389.678.33.672A.332.332,0,0,1,0,.33.306.306,0,0,1,.342.006C.767,0,1.2,0,1.622,0,2.672.006,3.727.006,4.783.006Z"
                          transform="translate(4.42 5.308)"
                          fill="#f6b333"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                Education Details{" "}
              </div>
              <div
                style={{
                  backgroundColor: "rgb(255, 251, 242)",
                  padding: "8px 12px",
                  fontSize: 12,
                  marginTop: 10,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26.069"
                  height="26.051"
                  viewBox="0 0 26.069 26.051"
                  style={{ minWidth: 27 }}
                >
                  <g id="pie-chart" transform="translate(-4.969 -5)">
                    <path
                      id="Path_59398"
                      data-name="Path 59398"
                      d="M19.441,11.677V5a12.8,12.8,0,0,0-11.45,8.319l6.348,2.063a6.387,6.387,0,0,1,5.1-3.7Z"
                      transform="translate(-2.147 0)"
                      fill="#ff7b07"
                    />
                    <path
                      id="Path_59399"
                      data-name="Path 59399"
                      d="M18.713,5v6.676a6.383,6.383,0,1,1-6.968,5.052L5.4,14.671a12.221,12.221,0,0,0-.434,3.348A13.034,13.034,0,1,0,18.713,5Z"
                      transform="translate(0 -0.002)"
                      fill="#2196f3"
                    />
                  </g>
                </svg>
                <div style={{ paddingLeft: 6 }}>
                  <div style={{ fontSize: 12, fontWeight: 500 }}>
                    Research says that:{" "}
                  </div>
                  96 % Recruiters look for work experience information before
                  downloading resume.
                </div>
              </div>
              <div className="inner-modal-area">
                <div className="conatiner-fluid">
                  <div className="row mb-5 mb-md-0">
                    <AppendFormEducation
                      setIsExperienced={setIsExperienced}
                      setEducation={setEducation}
                      education={education}
                    />
                    <div className="modal-fixed-btn d-flex flex-row justify-content-center gap-5"></div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="header position-relative">
                <svg
                  id="Group_748"
                  data-name="Group 748"
                  xmlns="http://www.w3.org/2000/svg"
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                >
                  <g
                    id="Rectangle_480"
                    data-name="Rectangle 480"
                    fill="#fff"
                    stroke="#707070"
                    strokeWidth={1}
                    opacity={0}
                  >
                    <rect width={28} height={28} stroke="none" />
                    <rect x="0.5" y="0.5" width={27} height={27} fill="none" />
                  </g>
                  <g
                    id="Asset_1_15"
                    data-name="Asset 1 15"
                    transform="translate(1.193 1.193)"
                  >
                    <g id="Group_559" data-name="Group 559">
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1" data-name="Layer 1">
                          <path
                            id="Vector"
                            d="M0,5.974V5.466a1.2,1.2,0,0,1,.457-.753A24.992,24.992,0,0,1,4.476,2.02,23.092,23.092,0,0,1,9.345.073a2.028,2.028,0,0,1,1.08,0,22.921,22.921,0,0,1,6.668,3,25.67,25.67,0,0,1,2.134,1.551,1.494,1.494,0,0,1,.608,1.409,11.9,11.9,0,0,0-.009,1.345,1.158,1.158,0,0,1-.443.949c-.724.614-1.5,1.158-2.273,1.7-.875.524-1.746,1.055-2.668,1.491a21.353,21.353,0,0,1-4.173,1.534c-.365.087-.428.038-.431-.346,0-.33-.005-.66,0-.99a.269.269,0,0,0-.251-.309,20.276,20.276,0,0,1-3.862-1.362.666.666,0,0,1-.272-.174c-.054-.136.051-.2.129-.271.928-.781,1.833-1.59,2.758-2.376.178-.152.353-.308.53-.462a.853.853,0,0,1,.459-.287A2.411,2.411,0,0,0,10.607,6.4a1.008,1.008,0,0,0,.474-.356.575.575,0,0,0-.067-.74,1.867,1.867,0,0,0-2.138-.094.73.73,0,0,0-.239.833,4.21,4.21,0,0,1-.745.7c-1,.871-2.014,1.73-3.005,2.614a.393.393,0,0,1-.188.117,3.041,3.041,0,0,1-.939-.458,24.294,24.294,0,0,1-3.3-2.287A1.208,1.208,0,0,1,0,5.974Z"
                            fill="#f6b333"
                          />
                          <path
                            id="Vector-2"
                            data-name="Vector"
                            d="M6.383.008A5.237,5.237,0,0,1,7.246,1.5a9.144,9.144,0,0,1,.438,1.613v.813c-.087.085-.061.2-.087.308a.988.988,0,0,1-.617.736Q4.042,6.158,1.107,7.359a1.724,1.724,0,0,1-.24.06A.166.166,0,0,1,.883,7.3a2.652,2.652,0,0,0,.205-1.891A6.419,6.419,0,0,0,.118,2.984C.063,2.9-.016,2.829,0,2.713c.058-.136.188-.158.3-.2C1.712,1.917,3.135,1.363,4.543.77A15.248,15.248,0,0,0,6.287.014a.112.112,0,0,1,.1-.006Z"
                            transform="translate(17.929 12.826)"
                            fill="#d1e5ff"
                          />
                          <path
                            id="Vector-3"
                            data-name="Vector"
                            d="M0,0C.215.628.776.917,1.247,1.287A21.6,21.6,0,0,0,4.475,3.365a2.371,2.371,0,0,0,.229.093.254.254,0,0,1,.029.122c-.007,1.152.006,2.3-.007,3.455a.557.557,0,0,1-.013.1.612.612,0,0,1-.175.271.708.708,0,0,0,0,1.036.29.29,0,0,1,.031.451c-.15.188-.177.454-.376.61-.366-.278-.727-.565-1.1-.834a1.031,1.031,0,0,1-.427-.917c0-1.186-.007-2.371,0-3.557a.382.382,0,0,0-.046-.213.374.374,0,0,0-.154-.152C1.8,3.4,1.184,2.913.566,2.424A1.773,1.773,0,0,1,0,1.678Z"
                            transform="translate(0.001 5.974)"
                            fill="#c88a13"
                          />
                          <path
                            id="Vector-4"
                            data-name="Vector"
                            d="M11.708,0c0,.859,0,1.719.005,2.578a1.489,1.489,0,0,1-.1.465c-.1.223-.333.211-.5.306-1.36.562-2.722,1.117-4.079,1.684-1.142.436-2.262.923-3.4,1.377-.118.047-.237.136-.374.048A21.545,21.545,0,0,1,.721,5.382c-.079-.059-.067-.148-.072-.23A3.012,3.012,0,0,0,.128,3.593a.286.286,0,0,1,.028-.417A.719.719,0,0,0,.16,2.1a.7.7,0,0,1-.133-.18A.431.431,0,0,1,.038,1.6c.1-.085.188-.007.273.033a22.465,22.465,0,0,0,3.51,1.3,2.319,2.319,0,0,0,1.271.028,22.872,22.872,0,0,0,5.1-2.1c.438-.244.867-.5,1.292-.768C11.552.05,11.613-.017,11.708,0Z"
                            transform="translate(5.39 11.255)"
                            fill="#f6b333"
                          />
                          <path
                            id="Vector-5"
                            data-name="Vector"
                            d="M5.16,5.383c-.121-.082-.223,0-.326.043L.863,7.053a.209.209,0,0,1-.049.007.117.117,0,0,1,.019-.119,2.143,2.143,0,0,0,.29-1.655A6.126,6.126,0,0,0,.139,2.624C.126,2.6.111,2.582.1,2.56c-.155-.255-.138-.322.133-.436.492-.208.989-.407,1.483-.61C2.873,1.036,4.035.566,5.2.1A.58.58,0,0,1,5.58.011a1.147,1.147,0,0,1,.365.474,6.2,6.2,0,0,1,.867,2.434,3.269,3.269,0,0,1-.051,1.306,1.081,1.081,0,0,1-.35.57A12.114,12.114,0,0,1,5.16,5.383Z"
                            transform="translate(8.341 17.157)"
                            fill="#d1e5ff"
                          />
                          <path
                            id="Vector-6"
                            data-name="Vector"
                            d="M7.752,1.012a11.178,11.178,0,0,0-1.345.518c-1.342.542-2.675,1.1-4.016,1.642-.18.072-.167.13-.075.265a6.582,6.582,0,0,1,1.014,2.4,3.875,3.875,0,0,1,.02,1.579,1.279,1.279,0,0,1-.341.61,1.124,1.124,0,0,1-1.334-.312A5.737,5.737,0,0,1,.207,5.138,5.163,5.163,0,0,1,0,3.519a1.181,1.181,0,0,1,.89-1.292c.5-.2,1-.407,1.5-.61a.192.192,0,0,0,.111-.094,9.493,9.493,0,0,0,1.271-.486c.7-.271,1.395-.568,2.092-.85C6,.134,6.135.1,6.268.051a.707.707,0,0,1,.7.121,3.1,3.1,0,0,1,.809.774.054.054,0,0,1,0,.038.053.053,0,0,1-.025.028Z"
                            transform="translate(6.146 16.194)"
                            fill="#d7dfef"
                          />
                          <path
                            id="Vector-7"
                            data-name="Vector"
                            d="M.006,1.707A.226.226,0,0,0,0,1.661a.863.863,0,0,1,.412-.223C1.546.963,2.684.507,3.822.047A.5.5,0,0,1,3.99,0a.1.1,0,0,1,.067.033,6.992,6.992,0,0,1,1.035,2.23,4.221,4.221,0,0,1,.133,1.728,1.656,1.656,0,0,1-.324.756,6.454,6.454,0,0,1-.925.417c-.07.031-.17.033-.175.147-.887.353-1.769.722-2.656,1.074-.109.043-.219.136-.346.038a1.205,1.205,0,0,0,.41-.894A5.7,5.7,0,0,0,.006,1.707Z"
                            transform="translate(13.892 15.498)"
                            fill="#346dbf"
                          />
                          <path
                            id="Vector-8"
                            data-name="Vector"
                            d="M4.139,0l.917,2.3c.021.054.067.113.017.164s-.125.019-.188,0c-.748-.2-1.5-.394-2.242-.605a.231.231,0,0,0-.318.128c-.391.669-.794,1.331-1.193,1.995l-.163.258L0,1.772a.655.655,0,0,1,.355-.217C1.423,1.116,2.5.686,3.568.249,3.761.172,3.952.091,4.139,0Z"
                            transform="translate(13.768 21.374)"
                            fill="#346dbf"
                          />
                          <path
                            id="Vector-9"
                            data-name="Vector"
                            d="M.821.083A.8.8,0,0,1,.911,1.42c-.1.092-.067.136-.01.22a3.1,3.1,0,0,1,.582,1.891,1.051,1.051,0,0,1-1.159.881.855.855,0,0,1-.31-.739A6.812,6.812,0,0,1,.121,1.955c.041-.219.1-.412.373-.432C.008.87.065.354.646.011a.131.131,0,0,1,.1,0A.134.134,0,0,1,.821.083Z"
                            transform="translate(4.625 13.107)"
                            fill="#346dbf"
                          />
                          <path
                            id="Vector-10"
                            data-name="Vector"
                            d="M4.4.595c-.011.12-.117.136-.2.169Q2.239,1.57.267,2.369L0,1.76c-.006-.131.106-.13.183-.165a8.013,8.013,0,0,0,1.008-.453,15.229,15.229,0,0,0,1.551-.6C3.169.381,3.589.205,4.01.028c.067-.028.123-.047.184,0Z"
                            transform="translate(13.503 20.779)"
                            fill="#2a5798"
                          />
                          <path
                            id="Vector-11"
                            data-name="Vector"
                            d="M1.318.13C.839.524.753.863,1,1.326a.949.949,0,0,0,.277.278.093.093,0,0,1-.009.037.092.092,0,0,1-.024.03.09.09,0,0,1-.072.02c-.251-.03-.307.13-.339.331a6.212,6.212,0,0,0-.073,2,1.23,1.23,0,0,0,.2.482A1.093,1.093,0,0,1,.031,3.1c.044-.213.113-.421.171-.631.046-.107.091-.215.139-.322a4.87,4.87,0,0,0,.275-.474c.057-.186-.2-.255-.273-.418A.828.828,0,0,1,.667.18.425.425,0,0,1,1.318.13Z"
                            transform="translate(3.984 13.008)"
                            fill="#2a5798"
                          />
                          <path
                            id="Vector-12"
                            data-name="Vector"
                            d="M11.728,1.421A9.259,9.259,0,0,1,10.5,2.2a22.98,22.98,0,0,1-4.567,2.01c-.443.136-.9.246-1.347.353a1.26,1.26,0,0,1-.607-.1A20.464,20.464,0,0,1,.086,3,.42.42,0,0,1,0,2.664Q0,1.5,0,.331A.4.4,0,0,1,.088,0a19.105,19.105,0,0,0,4.24,1.522c.15.033.211.1.207.254-.008.4,0,.8-.005,1.194,0,.191.045.259.245.211A21.059,21.059,0,0,0,8.558,1.845,23.239,23.239,0,0,0,11.566.2.269.269,0,0,1,11.73.15Z"
                            transform="translate(5.372 9.838)"
                            fill="#c88a13"
                          />
                          <path
                            id="Vector-13"
                            data-name="Vector"
                            d="M.8,3.779v3l-.009.355L.646,7.081A.671.671,0,0,0,0,7.132Q0,5.386.007,3.639c0-.09-.023-.186.041-.266Q1.939,1.727,3.832.081a.917.917,0,0,1,.1-.068.076.076,0,0,1,.093.005c.177.185.425.271.61.442A7.832,7.832,0,0,0,3.618,1.3C2.726,2.059,1.845,2.829.961,3.6.9,3.648.819,3.688.8,3.779Z"
                            transform="translate(4.661 6.058)"
                            fill="#2a5798"
                          />
                          <path
                            id="Vector-14"
                            data-name="Vector"
                            d="M.76,1.695a1.69,1.69,0,0,1-.7-.448A.775.775,0,0,1,.575.167,1.855,1.855,0,0,1,2.368.3a.666.666,0,0,1,0,1.183A1.9,1.9,0,0,1,.76,1.695Z"
                            transform="translate(8.539 4.823)"
                            fill="#346dbf"
                          />
                          <path
                            id="Vector-15"
                            data-name="Vector"
                            d="M1.443,3.578,1.4,3.572a.28.28,0,0,1-.123-.08,2.209,2.209,0,0,0-1.225-.84A.108.108,0,0,1,0,2.6c.153-.112.357-.123.5-.257a2.92,2.92,0,0,0,.893-.328Q3.754,1.072,6.1.086A1.063,1.063,0,0,1,7.2.254,1.692,1.692,0,0,1,7.8.88a5.686,5.686,0,0,1-1.423.656C4.739,2.225,3.089,2.9,1.443,3.578Z"
                            transform="translate(16.507 11.953)"
                            fill="#d7dfef"
                          />
                          <path
                            id="Vector-16"
                            data-name="Vector"
                            d="M4.094,0A1.981,1.981,0,0,1,5.5.966L1.478,2.6a5.126,5.126,0,0,0-.729-.69A1.135,1.135,0,0,0,0,1.686a14.779,14.779,0,0,1,1.437-.613C2.265.724,3.1.386,3.927.045A1.31,1.31,0,0,1,4.094,0Z"
                            transform="translate(12.414 14.559)"
                            fill="#2a5798"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                Work Experience{" "}
              </div>
              <div
                style={{
                  backgroundColor: "rgb(255, 251, 242)",
                  padding: "8px 12px",
                  fontSize: 12,
                  marginTop: 10,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26.573"
                  height="26.576"
                  viewBox="0 0 26.573 26.576"
                  style={{ minWidth: 26 }}
                >
                  <g id="_x30_3_search_friend" transform="translate(-1.005 -1)">
                    <g
                      id="Group_23227"
                      data-name="Group 23227"
                      transform="translate(1.005 1)"
                    >
                      <path
                        id="Path_59408"
                        data-name="Path 59408"
                        d="M12.055,21,9.547,18.49a.886.886,0,0,0-1.253,0L1.77,25.014a2.683,2.683,0,0,0,.008,3.759,2.675,2.675,0,0,0,3.756,0l6.52-6.521a.886.886,0,0,0,0-1.253Z"
                        transform="translate(-1.005 -2.965)"
                        fill="#2a5798"
                      />
                      <path
                        id="Path_59409"
                        data-name="Path 59409"
                        d="M17.631,22.262A10.631,10.631,0,1,1,28.262,11.631,10.643,10.643,0,0,1,17.631,22.262Z"
                        transform="translate(-1.689 -1)"
                        fill="#2a5798"
                      />
                      <path
                        id="Path_59410"
                        data-name="Path 59410"
                        d="M17.859,3a8.859,8.859,0,1,0,8.859,8.859A8.869,8.869,0,0,0,17.859,3Z"
                        transform="translate(-1.917 -1.228)"
                        fill="#eee"
                      />
                      <g
                        id="Group_23226"
                        data-name="Group 23226"
                        transform="translate(10.68 2.658)"
                      >
                        <path
                          id="Path_59411"
                          data-name="Path 59411"
                          d="M18.544,11.087A3.544,3.544,0,1,0,15,7.544,3.548,3.548,0,0,0,18.544,11.087Z"
                          transform="translate(-13.281 -4)"
                          fill="#f6b333"
                        />
                        <path
                          id="Path_59412"
                          data-name="Path 59412"
                          d="M23.576,18.555a5.307,5.307,0,0,0-10.508,0,.886.886,0,0,0,.326.817,7.934,7.934,0,0,0,9.855,0,.886.886,0,0,0,.326-.817Z"
                          transform="translate(-13.06 -5.141)"
                          fill="#f6b333"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <div style={{ paddingLeft: 6 }}>
                  <div style={{ fontSize: 12, fontWeight: 500 }}>
                    Research says that:{" "}
                  </div>
                  Profiles with education details stand out to the recruiters
                </div>
              </div>
              <div className="inner-modal-area">
                <div className="conatiner-fluid">
                  <div className="row">
                    <AppendFormExperience
                      setIsExperienced={setIsExperienced}
                      setModal={setModal}
                      setExperience={setExperience}
                     
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {isModal && <div className="custom-overlay-1"></div>}
    </>
  );
};

export default SignUpSecondModal;
