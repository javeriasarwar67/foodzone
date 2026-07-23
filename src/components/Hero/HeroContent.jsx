import { motion, AnimatePresence } from "framer-motion";
import QuantitySelector from "./QuantitySelector";

// `dish` is the currently-active dish (from useDishRotation in
// Hero.jsx). Text fades + slides in whenever `dish.id` changes,
// staying perfectly in sync with the orbit image swap.
function HeroContent({ dish, onNext, onPrev }) {
  return (
    <div className="hero-content">

      <AnimatePresence mode="wait">
        <motion.div
          key={dish.id}
          initial={{ opacity: 0, x: 26 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -26 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h1>{dish.name}</h1>
          <p className="hero-price">${dish.price.toFixed(2)}</p>
          <p className="hero-desc">{dish.desc}</p>
        </motion.div>
      </AnimatePresence>

      <div className="hero-actions">
        <QuantitySelector />
        <button className="order-btn">Order Now</button>
      </div>

      <div className="hero-nav-links">
        <button type="button" className="nav-link-btn" onClick={onPrev}>
          <span className="arrow">&larr;</span> Previous
        </button>
        <button type="button" className="nav-link-btn" onClick={onNext}>
          Next <span className="arrow">&rarr;</span>
        </button>
      </div>

      <div className="stay-tag">
        <p>Stay Healthy</p>
        <p>Stay Safe</p>
      </div>

    </div>
  );
}

export default HeroContent;
