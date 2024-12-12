import {
  closeModalTermsAndConditions,
  setMembershipButtonPopup,
  setToggleMembershipTnCCheck,
} from "@/Redux/appliedJobSlice";
import { useEffect } from "react";
import { BiX } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const TermsAndConditionsPopup = () => {
  const dispatch = useDispatch();

  const { isChecked, membershipTypeText } = useSelector(
    (state: any) => state.appliedJobSlice
  );
  const handleCheckboxChange = () => {
    dispatch(setToggleMembershipTnCCheck());
  };

  const onChoosePlan = () => {
    if (isChecked) {
      dispatch(closeModalTermsAndConditions());

      dispatch(setMembershipButtonPopup(true));
    }
  };

  return (
    <div className="fixed h-full w-full bg-gray-900 bg-opacity-80  paymentPopupCss flex justify-center items-center cursor-default ">
      <div
        className={` bg-white h-[90%] w-[95%] gap-3 flex flex-col justify-center items-center  z-40 fixed p-4  rounded-[10px]  `}
      >
        <BiX
          onClick={() => dispatch(closeModalTermsAndConditions())}
          size={40}
          className="bg-red-500 text-white rounded-full absolute right-[50px] top-3 cursor-pointer"
        />
        <div className="h-full w-full px-[50px] py-5 flex flex-col gap-6 bg-gray-50 text-gray-800  overflow-y-auto">
          {/* Header */}
          <h1 className="text-[30px] font-extrabold text-center text-blue-600">
            Terms and Conditions
          </h1>

          {/* Introduction */}
          <p className="text-base leading-relaxed">
            Here's the revised <b>*Terms and Conditions (T&C)*</b>,
            incorporating the clause that charges apply{" "}
            <b>if candidates join within six months</b> and ensuring it's{" "}
            <b>legally enforceable for website and mobile app usage.</b>
          </p>

          {/* Section 1 */}
          <h2 className="text-[20px] font-semibold underline text-gray-900">
            *Terms and Conditions for 'Pay After Getting the Job' Service*
          </h2>
          <p className="text-base leading-relaxed">
            By availing of the "Pay After Getting the Job" service provided by
            Tallento.ai, the Job Seeker ("You") agrees to abide by the following
            terms and conditions. These terms form a legally binding agreement
            between You and Tallento.ai ("We," "Us," or "Our").
          </p>

          {/* Service Description */}
          <h2 className="text-[20px] font-semibold underline text-gray-900">
            1. Service Description
          </h2>
          <ol className="list-decimal list-inside text-base leading-relaxed">
            <li className="mt-2">
              The{" "}
              <span className="font-semibold">"Pay After Getting the Job"</span>{" "}
              service ensures that job seekers are only charged after securing a
              job facilitated by
              <span className="text-blue-500"> Tallento.ai</span>, specifically
              in the IIT JEE, NEET, and Foundation teaching categories.
            </li>
            <li className="mt-2">
              You acknowledge that by using this service, you agree to pay Us a
              service fee upon accepting or joining a job facilitated by Us, as
              outlined in these terms.
            </li>
            <li className="mt-2">
              The service fee is applicable even if You join the offered
              position within <i>six months</i> of being selected for the role,
              regardless of whether the delay was initiated by You or the
              Employer.
            </li>
          </ol>

          {/* Payment Terms */}
          <h2 className="text-[20px] font-semibold underline text-gray-900">
            2. Payment Terms
          </h2>
          <ol className="list-decimal list-inside text-base leading-relaxed">
            <li className="mt-2">
              <b>Service Fee:</b> You agree to pay an amount equivalent to{" "}
              <i>15 days' salary</i>
              of the first month of the final CTC (Cost to Company).
            </li>
            <li className="mt-2">
              <b>Payment Methods:</b>
              <ul className="list-disc list-inside pl-6 mt-1">
                <li>
                  Direct Payment: You may pay Us directly within <i>15 days</i>{" "}
                  of receiving your first salary.
                </li>
                <li>
                  Employer Deduction: You authorize Us and your Employer to
                  deduct the agreed amount directly from your first month's
                  salary and transfer it to Us.
                </li>
              </ul>
            </li>
            <li className="mt-2">
              <b>Payment Obligation:</b> Your payment obligation remains binding
              even if there is a delay in joining, provided You join within six
              months of being selected. Failure to pay the fee constitutes a
              breach of these terms and may result in legal action.
            </li>
          </ol>

          {/* Additional Sections */}
          <h2 className="text-[20px] font-semibold underline text-gray-900">
            3. Six-Month Clause
          </h2>
          <p className="text-base leading-relaxed">
            You agree that if You join the job facilitated by Us within{" "}
            <i>six months</i>
            of being selected, the service fee will remain applicable and must
            be paid as per Clause 2.
          </p>

          <h2 className="text-[20px] font-semibold underline text-gray-900">
            4. Acceptance of Charges
          </h2>
          <p className="text-base leading-relaxed">
            By availing of this service via Our website or mobile app, You:
            <ul className="list-disc list-inside pl-6 mt-1">
              <li>
                Confirm that You have read, understood, and accepted these
                terms.
              </li>
              <li>
                Agree to pay the applicable service fee as outlined herein.
              </li>
              <li>
                Authorize Us or your Employer to deduct the amount if necessary.
              </li>
            </ul>
          </p>

          {/* Governing Law */}
          <h2 className="text-[20px] font-semibold underline text-gray-900">
            6. Governing Law
          </h2>
          <p className="text-base leading-relaxed">
            This agreement is governed by the laws of India and is subject to
            the exclusive jurisdiction of the courts in Jaipur, Rajasthan.
          </p>
        </div>
        <div
          className={`w-[90%] flex items-center ${
            isChecked ? "justify-between" : "justify-start"
          } `}
        >
          {membershipTypeText === "Postpaid" && (
            <div className={`flex gap-2 `}>
              <input
                type="checkbox"
                id="postpaidCheckboxxx"
                className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label
           
                htmlFor="postpaidCheckboxxx"
                className="text-[#9a3c58] text-lg font-semibold cursor-pointer hover:underline "
              >
               { !isChecked && <span className="text-black">Please Check the</span>} Terms & Conditions { !isChecked && <span className="text-black">to continue!</span>} 
              </label>
            </div>
          )}

          {(isChecked && membershipTypeText === "Postpaid") && (
            <button
              onClick={() => onChoosePlan()}
              className="w-[22%] text-[16px] font-semibold rounded-lg bg-[#9a3c58] text-white border-none h-[40px]"
            >
              Choose Plan
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPopup;
