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
  <li className="benefit-item col-12 mb-1 fs-6">
    <img
      src={iconUrl}
      alt=""
      className="benefit-icon"
      style={{ height: "30px", width: "30px" }}
    />
    {text}
  </li>
);

const JobSeekerVertical: React.FC<JobSeekerBenefitsProps> = ({
  title,
  benefits,
  buttonLabel,
  imageUrl,
}) => {
  const navigate = useNavigate();
  return (
    <div className="job-seeker-wrap">
      <div
        className={`job-seeker-benefits d-flex flex-col gap-4 my-0 p-5 mb-4 `}
      >
        <div className="benefits-content d-flex flex-row align-items-center">
          <img
            src={imageUrl}
            alt="Job Seekers"
            className="main-image"
            style={{ height: "80px" }}
          />
          <h3 className="font-bold">{title}</h3>
        </div>
        <div>
          <ul className="benefits-list d-flex flex-row flex-wrap">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} {...benefit} />
            ))}
          </ul>
        </div>
        <button
          onClick={() => navigate(AppRoute.SignUp)}
          className="py-2 buttonJobSeeker"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default memo(JobSeekerVertical);
