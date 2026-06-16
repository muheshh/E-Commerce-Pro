import { useEffect, useState } from "react";
import "./DiscountPopup.css";

const DiscountPopup = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {

    const firstPopup = setTimeout(() => {
        setShow(true);
    }, 7000);

    const repeatPopup = setInterval(() => {
        setShow(true);
    }, 90000);

    return () => {

        clearTimeout(firstPopup);

        clearInterval(repeatPopup);

    };

}, []);

    if (!show) return null;

    return (
        <div className="popup-overlay">

            <div className="popup-container">

                <button
                    className="close-btn"
                    onClick={() => setShow(false)}
                >
                </button>

                <div className="popup-image">
                    <img
                        src="/images/men-sky.jpg"
                        alt="Fashion Model"
                    />
                </div>

                <div className="popup-content">

                    <button
                        className="close-btn"
                        onClick={() => setShow(false)}
                    >
                        ×
                    </button>

                    <h3 className="brand-name">
                        HESH WEAR !
                    </h3>

                    <p className="small-title">
                        Subscribe and Get
                    </p>

                    <h1>10% OFF</h1>

                    <p className="subtitle">
                        No Spam, No Drama — Just Good Clothes
                    </p>

                    <div className="phone-input">

                        <span>+91</span>

                        <input
                            type="text"
                            placeholder="Phone Number"
                        />

                    </div>

                    <button className="discount-btn">
                        GET DISCOUNT CODE
                    </button>

                    <p className="terms">
                        I agree to receive automated marketing
                        messages at the phone number provided.
                        Reply HELP for help and STOP to cancel.
                        View our Terms Of Service and Privacy Policy.
                    </p>

                </div>

            </div>

        </div>
    );
};

export default DiscountPopup;