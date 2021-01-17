import React from "react";
import FooterStyles from "./Footer.module.css";
import YouTube from "./Youtube.svg";
import LinkedIn from "./linkedin.svg";
import WhatsApp from "./Whatsapp.svg";
import Instagram from "./Instagram.png";

const Footer = () => {
  return (
    <div className={FooterStyles.footer_container}>
      <div className={FooterStyles.footer}>
        <div className={FooterStyles.footer_name}>Srikanth</div>
        <div className={FooterStyles.footer_links}>
          <ul>
            <li title="Click here for YouTube Channel">
              <img src={YouTube} alt="Youtube" />
            </li>
            <li title="Click here for LinkedIn">
              <img src={LinkedIn} alt="Youtube" />
            </li>
            <li title="Click here for WhatsApp Chat">
              <img src={WhatsApp} alt="Youtube" />
            </li>
            <li title="Click here for Instagram">
              <img src={Instagram} alt="Youtube" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
