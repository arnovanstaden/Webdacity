import React from "react";

// Styles, Fonts, Images
import "../styles/components/feedback.scss";
import Logo from "../assets/images/logos/clients/logomarks/varkhart.svg";

const FeedbackBlock = () => {
    return (
        <div className="feedback-block">
            <div className="feedback-block__heading">
                <div className="feedback-block__heading__image">
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <h3>Varkhart</h3>
                    <h5>Graphic Design | Web Design &amp; Development | Web Application Development</h5>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim magna aliquam erat volutpat. Ut wisi enim ad minim.
            </p>
        </div>
    )
}

export default FeedbackBlock;