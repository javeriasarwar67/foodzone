import heroFood from "../../assets/images/hero/hero-food.png";
import avocado from "../../assets/images/hero/avocado.png";
import tomato from "../../assets/images/hero/tomato.png";
import chili from "../../assets/images/hero/chili.png";
import fruitSalad from "../../assets/images/hero/fruit-salad.png";

// 5 dishes that rotate through the orbit — each has its own unique
// photo now. Update name / price / desc / image here any time,
// the animation logic in Hero.jsx never needs to change.
const dishes = [
  {
    id: "avocado-salad",
    name: "Avocado Salad",
    price: 24,
    desc: "Creamy avocado tossed with crisp greens, cherry tomatoes and a light citrus dressing — rich in healthy fats and fibre.",
    image: heroFood,
    alt: "Avocado Salad",
  },
  {
    id: "chicken-caprese-salad",
    name: "Chicken Caprese Salad",
    price: 22,
    desc: "Grilled chicken layered with fresh greens, juicy tomatoes and tender potatoes — a protein-packed classic with a light, herby finish.",
    image: avocado,
    alt: "Chicken Caprese Salad",
  },
  {
    id: "loaded-chicken-fajita-bowl",
    name: "Loaded Chicken Fajita Bowl",
    price: 20,
    desc: "Seasoned grilled chicken over crisp mixed greens with peppers, cucumber and cherry tomatoes — bold, smoky flavour in every bite.",
    image: tomato,
    alt: "Loaded Chicken Fajita Bowl",
  },
  {
    id: "grilled-chicken-salad",
    name: "Grilled Chicken Salad",
    price: 21,
    desc: "Char-grilled chicken breast on a bed of fresh salad greens — a clean, high-protein bowl finished with a light seasoning.",
    image: chili,
    alt: "Grilled Chicken Salad",
  },
  {
    id: "fruit-salad",
    name: "Fruit Salad",
    price: 14,
    desc: "A refreshing mix of mango, pineapple, strawberries, blueberries and kiwi — naturally sweet and packed with vitamins.",
    image: fruitSalad,
    alt: "Fruit Salad",
  },
];

export default dishes;
