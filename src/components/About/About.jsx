import "./About.css";
import { FaCheck } from "react-icons/fa";

const highlights = [
  "100% Organic Ingredients",
  "Farm-to-Table Freshness",
  "No Artificial Preservatives",
  "Chef-Crafted Recipes",
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <div className="about-img-placeholder">
            <span className="about-emoji">🥗</span>
          </div>
          <div className="experience-badge">
            <span className="exp-number">15+</span>
            <span className="exp-text">Years of Experience</span>
          </div>
        </div>

        <div className="about-content">
          <span className="about-label">About Us</span>
          <h2>
            We Serve Fresh &amp; Healthy Food For Your Better Life
          </h2>
          <p>
            Founded with a passion for healthy living, we bring you the freshest
            ingredients sourced directly from local farms. Every dish is crafted
            with care to ensure maximum nutrition and incredible taste.
          </p>
          <ul className="about-highlights">
            {highlights.map((item) => (
              <li key={item}>
                <span className="check-icon">
                  <FaCheck />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default About;
