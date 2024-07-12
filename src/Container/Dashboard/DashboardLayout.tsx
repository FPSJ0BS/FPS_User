import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";
import "./dashboard.scss";
import DeleteAccountModal from "./Component/Modal/DeleteAccountModal";
import { useGlobalContext } from "@Context/GlobalContextProvider";
import { memo, useEffect, useState } from "react";
import { AppRoute } from "@Navigator/AppRoute";
import TrackPopup from "./Container/Applied/Component/TrackPopup";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, updateAppliedJobValues } from "@/Redux/appliedJobSlice";
import EducationPost from "./Container/Profile/UI/EducationPost/EducationPostPopup";
import EducationEditPopup from "./Container/Profile/UI/EducationPost/EducationEditPopup";
import EducationDeletePopup from "./Container/Profile/UI/EducationPost/EducationDeletePopup";
import SkillsPopup from "./Container/Profile/UI/EducationPost/SkillsPopup";
import EmploymentPostPopup from "./Container/Profile/UI/EducationPost/EmploymentPostPopup";
import EmploymentDeletePopup from "./Container/Profile/UI/EducationPost/EmploymentDeletePopup";
import EmploymentEditPopup from "./Container/Profile/UI/EducationPost/EmploymentEditPopup";
import CertificatePostPopup from "./Container/Profile/UI/EducationPost/CertificatePostPopup";
import CertificateEditPopup from "./Container/Profile/UI/EducationPost/CertificateEditPopup";
import LanguagePopup from "./Container/Profile/UI/EducationPost/LanguagePopup";
import CertificateDeletePopup from "./Container/Profile/UI/EducationPost/CertificateDeletePopup";
import LanguageDeletePopup from "./Container/Profile/UI/EducationPost/LanguageDeletePopup";
import LanguageEditPopup from "./Container/Profile/UI/EducationPost/LanguageEditPopup";
import CareerPreferncePopup from "./Container/Profile/UI/EducationPost/CareerPreferncePopup";
import UserDetailsPopup from "./Container/Profile/UI/EducationPost/UserDetailsPopup";
import SocialMediaPopup from "./Container/Profile/UI/EducationPost/SocialMediaPopup";
import OtherDetails from "./Container/Profile/Bottom Section/Right Section/Other Details/OtherDetails";
import OtherDetailsPopup from "./Container/Profile/UI/EducationPost/OtherDetailsPopup";
const Dashboard = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isModalShow } = useGlobalContext();
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate(AppRoute.User_Dashboard);
    }
  }, [location.pathname]);

  const { modalOpen } = useSelector((state: any) => state.appliedJobSlice);
  const {
    myProfileEducationModal,
    myProfileEducationEditModal,
    myProfileEducationDeleteModal,
    myProfileSkillsAddModal,
    myProfileEmploymentAddModal,
    myProfileEmploymentDeleteModal,
    myProfileEmploymentEditModal,
    myProfileCertificatePostModal,
    myProfileCertificateEditModal,
    myProfileCertificateDeleteModal,
    myProfileLanguageAddModal,
    myProfileLanguageDeleteModal,
    myProfileLanguageEditModal,
    myProfileCareerPreferenceModal,
    myProfileUserDetailsModal,
    myProfileSocialMediaModal,
    myProfileOtherDetailsModal,
  } = useSelector((state: any) => state.myProfileEducationSlice);

  useEffect(() => {
    console.log("modal", modalOpen);
  }, [modalOpen]);

  const popupCLoseFunc = async () => {
    await dispatch(
      updateAppliedJobValues({
        applyID: "",
      })
    );
    await dispatch(closeModal());
  };

  return (
    <div onClick={() => dispatch(closeModal())} className="dash-wrap relative">
      <div className="main-page-wrapper">
        <Sidebar className={show} setShow={setShow} />

        {isModalShow && <DeleteAccountModal />}

        {modalOpen && <TrackPopup />}

        {myProfileEducationModal && <EducationPost />}

        {myProfileEducationEditModal && <EducationEditPopup />}

        {myProfileEducationDeleteModal && <EducationDeletePopup />}

        {myProfileSkillsAddModal && <SkillsPopup />}

        {myProfileEmploymentAddModal && <EmploymentPostPopup />}

        {myProfileEmploymentDeleteModal &&  <EmploymentDeletePopup />}

        {myProfileEmploymentEditModal &&  <EmploymentEditPopup />}

        {myProfileCertificatePostModal && <CertificatePostPopup />}

        {myProfileCertificateEditModal && <CertificateEditPopup />}

        {myProfileCertificateDeleteModal &&  <CertificateDeletePopup />}

        {myProfileLanguageAddModal && <LanguagePopup />}

        {myProfileLanguageDeleteModal && <LanguageDeletePopup />}

        {myProfileLanguageEditModal && <LanguageEditPopup />}

         { myProfileCareerPreferenceModal && <CareerPreferncePopup />}

        {myProfileUserDetailsModal &&  <UserDetailsPopup />}

       { myProfileSocialMediaModal && <SocialMediaPopup />}

       { myProfileOtherDetailsModal && <OtherDetailsPopup />}
        

        <div className="dashboard-body ">
          <div className="position-relative ">
            <Header setShow={setShow} show={show} />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Dashboard);
