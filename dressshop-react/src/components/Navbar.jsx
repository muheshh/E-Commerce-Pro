import "./Navbar.css";


const Navbar = () => {
    const toggleMenu = () => {
        document.getElementById("navLinks").classList.toggle("active");
    };

    return (
        <header className="navbar">
            <div className="nav-container">

                <div className="logo">Hesh Wear!</div>

                <ul className="nav-links" id="navLinks">
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">shirt</a></li>
                    <li><a href="#">Pants</a></li>
                    <li><a href="#">Tshirt</a></li>
                    <li><a href="#">Sale</a></li>
                </ul>

                <div className="nav-icons">
                    <i className="bi bi-search"></i>
                    <i className="bi bi-person"></i>
                    <i className="bi bi-cart4"></i>
                </div>
                
                <div className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </div>

            </div>
        </header>
    );
};

export default Navbar;