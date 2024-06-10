import Saved from "@Assets/dashboard-svg/saved";
import Edit from "@Assets/dashboard-svg/edit.svg";
import Chart from "@Assets/dashboard-svg/main-graph.png";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import useJobAppliedList from "@Hooks/Queries/useJobAppliedList";
import Title from "@Container/Dashboard/Component/Title/Title";
import Card from "./Component/Card";
import useAllFavourite from "@Hooks/Queries/useAllFavourite";
import FlatList from "@Components/FlatList/FlatLIst";
import List from "./Component/List";
import { AppConst } from "@/Enum/AppConst";
import SEO from "@Components/Seo/Seo";
import { AppRoute } from "@Navigator/AppRoute";
import { memo } from "react";
const UserDashboard = () => {
  const { userData } = useGlobalContext();
  const { data: JobAppliedList } = useJobAppliedList({
    UID: userData?.UID,
  });
  const { data: AllFavourite } = useAllFavourite(
    {
      enabled: !!userData?.UID,
    },
    {
      UID: userData?.UID,
    }
  );

  const getStatusLength = (status: string) => {
    const statusArray = JobAppliedList
      ? JobAppliedList.filter((item) => {
          return status === item.appliedStatus;
        })
      : [];

    return statusArray;
  };
  return (
    <>
      <SEO
        title={`Best Educational and Faculty Jobs in India | ${AppConst.LogoName} `}
        description={`Discover online teaching opportunities for IIT JEE coaching, NEET coaching, Sales & marketing jobs work-from-home positions, and teaching vacancies near you with ${AppConst.LogoName}  in Education. Explore openings for English, Computers, Maths, Science, mother teacher, school principals, vice principal, academic head, academic director and more, spanning across Pre Schools, Schools, Colleges, and Private coaching. Part-time, remote, and full-time roles are available nationwide in India.`}
        metaKeywords={
          "Education Jobs, Education Jobs in India, Education Jobs Portal, Educational Jobs, Educational Job Portal"
        }
        name={"User Dashboard Page"}
        type={"Web Page"}
      />
      <Title title={"Dashboard"} />
      <div className="row">
        <Card
          Icon={<Saved color={" #FFF"} />}
          title={"Saved Jobs"}
          total={AllFavourite?.jobs ? AllFavourite?.jobs?.length : 0}
          navigatePath={`${AppRoute.Dashboard}/${AppRoute.Saved_Job}`}
        />
        <Card
          Icon={
            <img
              alt="icon"
              loading="lazy"
              width={25}
              height={24}
              decoding="async"
              data-nimg={1}
              className="lazy-img"
              src={Edit}
              style={{ color: "transparent" }}
            />
          }
          title={"Applied Job"}
          total={getStatusLength("Applied").length}
          navigatePath={`${AppRoute.Dashboard}/${AppRoute.Applied_Job}`}
        />
        <Card
          Icon={
            <img
              alt="icon"
              loading="lazy"
              width={25}
              height={24}
              decoding="async"
              data-nimg={1}
              className="lazy-img"
              src={Edit}
              style={{ color: "transparent" }}
            />
          }
          title={"Rejected Job"}
          total={getStatusLength("Rejected").length}
          navigatePath={`${AppRoute.Dashboard}/${AppRoute.Rejected_Job}`}
        />
        <Card
          Icon={
            <img
              alt="icon"
              loading="lazy"
              width={25}
              height={24}
              decoding="async"
              data-nimg={1}
              className="lazy-img"
              src={Edit}
              style={{ color: "transparent" }}
            />
          }
          title={"Accepted Job"}
          total={getStatusLength("Accepted").length}
          navigatePath={`${AppRoute.Dashboard}/${AppRoute.Accepted_Job}`}
        />
      </div>
      <div className="row d-flex pt-50 lg-pt-10">
        <div className="col-xl-7 col-lg-6 d-flex flex-column">
          <div className="user-activity-chart bg-white border-20 mt-30">
            <h4 className="dash-title-two">Profile Views</h4>
            <div className="ps-5 pe-5 mt-50">
              <img
                alt="main-graph"
                loading="lazy"
                width={608}
                height={375}
                decoding="async"
                data-nimg={1}
                className="lazy-img m-auto"
                src={Chart}
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6 d-flex">
          <div className="recent-job-tab bg-white border-20 mt-30 w-100">
            <h4 className="dash-title-two">Recent Applied Job</h4>
            <div className="wrapper">
              <FlatList
                data={JobAppliedList?.slice(0, 5)}
                renderItem={(item: any) => <List item={item} />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(UserDashboard);
