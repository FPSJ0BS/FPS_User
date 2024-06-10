import { AppConst } from "@/Enum/AppConst";
import SocialMediaLinks from "@Const/SocialMediaLinks";
import { AppRoute } from "@Navigator/AppRoute";

const dataFaq = [
  {
    id: 1,
    heading: "Registration and Account Management",
    children: [
      {
        title: `Why should I register with ${AppConst.LogoName} ?`,
        content: `${AppConst.LogoName}  helps you find the right job matching your aspirations. \nRegistering with ${AppConst.LogoName}  enables you to: \n1- Access and apply in one-click to more than 1 lakh jobs \n2- Store and access your Resume online \n3- Get your CV viewed by over 3500 recuiters who will contact you with un-advertized jobs. \n4- Create multiple customized profiles and apply to a job using the most relevant profile`,
      },
      {
        title: "How do I create a job seeker account?",
        content:
          "If you are a job seeker searching for jobs, create account by visiting Sign up page. Sign up button is available on top and bottom on page.",
      },
      {
        title: `Can I post my resume on ${AppConst.LogoName} ?`,
        content: `To post your Resume at ${AppConst.LogoName} , click on EDIT profile,in the bottom of page you can see option to upload resume.`,
      },
      {
        title: "Does it cost to post my Resume?",
        content: `No, posting a Resume on ${AppConst.LogoName}  is absolutely Free of Cost.`,
      },
      {
        title: "What Do FPSJOB.Com Do With My Details?",

        content:
          "We take your privacy very seriously and under no circumstances do we give third parties access to resumés or email addresses without your consent",
      },
      {
        title: "How Do I Update My Phone Number, Email Address Or Password?",
        content:
          "Sign in to your account with your registered mobile number or email id, click your name at the top right of the page, and select edit profile. \nUpdate your current mobile number or alternative mobile number by verifying with an OTP. \nFor updating password Click Change Password to change your password. \nClick Change Email to change your email address.",
      },
      {
        title: "I Have Not Registered Myself Till Now. What Should I Do?",
        content:
          "You will need to first Sign Up at our Website in the “For Job-Seekers” section - https://www.fpsjob.com/signup. \nOnce the basic Sign-Up is done, you would need to Login with your Register Mobile number with OTP or Email id and password and then update your profile with detailed Skills and Experience in as much detail as possible. \n We also suggest uploading your updated resume to maximise your chances.",
      },

      {
        title:
          "What Does “Your Profile Is X% Complete” Mean? / Why Should My Profile Be 100% Complete?	",
        content: `It is important to have a complete profile on ${AppConst.LogoName}  as it increases your chance of recruiters noticing and your profile and contacting you. \nFor example, recruiters are 80% more likely to contact profiles with a CV than profiles without a CV. \nEach field in your FPSJOB profile has been assigned a certain % weight and completing these fields would increase your overall profile completion percentage. \nIf your profile completion score is less than 100%, it means that some important fields are incomplete in your profile and you need to fill them. \nWe recommend you to have a profile completion score close to 100% so that it gives you the best chance to find a job and get the best results at FPSJOBi. \nMoreover, keep updating your FPSJOB profile so that recruiters can see your latest accomplishments. \nThis would ensure that you always maintain your edge on FPSJOB and do not miss opportunities.`,
      },
      {
        title: `Does It Cost To Create A ${AppConst.LogoName}  Profile?`,
        content:
          "No, creating a profile on FPSJOB.com is absolutely Free of Cost.",
      },
      {
        title: `How Can I Control Who Views My Profile On ${AppConst.LogoName} ?`,
        content:
          "Once you create a profile on FPSJOB, No recruiter registered with FPSJOB can't view it. only the FPSJOB team can view it. When you apply for a job your profile submitted to FPSJOB admin and sub-admin, our team screen the received application on behalf of users profile like experience, Current salary, Current and past organisation, if you're working on the same institute you've applied for our team don't schedule the interview. Because we take care of your current job",
      },
    ],
  },

  {
    id: 2,
    heading: "Job Application Process",
    children: [
      {
        title: "What are the most important things to include in my resume?",
        content:
          "Some essential things to include in your resume are: your name, contact information, education history, work or internship experience, and related skills. \nAll of these details should be tailored for each individual job application. Additionally, you can include professional organizations and special awards if you think they’re relevant.",
      },
      {
        title:
          "Should I apply for a job even if I don’t have the specified experience?",
        content:
          "Absolutely! If you think you can handle the job requirements, it never hurts to apply for the position. \nWhether you have less years of experience than they’re asking, or you are missing one of the hard skills mentioned, these don’t necessarily rule you out from landing the job. Skills can be learned on the job, and if you’re the best candidate, years of experience won’t matter in the end. \nJust don’t lie and say you have the qualifications when you don’t.",
      },
      {
        title: "How Do I Apply For A Job On FPSJOB.Com",
        content:
          "First Create a free account with FPSJOB.com by clicking here: <a href='https://fpsjob.com/signup' style='text-decoration: underline;'>https://fpsjob.com/signup</a>, \nFill in all the required information, Search for the job by category or job title, then click the job you want to apply for. The next step is to click Apply for this job. \nYou may be asked to sign in or register if you haven't already done so. Once you’re signed in to FPSJOB, there are four steps to applying*: \n Step 1: Choose documents (your resume & cover letter, Photo, demo lecture link if any) \n Step 2:Answer employer questions \n Step 3: Update FPSJOB Profile \n Step 4: Subscribe any Package Select a preferred date for the interview process Review and submit \n*Please note: Some advertisers send you to their company’s website to complete the application. If this occurs, you will no longer be on the FPSJOB website and the following steps won't apply to you. \nStep 1: Choose documents Your resumé Select a resume stored on FPSJOB, or upload a new one, by selecting Upload a resumé. The file can be in the following format (Microsoft Word (.doc or .docx), Adobe PDF (.pdf) or a text file (.txt or .rtf). There is a file size limit of 2MB. You can also choose not to include a resumé. \nStep 2: Update your Profile Your FPSJOB Profile (which includes your personal summary, career history, education, licences & certifications, and skills) is sent with your application, so ensure it is up-to-date and includes your career history and qualifications. \nStep 3: Review and submit Before you submit your application, check you have attached the right documents and confirm all the information is correct, then submit, and breathe a sigh of relief after you’ve applied \nOnce you’ve applied for the job, your application is submitted to the FPSJOB. Our hard team screen & filter all the received application, if your profile matched the requirement, then we submitted the application to the employer.",
      },
    ],
  },

  {
    id: 3,
    heading: "Troubleshooting and Support",
    children: [
      {
        title: "What if I've forgotten my password?	",
        content:
          "Click Forgot password? (on the sign-in page, just above the Password field), type your mobile number or email address and we'll email you an otp to reset your password. \n You should receive the OTP within a couple of seconds. if you didn't find the otp in the inbox Check your spam or junk folder if you don't see the email in your inbox. \n And be sure to click the link as soon as you receive it - it's only valid for 24 hours.",
      },
      {
        title: "I Am Having Trouble Uploading My CV. How Do I Upload It?",
        content:
          "Please try reducing the size of your document to less than 2 MB. You may try switching formats between one of pdf, RTF, word doc or word Docx to see which one gives the least size. If you have added a photo or any other pictures to your document CV, please try removing them from the CV. You can always attach a photo to your FPSJOB.com profile separately. If you are not able to upload a CV with a size of less than 2MB, your file may be corrupted. Try changing the format of the CV file (maybe a word to .pdf) and upload again.",
      },

      {
        title: "How Will Your Team Get In Touch With Me?",
        content:
          "Our Team will get in touch with you either at the phone number(s) or Email id you have provided on registration. Please ensure your phone number is updated, at all times, and provide a valid alternative number as well. Please remember to keep checking your Email periodically. Some job roles require a further application process to be completed - usually through filling of a Form that will get sent through Email only.",
      },
      {
        title:
          "I Have Registered, However Did Not Receive Any Email Or Text Confirming It. Can You Please Explain? Should I Register Again? OR I Have Registered My Profile Long Time Back. But Have Still Not Been Called For Any Opportunity.",
        content:
          "Due to the high volume of registrations, we were not providing confirmations on registration earlier. Rest assured that once you submit your Form with all mandatory details, the registration process is completed. No further confirmations are required. There is no need to register again. You will be contacted if shortlisted for specific job roles.",
      },
      {
        title:
          "Can You Give Me A Contact Number So That I Can Talk To Someone?",
        content: `Due to high volume, we encourage you to read these Frequently Asked Questions, and only if there are any queries remaining to be addressed, you may Call / Whatsapp at +91 ${AppConst.MobileNumberOne}/ write to <a href={mailto:${AppConst.Email}}>${AppConst.Email}</a>. for technical support you call 01206405859 If the query has already been covered in this document, please understand that it would be difficult for us to respond to you.`,
      },
      {
        title:
          "Where Is The Company Based At? Can We Come In Person And Talk To Someone?",
        content: `The registered office of our Company is in Mohali, Punjab. However, we are largely a remote organization. The three co-founders, as well as all Internal Staff who work for FPSJOB, work largely remotely. If you are unable to register for any reason, you may write to <a href={mailto:${AppConst.Email}}>${AppConst.Email}</a> ${AppConst.Email} / contact us at<a href={tel:${AppConst.MobileNumberOne}}>+91${AppConst.MobileNumberOne}</a>. Please refrain from asking for detailed updates about job openings. Those questions are addressed here in this Frequently Asked Questions.`,
      },
    ],
  },

  {
    id: 4,
    heading: "General Information",
    children: [
      {
        title: `What Type Of Firm Is ${AppConst.LogoName} ? What Does It Do?`,
        content: `We are a private limited company founded by 3 Alumni of IIT & NIT. \nThe motive behind the foundation of ${AppConst.LogoName}  is to facilitate the educational institutes with deserved candidates without any hassle. We provide efficient and skilled staff to the educational institutes, schools, and colleges in India and also facilitate the employees with great career opportunities. \nIndeed it is the online solution for both employees and employers who are looking for the right candidates. Please refer to the Sections on the FPSJOBS website <a href=${AppRoute.Home}>(www.fpsjob.com)</a> on “About Us” <a href=${AppRoute.About_Us}>(https://fpsjob.com/about-us)</a>. You can also visit our Facebook page for some regular updates <a href=${SocialMediaLinks.facebook}>(https://www.facebook.com/fpsjobs)</a>`,
      },
      {
        title: "What Type Of Jobs Do You Offer?",
        content:
          "We are specialised in the Education sector and Functions such as IIT-JEE, NEET, Coachings, School Jobs Sales, Edtech Marketing, Digital Marketing, Business Development, Finance, Accounting, Graphic Design, Technology, Learning Content Writing, Creative Content Writing. It depends on the specific opportunity available at that point in time.",
      },
      {
        title: "Are You A Genuine Organisation?",
        content:
          "We are a 100% genuine organization. We are a private limited company and have a reputed CA Firm that audits our books of account.",
      },
    ],
  },
];
export default dataFaq;
