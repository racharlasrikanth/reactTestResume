import React, { useState } from "react";
import CertificateCard from "./CertificateCard";
import data from "./data";
import CertificationCompoStyles from "./CertificationCompo.module.css";

const CertificationComp = () => {
  const [certificateData, setCertificateData] = useState(data());

  return (
    <div className={CertificationCompoStyles.all_certifications_container}>
      <div className={CertificationCompoStyles.certification_heading}>
        <p>Certifications</p>
      </div>
      <div className={CertificationCompoStyles.card_container}>
        {certificateData.map((eachObj) => {
          return (
            <CertificateCard
              key={eachObj.id}
              name={eachObj.name}
              badge={eachObj.badge}
              id={eachObj.id}
              viewCertificate={eachObj.viewCertificate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CertificationComp;
