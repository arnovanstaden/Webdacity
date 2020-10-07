import React from "react";
import "../styles/landing.scss"

const Landing = (props) => {
    return (
        <div className="landing">
            <div className="landing__inner">
                {props.landingBig}
                {props.landingTitle}
            </div>
        </div>
    )
}

export default Landing;