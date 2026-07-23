import saladImg from "../../assets/images/categories/salad.png";
import smoothieImg from "../../assets/images/categories/smoothie.png";
import bowlImg from "../../assets/images/categories/bowl.png";
import wrapImg from "../../assets/images/categories/wrap.png";

import "./Categories.css";
import { FiArrowRight } from "react-icons/fi";

const categories = [
  {
    name: "Salads",
    image: saladImg,
    color: "#eef9e8",
    count: "12 Items",
  },
  {
    name: "Smoothies",
    image: smoothieImg,
    color: "#fff0ef",
    count: "8 Items",
  },
  {
    name: "Bowls",
    image: bowlImg,
    color: "#fff8e8",
    count: "15 Items",
  },
  {
    name: "Wraps",
    image: wrapImg,
    color: "#eef6ff",
    count: "10 Items",
  },
];

function Categories() {
  return (
    <section className="categories-section">

      <div className="categories-container">

        <div className="section-title">
          <h2>Explore Our Categories</h2>
          <p>Fresh healthy meals prepared with premium ingredients.</p>
        </div>

        <div className="categories-grid">

          {categories.map((cat) => (

            <div
              key={cat.name}
              className="category-card"
              style={{ background: cat.color }}
            >

              <div className="category-image">

                <img src={cat.image} alt={cat.name} />

              </div>

              <div className="card-content">

                <h3>{cat.name}</h3>

                <span>{cat.count}</span>

                <button>

                  View All

                  <FiArrowRight />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;