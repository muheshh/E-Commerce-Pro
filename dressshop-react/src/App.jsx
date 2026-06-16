import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Discountpopup from "./components/DiscountPopup";
import Topbar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import FeaturedCategories from "./components/FeaturedCategories";
import CategoryScroll from "./components/CategoryScroll";
import CategoryImages from "./components/CategoryImages";
import CollectionSection from "./components/CollectionSection";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";
import Newarrival from "./navbar/newarrival";
import Pants from "./navbar/pants";
import Shirts from "./navbar/Shirts";
import Tshirt from "./navbar/Tshirts";
import Sale from "./navbar/sale";
import Useraccount from "./navbar/Useraccount";
import Cart from "./navbar/Cart"
import Searchbar from "./navbar/Searchbar";

function HomePage() {
    return (
        <>  <Discountpopup />
            <Topbar />
            <Navbar />
            <HeroSlider />
            <FeaturedCategories />
            <CategoryScroll />
            <CategoryImages />
            <CollectionSection />
            <Footer />
        </>
    );
}

function App() {
    return (

        <Routes>

            <Route
                path="/"
                element={<HomePage />}
            />

            <Route
                path="/category/:category"
                element={<CategoryPage />}
            />

            <Route
                path="/new-arrival"
                element={<Newarrival />}
            />

            <Route
                path="/shirts"
                element={<Shirts />}
            />

            <Route
                path="/pants"
                element={<Pants />}
            />

            <Route
                path="/tshirts"
                element={<Tshirt />}
            />

            <Route
                path="/sale"
                element={<Sale />}
            />

            <Route
                path="/useraccount"
                element={<Useraccount />}
            />

            <Route
                path="/cart"
                element={<Cart />}
            />

            <Route
                path="/search/:keyword"
                element={<Searchbar />}
            />

        </Routes>

    );
}

export default App;