import React from "react";
import Contaact from "../img/contact.jpg";
import "../style/Contact.css";

function Contact({onAdd, didContact}) {
  return (
  
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Contaact})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" >
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea rows="5" placeholder="Enter message..." name="message" required></textarea>
          <button type="button" onClick={onAdd}> Send Message</button>
          <p style={{color:'dark red'}}>{didContact}</p>

        </form>
      </div>
    </div>
  );
}

export default Contact;
