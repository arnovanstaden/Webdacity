import React from "react";
import "../styles/components/landing.scss";
import { Link } from "gatsby"

const Landing = (props) => {

    const LandingButton = (props) => {
        if (props.content) {
            return (
                <button className="button landing__button">
                    <Link to={props.content.to}>{props.content.text}</Link>
                </button>
            )
        }
        return null
    }

    const NormalLanding = (props) => {

        return (
            <>
                <div className="landing__inner">
                    {props.landingBig}
                    {props.landingTitle}
                </div >
                <LandingButton content={props.landingButton} />
            </>
        )
    }

    const ProjectLanding = (props) => {
        return (
            <>
                <div className="landing__inner--project">
                    {props.landingBig}
                    {/* {props.projectImage ? <img src={props.projectImage} /> : null} */}
                </div >
            </>
        )
    }

    return (
        <div className="landing">
            {props.projectImage ? <ProjectLanding {...props} /> : <NormalLanding {...props} />}
        </div>

    )
}

export default Landing;