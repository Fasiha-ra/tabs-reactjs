import React from "react";
import { ContactStyling } from "./contact.styles";
import Button from "../Button";

const Contact = () => {
  return (
    <>
      <ContactStyling>
        <div className="container">
          <h2>
            Contact <span>Us</span>
          </h2>

          <form>
            <label for="Name">Name</label>
            <input
              type="text"
              id="Name"
              className="inputfield"
              placeholder="Enter Name"
            />

            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              className="inputfield"
              placeholder="Enter Email"
            />

            <label for="text">Message</label>
            <textarea
              type="text"
              id="text"
              className="inputfield"
              placeholder="Enter Message"
            />

            <Button dark>Submit</Button>
          </form>
        </div>
      </ContactStyling>
    </>
  );
};

export default Contact;
