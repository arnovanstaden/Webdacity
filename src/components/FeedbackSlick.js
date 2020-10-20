import React, { Component } from "react";
import { useStaticQuery, graphql } from "gatsby"

// Components
import FeedbackBlock from "../components/FeedbackBlock";

// Data
import feedbackData from "../assets/data/feedback.json"

// Vendors
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Slick extends Component {

    render() {
        const settings = {
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            draggable: true,
            autoplay: true,
            autoplaySpeed: 5000,
            cssEase: "linear",
            pauseOnHover: true,
            swipeToSlide: true,
            speed: 1000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        infinite: true,
                    }
                }
            ]
        };
        return (
            <Slider {...settings} className="feedback-slider">
                {feedbackData.map((feedback, index) => {
                    return <FeedbackBlock key={index}
                        feedback={feedback}
                    />
                })}
            </Slider>
        );
    }
}

const FeedbackSlick = () => {
    return (
        <Slick />
    )
}

export default FeedbackSlick;

