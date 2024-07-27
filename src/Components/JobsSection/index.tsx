import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import JobVertical from "./Components/JobVertical";
import Pagination from "@Components/Pagination";
import useAllFavourite from "@Hooks/Queries/useAllFavourite";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import NoResults from "@Container/NoResults/NoResults";
import Sidebar from "@Components/Sidebar/Sidebar";
import FlatList from "@Components/FlatList/FlatLIst";
import checkmarkIcon from "@Assets/dashboard-svg/verfied.svg"; // Update with the path to your checkmark icon
import mainImage from "@Assets/images/banner-image.webp";
import JobSeekerVertical from "@Components/JobSeekerBenefits/JobSeekerVertical";
// import JobHorizontal from "./Components/JobHorizontal";
import JobSeekerBenefits from "@Components/JobSeekerBenefits/JobseekerBenefits";
import JobCard from "./JobCard";
import JobCardVertical from "./JobCardVertical";
import { memo } from "react";
import Sortbuy from "@Components/Dropdown/Sortbuy";


function JobSection(props: any) {
  const { userData } = useGlobalContext();
  const { data, searchJob, setSearchJob } = props;
  const { data: AllFavourite } = useAllFavourite(
    { enabled: !!userData?.UID },
    {
      UID: userData?.UID,
    }
  );

  const jobIdSet = AllFavourite?.jobs
    ? new Set(AllFavourite?.jobs.map((job) => job?.jobID))
    : new Set();
  const benefits = [
    { text: "5500+ Teaching & non teaching jobs", iconUrl: checkmarkIcon },
    {
      text: "Personalized Job Alerts through email & whatsapp",
      iconUrl: checkmarkIcon,
    },
    { text: "Verified Job Listings", iconUrl: checkmarkIcon },
    { text: "Fair and Transparent Recruitment", iconUrl: checkmarkIcon },
  ];
  return (
    <div className="container ctn-full wrap-sidebar-full pl1">
      <div className="row">
        <div className="col-lg-3">
          <div className="content-left style2 po-sticky">
            <div className="inner st-filter">
              <Sidebar searchJob={searchJob} setSearchJob={setSearchJob} />
            </div>
          </div>
        </div>
        <Tabs className="col-lg-9 tf-tab">
          <div className="wd-meta-select-job">
            <div className="wd-findjob-filer">
              <div className="group-select-display">
                <TabList className="inner menu-tab">
                  <Tab className="btn-display current active">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M0.5 12.001L0.5 16.0005C0.880952 16.001 1.09693 16.001 1.83333 16.001L15.1667 16.001C15.9031 16.001 16.5 16.0005 16.5 16.0005L16.5 12.001C16.5 12.001 15.9031 12.001 15.1667 12.001L1.83333 12.001C1.09693 12.001 0.880952 12.001 0.5 12.001Z"
                        fill="#A0A0A0"
                      />
                      <path
                        d="M0.5 6.00098L0.5 10.0005C0.880952 10.001 1.09693 10.001 1.83333 10.001L15.1667 10.001C15.9031 10.001 16.5 10.0005 16.5 10.0005L16.5 6.00098C16.5 6.00098 15.9031 6.00098 15.1667 6.00098L1.83333 6.00098C1.09693 6.00098 0.880952 6.00098 0.5 6.00098Z"
                        fill="#A0A0A0"
                      />
                      <path
                        d="M0.5 0.000976562L0.5 4.0005C0.880952 4.00098 1.09693 4.00098 1.83333 4.00098L15.1667 4.00098C15.9031 4.00098 16.5 4.0005 16.5 4.0005L16.5 0.000975863C16.5 0.000975863 15.9031 0.000975889 15.1667 0.000975921L1.83333 0.000976504C1.09693 0.000976536 0.880952 0.000976546 0.5 0.000976562Z"
                        fill="#A0A0A0"
                      />
                    </svg>
                  </Tab>

                  <Tab className="btn-display current active">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M4.5 0H0.500478C0.5 0.380952 0.5 0.596931 0.5 1.33333V14.6667C0.5 15.4031 0.500478 16 0.500478 16H4.5C4.5 16 4.5 15.4031 4.5 14.6667V1.33333C4.5 0.596931 4.5 0.380952 4.5 0Z"
                        fill="white"
                      />
                      <path
                        d="M10.5 0H6.50048C6.5 0.380952 6.5 0.596931 6.5 1.33333V14.6667C6.5 15.4031 6.50048 16 6.50048 16H10.5C10.5 16 10.5 15.4031 10.5 14.6667V1.33333C10.5 0.596931 10.5 0.380952 10.5 0Z"
                        fill="white"
                      />
                      <path
                        d="M16.5 0H12.5005C12.5 0.380952 12.5 0.596931 12.5 1.33333V14.6667C12.5 15.4031 12.5005 16 12.5005 16H16.5C16.5 16 16.5 15.4031 16.5 14.6667V1.33333C16.5 0.596931 16.5 0.380952 16.5 0Z"
                        fill="white"
                      />
                    </svg>
                  </Tab>
                </TabList>
                <p className="nofi-job">
                  <span>{data?.total_job_count}</span> jobs recommended for you
                </p>
              </div>
              <Sortbuy
                data={data?.jobs}
                setFilter={setSearchJob}
                filter={searchJob}
              />
            </div>
          </div>
          <div className="content-tab style-scroll">
            <TabPanel className="inner">
              <div className="row wow fadeInUp">
                <FlatList
                  data={data?.jobs}
                  renderItem={(item, index) => {
                    return (
                      <>
                        {/* <JobHorizontal jobIdSet={jobIdSet} job={item} /> */}
                        <JobCard jobIdSet={jobIdSet} job={item} />
                        {index === 2 && !userData?.UID && (
                          <div style={{ paddingInline: "-20px" }}>
                            <JobSeekerBenefits
                              title="What Job Seekers will get?"
                              benefits={benefits}
                              buttonLabel="Registration for Free"
                              imageUrl={mainImage}
                            />
                          </div>
                        )}
                      </>
                    );
                  }}
                  ListEmptyComponent={() => {
                    return (
                      <div className="d-flex flex-row align-items-center justify-content-center w-100 h-100">
                        <NoResults />
                      </div>
                    );
                  }}
                />
              </div>
            </TabPanel>
            <TabPanel className="inner">
              <div className="d-flex flex-row flex-wrap justify-content-between">
                <FlatList
                  data={data?.jobs}
                  renderItem={(idx: any, index) => {
                    return (
                      <>
                        <JobCardVertical jobIdSet={jobIdSet} job={idx} />
                        {index === 2 && !userData?.UID && (
                          <div
                            style={{ paddingInline: "-20px" }}
                            className="vertical"
                          >
                            <JobSeekerVertical
                              title="What Job Seekers will get?"
                              benefits={benefits}
                              buttonLabel="Registration for Free"
                              imageUrl={mainImage}
                              // className={"cl2"}
                            />
                          </div>
                        )}
                      </>
                    );
                  }}
                  ListEmptyComponent={() => {
                    return (
                      <div className="d-flex flex-row align-items-center justify-content-center w-100 h-100">
                        <NoResults />
                      </div>
                    );
                  }}
                />
              </div>
            </TabPanel>{" "}
          </div>
        </Tabs>
      </div>
      {data?.jobs?.length > 0 && (
        <div className="mb-4">
          <Pagination
            total={data?.totalPage}
            current={searchJob?.pageNo}
            onChange={(page) => {
              setSearchJob({
                ...searchJob,
                pageNo: page,
              });
            }}
            pageSize={searchJob?.limit}
          />
        </div>
      )}
    </div>
  );
}

export default memo(JobSection);
