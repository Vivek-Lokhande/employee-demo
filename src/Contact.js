import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="col-md-6">
        <h1 className="text-dark">Contact Us</h1>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label h6">
            Email address :
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label h6">
            Enter Text Below :
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            placeholder="Enter Something Here"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
