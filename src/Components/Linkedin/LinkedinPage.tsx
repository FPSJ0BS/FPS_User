import { LinkedIn } from "react-linkedin-login-oauth2";
// You can use provided image shipped by this package or using your own
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";

export function LinkedInPage() {
  return (
    <LinkedIn
      clientId="8649n4sxr39wfa"
      redirectUri={`http://localhost:5173/login`}
      scope="email openid profile w_member_social"
      onSuccess={(code) => {
        console.log(code,"..........");
      }}
      onError={(error) => {
        console.log(error);
      }}
    >
      {({ linkedInLogin }) => (
        <img
          onClick={linkedInLogin}
          src={linkedin}
          alt="Sign in with Linked In"
          style={{ maxWidth: "180px", cursor: "pointer" }}
        />
      )}
    </LinkedIn>
  );
}
