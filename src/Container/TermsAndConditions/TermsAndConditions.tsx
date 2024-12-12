import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-[100vh] w-full px-[200px] py-5 flex flex-col gap-6 bg-gray-50 text-gray-800">
      {/* Header */}
      <h1 className="text-[30px] font-extrabold text-center text-blue-600">
        Terms and Conditions
      </h1>

      {/* Introduction */}
      <p className="text-base leading-relaxed">
        Here's the revised <b>*Terms and Conditions (T&C)*</b>, incorporating
        the clause that charges apply <b>if candidates join within six months</b> and
        ensuring it's <b>legally enforceable for website and mobile app usage.</b>
      </p>

      {/* Section 1 */}
      <h2 className="text-[20px] font-semibold underline text-gray-900">
        *Terms and Conditions for 'Pay After Getting the Job' Service*
      </h2>
      <p className="text-base leading-relaxed">
        By availing of the "Pay After Getting the Job" service provided by Tallento.ai, 
        the Job Seeker ("You") agrees to abide by the following terms and conditions. 
        These terms form a legally binding agreement between You and Tallento.ai 
        ("We," "Us," or "Our").
      </p>

      {/* Service Description */}
      <h2 className="text-[20px] font-semibold underline text-gray-900">
        1. Service Description
      </h2>
      <ol className="list-decimal list-inside text-base leading-relaxed">
        <li className="mt-2">
          The <span className="font-semibold">"Pay After Getting the Job"</span> service ensures 
          that job seekers are only charged after securing a job facilitated by 
          <span className="text-blue-500"> Tallento.ai</span>, specifically in the IIT JEE, NEET, 
          and Foundation teaching categories.
        </li>
        <li className="mt-2">
          You acknowledge that by using this service, you agree to pay Us a 
          service fee upon accepting or joining a job facilitated by Us, 
          as outlined in these terms.
        </li>
        <li className="mt-2">
          The service fee is applicable even if You join the offered position 
          within <i>six months</i> of being selected for the role, regardless 
          of whether the delay was initiated by You or the Employer.
        </li>
      </ol>

      {/* Payment Terms */}
      <h2 className="text-[20px] font-semibold underline text-gray-900">
        2. Payment Terms
      </h2>
      <ol className="list-decimal list-inside text-base leading-relaxed">
        <li className="mt-2">
          <b>Service Fee:</b> You agree to pay an amount equivalent to <i>15 days' salary</i> 
          of the first month of the final CTC (Cost to Company).
        </li>
        <li className="mt-2">
          <b>Payment Methods:</b> 
          <ul className="list-disc list-inside pl-6 mt-1">
            <li>Direct Payment: You may pay Us directly within <i>15 days</i> of receiving your first salary.</li>
            <li>
              Employer Deduction: You authorize Us and your Employer to deduct 
              the agreed amount directly from your first month's salary and transfer it to Us.
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <b>Payment Obligation:</b> Your payment obligation remains binding 
          even if there is a delay in joining, provided You join within six months 
          of being selected. Failure to pay the fee constitutes a breach of these terms 
          and may result in legal action.
        </li>
      </ol>

      {/* Additional Sections */}
      <h2 className="text-[20px] font-semibold underline text-gray-900">3. Six-Month Clause</h2>
      <p className="text-base leading-relaxed">
        You agree that if You join the job facilitated by Us within <i>six months</i> 
        of being selected, the service fee will remain applicable and must be paid as per Clause 2.
      </p>

      <h2 className="text-[20px] font-semibold underline text-gray-900">4. Acceptance of Charges</h2>
      <p className="text-base leading-relaxed">
        By availing of this service via Our website or mobile app, You:
        <ul className="list-disc list-inside pl-6 mt-1">
          <li>Confirm that You have read, understood, and accepted these terms.</li>
          <li>Agree to pay the applicable service fee as outlined herein.</li>
          <li>Authorize Us or your Employer to deduct the amount if necessary.</li>
        </ul>
      </p>

      {/* Governing Law */}
      <h2 className="text-[20px] font-semibold underline text-gray-900">
        6. Governing Law
      </h2>
      <p className="text-base leading-relaxed">
        This agreement is governed by the laws of India and is subject to the 
        exclusive jurisdiction of the courts in Jaipur, Rajasthan.
      </p>
    </div>
  );
};

export default TermsAndConditions;
