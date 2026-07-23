import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import PopularDishes from "../components/PopularDishes/PopularDishes";
import About from "../components/About/About";
import Chef from "../components/Chef/Chef";
import Testimonials from "../components/Testimonials/Testimonials";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularDishes />
      <About />
      <Chef />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;