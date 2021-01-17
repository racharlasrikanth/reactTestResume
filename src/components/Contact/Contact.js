import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact">
        <div className="share_details">Share Your Details With Me</div>
        <form className="form_details">
          <input type="text" name="" placeholder="Enter Your Name" id="" />
          <input type="text" name="" placeholder="Enter Your Email" id="" />
          <button type="submit">Submit</button>
          <button type="submit">Contact with LinkedIn</button>
          <button type="submit">Contact with WhatsApp</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
