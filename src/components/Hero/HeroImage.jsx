import DashedPath from "./DashedPath";
import OrbitDishes from "./OrbitDishes";

// `dishes` + `activeIndex` are passed down from Hero.jsx (via the
// useDishRotation hook) so the image side and the text side
// (HeroContent) always show the same active dish.
function HeroImage({ dishes, activeIndex }) {
  return (
    <div className="hero-image">
      <div className="hero-blob"></div>

      <div className="orbit-ring-spin">
        <DashedPath />
      </div>

      <OrbitDishes dishes={dishes} activeIndex={activeIndex} />
    </div>
  );
}

export default HeroImage;
