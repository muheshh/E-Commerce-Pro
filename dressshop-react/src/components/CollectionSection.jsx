import React, { useRef } from "react";
import "./CollectionSection.css";

const collections = [
  {
    id: 1,
    name: "Oversized Tees",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
  },

  {
    id: 2,
    name: "Street Wear",
    image:
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
  },

  {
    id: 3,
    name: "Baggy Pants",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
  },

{
  id: 4,
  name: "Premium Shirts",
  image:
    "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg",
},

  {
    id: 5,
    name: "Urban Style",
    image:
      "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg",
  },

  {
    id: 6,
    name: "Korean Fits",
    image:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
  },

{
  id: 7,
  name: "Minimal Wear",
  image:
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop",
},

{
  id: 8,
  name: "Formal Wear",
  image:
    "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg",
},

{
  id: 9,
  name: "Cargo Edition",
  image:
    "https://images.pexels.com/photos/9775436/pexels-photo-9775436.jpeg",
},

{
  id: 10,
  name: "Hoodie Collection",
  image:
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=900&auto=format&fit=crop",
},
];

export default function CollectionSection() {
  const scrollRef = useRef(null);

  const slideLeft = () => {
    scrollRef.current.scrollLeft -= 350;
  };

  const slideRight = () => {
    scrollRef.current.scrollLeft += 350;
  };

  return (
    <div className="collection-container">

      <div className="top-section">
        <h1>Explore More Collections</h1>

        <div className="slider-buttons">
          <button onClick={slideLeft}>‹</button>
          <button onClick={slideRight}>›</button>
        </div>
      </div>

      <div className="slider-container" ref={scrollRef}>

        {collections.map((item) => (
          <div className="collection-card" key={item.id}>

            <div className="image-box">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="bottom-content">
              <h3>{item.name}</h3>
              <span>→</span>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}