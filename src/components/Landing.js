import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";

// Components
import Vanta from "../components/Vanta"

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
                <Vanta />
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