import { useState, useEffect } from "react";

import "./HeroSlider.css";

const slides = [

    {
        image: "/images/sld.1.webp",
        title: "NEW SEASON LINEN SETS",
        subtitle: "FROM WORK TO WEEKENDS",
        button: "SHOP NOW",
    },

    {
        image: "/images/sld.2.webp",
        title: "ELEGANT ETHNIC WEAR",
        subtitle: "STYLE WITH COMFORT",
        button: "SHOP NOW",
    },

    {
        image: "/images/sld.3.webp",
        title: "TRENDING COLLECTION",
        subtitle: "FASHION THAT SPEAKS",
        button: "EXPLORE",
    },

    {
        image: "/images/sld.4.webp",
        title: "SUMMER SPECIALS",
        subtitle: "LIGHT & BREEZY",
        button: "BUY NOW",
    },

    {
        image: "/images/sld.5.webp",
        title: "EXCLUSIVE OFFERS",
        subtitle: "UP TO 50% OFF",
        button: "GRAB NOW",
    },

];

const HeroSlider = () => {

    /* CURRENT SLIDE */

    const [current, setCurrent] =
        useState(0);

    /* PREVIOUS SLIDE */

    const [prevSlide, setPrevSlide] =
        useState(0);

    /* DIRECTION */

    const [direction, setDirection] =
        useState("next");

    /* NEXT SLIDE */

    const nextSlide = () => {

        setDirection("next");

        setPrevSlide(current);

        setCurrent(
            current === slides.length - 1
                ? 0
                : current + 1
        );

    };

    /* PREVIOUS SLIDE */

    const previousSlide = () => {

        setDirection("prev");

        setPrevSlide(current);

        setCurrent(
            current === 0
                ? slides.length - 1
                : current - 1
        );

    };

    /* AUTO SLIDE */

    useEffect(() => {

        const timer = setInterval(() => {

            nextSlide();

        }, 5000);

        return () => clearInterval(timer);

    },[current]);

    return (

        <div className="hero">

            {/* SLIDES */}

            {slides.map((slide, index) => (

                <div
                    key={index}

                    className={`slide

                    ${index === current ? "active" : ""}

                    ${
                        index === prevSlide
                            ? direction === "next"
                                ? "prev"
                                : "next"
                            : ""
                    }
                    `}

                    style={{
                        backgroundImage:
                            `url(${slide.image})`,
                    }}
                >

                    {/* CONTENT */}

                    <div className="overlay">

                        <h1 className="fade-in">
                            {slide.title}
                        </h1>

                        <p className="fade-in">
                            {slide.subtitle}
                        </p>

                        <button className="fade-in">
                            {slide.button}
                        </button>

                    </div>

                </div>

            ))}

            {/* LEFT BUTTON */}

            <button
                className="prev-btn"
                onClick={previousSlide}
            >
                ❮
            </button>

            {/* RIGHT BUTTON */}

            <button
                className="next-btn"
                onClick={nextSlide}
            >
                ❯
            </button>

            {/* BOTTOM BARS */}

            <div className="bars">

                {slides.map((_, i) => (

                    <div
                        key={i}

                        className={`bar ${
                            i === current
                                ? "active"
                                : ""
                        }`}

                        onClick={() => {

                            setPrevSlide(current);

                            if (i > current) {
                                setDirection("next");
                            }

                            else {
                                setDirection("prev");
                            }

                            setCurrent(i);

                        }}
                    >

                    </div>

                ))}

            </div>

        </div>

    );

};

export default HeroSlider;