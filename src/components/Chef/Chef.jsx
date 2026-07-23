import "./Chef.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const chefs = [
  {
    name: "Marco Bellini",
    role: "Head Chef",
    emoji: "👨‍🍳",
    color: "#e8f5e1",
  },
  {
    name: "Sophie Laurent",
    role: "Pastry Chef",
    emoji: "👩‍🍳",
    color: "#fff3e0",
  },
  {
    name: "James Wilson",
    role: "Nutritionist",
    emoji: "🧑‍🍳",
    color: "#e3f2fd",
  },
];

function Chef() {
  return (
    <section className="chef-section" id="chef">
      <div className="chef-container">
        <div className="section-title">
          <h2>Meet Our Chefs</h2>
          <p>Talented culinary artists behind every delicious dish</p>
          <div className="accent-line"></div>
        </div>

        <div className="chef-grid">
          {chefs.map((chef) => (
            <div className="chef-card" key={chef.name}>
              <div
                className="chef-avatar"
                style={{ background: chef.color }}
              >
                <span className="chef-emoji">{chef.emoji}</span>
              </div>
              <h3>{chef.name}</h3>
              <span className="chef-role">{chef.role}</span>
              <div className="chef-socials">
                <FaInstagram className="chef-icon" />
                <FaFacebookF className="chef-icon" />
                <FaTwitter className="chef-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Chef;
