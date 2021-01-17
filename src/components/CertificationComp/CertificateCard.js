import React from "react";
import CardStyles from "./CertificateCard.module.css";

const CertificateCard = ({ name, id, badge, viewCertificate }) => {
  return (
    <div className={CardStyles.card_container}>
      <div className={CardStyles.card}>
        <img src={badge} alt="" />
        <div className={CardStyles.certificate_title}>{name}</div>
        <div className={CardStyles.buttons}>
          <a className={CardStyles.like} href="#">
            Like
          </a>
          <a className={CardStyles.view} href="#">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
