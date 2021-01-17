import React from "react";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import HeroComp from "../../components/HeroComp/HeroComp";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroComp />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
