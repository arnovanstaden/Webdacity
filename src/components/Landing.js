import React from "react";
import "../styles/landing.scss";
import { Link } from "gatsby"

const Landing = (props) => {

    const LandingButton = (props) => {
        console.log(props)
        if (props.content) {
            return (
                <button className="button">
                    <Link to={props.content.to}>{props.content.text}</Link>
                </button>
            )
        }
    }

    return (
        <div className="landing">
            <div className="landing__inner">
                {props.landingBig}
                {props.landingTitle}
            </div>
            <LandingButton content={props.landingButton} />
        </div>
    )
}

export default Landing;