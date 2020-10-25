import React from "react";
import "../styles/components/landing.scss";
import { Link } from "gatsby";
import Img from "gatsby-image";

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
                    <div>
                        <Img fluid={props.projectImage.childImageSharp.fluid} style={{ width: "100%" }} />
                    </div>
                </div >
            </>
        )
    }
    return (
        <div className="landing">
            {props.classNameProp === "project" ? <ProjectLanding {...props} /> : <NormalLanding {...props} />}
        </div>

    )
}

export default Landing;