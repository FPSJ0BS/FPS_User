import { memo } from "react";
import Resume from "./Resume/Resume";
import Education from "./Education/Education";
import Employment from "./Employment/Employment";
import Skills from "./Skills/Skills";
import Certificate from "./Certificate/Certificate";
import Language from "./Language/Language";
import CareerPreference from "./Career Preference/CareerPreference";
import TopSection from "../../Top Section/TopSection";
import SocialMedia from "./Social Media/SocialMedia";
import OtherDetails from "./Other Details/OtherDetails";
import ProgressBar from "./ProgressBar/ProgressBar";
import BannerProfile from "./Banner/BannerProfile";

function RightSection() {
  return (
    <div className=" w-[100%] xl:w-[75%] flex flex-col gap-3">
      <ProgressBar />
      <TopSection />
      <Resume />
      <Education />
      <Employment />
      <Skills />
      <Certificate />
      <Language />
      <CareerPreference />
      <OtherDetails />
      <SocialMedia />
    </div>
  );
}

export default memo(RightSection);
