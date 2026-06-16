import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/products.json";

const Navbar = () => {

const [searchTerm, setSearchTerm] = useState("");
const [showSearch, setShowSearch] = useState(false);

const navigate = useNavigate();

const searchResults = products.filter((item) =>
    item.title &&
    item.title.toLowerCase().includes(
        searchTerm.toLowerCase()
    )
);

const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
        navigate(`/search/${searchTerm}`);
        setShowSearch(false);
        setSearchTerm("");
    }
};

const toggleMenu = () => {
    document.getElementById("navLinks").classList.toggle("active");
};

return (
    <header className="navbar">

        <div className="nav-container">

            <div className="logo">
                Hesh Wear!
            </div>

            <ul className="nav-links" id="navLinks">

                <li>
                    <Link to="/new-arrival">
                        New arrival
                    </Link>
                </li>

                <li>
                    <Link to="/shirts">
                        Shirts
                    </Link>
                </li>

                <li>
                    <Link to="/pants">
                        Pants
                    </Link>
                </li>

                <li>
                    <Link to="/tshirts">
                        Tshirt
                    </Link>
                </li>

                <li>
                    <Link to="/sale">
                        Sale
                    </Link>
                </li>

            </ul>

            <div className="nav-icons">

                <i
                    className="bi bi-search"
                    onClick={() => setShowSearch(true)}
                ></i>

                <i
                    className="bi bi-person"
                    onClick={() => navigate("/useraccount")}
                ></i>

                <i
                    className="bi bi-cart4"
                    onClick={() => navigate("/cart")}
                ></i>

            </div>

            <div
                className="menu-toggle"
                onClick={toggleMenu}
            >
                ☰
            </div>

            {showSearch && (
                <>
                    <div
                        className="search-overlay"
                        onClick={() => {
                            setShowSearch(false);
                            setSearchTerm("");
                        }}
                    ></div>

                    <div className="search-modal">

                        <div className="search-header">

                            <i className="bi bi-search search-icon"></i>

                            <input
                                type="text"
                                placeholder="Search for shirts, pants, dresses..."
                                value={searchTerm}
                                onChange={(e) =>
                                    setSearchTerm(e.target.value)
                                }
                                onKeyDown={handleSearch}
                                autoFocus
                            />

                            <button
                                className="close-btn"
                                onClick={() => {
                                    setShowSearch(false);
                                    setSearchTerm("");
                                }}
                            >
                                ✕
                            </button>

                        </div>

                        {searchTerm && (

                            <div className="search-results">

                                {searchResults
                                    .slice(0, 5)
                                    .map((item) => (

                                        <div
                                            key={item.id}
                                            className="search-item"
                                            onClick={() => {
                                                navigate(`/search/${item.title}`);
                                                setShowSearch(false);
                                                setSearchTerm("");
                                            }}
                                        >
                                            {item.title}
                                        </div>

                                    ))}

                            </div>

                        )}

                    </div>
                </>
            )}

        </div>

    </header>
);

};

export default Navbar;
