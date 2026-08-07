


import React from "react";
import "./Contact.css";

import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "c6092bfe-c6a5-4656-bcca-fdb713e5d46a"
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }
      );

      const result = await response.json();

      console.log(result);

      if (result.success) {
        alert("✅ Message sent successfully!");
        event.target.reset();
      } else {
        alert(result.message);
      }

    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message.");
    }
  };

  return (
    <section id="contact" className="contact">

      <div className="contact-wrapper">

        {/* LEFT SIDE */}

        <div className="contact-left">

          <div className="contact-badge">
            LET'S BUILD SOMETHING
          </div>

          <h1>
            Ready to work
            <br />
            together?
          </h1>

          <p>
            I'm currently open to opportunities in
            Full Stack Development, Java Development,
            Backend Engineering and AI-related roles.
            Feel free to reach out.
          </p>

          <div className="contact-details">

            <div className="info-card">
              <img src={mail_icon} alt="" />

              <div>
                <span>EMAIL</span>
                <h4>
                  madhumithatkvmrb@gmail.com
                </h4>
              </div>
            </div>

            <div className="info-card">
              <img src={call_icon} alt="" />

              <div>
                <span>PHONE</span>
                <h4>
                  +91 6379827461
                </h4>
              </div>
            </div>

            <div className="info-card">
              <img src={location_icon} alt="" />

              <div>
                <span>LOCATION</span>
                <h4>
                  Chennai, Tamil Nadu
                </h4>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <form
          onSubmit={onSubmit}
          className="contact-right"
        >

          <div className="row">

            <div className="field">
              <label>Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="field">
              <label>Your Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

          </div>

          <div className="field">
            <label>Your Message</label>

            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="contact-submit"
          >
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;