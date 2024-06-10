import React, { memo } from "react";
import style from "./modal.module.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  EmailShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import facebook from "@Assets/images/facebook.svg";
import Messenger from "@Assets/images/Messenger.svg";
import Twitter from "@Assets/images/Twitter.svg";
import Telegarm from "@Assets/images/Telegarm.svg";
import Linkedin from "@Assets/images/linkedin.svg";
import Mail from "@Assets/images/mail.svg";

type SocialShareModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SocialShareModal: React.FC<SocialShareModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;
 
  return (
    <div className={style.modaloverlay} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalheader}>
          <span className={style.modaltitle}>Share</span>
          <button className={style.closebutton} onClick={onClose}>
            ×
          </button>
        </div>
        <div className={style.modalbody}>
          <TwitterShareButton
            children={
              <a className={`${style.socialicon} w-100`} target="_blank">
                <img
                  src={Twitter}
                  className={`${style.twitter} w-2 me-2 mr-2`}
                />
                Twitter
              </a>
            }
            url={window.location.href}
            style={{ width: "30%" }}
          />
          <TelegramShareButton
            children={
              <a className={`${style.socialicon} w-100`} target="_blank">
                <img
                  src={Telegarm}
                  className={`${style.telegarm} w-2 me-2 mr-2`}
                />
                Telegarm
              </a>
            }
            url={window.location.href}
            style={{ width: "30%" }}
          />
          <WhatsappShareButton
            children={
              <a className={`${style.socialicon} w-100`} target="_blank">
                <img src={Messenger} className={`${style.whatsapp} w-2 me-2`} />
                WhatsApp
              </a>
            }
            url={window.location.href}
            style={{ width: "30%" }}
          />
          <FacebookShareButton
            children={
              <a className={`${style.socialicon} w-100`} target="_blank">
                <img src={facebook} className={`${style.facebook} w-2 me-2`} />
                Messenger
              </a>
            }
            url={window.location.href}
            style={{ width: "30%" }}
          />
          <EmailShareButton
            children={
              <a className={`${style.socialicon} w-100`} target="_blank">
                <img src={Mail} className={`${style.mail} w-2 me-2`} />
                Email
              </a>
            }
            url={window.location.href}
            style={{ width: "30%" }}
          />
          <LinkedinShareButton
            children={
              <a className={`${style.socialicon} w-100`} target="_blank">
                <img src={Linkedin} className={`${style.linkedin} w-2 me-2`} />
                Linkedin
              </a>
            }
            url={window.location.href}
            style={{ width: "30%" }}
          />
          </div>
      </div>
    </div>
  );
};

export default memo(SocialShareModal);
