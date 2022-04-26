import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <section>
        <form id="login-form">
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <label for="message" className="form-label">
              Message
            </label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
