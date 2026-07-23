import "./Testimonials.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Emily Johnson",
    role: "Fitness Enthusiast",
    text: "The best salad I've ever had! Fresh ingredients and amazing flavors. It's become my go-to lunch spot every week.",
    rating: 5,
    emoji: "👩",
    color: "#e8f5e1",
  },
  {
    name: "David Chen",
    role: "Food Blogger",
    text: "Absolutely love the variety and quality. Every bowl is a masterpiece of flavors and nutrition. Highly recommended!",
    rating: 5,
    emoji: "👨",
    color: "#e3f2fd",
  },
  {
    name: "Sarah Williams",
    role: "Yoga Instructor",
    text: "Perfect meals for my healthy lifestyle. The quinoa power bowl is my absolute favorite. Great portions too!",
    rating: 5,
    emoji: "👩‍🦰",
    color: "#fff3e0",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="section-title">
          <h2>What Our Customers Say</h2>
          <p>Real stories from people who love our food</p>
          <div className="accent-line"></div>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div className="testimonial-card" key={review.name}>
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">{review.text}</p>
              <div className="testimonial-rating">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="t-star" />
                ))}
              </div>
              <div className="testimonial-author">
                <div
                  className="author-avatar"
                  style={{ background: review.color }}
                >
                  <span>{review.emoji}</span>
                </div>
                <div>
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
