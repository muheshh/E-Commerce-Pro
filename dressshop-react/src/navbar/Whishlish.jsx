import React from "react";

const Wishlist = ({ wishlistItems }) => {
    return (
        <div className="wishlist-preview">

            <h2>My Wishlist</h2>

            <div className="wishlist-grid">

                {wishlistItems.map((item) => (

                    <div
                        key={item.id}
                        className="wishlist-card"
                    >

                        <img
                            src={item.image1}
                            alt={item.title}
                        />

                        <h3>{item.title}</h3>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Wishlist;