import "./PopularDishes.css";
import { FaStar, FaHeart } from "react-icons/fa";

const dishes = [
  {
    name: "Green Garden Salad",
    price: "$18.00",
    rating: 4.8,
    tag: "Best Seller",
    color: "#f0f7ed",
  },
  {
    name: "Avocado Toast Bowl",
    price: "$22.00",
    rating: 4.9,
    tag: "New",
    color: "#fff3e0",
  },
  {
    name: "Berry Smoothie Bowl",
    price: "$16.00",
    rating: 4.7,
    tag: "Popular",
    color: "#fce4ec",
  },
  {
    name: "Quinoa Power Bowl",
    price: "$24.00",
    rating: 4.6,
    tag: "Healthy",
    color: "#e8f5e1",
  },
  {
    name: "Mediterranean Wrap",
    price: "$19.00",
    rating: 4.8,
    tag: "Trending",
    color: "#e3f2fd",
  },
  {
    name: "Tropical Fruit Salad",
    price: "$14.00",
    rating: 4.5,
    tag: "Fresh",
    color: "#fff8e1",
  },
];

function PopularDishes() {
  return (
    <section className="dishes-section" id="dishes">
      <div className="dishes-container">
        <div className="section-title">
          <h2>Popular Dishes</h2>
          <p>Handpicked favorites that our customers love the most</p>
          <div className="accent-line"></div>
        </div>

        <div className="dishes-grid">
          {dishes.map((dish) => (
            <div className="dish-card" key={dish.name}>
              <div className="dish-image" style={{ background: dish.color }}>
                <span className="dish-tag">{dish.tag}</span>
                <FaHeart className="dish-heart" />
              </div>
              <div className="dish-info">
                <h3>{dish.name}</h3>
                <div className="dish-meta">
                  <div className="dish-rating">
                    <FaStar className="star-icon" />
                    <span>{dish.rating}</span>
                  </div>
                  <span className="dish-price">{dish.price}</span>
                </div>
                {/* TODO: wire this up to CartContext once that folder is added */}
                <button className="dish-add-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDishes;