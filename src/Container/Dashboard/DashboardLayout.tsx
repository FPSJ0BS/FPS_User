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
const Dashboard = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isModalShow } = useGlobalContext();
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate(AppRoute.User_Dashboard);
    }
  }, [location.pathname]);

  const { modalOpen } = useSelector((state) => state.appliedJobSlice);

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
    <div onClick={() => dispatch(closeModal())} className="dash-wrap">
      <div className="main-page-wrapper">
        <Sidebar className={show} setShow={setShow} />
        {isModalShow && <DeleteAccountModal />}
        {modalOpen && <TrackPopup />}
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
