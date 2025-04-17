import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "6412283b-09bb-4cc2-ae2e-c30c9b536d6c"); // Replace with your real Web3Forms access key.

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="container my-5 text-white">
      <h2 className="mb-4 text-center">Request a Service</h2>
      <form onSubmit={onSubmit} className="service-form p-4 mx-auto">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="col-12">
            <label className="form-label">Service Type</label>
            <select
              className="form-select"
              name="service"
              required
            >
              <option value="">Choose a service...</option>
              <option value="Website Design">Website Design</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="React Application">React Application</option>
              <option value="UI/UX Consultation">UI/UX Consultation</option>
            </select>
          </div>

          <div className="col-12">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="4"
              placeholder="Tell me more about your project..."
              required
            ></textarea>
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary w-50 mt-3">
              Submit Request
            </button>
            <p className="mt-3">{result}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
