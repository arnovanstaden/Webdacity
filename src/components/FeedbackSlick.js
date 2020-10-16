import React, { Component } from "react";
import { useStaticQuery, graphql } from "gatsby"

// Components
import FeedbackBlock from "../components/FeedbackBlock";

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
            speed: 1000,
            autoplaySpeed: 5000,
            cssEase: "linear",
            pauseOnHover: true,
            swipeToSlide: true
        };
        return (
            <Slider {...settings}>
                <FeedbackBlock />
                <FeedbackBlock />
                <FeedbackBlock />
                <FeedbackBlock />
            </Slider>
        );
    }
}

const FeedbackSlick = () => {
    let { feedback } = useStaticQuery(graphql`
        {feedback: allFeedbackJson {
            edges {
              node {
                client
                service
                testimonial
              }
            }
          }
        }
        `)

    console.log(feedback)

    return (
        <Slick />
    )

}

export default FeedbackSlick;

