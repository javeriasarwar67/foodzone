import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <h2 className="footer-logo">Foodie .</h2>
            <p className="footer-desc">
              Bringing you the freshest and healthiest meals since 2010.
              Every bite is a step towards a healthier you.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Salads</a></li>
              <li><a href="#">Smoothies</a></li>
              <li><a href="#">Bowls</a></li>
              <li><a href="#">Wraps</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                123 Green Street, NY 10001
              </li>
              <li>
                <FaPhone className="contact-icon" />
                +1 (555) 123-4567
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                hello@foodie.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 foodie. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
