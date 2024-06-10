import { memo, useEffect } from "react";

interface IModalProp {
  children: JSX.Element;
  setIsModal: (value: boolean) => void;
  isModal: boolean;
  isFull?: boolean;
}
const Modal = ({
  children,
  setIsModal,
  isModal,
  isFull = false,
}: IModalProp) => {
  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [setIsModal]);
  return (
    <>
      <div
        className="modal fade show"
        id="deleteModal"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
        style={{ display: "block", zIndex: "10001", overflowY: "auto" }}
      >
        {!isFull && (
          <button
            type="button"
            className="btnclose"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => setIsModal(false)}
            style={{ display: "block", zIndex: "10001" }}
          >
            x
          </button>
        )}
        <div className="modal-dialog modal-fullscreen modal-dialog-centered my-0">
          <div className="container d-flex flex-row justify-content-center">
            <div
              className="remove-account-popup text-center modal-content"
              style={{
                width: `${isFull ? "100%" : "60%"}`,
              }}
            >
              <div className="button-group">{children}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop" style={{ zIndex: "10000" }}></div>
    </>
  );
};

export default memo(Modal);
