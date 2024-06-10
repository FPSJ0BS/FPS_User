import React from "react";
import { NavLink } from "react-router-dom";
const LINKEDIN_CLIENT_ID = "8649n4sxr39wfa";
const LINKEDIN_CALLBACK_URL = `${window.location.origin}/`;
const linkedinOAuthURL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${LINKEDIN_CLIENT_ID}&redirect_uri=${encodeURIComponent(
  LINKEDIN_CALLBACK_URL
)}&scope=openid%20email%20profile%20w_member_social%20`;

const LinkedInOAuth: React.FC = () => {
  return (
    <div className="d-flex">
      <NavLink to={linkedinOAuthURL} className="linkedinBtn col-12">
        Sign in with LinkedIn
      </NavLink>
    </div>
  );
};

export default LinkedInOAuth;
