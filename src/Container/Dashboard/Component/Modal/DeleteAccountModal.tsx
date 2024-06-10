import { useGlobalContext } from "@Context/GlobalContextProvider";
import Delete from "@Assets/dashboard-svg/Delete";
import useDeleteAccount from "@Hooks/Mutation/useDeleteAccount";
import { AppRoute } from "@Navigator/AppRoute";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

const DeleteAccountModal = () => {
  const { setIsModalshow, userData, setUserLoginData } = useGlobalContext();
  const { mutateAsync:DeleteAccount } = useDeleteAccount({});
  const navigate = useNavigate()
  return (
    <>
      <div
        className="modal fade show"
        id="deleteModal"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-fullscreen modal-dialog-centered">
          <div className="container">
            <div className="remove-account-popup text-center modal-content">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <div className="lazy-img m-auto">
                <Delete color={"#a73358"} width={40} height={50} />
              </div>

              <h2>Are you sure?</h2>
              <p>Are you sure to delete your account? All data will be lost.</p>
              <div className="button-group d-inline-flex justify-content-center align-items-center pt-15">
                <a
                  className="confirm-btn fw-500 tran3s me-3 videoButton"
                  onClick={() =>
                    DeleteAccount({ user_id: userData.UID }).then((res) => {
                      if (res?.status === "success") {
                        setIsModalshow(false);
                        setUserLoginData("");
                        navigate(AppRoute.Home);
                      }
                    })
                  }
                >
                  Yes
                </a>
                <button
                  type="button"
                  className="btn-close fw-500 ms-3"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setIsModalshow(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
};

export default memo(DeleteAccountModal);
