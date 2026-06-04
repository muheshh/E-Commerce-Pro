import React from "react";
import "./Categoryphoto.css";

// 🔹 Import all images (4 per category)

// New & Popular
import new1 from "../assets/new1.jpg.jpg";
import new2 from "../assets/new2.jpg.jpg";
import new3 from "../assets/new3.jpg.jpg";
import new4 from "../assets/new4.jpg.jpg";

// Nearby
import near1 from "../assets/near1.jpg.jpg";
import near2 from "../assets/near2.jpg.jpg";
import near3 from "../assets/near3.jpg.jpg";
import near4 from "../assets/near4.jpg.jpg";

// T-Shirts
import tshirt1 from "../assets/tshirt1.jpg.jpg";
import tshirt2 from "../assets/tshirt2.jpg.jpg";
import tshirt3 from "../assets/tshirt3.jpg.jpg";
import tshirt4 from "../assets/tshirt4.jpg.jpg";

// Shirts
import shirt1 from "../assets/shirt1.jpg.jpg";
import shirt2 from "../assets/shirt2.jpg.jpg";
import shirt3 from "../assets/shirt3.jpg.jpg";
import shirt4 from "../assets/shirt4.jpg.jpg";

// Jeans
import jeans1 from "../assets/jeans1.jpg.jpg";
import jeans2 from "../assets/jeans2.jpg.jpg";
import jeans3 from "../assets/jeans3.jpg.jpg";
import jeans4 from "../assets/jeans4.jpg.jpg";

// Ethnic
import ethnic1 from "../assets/ethnic1.jpg.jpg";
import ethnic2 from "../assets/ethnic2.jpg.jpg";
import ethnic3 from "../assets/ethnic3.jpg.jpg";
import ethnic4 from "../assets/ethnic4.jpg.jpg";

// Shorts
import short1 from "../assets/short1.jpg.jpg";
import short2 from "../assets/short2.jpg.jpg";
import short3 from "../assets/short3.jpg.jpg";
import short4 from "../assets/short4.jpg.jpg";

// Track Pants
import track1 from "../assets/track1.jpg.jpg";
import track2 from "../assets/track2.jpg.jpg";
import track3 from "../assets/track3.jpg.jpg";
import track4 from "../assets/track4.jpg.jpg";

// Jackets
import jacket1 from "../assets/jacket1.jpg.jpg";
import jacket2 from "../assets/jacket2.jpg.jpg";
import jacket3 from "../assets/jacket3.jpg.jpg";
import jacket4 from "../assets/jacket4.jpg.jpg";

// Footwear
import foot1 from "../assets/foot1.jpg.jpg";
import foot2 from "../assets/foot2.jpg.jpg";
import foot3 from "../assets/foot3.jpg.jpg";
import foot4 from "../assets/foot4.jpg.jpg";

// Accessories
import acc1 from "../assets/acc1.jpg.jpg";
import acc2 from "../assets/acc2.jpg.jpg";
import acc3 from "../assets/acc3.jpg.jpg";
import acc4 from "../assets/acc4.jpg.jpg";

const categoryImages = {
  "Track Pants": [track1, track2, track3, track4],
  "Nearby": [near1, near2, near3, near4],
  "All T-Shirts": [tshirt1, tshirt2, tshirt3, tshirt4],
  "All Shirts": [shirt1, shirt2, shirt3, shirt4],
  "All Jeans": [jeans1, jeans2, jeans3, jeans4],
  "Ethnic Wear": [ethnic1, ethnic2, ethnic3, ethnic4],
  "Shorts": [short1, short2, short3, short4],
  "Jackets": [jacket1, jacket2, jacket3, jacket4],
  "New Collection": [new1, new2, new3, new4],
  "Footwear": [foot1, foot2, foot3, foot4],
  "Accessories": [acc1, acc2, acc3, acc4],
};
const CategoryImages = ({ activeCategory }) => {

  return (
  <div className="image-grid">
    {(categoryImages[activeCategory] || []).map((img, index) => (
      <div className="card" key={index}>

        {/* IMAGE */}
        <img
  src={img}
  alt="category"
  loading="lazy"
  decoding="async"
/>

        {/* SIZES BELOW IMAGE */}
        <div className="sizes">
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <span>XL</span>
        </div>

      </div>
    ))}
  </div>
);  
};

export default CategoryImages;