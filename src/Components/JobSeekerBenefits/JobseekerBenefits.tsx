import React, { memo } from "react";
import "./jobseeker.scss";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "@Navigator/AppRoute";

interface BenefitProps {
  text: string;
  iconUrl: string;
}

interface JobSeekerBenefitsProps {
  title: string;
  benefits: BenefitProps[];
  buttonLabel: string;
  imageUrl: string;
}

const BenefitItem: React.FC<BenefitProps> = ({ text, iconUrl }) => (
  <li className="benefit-item col-lg-5 col-md-12 col-sm-12 col-12" >
    <img src={iconUrl} alt="" className="benefit-icon" />
    {text}
  </li>
);

const JobSeekerBenefits: React.FC<JobSeekerBenefitsProps> = ({
  title,
  benefits,
  buttonLabel,
  imageUrl,
}) => {
  const navigate = useNavigate()
  return (
    <div className="job-seeker-wrap">
      <div className="job-seeker-benefits d-flex flex-col align-items-start">
        <div className="benefits-content d-flex flex-row align-items-center">
          <img
            src={imageUrl}
            alt="Job Seekers"
            className="main-image"
            style={{ height: "60px" }}
          />
          <h3 className="font-bold">{title}</h3>
        </div>
        <div className="d-flex flex-row my-2">
          <ul className="benefits-list d-flex flex-row flex-wrap justify-content-start ">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} {...benefit} />
            ))}
          </ul>
        </div>
        <div className="d-flex flex-row justify-content-center w-full">
          <button
            onClick={() => navigate(AppRoute.SignUp)}
            className="buttonJobSeeker"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(JobSeekerBenefits);
