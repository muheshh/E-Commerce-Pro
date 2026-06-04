import { Link } from "react-router-dom";
import "./FeaturedCategories.css";

import cat1 from "../assets/cat1.jpg.jpg";
import cat2 from "../assets/cat2.jpg.jpg";
import cat3 from "../assets/cat3.jpg.jpg";
import cat4 from "../assets/cat4.jpg.jpg";
import cat5 from "../assets/cat5.jpg.jpg";
import cat6 from "../assets/cat6.jpg.jpg";
import cat7 from "../assets/cat7.jpg";
import cat8 from "../assets/cat8.jpg";

const categories = [
    {
        name: "NEW ARRIVALS",
        image: cat1,
        path: "/new-arrivals",
        bg: "#b4aea8",
    },
    {
        name: "BEST SELLERS",
        image: cat2,
        path: "/best-sellers",
        bg: "#c88d2d",
    },
    {
        name: "ONLINE EXCLUSIVE",
        image: cat3,
        path: "/online-exclusive",
        bg: "#cc5c84",
    },
    {
        name: "beachwear",
        image: cat4,
        path: "/beachwear",
        bg: "#d45a73",
    },
    {
        name: "CO-ORDS",
        image: cat5,
        path: "/co-ords",
        bg: "#8c0023",
    },
    {
        name: "DRESSES",
        image: cat6,
        path: "/dresses",
        bg: "#2b2d3a",
    },
    {
        name: "MATERNITY",
        image: cat7,
        path: "/maternity",
        bg: "#b0227d",
    },
    {
        name: "Classic ONes",
        image: cat8,
        path: "/kurta-set",
        bg: "#d6655e",
    },
];

const FeaturedCategories = () => {
    return (
        <section className="featured">

            <h2>Featured Categories</h2>

            <div className="category-grid">

                {categories.map((item, index) => (
                    <Link to={item.path} className="card" key={index}>

                        <div
                            className="card-image"
                            style={{ background: item.bg }}
                        >
                            <img src={item.image} alt={item.name} />
                        </div>

                        <div className="card-name">
                            {item.name}
                        </div>

                    </Link>
                ))}

            </div>

        </section>
    );
};

export default FeaturedCategories;