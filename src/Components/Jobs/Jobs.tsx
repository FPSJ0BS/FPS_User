import Button2 from "@Components/Button/ButtonTwo";
import FlatList from "@Components/FlatList/FlatLIst";
import JobSeekerBenefits from "@Components/JobSeekerBenefits/JobseekerBenefits";
// import JobHorizontal from "@Components/JobsSection/Components/JobHorizontal";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import useAllFavourite from "@Hooks/Queries/useAllFavourite";
import useSearchJobsQuery from "@Hooks/Queries/useSearchJobsQuery";
import { AppRoute } from "@Navigator/AppRoute";
import { memo, useMemo, useState } from "react";
import checkmarkIcon from "@Assets/dashboard-svg/verfied.svg"; // Update with the path to your checkmark icon
import mainImage from "@Assets/images/banner-image.webp";
import JobCard from "@Components/JobsSection/JobCard";

const Jobs = (props: any) => {
  const { className } = props;
  const { userData } = useGlobalContext();
  const [searchJob] = useState<any>({
    UID: userData?.UID ? userData?.UID : 103082,
    pageNo: 0,
    limit: 10,
  });

  const { data: Latest } = useSearchJobsQuery(
    { enabled: !!searchJob?.UID },
    searchJob
  );
  const { data: AllFavourite } = useAllFavourite(
    { enabled: !!userData?.UID },
    {
      UID: userData?.UID,
    }
  );

  const jobIdSet = useMemo(() => {
    return AllFavourite?.jobs
      ? new Set(AllFavourite?.jobs.map((job) => job?.jobID))
      : new Set();
  }, [AllFavourite?.jobs]);
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
    <section className={className}>
      <div className="container">
        <div className="tf-title style-2">
          <div className="group-title">
            <h1 className="category">Latest Jobs</h1>
            <p className="category mb-4">
              Find the right career opportunity for you
            </p>
          </div>
        </div>
        <div className="row wow fadeInUp">
          <div className="col-lg-12">
            <FlatList
              data={Latest?.jobs?.slice(0, 6)}
              renderItem={(item, index) => {
                return (
                  <>
                    {/* <JobHorizontal jobIdSet={jobIdSet} job={item} /> */}
                    <JobCard jobIdSet={jobIdSet} job={item} />
                    {index === 2 && !userData?.UID && (
                      <JobSeekerBenefits
                        title="What Job Seekers will get?"
                        benefits={benefits}
                        buttonLabel="Registration for Free"
                        imageUrl={mainImage}
                      />
                    )}
                  </>
                );
              }}
            />

            <div className="col-md-12">
              <div
                className="wprt-spacer clearfix"
                data-desktop="32"
                data-mobi="40"
                data-smobi="30"
              ></div>
              <div className="wrap-button mt-5">
                <Button2 title="See more Jobs" link={AppRoute.Find_Jobs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Jobs);
