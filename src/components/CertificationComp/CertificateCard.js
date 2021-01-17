import React, { useState, useEffect } from "react";
import CardStyles from "./CertificateCard.module.css";
import Love from "./loveCardIcon.png";
import { Link } from "react-router-dom";

const CertificateCard = ({ name, id, badge, viewCertificate }) => {
  const [count, setCount] = useState(32);

  const likeIncreaseHandler = () => {
    setCount(count + 1);
  };

  return (
    <div className={CardStyles.card_container}>
      <div className={CardStyles.card}>
        <img src={badge} alt="Badge" />
        <div className={CardStyles.certificate_title}>{name}</div>
        <div className={CardStyles.buttons}>
          <Link className={CardStyles.like}>
            <img
              className={CardStyles.love}
              src={Love}
              alt="Like"
              onClick={likeIncreaseHandler}
            />
            <div className={CardStyles.count}>{count}</div>
          </Link>
          <Link className={CardStyles.view}>View</Link>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
