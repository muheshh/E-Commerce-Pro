// import "./Beachwear.css";
// import { useState } from "react";


// const Beachwear = () => {

//     const [sortType, setSortType] = useState("");


//     const Beachproducts = [

//         {
//             id: 1,

//             image1: "/images/beach1.png",

//             image2: "/images/beach1.2.png",

//             title: "Premium Beach Shirt",

//             fabric: "Cotton Linen",

//             length: "Regular Fit",

//             package: "1 Shirt",

//             price: "₹1499",

//             sizes: ["S", "M", "L", "XL", "XXL"]
//         },

//         {
//             id: 2,

//             image1: "/images/beach2.png",

//             image2: "/images/beach2.2.png",

//             title: "Tropical Print Shirt",

//             fabric: "Rayon Blend",

//             length: "Regular Fit",

//             package: "1 Shirt",

//             price: "₹1599",

//             sizes: ["M", "L", "XL", "XXL"]
//         },

//         {
//             id: 3,

//             image1: "/images/beach3.png",

//             image2: "/images/beach3.2.png",

//             title: "Summer Oversized Shirt",

//             fabric: "Premium Cotton",

//             length: "Oversized Fit",

//             package: "1 Shirt",

//             price: "₹1999",

//             sizes: ["S", "L", "XL", "XXL"]
//         },

//         {
//             id: 4,

//             image1: "/images/beach4.png",

//             image2: "/images/beach4.2.png",

//             title: "Palm Resort Shirt",

//             fabric: "Cotton Linen",

//             length: "Relaxed Fit",

//             package: "1 Shirt",

//             price: "₹1899",

//             sizes: ["M", "L", "XL", "XXL"]
//         },

//         {
//             id: 5,

//             image1: "/images/beach5.png",

//             image2: "/images/beach5.2.png",

//             title: "Coastal Breeze Shirt",

//             fabric: "Linen Blend",

//             length: "Regular Fit",

//             package: "1 Shirt",

//             price: "₹1699",

//             sizes: ["S", "M", "L", "XL", "XXL"]
//         },

//         {
//             id: 6,

//             image1: "/images/beach6.png",

//             image2: "/images/beach6.2.png",

//             title: "Beach Club Shirt",

//             fabric: "Pure Cotton",

//             length: "Regular Fit",

//             package: "1 Shirt",

//             price: "₹1799",

//             sizes: ["S", "M", "L", "XL", "XXL"]
//         },

//         {
//             id: 7,

//             image1: "/images/beach7.jpg",

//             image2: "/images/beach7.2.png",

//             title: "Island Escape Shirt",

//             fabric: "Rayon",

//             length: "Relaxed Fit",

//             package: "1 Shirt",

//             price: "₹2099",

//             sizes: ["S", "M", "L", "XL", "XXL"]
//         },

//         {
//             id: 8,

//             image1: "/images/beach8.jpg",

//             image2: "/images/beach8.2.png",

//             title: "Sunset Linen Shirt",

//             fabric: "Linen",

//             length: "Regular Fit",

//             package: "1 Shirt",

//             price: "₹2199",

//             sizes: ["S", "M", "L", "XL", "XXL"]
//         },

//         {
//             id: 9,

//             image1: "/images/beach9.jpg",

//             image2: "/images/beach9.2.png",

//             title: "Ocean Wave Shirt",

//             fabric: "Cotton Blend",

//             length: "Slim Fit",

//             package: "1 Shirt",

//             price: "₹1499",

//             sizes: ["S", "M", "L", "XL", "XXL"]
//         },

//         {
//             id: 10,

//             image1: "/images/beach10.jpg",

//             image2: "/images/beach10.2.png",

//             title: "Vacay Essential Shirt",

//             fabric: "Premium Rayon",

//             length: "Oversized Fit",

//             package: "1 Shirt",

//             price: "₹2299",

//             sizes: ["S", "M", "L", "XL", "XXL"]
//         },

//         {
//             id: 11,

//             image1: "/images/beach11.jpg",

//             image2: "/images/beach11.2.png",

//             title: "Seaside Casual Shirt",

//             fabric: "Pure Cotton",

//             length: "Regular Fit",

//             package: "1 Shirt",

//             price: "₹1899",

//             sizes: ["S", "M", "L", "XL", "XXL"]
//         },

//         {
//             id: 12,

//             image1: "/images/beach12.jpg",

//             image2: "/images/beach12.2.png",

//             title: "Holiday Resort Shirt",

//             fabric: "Linen Cotton",

//             length: "Relaxed Fit",

//             package: "1 Shirt",

//             price: "₹2399",

//             sizes: ["S", "M", "L", "XL", "XXL"]
//         },

//         {
//             id: 13,

//             image1: "/images/beach13.jpg",

//             image2: "/images/beach13.2.png",

//             title: "Lagoon Printed Shirt",

//             fabric: "Rayon Blend",

//             length: "Regular Fit",

//             package: "1 Shirt",

//             price: "₹1799",

//             sizes: ["S", "M", "L", "XL", "XXL"]
//         },

//         {
//             id: 14,

//             image1: "/images/beach14.jpg",

//             image2: "/images/beach14.2.png",

//             title: "Premium Vacation Shirt",

//             fabric: "Luxury Linen",

//             length: "Oversized Fit",

//             package: "1 Shirt",

//             price: "₹2599",

//             sizes: ["S", "M", "L", "XL", "XXL"]
//         },


//     ];

//     const sortedProducts = [...filteredProducts];

//     if (sortType === "lowToHigh") {

//         sortedProducts.sort(
//             (a, b) =>
//                 parseInt(a.price.replace("₹", "")) -
//                 parseInt(b.price.replace("₹", ""))
//         );

//     }

//     if (sortType === "highToLow") {

//         sortedProducts.sort(
//             (a, b) =>
//                 parseInt(b.price.replace("₹", "")) -
//                 parseInt(a.price.replace("₹", ""))
//         );

//     }

//     const [selectedSize, setSelectedSize] = useState("");

//     const filteredProducts = selectedSize
//         ? Beachproducts.filter((product) =>
//             product.sizes.includes(selectedSize)
//         )
//         : Beachproducts;


//     return (
//         <div className="category-page">

//             <h1 className="page-title">
//                 BeAchWear
//             </h1>

//             <div className="top-row">

//                 <div className="left-controls">

//                     <button className="filter-btn">
//                         ☰ FILTER
//                     </button>

//                     <select
//                         className="sort-select"
//                         value={sortType}
//                         onChange={(e) => setSortType(e.target.value)}
//                     >
//                         <option value="">SORT BY</option>
//                         <option value="lowToHigh">Price Low to High</option>
//                         <option value="highToLow">Price High to Low</option>
//                         <option value="newest">Newest</option>
//                     </select>

//                 </div>

//             </div>

//             <div className="size-row">

//                 <button onClick={() => setSelectedSize("S")}>
//                     S
//                 </button>

//                 <button onClick={() => setSelectedSize("M")}>
//                     M
//                 </button>

//                 <button onClick={() => setSelectedSize("L")}>
//                     L
//                 </button>

//                 <button onClick={() => setSelectedSize("XL")}>
//                     XL
//                 </button>

//                 <button onClick={() => setSelectedSize("XXL")}>
//                     XXL
//                 </button>

//                 <button
//                     onClick={() => setSelectedSize("")}
//                 >
//                     All Sizes
//                 </button>

//             </div>

//             <div className="bottom-row">

//                 <div className="clear-section">

//                     <span>✕ Clear all</span>

//                     <span>
//                         ✕ Availability: In stock
//                     </span>

//                 </div>

//                 <div className="product-count">
//                     {sortedProducts.length} Products
//                 </div>

//             </div>


//             <div className="products-container">

//                 {sortedProducts.map((item) => (

//                     <div className="product-card" key={item.id}>

//                         <div className="image-wrapper">

//                             <img
//                                 src={item.image1}
//                                 alt={item.title}
//                                 className="front-image"
//                             />

//                             <img
//                                 src={item.image2}
//                                 alt={item.title}
//                                 className="back-image"
//                             />

//                             <div className="hover-details">

//                                 <p>
//                                     Fabric : {item.fabric}
//                                 </p>

//                                 <p>
//                                     Length : {item.length}
//                                 </p>

//                                 <p>
//                                     Package : {item.package}
//                                 </p>

//                             </div>

//                         </div>

//                         <h3>{item.title}</h3>

//                         <p>{item.description}</p>

//                         <h4>{item.price}</h4>

//                         <div className="sizes">

//                             {item.sizes.map((size) => (

//                                 <span key={size}>
//                                     {size}
//                                 </span>

//                             ))}

//                         </div>

//                     </div>

//                 ))}

//             </div>

//         </div>
//     );
// };

// export default Beachwear;

import "./Beachwear.css";
import { useState } from "react";

const Beachwear = () => {

    const [sortType, setSortType] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    const Beachproducts = [
        {
            id: 1,
            image1: "/images/beach1.png",
            image2: "/images/beach1.2.png",
            title: "Premium Beach Shirt",
            fabric: "Cotton Linen",
            length: "Regular Fit",
            package: "1 Shirt",
            price: "₹1499",
            sizes: ["S", "M", "L", "XL", "XXL"]
        },
        {
            id: 2,
            image1: "/images/beach2.png",
            image2: "/images/beach2.2.png",
            title: "Tropical Print Shirt",
            fabric: "Rayon Blend",
            length: "Regular Fit",
            package: "1 Shirt",
            price: "₹1599",
            sizes: ["M", "L", "XL", "XXL"]
        },
        {
            id: 3,
            image1: "/images/beach3.png",
            image2: "/images/beach3.2.png",
            title: "Summer Oversized Shirt",
            fabric: "Premium Cotton",
            length: "Oversized Fit",
            package: "1 Shirt",
            price: "₹1999",
            sizes: ["S", "L", "XL", "XXL"]
        },
        {
            id: 4,
            image1: "/images/beach4.png",
            image2: "/images/beach4.2.png",
            title: "Palm Resort Shirt",
            fabric: "Cotton Linen",
            length: "Relaxed Fit",
            package: "1 Shirt",
            price: "₹1899",
            sizes: ["M", "L", "XL", "XXL"]
        },
        {
            id: 5,
            image1: "/images/beach5.png",
            image2: "/images/beach5.2.png",
            title: "Coastal Breeze Shirt",
            fabric: "Linen Blend",
            length: "Regular Fit",
            package: "1 Shirt",
            price: "₹1699",
            sizes: ["S", "M", "L", "XL", "XXL"]
        },
        {
            id: 6,
            image1: "/images/beach6.png",
            image2: "/images/beach6.2.png",
            title: "Beach Club Shirt",
            fabric: "Pure Cotton",
            length: "Regular Fit",
            package: "1 Shirt",
            price: "₹1799",
            sizes: ["S", "M", "L", "XL", "XXL"]
        },
        {
            id: 7,
            image1: "/images/beach7.jpg",
            image2: "/images/beach7.2.png",
            title: "Island Escape Shirt",
            fabric: "Rayon",
            length: "Relaxed Fit",
            package: "1 Shirt",
            price: "₹2099",
            sizes: ["S", "M", "L", "XL", "XXL"]
        },
        {
            id: 8,
            image1: "/images/beach8.jpg",
            image2: "/images/beach8.2.png",
            title: "Sunset Linen Shirt",
            fabric: "Linen",
            length: "Regular Fit",
            package: "1 Shirt",
            price: "₹2199",
            sizes: ["S", "M", "L", "XL", "XXL"]
        },
        {
            id: 9,
            image1: "/images/beach9.jpg",
            image2: "/images/beach9.2.png",
            title: "Ocean Wave Shirt",
            fabric: "Cotton Blend",
            length: "Slim Fit",
            package: "1 Shirt",
            price: "₹1499",
            sizes: ["S", "M", "L", "XL", "XXL"]
        },
        {
            id: 10,
            image1: "/images/beach10.jpg",
            image2: "/images/beach10.2.png",
            title: "Vacay Essential Shirt",
            fabric: "Premium Rayon",
            length: "Oversized Fit",
            package: "1 Shirt",
            price: "₹2299",
            sizes: ["S", "M", "L", "XL", "XXL"]
        },
        {
            id: 11,
            image1: "/images/beach11.jpg",
            image2: "/images/beach11.2.png",
            title: "Seaside Casual Shirt",
            fabric: "Pure Cotton",
            length: "Regular Fit",
            package: "1 Shirt",
            price: "₹1899",
            sizes: ["S", "M", "L", "XL", "XXL"]
        },
        {
            id: 12,
            image1: "/images/beach12.jpg",
            image2: "/images/beach12.2.png",
            title: "Holiday Resort Shirt",
            fabric: "Linen Cotton",
            length: "Relaxed Fit",
            package: "1 Shirt",
            price: "₹2399",
            sizes: ["S", "M", "L", "XL", "XXL"]
        },
        {
            id: 13,
            image1: "/images/beach13.jpg",
            image2: "/images/beach13.2.png",
            title: "Lagoon Printed Shirt",
            fabric: "Rayon Blend",
            length: "Regular Fit",
            package: "1 Shirt",
            price: "₹1799",
            sizes: ["S", "M", "L", "XL", "XXL"]
        },
        {
            id: 14,
            image1: "/images/beach14.jpg",
            image2: "/images/beach14.2.png",
            title: "Premium Vacation Shirt",
            fabric: "Luxury Linen",
            length: "Oversized Fit",
            package: "1 Shirt",
            price: "₹2599",
            sizes: ["S", "M", "L", "XL", "XXL"]
        }
    ];

    const filteredProducts = selectedSize
        ? Beachproducts.filter((product) =>
            product.sizes.includes(selectedSize)
        )
        : Beachproducts;

    const sortedProducts = [...filteredProducts];

    if (sortType === "lowToHigh") {
        sortedProducts.sort(
            (a, b) =>
                parseInt(a.price.replace("₹", "")) -
                parseInt(b.price.replace("₹", ""))
        );
    }

    if (sortType === "highToLow") {
        sortedProducts.sort(
            (a, b) =>
                parseInt(b.price.replace("₹", "")) -
                parseInt(a.price.replace("₹", ""))
        );
    }

    return (
        <div className="category-page">

            <h1 className="page-title">BeachWear</h1>

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

                        <h4>{item.price}</h4>

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



export default Beachwear;