import React from "react";
// import { useTranslation } from "react-i18next";
import ContactModal from "../ContactModal";
import "./style.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modalContent">
          {/* </div> */}
          <ContactModal />
        </div>
      </div>
    </div>
  );
}

export default Modal;
