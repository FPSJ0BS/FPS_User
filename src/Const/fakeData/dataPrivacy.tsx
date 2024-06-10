import { AppConst } from "@/Enum/AppConst";
import { NavLink } from "react-router-dom";

export const dataPrivacy = [
  {
    id: 1,
    heading: "Privacy Policy",
    children: (
      <>
        <h4 className="h4">Privacy Policy</h4>
        <p className="mgb-32">
          {`This Privacy Policy outlines how ${AppConst.LogoName} +Tallento.ai  Pvt Ltd ("${AppConst.LogoName} +Tallento.ai ," "we,"
          "our," or "us") collects, uses, discloses, and protects the personal
          information of our users and visitors ("you" or "your") on our website
          and platform.`}
        </p>
        <h6 className="h6">Information We Collect </h6>
        <p className="mgb-32">
          Personal Information: We may collect personal information such as your
          name, email address, phone number, resume, and other details you
          provide when creating an account or using our services. Usage Data: We
          automatically collect information about your interaction with our
          website and platform, including your IP address, browser type, device
          information, pages visited, and other usage data.
        </p>

        <h6 className="h6">How We Use Your Information</h6>
        <p>
          To Provide Services: We use your information to operate, maintain, and
          improve our website and services, including facilitating job searches,
          matching job seekers with employers, and communicating with users
          about their accounts and job opportunities.
        </p>

        <p>
          To Personalize Experience: We may use your information to personalize
          your experience on our platform, such as recommending job listings
          based on your preferences and activity.
        </p>
        <p>
          To Communicate: We may use your information to send you updates,
          newsletters, promotional offers, and other communications related to
          our services.
        </p>
        <p className="mgb-32">
          To Ensure Security: We use your information to detect, prevent, and
          address security incidents and protect against fraudulent or illegal
          activity.
        </p>
        <h6 className="h6">Information Sharing and Disclosure</h6>
        <p>
          With Employers: We may share your information with employers and
          recruiters for the purpose of job matching and recruitment.
        </p>
        <p>
          With Service Providers: We may engage third-party service providers to
          assist with website hosting, data analysis, marketing, and other
          services, who may have access to your information for these purposes.
        </p>
        <p className="mgb-32">
          Legal Compliance: We may disclose your information when required by
          law, subpoena, or legal process, or to protect our rights, property,
          or safety, or that of others.
        </p>
        <h6 className="h6">Data Retention</h6>
        <p className="mgb-32">
          We retain your information for as long as necessary to fulfill the
          purposes outlined in this Privacy Policy, or as required by law.
        </p>

        <h6 className="h6">Your Rights</h6>
        <p>
          Access and Control: You may access, update, or delete your personal
          information by logging into your account or contacting us directly.
        </p>
        <p>
          Opt-Out: You may opt out of receiving promotional communications from
          us by following the instructions provided in the communication or
          contacting us.
        </p>
        <p className="mgb-32">
          Cookies: You may control cookies through your browser settings,
          although disabling cookies may affect your experience on our website.
        </p>
        <h6 className="h6">Children's Privacy</h6>
        <p className="mgb-32">
          Our website and services are not intended for individuals under the
          age of 18, and we do not knowingly collect personal information from
          children.
        </p>
        <h6 className="h6">Security</h6>
        <p className="mgb-32">
          We implement reasonable security measures to protect your information
          from unauthorized access, disclosure, alteration, or destruction.
        </p>
        <h6 className="h6">Changes to this Privacy Policy</h6>
        <p className="mgb-32">
          We may update this Privacy Policy from time to time, and any changes
          will be posted on this page with a revised effective date.
        </p>
        <h6 className="h6">Contact Us</h6>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our handling of your information, please contact us
          at{" "}
          <NavLink
            to={`mailto:${AppConst.Email}`}
            style={{ color: "#a83359" }}
            target="_blank"
          >
            {AppConst.Email}
          </NavLink>{" "}
          .
        </p>
        <p className="mgb-32">
          This Privacy Policy was last updated on 21st February 2024
        </p>
      </>
    ),
  },
  {
    id: 2,
    heading: "Information We Collect ",
    children: (
      <>
        <h6 className="h6">Information We Collect </h6>
        <p className="mgb-32">
          Personal Information: We may collect personal information such as your
          name, email address, phone number, resume, and other details you
          provide when creating an account or using our services. Usage Data: We
          automatically collect information about your interaction with our
          website and platform, including your IP address, browser type, device
          information, pages visited, and other usage data.
        </p>
      </>
    ),
  },
  {
    id: 3,
    heading: "How We Use Your Information",
    children: (
      <>
        <h6 className="h6">How We Use Your Information</h6>
        <p>
          To Provide Services: We use your information to operate, maintain, and
          improve our website and services, including facilitating job searches,
          matching job seekers with employers, and communicating with users
          about their accounts and job opportunities.
        </p>

        <p>
          To Personalize Experience: We may use your information to personalize
          your experience on our platform, such as recommending job listings
          based on your preferences and activity.
        </p>
        <p>
          To Communicate: We may use your information to send you updates,
          newsletters, promotional offers, and other communications related to
          our services.
        </p>
        <p className="mgb-32">
          To Ensure Security: We use your information to detect, prevent, and
          address security incidents and protect against fraudulent or illegal
          activity.
        </p>
      </>
    ),
  },
  {
    id: 4,
    heading: "Information Sharing And Disclosure",
    children: (
      <>
        <h6 className="h6">Information Sharing and Disclosure</h6>
        <p>
          With Employers: We may share your information with employers and
          recruiters for the purpose of job matching and recruitment.
        </p>
        <p>
          With Service Providers: We may engage third-party service providers to
          assist with website hosting, data analysis, marketing, and other
          services, who may have access to your information for these purposes.
        </p>
        <p className="mgb-32">
          Legal Compliance: We may disclose your information when required by
          law, subpoena, or legal process, or to protect our rights, property,
          or safety, or that of others.
        </p>
      </>
    ),
  },
  {
    id: 5,
    heading: "Data Retention",
    children: (
      <>
        <h6 className="h6">Data Retention</h6>
        <p>
          We retain your information for as long as necessary to fulfill the
          purposes outlined in this Privacy Policy, or as required by law.
        </p>
        <p className="mgb-32">
          By submitting our webform, we agree to receive promotional calls on
          the number shared, and such calls and SMS would be coming from a
          third-party platform -
        </p>
      </>
    ),
  },
  {
    id: 6,
    heading: "Your Rights",
    children: (
      <>
        <h6 className="h6">Your Rights</h6>
        <p>
          Access and Control: You may access, update, or delete your personal
          information by logging into your account or contacting us directly.
        </p>
        <p>
          Opt-Out: You may opt out of receiving promotional communications from
          us by following the instructions provided in the communication or
          contacting us.
        </p>
        <p className="mgb-32">
          Cookies: You may control cookies through your browser settings,
          although disabling cookies may affect your experience on our website.
        </p>
      </>
    ),
  },

  {
    id: 7,
    heading: "Children's Privacy",
    children: (
      <>
        <h6 className="h6">Children's Privacy</h6>
        <p className="mgb-32">
          Our website and services are not intended for individuals under the
          age of 18, and we do not knowingly collect personal information from
          children.
        </p>
      </>
    ),
  },
  {
    id: 8,
    heading: "Security",
    children: (
      <>
        <h6 className="h6">Security</h6>
        <p className="mgb-32">
          We implement reasonable security measures to protect your information
          from unauthorized access, disclosure, alteration, or destruction.
        </p>
      </>
    ),
  },
  {
    id: 9,
    heading: "Changes To This Privacy Policy",
    children: (
      <>
        <h6 className="h6">Changes to this Privacy Policy</h6>
        <p className="mgb-32">
          We may update this Privacy Policy from time to time, and any changes
          will be posted on this page with a revised effective date.
        </p>
      </>
    ),
  },
  {
    id: 10,
    heading: "Contact Us",
    children: (
      <>
        <h6 className="h6">Contact Us</h6>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our handling of your information, please contact us
          at{" "}
          <NavLink
            to={`mailto:${AppConst.Email}`}
            style={{ color: "#a83359" }}
            target="_blank"
          >
            ${AppConst.Email}
          </NavLink>{" "}
          .
        </p>
        <p className="mgb-32">
          This Privacy Policy was last updated on 21st February 2024
        </p>
      </>
    ),
  },
];
