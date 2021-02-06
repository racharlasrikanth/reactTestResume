import React from "react";
import CertificationComp from "../../components/CertificationComp/CertificationComp";
import Footer from "../../components/Footer/Footer";
import HeroComp from "../../components/HeroComp/HeroComp";
import NavBar from "../../components/NavBar/NavBar";

const SinglePageApp = () => {
  return (
    <div>
      <NavBar />
      <HeroComp />
      <CertificationComp />
      <Footer />
    </div>
  );
};

export default SinglePageApp;
