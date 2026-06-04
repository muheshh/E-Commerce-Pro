import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";


import TopBar from "./components/Topbar";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import FeaturedCategories from "./components/FeaturedCategories";
import CategoryScroll from "./components/CategoryScroll";
import CategoryImages from "./components/Categoryphoto";
import CollectionSection from "./components/CollectionSection";
import Footer from "./components/Footer";



import NewArrivals from "./pages/NewArrivals";

function HomePage() {
    return (
        <>
            <TopBar />
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
                path="/new-arrivals"
                element={<NewArrivals />}
            />

        </Routes>

    );
}

export default App;