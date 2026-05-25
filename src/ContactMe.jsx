import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";

export function ContactMe() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .send(
        "service_8nuu7mo",
        "template_9m6cpju",
        formData,
        "pxVSqvWwaMor8zQjN"
      )
      .then(() => {
        alert("Message sent successfully ✅");
        setFormData({
          user_name: "",
          user_email: "",
          message: ""
        });
      })
      .catch((error) => {
        alert("Failed to send message ❌");
        console.log(error);
      });
  }

  return (
    <>
      <h1 className="skills">
        <span className="skills-title">
          <span style={{ color: "#fff" }}>Contact</span> Me
        </span>
      </h1>

      <form className="contactMe" onSubmit={sendEmail}>
        <div className="inputs">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Enter The Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="send">
            Send Message &#10148;
          </button>
        </div>
      </form>
    </>
  );
}