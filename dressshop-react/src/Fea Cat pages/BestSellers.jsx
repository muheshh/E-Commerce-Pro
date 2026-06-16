// import "./Beachwear.css";
import { useState } from "react";
import products from "../data/products.json"


const BestSellerProducts = products.filter(
    (item) => item.category === "best-sellers"
);

const BestSellers = () => {

    const [sortType, setSortType] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    const filteredProducts = selectedSize
        ? BestSellerProducts.filter((product) =>
            product.sizes.includes(selectedSize)
        )
        : BestSellerProducts;

    const sortedProducts = [...filteredProducts];

    if (sortType === "lowToHigh") {
        sortedProducts.sort(
            (a, b) => a.price - b.price
        );
    }

    if (sortType === "highToLow") {
        sortedProducts.sort(
            (a, b) => b.price - a.price
        );
    }

    return (

    <div className="category-page">

        <h1 className="page-title">
            Best Sellers
        </h1>

        <div className="top-row">

            <div className="left-controls">

                <button className="filter-btn">
                    ☰ FILTER
                </button>

                <select
                    className="sort-select"
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                >
                    <option value="">SORT BY</option>
                    <option value="lowToHigh">Price Low to High</option>
                    <option value="highToLow">Price High to Low</option>
                </select>

            </div>

        </div>

        <div className="size-row">

            {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                >
                    {size}
                </button>
            ))}

            <button onClick={() => setSelectedSize("")}>
                All Sizes
            </button>

        </div>

        <div className="bottom-row">

            <div className="clear-section">

                <span onClick={() => setSelectedSize("")}>
                    ✕ Clear all
                </span>

                <span>
                    ✕ Availability: In stock
                </span>

            </div>

            <div className="product-count">
                {sortedProducts.length} Products
            </div>

        </div>

        <div className="products-container">

            {sortedProducts.map((item) => (

                <div className="product-card" key={item.id}>

                    <div className="image-wrapper">

                        <img
                            src={item.image1}
                            alt={item.title}
                            className="front-image"
                        />

                        <img
                            src={item.image2}
                            alt={item.title}
                            className="back-image"
                        />

                        <div className="hover-details">
                            <p>Fabric : {item.fabric}</p>
                            <p>Length : {item.length}</p>
                            <p>Package : {item.package}</p>
                        </div>

                    </div>

                    <h3>{item.title}</h3>

                    <h4>₹{item.price}</h4>

                    <div className="sizes">
                        {item.sizes.map((size) => (
                            <span key={size}>{size}</span>
                        ))}
                    </div>

                </div>

            ))}

        </div>
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-column">
                    <h3>Information</h3>
                    <ul>
                        <li>Shipping Info</li>
                        <li>Payments</li>
                        <li>Shipping & Exchange</li>
                        <li>Bulk Queries</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Fabric / Print Disclaimer</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>The Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Our Company</li>
                        <li>Contact Us</li>
                        <li>Store Locator</li>
                        <li>Franchise Enquiry</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>My Account</h3>
                    <ul>
                        <li>Track Order</li>
                        <li>Exchange Request</li>
                        <li>Exclusive Benefits</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Join Us</h3>

                    <input
                        type="email"
                        placeholder="Enter email here"
                        className="footer-input"
                    />

                    <p className="footer-text">
                        Apply for our free membership to receive exclusive deals,
                        news, and events.
                    </p>

                    <div className="socials">
                        <span>Facebook</span>
                        <span>Instagram</span>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026, HESH WEAR ! . All rights reserved.
            </div>

        </footer>

    </div>


    );
};

export default BestSellers;