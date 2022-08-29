import "./FormStyles.css";

import React from "react";

const Form = () => {
  return <div className="form">
<form>
    <label>Your Name</label>
    <input type="text" placeholder="name"></input>
    <label>Emal</label>
    <input type="text" placeholder="your email"></input>
    <label>Subject</label>
    <input type="text" placeholder="subject"></input>
    <label>Message</label>
    <textarea row="10" placeholder="your message"></textarea>
    <button className="btn">Submit</button>
</form>
  </div>;
};

export default Form;
