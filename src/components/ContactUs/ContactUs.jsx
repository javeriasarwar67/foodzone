import "./ContactUs.css";
import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../Footer/Footer";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have a question..ask anything you want
          feedbach and any type of queries we'll be here
          for you..
        </p>
      </section>
      <section className="contact-body">
        <div className="contact-container">
          <div className="left-side">
            <div className="card-container">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <FaWhatsapp />
                </div>
                <h4>whatsapp</h4>
                <p>0092726625632</p>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <FiPhone />
                </div>
                <h4>phone</h4>
                <p>03718871628</p>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <FiMail />
                </div>
                <h4>Email</h4>
                <p>hel@gmail.com</p>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <FiMapPin />
                </div>
                <h4>address</h4>
                <p>address will be here</p>
              </div>
            </div>
          </div>
          <div className="Right-side">
            <h2>Get In Touch</h2>
            <p>
              fill out the form below and our team will get back to you as
              soon as possible
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Email</label>
              <input type="email"
                placeholder="example@youremail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Subject</label>
              <input
                type="text"
                placeholder="Title"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <label>Message</label>
              <textarea
                placeholder="Type your msg"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button type="submit" className="contact-submit-btn">
                Send Now <FiSend />
              </button>

              {sent && (
                <p className="contact-success-msg">
                  Thank youu Your message has been sent
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactUs;