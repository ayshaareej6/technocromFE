import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ViewPopup = ({visibility, setVisiblity, feilds}) => {

  const popupBgClass = visibility ? "simplePopup-bg show-this" : "simplePopup-bg";
  const popupClass = visibility ? "simplePopup show-this" : "simplePopup";

  return (
    <>
      <div className={popupBgClass}></div>
      <div className={popupClass}>
        <span className="popupCross" onClick={() => setVisiblity(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <div className="login-area">
          {feilds}
        </div>
      </div>
    </>
  );
};

export default ViewPopup;
