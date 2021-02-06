import React from "react";
import HeroCompStyles from "./HeroComp.module.css";

const HeroComp = () => {
  return (
    <div id="home" className={HeroCompStyles.hero_container}>
      <div className={HeroCompStyles.hero}>
        <div className={HeroCompStyles.main_title}>Racharla Srikanth</div>
        <div className={HeroCompStyles.main_heading}>
          The best teachers educate young people for life, not school.
        </div>
        <button className={HeroCompStyles.main_button}>Download</button>
      </div>
    </div>
  );
};

export default HeroComp;
