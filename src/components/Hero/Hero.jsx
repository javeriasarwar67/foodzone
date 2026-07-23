import "./Hero.css";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import dishes from "./dishesData";
import useDishRotation from "./useDishRotation";

function Hero() {
  // Single source of truth for "which dish is active right now" —
  // both HeroContent (text) and HeroImage (orbit) read from it,
  // so they can never fall out of sync.
  const { activeIndex, activeDish, next, prev } = useDishRotation(dishes, 3800);

  return (
    <section className="hero-page" id="home">
      <div className="hero-card">
        <div className="hero-container">
          <HeroContent dish={activeDish} onNext={next} onPrev={prev} />
          <HeroImage dishes={dishes} activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  );
}

export default Hero;