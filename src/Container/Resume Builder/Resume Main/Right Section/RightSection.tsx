import ResumeFive from "@Container/Resume Builder/Resume Designs/Resume-one/ResumeFive";
import ResumeFour from "@Container/Resume Builder/Resume Designs/Resume-one/ResumeFour";
import ResumeThree from "@Container/Resume Builder/Resume Designs/Resume-one/ResumeThree";
import ResumeTwo from "@Container/Resume Builder/Resume Designs/Resume-one/ResumeTwo";
import Testpdf from "@Container/Resume Builder/Resume Designs/Resume-one/testpdf";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import useCreateOrder from "@Hooks/Mutation/useCreateOrder";
import useProfileDetails from "@Hooks/Queries/useProfileDetails";
import { Toast } from "@Utils/Toast";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useRazorpay from "react-razorpay";
import { AppConst } from "@/Enum/AppConst";
import logo from "../../../../../public/fps-logo.webp";
import useResumeBuy from "@Hooks/Mutation/useResumeBuy";
import ResumeLoader from "@Container/Resume Builder/ui/resumeLoader";
import { paymentStatusCheck } from "@/Redux/Resume Builder/resumeBuilderSlice";

function RightSection() {
  const { userData } = useGlobalContext();
  const dispatch = useDispatch()
  const { templateNumber, loadingResumeData, resumeDataArray } = useSelector(
    (state: any) => state.ResumeBuilderSlice
  );
  const [Razorpay] = useRazorpay();

  useEffect(() => {
    console.log("templateNumber", templateNumber);
  }, [templateNumber]);

  const { mutateAsync: createOrder } = useCreateOrder({});

  const { mutateAsync: reusmeBuy } = useResumeBuy({});

  const { data: profileDetails } = useProfileDetails({
    UID: userData?.UID,
  });

  const handlePayment = () => {
    createOrder({
      user_id: userData?.UID,
      amount: Number(100),
      type: "INR",
    }).then((response) => {
      console.log(response);
      const options: any = {
        key: String(import.meta.env.VITE_Razorpay_KEY),
        amount: String(100),
        currency: "INR",
        name: AppConst.LogoName,
        image: logo,
        order_id: response?.order_id,
        handler: (res) => {
          console.log(res);
          reusmeBuy({
            faculityID: userData?.UID,
            templateID: templateNumber,
            template_type: "paid",
            payment_mode: "card",
            transaction_id: res?.razorpay_payment_id,
            transaction_signature: res?.razorpay_signature,
            transaction_order_id: res?.razorpay_order_id,
            payment_type: "razorpay",
            payment_status: "success",
            price: 500,
            data: resumeDataArray,
          }).then((res) => {
            if (res?.status === true) {
              // queryClient.invalidateQueries({
              //   queryKey: [Querykeys.profileDetails],
              // });
               dispatch(paymentStatusCheck(false));

              console.log("success res", res);
              Toast("success", res?.message);
            } else {
              // navigate(`${AppRoute.Dashboard}/${AppRoute.User_Dashboard}`);
              Toast("error", res?.message);
              console.log("failure res", res);
            }
          });
        },
        prefill: {
          name: profileDetails?.user?.name,
          email: profileDetails?.user?.email,
          contact: profileDetails?.user?.mobile,
        },
        theme: {
          color: "#a73358",
        },
      };

      const rzp1 = new Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    });
  };

  return (
    <div className="  w-[60%]  p-[30px] flex flex-col gap-3">
      {!loadingResumeData ? (
        <ResumeLoader />
      ) : (
        <div className=" h-[100%]   bg-white  rounded-l-3xl w-[100%] handleScrollbarResume">
          {/* <ResumeOneTemplate  />  */}

          {templateNumber === 1 && <Testpdf handlePayment={handlePayment} />}
          {templateNumber === 2 && <ResumeTwo handlePayment={handlePayment} />}
          {templateNumber === 3 && <ResumeFour handlePayment={handlePayment} />}
          {templateNumber === 5 && (
            <ResumeThree handlePayment={handlePayment} />
          )}
          {templateNumber === 4 && <ResumeFive handlePayment={handlePayment} />}
        </div>
      )}
    </div>
  );
}

export default RightSection;
