import React from "react";
import "./About.css";
import ImageDp from "./profileImage.jpg";

const About = () => {
  return (
    <div id="about" className="about_container">
      <div className="about_page">
        <div className="about_left_side">
          <div className="image_wrapper">
            <img src={ImageDp} alt="picture" />
          </div>
        </div>
        <div className="about_right_side">
          <div className="content">
            <h1 className="title_about">ABOUT</h1>
            <p className="small_intro">
              I am a Web Developer and also i have a hands on experience on Web
              development as well as Cloud Technologies like AWS. and also I am
              AWS Certified.
            </p>
            <h1 className="contact_me">Contact Us</h1>
            <input
              className="input_name"
              type="text"
              name=""
              placeholder="Enter Your Name"
              id=""
            />
            <input
              className="input_email"
              type="email"
              name=""
              placeholder="Enter Your Email"
              id=""
            />
            <button className="submit_button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
