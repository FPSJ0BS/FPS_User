import { useParams } from "react-router-dom";
import JobHeading from "@Components/JobView/JobHeading";
import "./jobDetails.scss";
import JobDescription from "@Components/JobView/JobDescription";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import useJobDetails from "@Hooks/Queries/useJobDetails";
// import SEO from "@Components/Seo/Seo";
// import { AppConst } from "@/Enum/AppConst";
import { memo} from "react";
// import Modal from "@Container/Home/Component/Modal/Modal";
// import LoginModal from "@Container/Auth/Login/LoginModal";
const JobDetailsUpdate = () => {
  const { id } = useParams();
  const { userData } = useGlobalContext();
  const uid = userData?.UID ? userData?.UID : 103082;
  const { data: jobsDetails } = useJobDetails(
    { enabled: !!uid },
    {
      UID: uid,
      jobID: id || "",
    }
  );


  // const job = jobsDetails?.job;

  return (
    <div className="container">
      
      {/* {jobsDetails && (
        <SEO
          title={job?.meta_title || `${job?.job_title} - ${job?.name}`}
          description={job?.meta_description}
          metaKeywords={job?.meta_keywords}
          ogKeywords={job?.og_keywords}
          ogDescription={job?.og_description}
          ogTitle={job?.og_title}
          name={`${AppConst.LogoName} Detail`}
          type={"Job Detail Page"}
        />
      )} */}

      <div className="job-details__update">
        <section className="job-detail-section">
          <JobHeading
            data={jobsDetails?.job}
           
            packType={jobsDetails?.pack_type}
          />
          <JobDescription data={jobsDetails?.job} id={id} />
        </section>
      </div>


      
      {/* {isModal && (
        <Modal
          children={<LoginModal setIsModal={setIsModal} />}
          setIsModal={setIsModal}
          isModal={isModal}
          isFull={true}
        />
      )} */}



    </div>
  );
};

export default memo(JobDetailsUpdate);
