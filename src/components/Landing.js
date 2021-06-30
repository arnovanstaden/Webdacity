import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";

// Components

// Styles
import "../styles/components/landing.scss";


const Landing = (props) => {

    let LandingClassNames = classNames({
        "landing": true,
        "landing--project": props.project
    })

    const LandingButton = (props) => {
        if (props.content) {
            return (
                <button className="button landing__button">
                    <a href={props.content.to} target="blank">
                        {props.content.text}
                    </a>
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
                    <p>{props.landingText}</p>
                </div >
                <LandingButton content={props.landingButton} />
            </>
        )
    }

    const ProjectLanding = (props) => {
        return (
            <>
                <div className="landing__inner landing__inner--project">
                    <h1>{props.project.type}</h1>
                    <h3>{props.project.name}</h3>
                    <h4>{props.project.services}</h4>
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