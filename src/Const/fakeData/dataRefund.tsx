import { AppConst } from "@/Enum/AppConst";
import { NavLink } from "react-router-dom";

export const dataRefund = [
  {
    id: 1,
    heading: "Refund policy",
    children: (
      <>
        <h4 className="h4">Refund policy overview</h4>
        <p className="mgb-32">
          {`Ensuring customer satisfaction is our utmost priority at ${AppConst.LogoName} , and
          we strive to address any concerns promptly. Below are the key points
          of our refund policies:`}
        </p>
        <h6 className="h6">Refunds for partners/employers</h6>
        <p>
          Refunds are granted if subscribed services do not meet specified terms
          and conditions.
        </p>
        <p>Valid reasons consistent with our terms are required for refunds.</p>{" "}
        <p>
          Customers must thoroughly review all details before making a purchase.
        </p>
        <p className="mgb-32">
          Refunds amount to 70% of the service charge, excluding non-refundable
          convenience fees.
        </p>
        <h6 className="h6">Refunds for professional resume assistance</h6>
        <p>
          Refunds are issued if users haven't received any files from our end.
        </p>
        <p>
          No refunds if clients choose to discontinue after initiating the
          project.
        </p>
        <p>
          Once work has commenced and the product delivered, refunds are not
          entertained.
        </p>
        <p>Genuine reasons in line with our terms are necessary for refunds.</p>{" "}
        <p>Buyers must provide a valid receipt.</p>
        <p className="mgb-32">
          Refunds entail 40% of the service charge, excluding non-refundable
          convenience fees.
        </p>
        <h6 className="h6">Refunds for personalized job assistance</h6>
        <p className="mgb-32">
          No refunds or cancellations for personalized job assistance on highly
          sought-after positions.
        </p>
        <h6 className="h6">Refund process</h6>
        <p>Refund requests must be made within 24 hours of purchase.</p>
        <p>
          After investigation, refunds are credited back to the original mode of
          payment.
        </p>{" "}
        <p>
          It may take 10-15 working days for refunds to reflect in the account.
        </p>
        <p className="mgb-32">
          Payments made by third parties are non-refundable.
        </p>
        <h6 className="h6">Contact us</h6>
        <p className="mgb-32">
          For any concerns or clarifications regarding the refund policy, reach
          out to us at{" "}
          <NavLink
            to={`mailto:${AppConst.Email}`}
            style={{ color: "#a83359" }}
            target="_blank"
          >
            {AppConst.Email}
          </NavLink>{" "}
          or{" "}
          <NavLink
            to={"tel:9728987999"}
            style={{ color: "#a83359" }}
            target="_blank"
          >
            call 9728987999
          </NavLink>
          .
        </p>
      </>
    ),
  },
  {
    id: 2,
    heading: "Refunds For Partners/Employers ",
    children: (
      <>
        <h6 className="h6">Refunds for partners/employers</h6>
        <p>
          Refunds are granted if subscribed services do not meet specified terms
          and conditions.
        </p>
        <p>Valid reasons consistent with our terms are required for refunds.</p>{" "}
        <p>
          Customers must thoroughly review all details before making a purchase.
        </p>
        <p className="mgb-32">
          Refunds amount to 70% of the service charge, excluding non-refundable
          convenience fees.
        </p>
      </>
    ),
  },
  {
    id: 3,
    heading: "Refunds For Professional Resume Assistance",
    children: (
      <>
        <h6 className="h6">Refunds for professional resume assistance</h6>
        <p>
          Refunds are issued if users haven't received any files from our end.
        </p>
        <p>
          No refunds if clients choose to discontinue after initiating the
          project.
        </p>
        <p>
          Once work has commenced and the product delivered, refunds are not
          entertained.
        </p>
        <p className="mgb-32">
          Genuine reasons in line with our terms are necessary for refunds.
        </p>{" "}
      </>
    ),
  },
  {
    id: 4,
    heading: "Refunds For Personalized Job Assistance",
    children: (
      <>
        <h6 className="h6"> Refunds for personalized job assistance</h6>
        <p className="mgb-32">
          No refunds or cancellations for personalized job assistance on highly
          sought-after positions.
        </p>
      </>
    ),
  },
  {
    id: 5,
    heading: "Refund Process",
    children: (
      <>
        <h6 className="h6">Refund process</h6>
        <p>Refund requests must be made within 24 hours of purchase.</p>
        <p>
          After investigation, refunds are credited back to the original mode of
          payment.
        </p>{" "}
        <p>
          It may take 10-15 working days for refunds to reflect in the account.
        </p>
        <p className="mgb-32">
          Payments made by third parties are non-refundable.
        </p>
      </>
    ),
  },
  {
    id: 6,
    heading: "Contact Us",
    children: (
      <>
        <h6 className="h6">Contact us</h6>
        <p className="mgb-32">
          {`For any concerns or clarifications regarding the refund policy, reach
          out to us at ${AppConst.Email} or call 9728987999.`}
        </p>
      </>
    ),
  },
];
