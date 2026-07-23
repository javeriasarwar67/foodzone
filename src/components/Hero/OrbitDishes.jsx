import { motion } from "framer-motion";
import "./OrbitDishes.css";

// Base square (px) every dish is rendered at before scaling down.
// Keeping every dish the same base size means we only ever animate
// x / y / scale — no separate width/height animation needed, which
// is what keeps the motion smooth and GPU-friendly.
const BASE = 400;

// Where each "slot" sits inside the 620x560 orbit stage, as a
// center point (x, y) + the scale a dish should have there.
// Slot 0 is the featured spot; 1-4 sit along the curved orbit,
// matching the original thumb-1..thumb-4 positions.
const SLOTS = [
  { x: 450, y: 280, scale: 1 }, // featured (large plate)
  { x: 230, y: 60, scale: 0.19 }, // orbit - top
  { x: 120, y: 195, scale: 0.19 }, // orbit - upper-left
  { x: 95, y: 345, scale: 0.155 }, // orbit - lower-left (smallest)
  { x: 195, y: 480, scale: 0.19 }, // orbit - bottom
];

const transition = { type: "spring", stiffness: 80, damping: 18, mass: 0.9 };

function OrbitDishes({ dishes, activeIndex }) {
  return (
    <div className="orbit-stage">
      {dishes.map((dish, i) => {
        // Distance of this dish from the active one, in the cyclic
        // order, decides which slot it currently belongs to.
        const slot = (i - activeIndex + dishes.length) % dishes.length;
        const target = SLOTS[slot] ?? SLOTS[SLOTS.length - 1];
        const isFeatured = slot === 0;

        return (
          <motion.div
            key={dish.id}
            className={
              "orbit-dish " +
              (isFeatured ? "orbit-dish-featured" : "orbit-dish-thumb")
            }
            style={{ width: BASE, height: BASE }}
            animate={{
              x: target.x - BASE / 2,
              y: target.y - BASE / 2,
              scale: target.scale,
              opacity: isFeatured ? 1 : 0.92,
              zIndex: isFeatured ? 5 : 2,
            }}
            transition={transition}
          >
            <div className="orbit-dish-float">
              <img src={dish.image} alt={dish.alt} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default OrbitDishes;
