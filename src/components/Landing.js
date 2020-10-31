import React from "react";
import "../styles/components/landing.scss";
import { Link } from "gatsby";
import Img from "gatsby-image";
import classNames from "classnames"

const Landing = (props) => {

    let LandingClassNames = classNames({
        "landing": true,
        "landing--project": props.landingImage
    })

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
                <div className="landing__inner">
                    <div className="landing__inner__name">
                        <h1>{props.landingBig}</h1>
                    </div>
                    <div className="landing__inner__image">
                        <Img fluid={props.landingImage} style={{ width: "100%", borderRadius: "1rem" }} />
                    </div>
                </div >
            </>
        )
    }
    return (
        <div className={LandingClassNames}>
            {props.classNameProp === "project" ? <ProjectLanding {...props} /> : <NormalLanding {...props} />}
        </div>

    )
}

export default Landing;