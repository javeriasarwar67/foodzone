import "./Newsletter.css";
import { FiSend } from "react-icons/fi";

function Newsletter() {
  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <span className="newsletter-label">Newsletter</span>
          <h2>Get 20% Off Your First Order</h2>
          <p>
            Subscribe to our newsletter and receive exclusive deals, new menu
            updates, and healthy eating tips straight to your inbox.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              <FiSend className="send-icon" />
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
