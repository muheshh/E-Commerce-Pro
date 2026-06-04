import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* COLUMN 1 */}
                <div className="footer-column">
                    <h3>Customer Care</h3>

                    <p>Shipping Info</p>
                    <p>Payments</p>
                    <p>Shipping & Exchange</p>
                    <p>Bulk Queries</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Fabric/Print Disclaimer</p>
                </div>

                {/* COLUMN 2 */}
                <div className="footer-column">
                    <h3>The Company</h3>

                    <p>About</p>
                    <p>Our Company</p>
                    <p>Contact Us</p>
                    <p>Store Locator</p>
                    <p>Franchise Enquiry</p>
                </div>

                {/* COLUMN 3 */}
                <div className="footer-column">
                    <h3>My Account</h3>

                    <p>Track Order</p>
                    <p>Exchange Request</p>
                </div>

                {/* COLUMN 4 */}
                <div className="footer-column">
                    <h3>Exclusive Benefits</h3>

                    <div className="subscribe-box">
                        <input type="email" placeholder="Enter email here" />
                        <button>Subscribe</button>
                    </div>

                    <p className="footer-text">
                        Apply for our free membership to receive exclusive deals,
                        news, and events.
                    </p>

                    {/* SOCIALS */}
                    <div className="social-icons">
                        <span>Facebook</span>
                        <span>Instagram</span>
                    </div>

                    {/* APP BUTTONS */}
                    <div className="app-buttons">
                        <button>Download Android App</button>
                        <button>Download IOS App</button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;