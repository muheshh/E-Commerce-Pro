import React, { useState } from 'react'
import "./Useraccount.css"
import products from "../data/products.json";
import Overview from "./Overview";
import Orders from "./Orders"
import Wishlist from "./Whishlish";
import Address from "./Address";
import Profile from "./Profile";
import Settings from "./Settings"

const Useraccount = () => {

    const [activeTab, setActiveTab] = useState("overview");

    const recentOrders = [
        {
            id: "1001",
            product: "Premium Linen Shirt",
            status: "Delivered",
            price: "₹1,499"
        },
        {
            id: "1002",
            product: "Oversized Beach Tee",
            status: "Processing",
            price: "₹999"
        }
    ];

    const wishlistItems = products.slice(0, 3);

    const address = {

        name: "Muhesh Kumar",

        phone: "+91 9876543210",

        address: "123 Main Street",

        city: "Coimbatore",

        state: "Tamil Nadu",

        pincode: "641001"

    };

    return (

        <div className="account-page">

            <div className="account-sidebar">

                <h2>My Account</h2>

                <ul className="sidebar-menu">

                    <li
                        className={activeTab === "overview" ? "active-menu" : ""}
                        onClick={() => setActiveTab("overview")}
                    >
                        Overview
                    </li>

                    <li
                        className={activeTab === "orders" ? "active-menu" : ""}
                        onClick={() => setActiveTab("orders")}
                    >
                        Orders
                    </li>

                    <li
                        className={activeTab === "wishlist" ? "active-menu" : ""}
                        onClick={() => setActiveTab("wishlist")}
                    >
                        Wishlist
                    </li>

                    <li
                        className={activeTab === "addresses" ? "active-menu" : ""}
                        onClick={() => setActiveTab("addresses")}
                    >
                        Addresses
                    </li>

                    <li
                        className={activeTab === "profile" ? "active-menu" : ""}
                        onClick={() => setActiveTab("profile")}
                    >
                        Profile
                    </li>

                    <li
                        className={activeTab === "settings" ? "active-menu" : ""}
                        onClick={() => setActiveTab("settings")}
                    >
                        Settings
                    </li>

                    <li
                        className={activeTab === "logout" ? "active-menu" : ""}
                        onClick={() => setActiveTab("logout")}
                    >
                        Logout
                    </li>

                </ul>

            </div>

            <div className="account-content">

                <div className="profile-header">

                    <div className="profile-avatar">
                        MK
                    </div>

                    <div className="profile-info">

                        <h1>Welcome Back 👋</h1>

                        <h2>Muhesh Kumar</h2>

                        <p>Member Since 2025</p>

                    </div>

                </div>

                <div className="account-stats">

                    <div className="stat-box">

                        <h3>12</h3>

                        <p>Orders</p>

                    </div>

                    <div className="stat-box">

                        <h3>5</h3>

                        <p>Wishlist</p>

                    </div>

                    <div className="stat-box">

                        <h3>2</h3>

                        <p>Addresses</p>

                    </div>

                </div>

                {activeTab === "overview" && (

                    <div className="quick-actions">

                        <div className="action-card">
                            <h3>📦 My Orders</h3>
                            <p>View all your orders</p>
                        </div>

                        <div className="action-card">
                            <h3>❤️ Wishlist</h3>
                            <p>Saved products</p>
                        </div>

                        <div className="action-card">
                            <h3>📍 Addresses</h3>
                            <p>Manage addresses</p>
                        </div>

                        <div className="action-card">
                            <h3>👤 Profile</h3>
                            <p>Edit account details</p>
                        </div>

                    </div>

                )}

                {activeTab === "wishlist" && (
                    <div className="recent-orders">

                        <h2>Recent Orders</h2>

                        {
                            recentOrders.map((order) => (

                                <div
                                    key={order.id}
                                    className="order-card"
                                >

                                    <div>

                                        <h3>{order.product}</h3>

                                        <p>{order.id}</p>

                                    </div>

                                    <div>

                                        <span
                                            className={`status ${order.status.toLowerCase()}`}
                                        >
                                            {order.status}
                                        </span>

                                        <h4>{order.price}</h4>

                                    </div>

                                </div>

                            ))
                        }

                    </div>

                )}

                <div className="wishlist-preview">

                    <h2>Wishlist Preview</h2>

                    <div className="wishlist-grid">

                        {
                            wishlistItems.map((item) => (

                                <div
                                    key={item.id}
                                    className="wishlist-card"
                                >

                                    <div className="wishlist-image">

                                        <img
                                            src={item.image1}
                                            alt={item.title}
                                        />

                                        {/* <img src={item.image} alt={item.name} /> */}

                                    </div>

                                    <h3>{item.title}</h3>

                                    <p>₹{item.price}</p>

                                    <button className="wishlist-btn">
                                        Quick View
                                    </button>

                                </div>

                            ))
                        }

                    </div>

                </div>

                {activeTab === "addresses" && (

                    <div className="saved-address">

                        <h2>Saved Address</h2>

                        <div className="address-card">

                            <h3>{address.name}</h3>

                            <p>{address.phone}</p>

                            <p>{address.address}</p>

                            <p>{address.city}</p>

                            <p>{address.state}</p>

                            <p>{address.pincode}</p>

                            <button>
                                Edit Address
                            </button>

                        </div>

                    </div>

                )}

                {activeTab === "profile" && (
                    <Profile />
                )}

                {activeTab === "settings" && (
                    <Settings />
                )}

            </div>

        </div>

    );
};

export default Useraccount;
