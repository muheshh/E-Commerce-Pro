import { useState } from "react";
import "./CategoryScroll.css";
import CategoryImages from "./Categoryphoto";

const categories = [
    "Track Pants",
    "Nearby",
    "All T-Shirts",
    "All Shirts",
    "All Jeans",
    "Ethnic Wear",
    "Shorts",
    "New Collections",
    "Jackets",
    "Footwear",
    "Accessories",
];

export default function CategoryScroll() {
    const [active, setActive] = useState("New Collections");

    return (
        <section className="cs-wrapper">
            {/* HEADER */}
            <div className="cs-header">
                <h2 className="cs-title">
                    New and <br /> Popular
                </h2>

                <div className="cs-scroll">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`cs-pill ${active === cat ? "active" : ""}`}
                            onClick={() => setActive(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* IMAGES BELOW */}
            <div className="cs-images">
                <CategoryImages activeCategory={active} />
            </div>
        </section>
    );
}